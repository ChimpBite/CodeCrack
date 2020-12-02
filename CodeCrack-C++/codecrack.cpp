#include <iostream>

void PrintIntroduction(int Difficulty) {
    // Print welcome messages to the terminal
    std::cout << R"(
         _____           _        _____                _    
        /  __ \         | |      /  __ \              | |   
        | /  \/ ___   __| | ___  | /  \/_ __ __ _  ___| | __
        | |    / _ \ / _` |/ _ \ | |   | '__/ _` |/ __| |/ /
        | \__/\ (_) | (_| |  __/ | \__/\ | | (_| | (__|   < 
        \____/\___/ \__,_|\___|  \____/_|  \__,_|\___|_|\_\
                                                            
                                                            
        )" << '\n';
    std::cout << "You need to enter the correct code to continue...\n";
    std::cout << "Level Difficulty: " << Difficulty;
}

bool PlayGame(int Difficulty) {
    
    PrintIntroduction(Difficulty);

    // Declare 3 number code
    // Using Upper camelcase for Unreal Engine
    const int CodeA = 4;
    const int CodeB = 8;
    const int CodeC = 16;

    const int CodeSum = CodeA + CodeB + CodeC;
    const int CodeProduct = CodeA * CodeB * CodeC;

    // Print CodeSum and CodeProduct to the terminal
    std::cout << "\n+ There are 3 numbers in the code";
    std::cout << "\n+ The codes add-up to:" << CodeSum;
    std::cout << "\n+ The codes multiply to: " << CodeProduct;

    // Store player guess
    int GuessA, GuessB, GuessC;

    std::cout << "\nEnter the first number: ";
    std::cin >> GuessA;
    std::cout << "Enter the second number: ";
    std::cin >> GuessB;
    std::cout << "Enter the third number: ";
    std::cin >> GuessC;

    int GuessSum = GuessA + GuessB + GuessC;
    int GuessProduct = GuessA * GuessB * GuessC;

    // Check if guess is correct
    if (CodeSum == GuessSum && CodeProduct == GuessProduct) {
        std::cout << "\nYou Win!";
        return true;
    } else {
        std::cout << "\nYou Lose!";
        return false;
    }
}

int main()
{
    int LevelDifficulty = 1;
    while (true) {
        bool bLevelComplete = PlayGame(LevelDifficulty);
        std::cin.clear();
        std::cin.ignore();

        if (bLevelComplete)
        {
            ++LevelDifficulty;
        }
        
    }
    
    return 0;
}