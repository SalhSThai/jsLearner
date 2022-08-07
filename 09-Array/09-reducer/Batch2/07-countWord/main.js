let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

    let amoung = names.reduce((acc, item) => {
        acc[item] = acc[item]? acc[item]+1 : 1;
        return acc;
    }, {});


console.log(amoung);
