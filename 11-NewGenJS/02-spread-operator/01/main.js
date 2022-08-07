const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const newArray = [-5,...nums1,-6,-1,...nums2]
const sum = newArray.reduce((acc,item) => {
acc += item


    return acc;//?
},0);

sum;//?