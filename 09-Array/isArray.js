const array = [1, 2, 3, 5, 6, 7, 8, 9];

const sumArray = array.reduce((acc,item) => {

        acc.push(item); // acc เป็น Array เราเลยทำการ push item เข้าไปในทุกๆรอบ
        
    return acc; //?
},[]);