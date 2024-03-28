#include "Triangular.h";
#include <iostream>
using namespace std;

//Constructor with parameters
Triangular::Triangular(int myHeight, int myWidth)
{
	height = myHeight;
	width = myWidth;
}

//Function to return the width
int Triangular::getWidth()
{
	return width;
}

//Function to return the height
int Triangular::getHeight()
{
	return height;
}

//Function to calculate perimeter
float Triangular::perimeter()
{
    //Calculation of the length of a leg in a triangle according to the Pythagorean theorem
    float sideLength = sqrt(pow(height, 2) + pow(width / 2, 2));
    //Calculation the perimeter
    float perimeter = 2 * sideLength + width;
	return perimeter;
}

//overloading the << operator for printing the triangle
ostream& operator<<(ostream& os, Triangular& triangular)
{   
    int rows = triangular.getHeight() - 2;//variable definition for number of rows without the first and end rows
    int numberOfGroups = 0;//variable definition for number of groups
    int numAsterisks;//variable definition for num of asterisks im all row
    int numRowsInGroups, numRowsInGroup1;// variable definition for num rows in the groups
    int tab = triangular.getWidth() / 2;//variable definition for num of tabs im all row
    //Calculate how many different groups there are
    for (int i = 3; i <= triangular.getWidth() - 2; )
    {
        numberOfGroups++;
        i += 2;
    }
    //Calculate how many rows will be in each group
    if (rows % numberOfGroups == 0)
    {
        numRowsInGroups = rows / numberOfGroups;
        numRowsInGroup1 = numRowsInGroups;
    }
    else {
        numRowsInGroups = rows / numberOfGroups;
        numRowsInGroup1 = numRowsInGroups + rows % numberOfGroups;
    }
    //Print the top line
    for (int i = 0; i < tab; i++)
        cout << " ";
    cout << "*" << endl;
    tab -= 1;//Lowering the amount of profits that will be in the next row
    //In case the number of rows in the first group is different from the other groups
    if (numRowsInGroup1 != numRowsInGroups)
    {
        //First batch printing
        for (int j = 0; j < numRowsInGroup1; j++)
        {
            for (int i = 0; i < tab; i++)
                cout << " ";
            cout << "***"<<endl;
        }
        tab--;//Lowering the amount of profits that will be in the next row
        numAsterisks = 5;//Setting the number of asterisks to five
        //Printing the rest of the groups
        for (int i = 0; i < (triangular.getHeight() - (numRowsInGroup1 +2))/ numRowsInGroups; i++) {     
            for (int m = 0; m < numRowsInGroups; m++)
            {
                for (int j = 0; j < tab; j++)
                    cout << " ";
                for (int j = 0; j < numAsterisks; j++)
                    cout << "*";
                cout << endl;      
            }
            numAsterisks += 2;//Adding two to the number of stars
            tab -= 1;//Lowering the amount of profits that will be in the next row
        }              
    }
    //In case the number of rows in the first group is not different from the other groups
    else {
        //Print all groups
        for (int i = 0; i < (triangular.getHeight() - 2) / numRowsInGroups; i++) {
            numAsterisks = 3;
            for (int m = 0; m < numRowsInGroups; m++)
            {
                for (int j = 0; j < tab; j++)
                    cout << " ";
                for (int j = 0; j < numAsterisks; j++)
                    cout << "*";
                cout << endl;
            }
            numAsterisks += 2;//Adding two to the number of stars
            tab--;//Lowering the amount of profits that will be in the next row
        }
    }    
    //Bottom line printing
    for (int i = 0; i < triangular.getWidth(); i++) {
        cout << "*";
    }
    cout <<endl;
	return os;
}
