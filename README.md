# Welcome to the Free Online Scrum Master README!

Our objective is to promote asynchronous development with fewer and more efficient meetings.

We seek to exercise and flesh out our asynchronous proccess throughout the SDLC of this open-source tool!

## Getting started

1) `git clone https://github.com/mj-the-destroyer/free-online-scrum-master.git`
2) `cd free-online-scrum-master`
3) `npm i`

## Running in development mode

1) `npm run start-api:dev`
> API should now be hosted at `http://localhost:3000/` and should reload if you make any changes in `api/src`.
2) open another terminal tab
3) `npm run start-ui:dev`
> UI should now be hosted at `http://localhost:4200/` and should reload if you make any changes in `ui/src`.

## Running in production mode

For most changes you won't have to worry about this.

When your branch is merged to `master` it should automatically build and deploy to production.

However, occasionally you're changes will build in development but not production (you'll be notified that your PR fails to build).

When this happens it is helpful to run in production mode locally.

1) `npm run build`
2) `npm run start`
> Both API and UI should now be hosted at `http://localhost:8081/`

## Running unit tests

`npm run test` - runs both API and UI tests once
> This gets run on each PR

`npm run --prefix ui test` - runs UI tests and watches for changes

`npm run --prefix api test` - runs API tests and watches for changes
> Use these when you are debugging tests

## Linting

`npm run lint` - checks all src files for linting errors
> This gets run on each PR

