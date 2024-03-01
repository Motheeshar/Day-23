// Challenge 1
const user = {
    firstName: 'Rajat',
    lastName: 'Singh',
    age: 25,
    country: 'India',
    state: 'Delhi',
  };
  
  localStorage.setItem('firstName', user.firstName);
  localStorage.setItem('lastName', user.lastName);
  localStorage.setItem('age', user.age.toString());
  localStorage.setItem('country', user.country);
  localStorage.setItem('state', user.state);
  
  console.log('Challenge 1 - Data stored in localStorage:', localStorage);
  
  // Challenge 2
  const storedFirstName = localStorage.getItem('firstName');
  const storedLastName = localStorage.getItem('lastName');
  const storedAge = parseInt(localStorage.getItem('age'));
  const storedCountry = localStorage.getItem('country');
  const storedState = localStorage.getItem('state');
  
  const userData = {
    firstName: storedFirstName,
    lastName: storedLastName,
    age: storedAge,
    country: storedCountry,
    state: storedState,
  };
  
  console.log('Challenge 2 - User data retrieved from localStorage:', userData);
  
  // Challenge 3
  localStorage.removeItem('state');
  console.log('Challenge 3 - "state" removed from localStorage:', localStorage);
  
  // Challenge 4
  localStorage.clear();
  console.log('Challenge 4 - All data cleared from localStorage:', localStorage);
  
  // Challenge 5
  const jsonString = JSON.stringify(user);
  console.log('Challenge 5 - JSON String representation:', jsonString);
  
  