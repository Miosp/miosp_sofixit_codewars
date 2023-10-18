#include <bits/stdc++.h>

using namespace std;

int material(vector<int> array){
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

int main(){
    vector<int> example1 = {6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3};
    vector<int> example2 = {6, 2, 1, 1, 8, 0, 5, 5, 0, 1, 8, 9, 6, 9, 4, 8, 0, 0};

    cout << material(example1) << '\n';
    cout << material(example2) << '\n';
}