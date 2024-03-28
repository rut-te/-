#pragma once
#include <ostream>
using namespace std;
class Triangular
{
private:
	int width;
	int height;
public:
	Triangular(int myHeight, int myWidth);//Constructor with parameters
	int getWidth();//Function to return the width
	int getHeight();//Function to return the height
	float perimeter();//Function to calculate perimeter
	//overloading the << operator for printing the triangle
	friend ostream& operator <<(ostream& os, Triangular& triangular);
};

