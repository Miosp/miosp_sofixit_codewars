# Welcome to my Sofixit Code Wars solution repo!

The provided problem can be solved in multiple ways, so i will try to provide my thought process and a couple of possible solutions.

## 1. Gathering information
On the website we see graphics of pillars with different heights and some fluid flowing between the gaps. From the animation i assume, that the pillars are some kind of walls and the correct solution is to calculate amount of water which can fit within given wall configuratin without spillage. 
I checked both provided examples and *boom* both correct. I must be onto something.

## 2. Brute force approach
First try is made to check if understanding of the problem is correct and to possibly have some generated solutions to check against.
From each pillar we can run a check how much fluid is contained above it - how? We need to know maximum height of pillars on the left and right from this pillar. Then we add the results and *voilà*! We have our result. Here is an implementation in c++.

```cpp
int material(vector<int> array){
    int result = 0;

    for(int i=1; i<array.size(); i++){
        const int maxLeft = *max_element(array.begin(), array.begin()+i);
        const int maxRight = *max_element(array.begin()+i, array.end());
        result += max(min(maxLeft, maxRight) - array[i], 0);
    }

    return result;
}
```
The complexity of this solution is O(n<sup>2</sup>) since we run two nested loops on whole array. Size complexity is O(1).

## 3. Optimizing
The solution above is correct, but it is not very efficient. We are running two loops and for each pillar we are checking all pillars on the left and right. This is not very efficient. We can do better.
We can observe that each section of fluid is held from the right and left, so what we need to know is maximum height of pillars on the left and right from this pillar. We can calculate this in one loop and store the results in two arrays. Then we can run another loop to calculate the result. Here is an implementation in c++.

```cpp
int material(vector<int> array){
    int result = 0;
    vector<int> leftMax(array.size());
    vector<int> rightMax(array.size());

    for(int i=1; i<array.size(); i++){
        leftMax[i] = max(leftMax[i-1], array[i-1]);
        rightMax[array.size()-i-1] = max(rightMax[array.size()-i], array[array.size()-i]);
    }

    for(int i=1; i<array.size(); i++){
        result += max(min(leftMax[i], rightMax[i]) - array[i], 0);
    }

    return result;
}
```

Here the complexity is O(n) since we run three loops on whole array, but the size rose complexity to O(n) since we store two arrays of size n.

## 4. Optimizing further