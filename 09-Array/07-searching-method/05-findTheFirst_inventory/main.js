const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];
  // expected result: { name: 'cherries', quantity: 5 }

  let arr =  inventory.find(item => item.name == `cherries` );
  console.log(arr);