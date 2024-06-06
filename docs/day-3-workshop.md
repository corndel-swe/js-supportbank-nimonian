# Day 3 Workshop

During the first workshop, we wrote a currency converter. However, we hard-coded
the exchange rates. This time, we want to fetch the exchange rates from an API.

We'll be using [openexchangerates.org](https://openexchangerates.org/). You'll
need to sign up for a free account to get an API key.

## Part 1: Getting an API key and adding it to the environment variables

Set up a _free_ account on Open Exchange Rates. You can do that
[here](https://openexchangerates.org/signup/free).

You should then be able to find your API key in the dashboard. Add it to your
`.env` file.

```
OPENEXCHANGERATES_API_KEY=your_api_key_here
```

Make sure that your `.env` file is added to the `.gitignore` file so that it
doesn't get committed! It's important for security to keep your API key secret.

## Part 2: Fetching the exchange rates

You can use the Open Exchange Rates API to get the latest exchange rates.

You can read an introduction to their api
[here](https://docs.openexchangerates.org/reference/api-introduction).

Make a request to their `latest.json` endpoint to get the latest exchange rates.
Don't forget to add your `app_id` to the request as a query parameter!

You can add a command to your CLI to list the latest exchange rates.

> [!TIP]
>
> The
> [api docs mention](https://docs.openexchangerates.org/reference/authentication#using-your-app-id)
> that you can put your `app_id` in the URL, like
>
> ```js
> `https://openexchangerates.org/api/latest.json?app_id=${app_id}
> ```
>
> or in the header, with the key `Authorization`. So something like
>
> ```js
> {
>   Authorization: `Token ${app_id}`
> }
> ```
>
> should work in the headers of your request.
>
> It's up to you which one you choose!

## Part 3: Using the exchange rates

During workshop 1, we wrote a currency converter. We hard-coded the exchange
rates.

Modify the currency converter to use the exchange rates you fetched from the
API.

## Extension

Support Bank is really taking shape! Great work.

What else could we add to make it a more delightful user experience?

- Use [ora](https://github.com/sindresorhus/ora#readme) to add some loading
  spinners

- Use [inquirer](https://github.com/SBoudrias/Inquirer.js) to make a more
  interactive experience

- Use [chalk](https://github.com/chalk/chalk) to add some delightful colours

- Use [fx](https://github.com/antonmedv/fx) to allow browsing transactions as
  json

Try customising your CLI tool using any of the above, or do some research to
find out more ways of adding features or creating a better UX.
