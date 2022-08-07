
let newName = prompt(`Enter name`);
let id  =  +prompt(`Enter id`) ;

  const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

  const updateTask = function (id,newName){
tasks.forEach(item => {
    (item.id ==id)? item.name = newName:null;
    
  });
}
  
  updateTask(id,newName);
  console.log(tasks)
  