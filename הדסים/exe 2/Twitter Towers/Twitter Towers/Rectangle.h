#pragma once
class Rectangle
{
private:
	int width;
	int height;
public:
	Rectangle(int myHeight, int myWidth);//Constructor with parameters
	int getWidth();//Function to return the width
	int getHeight();//Function to return the height
	int area();//Function to calculate area
	int perimeter();//Function to calculate perimeter
};

