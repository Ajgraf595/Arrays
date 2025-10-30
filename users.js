// # Array Methods (map) Exercise
// In this exercise, I will use the map() method to transform an array of user objects.
// Each new object will include fullName and membershipStatus properties.

// Step 1: Create an array of user objects with firstName, lastName, and points.
const users = [
	{ firstName: "Alice", lastName: "Johnson", points: 120 },
	{ firstName: "Bob", lastName: "Smith", points: 99 },
	{ firstName: "Charlie", lastName: "Brown", points: 180 }
  ];
  

  // Step 2: Use the map() method to create a new array based on the original users array.
  // The map() method runs a function on each element and returns a new array.
  const newUsers = users.map(function(user) {
  

	// Step 3: For each user, return a new object with fullName and membershipStatus.
	// fullName combines firstName and lastName.
	// membershipStatus is "Premium" if points > 100, otherwise "Standard".
	return {
	  fullName: `${user.firstName} ${user.lastName}`,
	  membershipStatus: user.points > 100 ? "Premium" : "Standard"
	};
  });
  

  // Step 4: Print the new array of user objects to the console.
  console.log(newUsers);
  