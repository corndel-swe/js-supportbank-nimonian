# Day 3 Exercises

## Exercise 1: Environment variables

- [ ] Have a look at the documentation on
      [environment variables](https://tech-docs.corndel.com/js/environment-variables.html)

- [ ] Install the `dotenv` package.

- [ ] Create a `.env` file in root of the project, and add `.env` to your
      `.gitignore` file.

- [ ] Add the following environment variable:

      ```
      SECRET_KEY=fDZD17pD6ox3
      ```

- [ ] Test, commit and push!

## Exercise 2: JSON

- [ ] Have a look through the
      [JSON documentation](https://tech-docs.corndel.com/js/working-with-json.html).

- [ ] Open up
      [exercises/readJSONTransactions.js](/exercises/readJSONTransactions.js)
      and implement the `readJSONTransactions` function. It should

  - read `data/Transactions2013.json`

  - parse it into a JavaScript object

  - and then return that object.

## Exercise 3: Fetching Data

In this exercise, we'll be fetching data from the
[PokeAPI](https://pokeapi.co/docs/v2).

- [ ] Have a look at the documentation on
      [fetching data](https://tech-docs.corndel.com/js/fetching-data.html).

- [ ] Open `exercises/pokeAPI.js`.

- [ ] Complete the function `getPokemonList()`. It should

  - make a `GET` request to `https://pokeapi.co/api/v2/pokemon`

  - get the data out of the response

  - return an array of only the `name`s of the Pokémon in the results.

Note that the data from the API is of the form

```json
{
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    }
  ]
}
```

so you will need to extract just a list of Pokémon names from the data.

> [!HINT]
>
> You could use [.map()](https://tech-docs.corndel.com/js/array-map.html) to
> extract the names from the results array.

## Extension

You may have noticed that we don't get a complete list of Pokémon when we call
`getPokemonList()`. This is because the PokéAPI paginates the results.

Have a read of their documentation on how their pagination works and see if you
can implement a way to get a complete list of Pokémon.

The documentation can be found
[here](https://pokeapi.co/docs/v2#resource-listspagination-section).
