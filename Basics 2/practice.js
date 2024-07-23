//Question 1: Manipulating array using Map and Filter and Reduce
//Skill Mapping: Basic
//Description: Consider a Loyalty Application for a Small Retailer, where data is stored in array of objects -
//customerID, customerName, totalBillingAmount
//A Retailer would want select customers who have the total Billing amount more than Rs. 3000/-
//Write a program using your JavaScript Skills to print the list of Such Customer Names along with their purchase details.

let StoreData = [
    {customerID: "A", customerName:"Sohail", totalBillingAmount: 6000}, 
    {customerID: "B", customerName:"Aftab", totalBillingAmount: 35000},
    {customerID: "C", customerName:"Afreen", totalBillingAmount: 45000},
    {customerID: "D", customerName:"Yasir", totalBillingAmount: 55000},
    {customerID: "E", customerName:"John", totalBillingAmount: 500},
    ]

    
/* Question 2:- Valid Sudoku

Skill-Mapping: Intermediate

Description:

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.

Each column must contain the digits 1-9 without repetition.

Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.

Only the filled cells need to be validated according to the mentioned rules.

 



Input: board =

[["5","3",".",".","7",".",".",".","."]

,["6",".",".","1","9","5",".",".","."]

,[".","9","8",".",".",".",".","6","."]

,["8",".",".",".","6",".",".",".","3"]

,["4",".",".","8",".","3",".",".","1"]

,["7",".",".",".","2",".",".",".","6"]

,[".","6",".",".",".",".","2","8","."]

,[".",".",".","4","1","9",".",".","5"]

,[".",".",".",".","8",".",".","7","9"]]

Output: true


 */