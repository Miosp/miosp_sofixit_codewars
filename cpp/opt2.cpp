#include <bits/stdc++.h>

using namespace std;

/**
 * Calculates the material required for a given array of integers. The function is not guarded, use only if you are sure that the input is valid.
 * 
 * @param array The array of integers representing the heights of walls.
 * @return The total amount of fluid the wall can hold.
 */
int material(const vector<int>& array){
    int result = 0;
    int left = 0;
    int right = array.size()-1;
    int leftMax = 0;
    int rightMax = 0;

    while(left < right){
        if(array[left] < array[right]){
            if(array[left] >= leftMax){
                leftMax = array[left];
            } else {
                result += leftMax - array[left];
            }
            left++;
        } else {
            if(array[right] >= rightMax){
                rightMax = array[right];
            } else {
                result += rightMax - array[right];
            }
            right--;
        }
    }

    return result;
}


/**
 * Wrapper for matieral function, that has a guard for invalid input and returns -1 if the input is invalid.
 *
 * @param array The array of integers representing the heights of walls.
 * @return The total amount of fluid the wall can hold, or -1 if input is invalid.
 */
int safeMaterial(const vector<int>& array){
    //check if array contains positive integers
    if(*min_element(array.begin(), array.end()) < 0){
        return -1;
    }

    //check if array is empty or contains only one or two elements
    if(array.size() < 3){
        return 0;
    }

    return material(array);
}

int main(){
    vector<int> example1 = {6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3};
    vector<int> example2 = {6, 2, 1, 1, 8, 0, 5, 5, 0, 1, 8, 9, 6, 9, 4, 8, 0, 0};
    vector<int> example3 = {6, 2, 1, 1, 8, 0, 5, 5, 0, -4, 8, 9, 6, 9, 4, 8, 0, -1};

    cout << safeMaterial(example1) << '\n';
    cout << safeMaterial(example2) << '\n';
    cout << "Default behaviour: " << material(example3) << " With wrapper: " << safeMaterial(example3) << '\n';
}