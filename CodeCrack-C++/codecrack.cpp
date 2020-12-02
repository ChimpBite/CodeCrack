#include <iostream>
#include <ctime>

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
    const int CodeA = rand() % Difficulty + Difficulty + Difficulty;
    const int CodeB = rand() % Difficulty + Difficulty + Difficulty;
    const int CodeC = rand() % Difficulty + Difficulty + Difficulty;

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
        std::cout << "\nYou Win! You are now on level: " << ++Difficulty;
        return true;
    } else {
        std::cout << "\nYou Lose! You will need to retry level: " << Difficulty;
        return false;
    }
}

int main()
{
    srand(time(NULL)); // create new random sequence based on time of day

    int LevelDifficulty = 1;
    const int MaxLevel = 5;

    while (LevelDifficulty <= MaxLevel) // loop game until all levels completed
    {
        bool bLevelComplete = PlayGame(LevelDifficulty);
        std::cin.clear(); // clears any errors
        std::cin.ignore(); // discards the buffer

        if (bLevelComplete)
        {
            ++LevelDifficulty;
        }
        
    }
    std::cout << "\n **** Congratulations!! You beat the game!! ****\n";
    return 0;
}