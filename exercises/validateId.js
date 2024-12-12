// Exercise 2 Part 1
// Finish this function by throwing an error if the id is invalid.
export function validateId(id) {
  // Check that the id exists
  if (id === null || id === undefined) {
    throw new Error('ID is required')
  }

  // The id should be a string:
  if (typeof id !== 'string') {
    // TODO: Add your code to throw an error here
    throw new Error('ID must be a string')
  }

  // The id should be an odd number of characters long:
  // TODO: throw an error on this condition
  if (id.length % 2 === 0) {
    throw new Error('ID must be an odd number of characters long')
  }

  // The id should contain the letter 'a':
  // TODO: throw an error on this condition
  if (!id.includes('a')) {
    throw new Error('ID must contain the letter "a"')
  }

  // The id should be all lowercase:
  // TODO: throw an error on this condition
  if (id !== id.toLowerCase()) {
    throw new Error('ID must be all lowercase')
  }
}

// Exercise 2 Part 2
// Use try/catch with the `validateId` function above to validate the id.
// Return `true` if the id is valid.
// If an error is thrown: catch it, log a useful message, then return `false`
export function isIdValid(id, logger) {
  try {
    validateId(id)
    return true
  } catch (error) {
    logger.error(error.message)
    return false
  }
}
