
function toCamelCase(str) {
    return str
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // Insert space between camel case words
      .replace(/[^a-zA-Z0-9 ]/g, ' ')            // Replace non-alphanumeric characters with spaces
      .trim()                                    // Remove leading and trailing spaces
      .toLowerCase()                             // Convert string to lowercase
      .split(/\s+/)                              // Split the string by any whitespace
      .map((word, index) => {
        return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize each word
      })
      .join('');                                 // Join words without spaces
  }
  
  
  module.exports = toCamelCase;
  