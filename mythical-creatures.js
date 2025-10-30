// # Array Methods (find and findIndex) Exercise
// Using find() and findIndex() to locate creatures based on type and location.

const mythicalCreatures = [
	{ name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
	{ name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
	{ name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
	{ name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
	{ name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
  ];
  

  
  // find() returns the first element that matches the condition
  const firstWaterCreature = mythicalCreatures.find(function(creature) {
	return creature.type === "Water";
  });
  console.log(firstWaterCreature.name); // Mermaid
  

  // findIndex() returns the position of the first element that matches
  const griffinIndex = mythicalCreatures.findIndex(function(creature) {
	return creature.name === "Griffin";
  });
  console.log(griffinIndex); // 3
  


  // Another find() to locate the first creature last seen in Enchanted Forest
  const enchantedForestCreature = mythicalCreatures.find(function(creature) {
	return creature.lastSeen === "Enchanted Forest";
  });
  console.log(enchantedForestCreature.name); // Unicorn  