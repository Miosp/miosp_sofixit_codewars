#include <bits/stdc++.h>

using namespace std;

int material(vector<int> array){
    int result = 0;

    for(int i=1; i<array.size(); i++){
        const int maxLeft = *max_element(array.begin(), array.begin()+i);
        const int maxRight = *max_element(array.begin()+i, array.end());
        result += max(min(maxLeft, maxRight) - array[i], 0);
    }

    return result;
}

int main(){
    vector<int> example1 = {6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3};
    vector<int> example2 = {6, 2, 1, 1, 8, 0, 5, 5, 0, 1, 8, 9, 6, 9, 4, 8, 0, 0};

    cout << material(example1) << '\n';
    cout << material(example2) << '\n';
}