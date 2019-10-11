import 'jasmine';

import supertest from 'supertest';
import { Response, SuperTest, Test } from 'supertest';

import app from '@app';

describe('Donation Routes', () => {
  const donationsPath = '/api/donations';

  let agent: SuperTest<Test>;

  const postDonation = (): supertest.Test => {
    return agent
      .post(donationsPath)
      .type('form')
      .send({});
  };

  const getDonatations = (): supertest.Test => {
    return agent.get(donationsPath);
  };

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  describe(`GET:${donationsPath}`, () => {
    it(`should get donations`, async (done) => {
      const res: Response = await getDonatations()
        .expect('Content-Type', /json/)
        .expect(200);

      expect(typeof res.body === 'number').toBeTruthy();
      done();
    });
  });

  describe(`POST:${donationsPath}`, () => {
    it(`should post a donation`, async (done) => {
      const res: Response = await postDonation()
        .expect('Content-Type', /json/)
        .expect(200);

      expect(typeof res.body === 'number').toBeTruthy();
      done();
    });

    it(`should add to the number of donations`, async (done) => {
      let res: Response = await getDonatations();
      const originalDonations: number = res.body;

      await postDonation();

      res = await getDonatations();
      const finalDonations: number = res.body;

      expect(finalDonations).toEqual(originalDonations + 1);
      done();
    });
  });
});
