# Day 2 Exercises

## Exercise 1: Async and Await

In this exercise, you'll be working with a set of functions that simulate making
breakfast. It's a bit of a contrived example, but it's a good way to illustrate
the concept.

To run the tests for this exercise, use `npm run test:d2e1`.

- [ ] Have a look at the
      [Async and Await](https://tech-docs.corndel.com/js/async-await.html)
      documentation for this exercise.

- [ ] Inside [exercises/breakfast.js](/exercises/breakfast.js), you'll find a
      function `makeToast()`. All that's missing are some `async` and `await`
      keywords. You'll need to use `await` to wait for the `toaster.toast()`
      function to finish.

- [ ] Similar to the first part, you'll find a function `makeCoffee()` inside
      [exercises/breakfast.js](/exercises/breakfast.js). Again, all that's
      missing are some `async` and `await` keywords.

- [ ] Finally, you'll find a function `makeBreakfast()` inside
      [exercises/breakfast.js](/exercises/breakfast.js). This function should
      create a `toast` and `coffee` and return them. Make sure you `await` them,
      and pass them any arguments they need.

## Exercise 2: Error Handling

To run the tests for this exercise, use `npm run test:d2e2`.

- [ ] Have a look at the
      [Error Handling](https://tech-docs.corndel.com/js/handling-errors.html)
      documentation for this exercise.

- [ ] Implement the `validateId` function inside
      [exercises/validateId.js](/exercises/validateId.js).

Now that we've written a function that throws a bunch of errors, we'll write a
function that catches them.

- [ ] Implement the function `isIdValid()` inside
      [exercises/validateId.js](/exercises/validateId.js). It should:

  - `try` to call `validateId` on the `id`

  - if `id` is valid (i.e. no error is thrown by `validateId`), it should return
    `true`.

  - if `id` is not valid (i.e. an error is thrown by `validateId`), it should:

    - `catch` the error,

    - call `logger.error(message)` with a useful message.

    - return `false`.

> [!IMPORTANT]
>
> `logger` is an object which is passed in to `validateId` - it is a custom
> logger, so use `logger.error` instead of `console.log`.

## Exercise 3: File I/O

Finally, we'll be looking at persisting data by reading and writing files.

To run the tests for them, use `npm run test:d2e3`.

- [ ] Have a look at
      [Reading and Writing Files](https://tech-docs.corndel.com/js/reading-and-writing-files.html).

- [ ] Complete the functions in [exercises/fileIO.js](/exercises/fileIO.js).
