// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
/*findMatching`- This function takes an array of drivers' names and a `string`
as arguments, and returns the matching list of drivers. The function should be
case insensitive.*/
const findMatching = (array, name) => {
    return array.filter(driver => driver.toLowerCase() === name.toLowerCase());
  };
console.log (`find Match function :`,findMatching(drivers, "Bobby"))

/*`fuzzyMatch` - This function takes an array of drivers' names and a `string`
  as arguments for querying the array, and returns all drivers whose names begin
  with the provided letters.
*/
const fuzzyMatch = (array, startingLetters) => {
    return array.filter(driver => driver.toLowerCase().startsWith(startingLetters.toLowerCase()));
  };  
console.log(`fuzzy Match function :`, fuzzyMatch(drivers, 'Sa'))
/* `matchName` - This function takes an array of `driver` objects and a `string`
  as arguments. Each `driver` object has two properties: `name` and `hometown`.
  The function should return each element whose `name` property matches the
  provided `string` argument.
*/
const driversObject = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const matchName = (array, name) => {
    return array.filter(obj => obj.name.toLowerCase() === name.toLowerCase());
  };
console.log(`Match Name function :`,matchName(driversObject, "Bobby"))  