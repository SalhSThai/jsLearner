
const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
];

const deleteTask = function (id) {
    tasks.forEach((item,index) => {
        (item.id == id) ? tasks.splice(index,1) : null;
    });
}

deleteTask(+prompt(`Delete id :`))
console.log(tasks)
