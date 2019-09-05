
//Q1
//1a)
//Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
//find middle of array: 11     
// 11 is > 8, set 11 as end
// find middle between 3 and 11: 6
// 6 < 8, set 6 as start
// find middle between 6 and 11: 8
//SEQUENCE: 
//1) 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
//2) 3, 5, 6, 8, 11 
//3) 6, 8, 11
//--> 3 STEPS

//1b) Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
//find middle of array: 11
// 11 is < 16, set 11 as start
// find middle between 11 and 18: 14
//14 < 16, set 14 as start
//find middle between 14 and 18: 15
// 15 < 16, set 15 as start
//find middle between 15 and 18: 17
//16 not found
//SEQUENCE: 
//1) 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
//2) 11, 12, 14, 15, 17, 18
//3) 14, 15, 17, 18
//4) 15, 17, 18
//--> 4 STEPS

//group interview
//left-right-parent
// 8, 12, 10, 16, 25, 20, 15
//post-order traversal root is last item in array: 15;
//output:
//        15
//     /      \
//   10        20
//  /   \     /  \
// 8    12   16   25

//Q3
// Imagine you are looking for a book in a library with a Dewey Decimal index. 
// How would you go about it? Can you express this process as a search algorithm? 
// Implement your algorithm to find a book whose Dewey and book title is provided.
//  [{ author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
// { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
// { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
// { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
// { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
// { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
// { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
// { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
// { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
// { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
// ];
// function findBook(){

// }


//Q4
//4a) Given a binary search tree whose 
//left-parent-right
//in order: 14 15 19 25 27 35 79 89 90 91 and
//parent-left-right 
//pre order: 35 25 15 14 19 27 89 79 91 90. 
//What would be its postorder traversal?
//left-right-parent
//            35
//         /     \
//        25      89
//       / \     /  \  
//    15    27  79  90
//  /   \             \
// 14    19           91
//                         
//   
//post-order:  14, 19, 15, 27, 25, 79, 91, 90, 89, 35                       

//4b) The post order traversal of a binary search tree is 5 7 6 9 11 10 8.
// What is its pre-order traversal?
//post: left-right-parent

//            8
//         /    \ 
//        6       10
//      /   \    /  \
//     5    7   9    11

//pre order: parent-left-right

// 8, 6, 10, 5, 7, 9, 11