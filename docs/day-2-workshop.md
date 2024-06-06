# Day 2 Workshop

## Reading transactions

The support team keep their records in CSV format. Their records for 2014 are
stored in `data/Transactions2014.csv`

Note that there’s a header row, telling you what each column means. Every record
has a date and represents a payment from one person to another person. There’s
also a narrative field which describes what the payment was for.

The person in the ‘From’ column is paying money, so the amount needs to be
deducted from their account. The person in the ‘To’ column is being paid, so the
amount needs to be added to their account.

Use a class for each type of object you want to create.

You should add two commands:

- [ ] `node cli transaction summarise all` – should output the names of each
      person, and the total amount of money they should receive from the bank.
      (It could be a negative number, if they owe the bank money!)

- [ ] `node cli transaction list <account name>` – should print a list of every
      transaction, with the date and narrative, for that person’s account. For
      example, `node cli list "jon a"` would list all of Jon A’s transactions.

## Moving on

Once you have dealt with `data/Transactions2014.csv`, there are some other files
in the `data` folder - see if you can make the application work with those, too.
You might need to do some research online to see how to deal with issues that
may crop up.

## Hints

### Working with csv

You can use `string.split` to split several lines of text into an array.

For example

```txt
a,b,c
d,e,f
g,h,i
```

```js
txt.split('\n') // => ['a,b,c', 'd,e,f', 'g,h,i']
```

You can then use `.split(',')` on each item in the array to separate out the
values.

### Removing the header

Remember [slice](https://tech-docs.corndel.com/js/array-slice.html)? You can use
`.slice(1)` to keep only the data rows and get rid of the header.
