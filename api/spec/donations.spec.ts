import supertest from 'supertest';

import app from '../src/server';

import { OK } from 'http-status-codes';
import { Response, SuperTest, Test } from 'supertest';

describe('Donation Routes', () => {

    const donationsPath = '/api/donations';

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe(`GET:${donationsPath}`, () => {

        it(`should return the number of donations`, (done) => {
            agent.get(donationsPath)
                .end((err: Error, res: Response) => {
                    expect(err).toBeFalsy();
                    expect(res.status).toBe(OK);
                    expect(typeof res.body === 'number').toBeTruthy();
                    done();
                });
        });
    });

    describe(`POST:${donationsPath}`, () => {

        it(`should add to the number of donations`, (done) => {
            agent.post(donationsPath).type('form').send({})
                .end((err: Error, res: Response) => {
                    expect(err).toBeFalsy();
                    expect(res.status).toBe(OK);
                    expect(typeof res.body === 'number').toBeTruthy();
                    done();
                });
        });
    });
});
