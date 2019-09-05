
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

