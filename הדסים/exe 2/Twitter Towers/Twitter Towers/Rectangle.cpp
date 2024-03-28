#include "Rectangle.h"

//Constructor with parameters
Rectangle::Rectangle(int myHeight, int myWidth)
{
	height = myHeight;
	width = myWidth;
}

//Function to return the width
int Rectangle::getWidth()
{
	return width;
}

//Function to return the height
int Rectangle::getHeight()
{
	return height;
}

//Function to calculate area
int Rectangle::area()
{
	return width*height;
}

//Function to calculate perimeter
int Rectangle::perimeter()
{
	return 2*width + 2*height;
}
