import find from 'find';
import Jasmine from 'jasmine';

import { logger } from '@shared';

// Init Jasmine
const jasmine = new Jasmine(null);

// Set location of test files
jasmine.loadConfig({
    random: true,
    spec_dir: 'src',
    spec_files: [
        './**/*.spec.ts',
    ],
    stopSpecOnExpectationFailure: false,
});

// On complete callback function
jasmine.onComplete((passed: boolean) => {
    if (passed) {
        logger.info('All tests have passed :)');
        process.exit(0);
    } else {
        logger.error('At least one test has failed :(');
        process.exit(1);
    }
});

// Run all or a single unit-test
if (process.argv[2]) {
    const testFile = process.argv[2];
    find.file(testFile + '.spec.ts', './spec', (files) => {
        if (files.length === 1) {
            jasmine.specFiles = [files[0]];
            jasmine.execute();
        } else {
            logger.error('Test file not found!');
        }
    });
} else {
    jasmine.execute();
}

// Kill process on exit
export const shutdown = (signal: string) => () => {
    process.kill(process.pid, signal);
};

const shutdownSignals: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

shutdownSignals.forEach(signal => process.once(signal, shutdown(signal)));
