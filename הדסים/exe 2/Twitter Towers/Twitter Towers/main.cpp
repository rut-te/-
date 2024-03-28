#include <iostream>
#include "Rectangle.h";
#include "Triangular.h";
using namespace std;
//Enum definition for main menu choices
enum options { RectangleChoice =1, TriangularChoice, Exit};
//Enum definition for triangular menu choices
enum triangularChooseOptions { Perimeter = 1, Print };
//Function definition for selecting a rectangle
void rectangleChoice(Rectangle* rectangle);
//Function definition for selecting a triangle
void triangularChoice(Triangular* triangular);

//צלעות אמורות להיות שלם או שבר????

int main()
{
	int choose;//Variable for the main menu choice
	int height, width;//Height and width of a triangle/rectangle
	bool exit = false;//Variable for checking whether to terminate the program or continue
	while (!exit)
	{
		cout << "Enter 1 to Rectangle\nEnter 2 to Triangular\nEnter 3 to Exit\n";
		cin >> choose;
		switch (choose)
		{
		case RectangleChoice:
		{
			cout << "Enter the height of the rectangle\n";
			cin >> height;
			cout << "Enter the width of the rectangle\n";
			cin >> width;
			//Creating a variable of type rectangle
			Rectangle* rectangle=new Rectangle(height, width);
			//Calling the options function of a rectangle
			rectangleChoice(rectangle);
			break;
		}
		case TriangularChoice:
		{
			cout << "Enter the height of the triangle\n";
			cin >> height;
			cout << "Enter the width of the triangle\n";
			cin >> width;
			//Creating a variable of type triangular
			Triangular* triangular=new Triangular(height, width);
			//Calling the options function of a triangular
			triangularChoice(triangular);
			break;
		}
		case Exit:
		{
			cout << "Exit\n";
			exit = true;
			break;
		}
		default:
		{
			cout << "Error, invalid input\n";
			break;
		}
		}
	}
	return 0;
}

//Function for selecting a rectangle
void rectangleChoice(Rectangle* rectangle)
{
	//Printing of an area or perimeter according to the conditions given in the question
	if (rectangle->getWidth() == rectangle->getHeight() || rectangle->getWidth() > rectangle->getHeight() + 5 || rectangle->getHeight() > rectangle->getWidth() + 5)
		cout << "rectangle's area is: " << rectangle->area() << endl;
	else
		cout << "rectangle's perimeter is: " << rectangle->perimeter() << endl;
	
}

//Function for selecting a triangle
void triangularChoice(Triangular* triangular)
{
	int  triangularChoose;
	cout << "Enter 1 to triangular's perimeter \nEnter 2 to print the triangular\n";
	cin >> triangularChoose;
	//Menu for selecting an option for the triangle
	switch (triangularChoose)
	{
	case Perimeter:
	{
		cout << "triangular's perimeter is: " << triangular->perimeter() << endl;
		break;
	}
	case Print:
	{
		//Printing the triangle in case it is possible according to the conditions given in the question
		if (triangular->getWidth() % 2 == 0 || triangular->getWidth() > 2 * triangular->getHeight())
			cout << "Error, can't print this triangular\n";
		else
			cout << *triangular;
		break;
	}
	default:
	{
		cout << "Error, invalid input\n";
		break;
	}
	}
}