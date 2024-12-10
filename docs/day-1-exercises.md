# Day 1 Exercises

The repository has some code in it already, but it isn't working because the
project hasn't been set up properly! The focus of these exercises is to follow
the steps required to get this repo working.

## Exercise 1: Setting up the project

(Please note that no tests will pass for Exercise 1 until all steps are
completed, because the testing tools haven't been installed yet!)

- [x] Read the docs on
      [Creating a Node project](https://tech-docs.corndel.com/js/node-projects.html).

- [x] Use `npm init` to
      [initialise the project](https://tech-docs.corndel.com/js/node-projects.html#initialising-with-npm-init).

- [x] Install the `mocha` package
      [as a _development_ dependency](https://tech-docs.corndel.com/js/node-projects.html#installing-packages-with-npm-install)
      (use the `-D` flag).

- [x] Add the following test scripts to the `package.json`:

  ```JSON
    "scripts": {
      "test:d1e1": "mocha ./tests/exercises/day-1-exercise-1.test.mjs",
      "test:d1e2": "mocha ./tests/exercises/day-1-exercise-2.test.js",
      "test:d1e3": "mocha ./tests/exercises/day-1-exercise-3.test.js",
      "test:d2e1": "mocha ./tests/exercises/day-2-exercise-1.test.js",
      "test:d2e2": "mocha ./tests/exercises/day-2-exercise-2.test.js",
      "test:d2e3": "mocha ./tests/exercises/day-2-exercise-3.test.js",
      "test:d3e1": "mocha ./tests/exercises/day-3-exercise-1.test.js",
      "test:d3e2": "mocha ./tests/exercises/day-3-exercise-2.test.js",
      "test:d3e3": "mocha ./tests/exercises/day-3-exercise-3.test.js"
    }
  ```

- [x] [Create a `.gitignore` file](https://tech-docs.corndel.com/js/node-projects.html#tracking-with-git)
      and add `node_modules` to it.

- [x] Now run `npm run test:d1e1`. All tests should be passing. Commit and push
      your code!

## Exercise 2: Modularisation

You'll have seen and used some `import` and `export` statements in the code
you've been working with. This exercise is about setting that up for the
project.

- [x] Read the docs on
      [import and export](https://tech-docs.corndel.com/js/imports-and-exports.html).

- [x] Configure the `package.json` file to
      [use ES6 imports](https://tech-docs.corndel.com/js/imports-and-exports.html#configuring-the-project).
      Run `npm run test:d1e2` - the first test should be passing.

- [x] There is a file in `exercises/hello.js`. Make sure `num` is
      [exported as a named export](https://tech-docs.corndel.com/js/imports-and-exports.html#named-and-default-exports).

- [x] Export `sayHi` from `exercises/hello.js` as the default export.

- [x] Check that the tests are passing. Commit and push!

## Exercise 3: Using Commander to set up a CLI

Let's set up a CLI so that we can run the program from the command line.

- [x] Read the page on
      [Making a CLI](https://tech-docs.corndel.com/js/making-a-cli.html).

- [x] [Install](https://tech-docs.corndel.com/js/making-a-cli.html#installing-commander)
      the `commander` package.

- [x] Make a new file under `cli/index.js`.
      [Set up the CLI](https://tech-docs.corndel.com/js/making-a-cli.html#setting-up-your-cli)
      just like in the docs. Make sure that the version is `'0.1.0'` and the
      description is `'SupportBank'`. Check that `node cli --version` displays
      the version number. At this point you can run `npm run test:d1e3` and
      should see some passing tests.

- [x] In `cli/transaction.js` there is a `transactionController`. It hasn't been
      registered yet.
      [Import and register](https://tech-docs.corndel.com/js/making-a-cli.html#register-the-command)
      it with the CLI in `cli/index.js`.

- [x] Right now, the `transaction log` command doesn't do anything. We want to
      make it so that it logs the transactions to the console. Make it log a
      transaction nicely, so that the command

      ```bash
      node cli transaction log "Jon A" "Joe G" 100
      ```

      prints out something useful, such as

      ```
      At 01/03/2024 11:27am, Jon A sent Joe G £100
      ```

- [x] All tests should now be passing. Commit and push!

Congratulations! Your project is set up with git, testing, ES6 Modules and
commander. :tada:
