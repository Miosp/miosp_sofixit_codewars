# Welcome to my Sofixit Code Wars solution repo!

The provided problem can be solved in multiple ways, so I will try to provide my thought process and a couple of possible solutions.

## 1. Gathering information
On the website we see graphics of pillars with different heights and some fluid flowing between the gaps. From the animation I assume, that the pillars are some kind of walls and the correct solution is to calculate amount of water which can fit within given wall configuratin without spillage. 
I checked both provided examples and *boom* are both correct. I must be onto something.

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
We can do even better! We can observe that for each pillar we need to know minimum height of biggest pillars on the left and right. We can ensure that we have a minimum pillar at a particular time by using a two pointer approach. We can start with two pointers at the beginning and end of the array. Then we can move the pointer with the smaller value towards the other pointer. This way we can ensure that we have a minimum pillar at a particular time. Here is an implementation in c++.

```cpp
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
```
This way we don't need to store any additional data, so space complexity falls to O(1) and time complexity stays O(n).

## 5. Practical presentation on a website
Since it's always nice to see how any solution works in practice, I decided to create a website where you can see the solution in action. You can find it [here](https://miosp.github.io/miosp_sofixit_codewars/). I used Svelte and Typescript to create it. The graphical assets are based on the graphics from original problem website and I tried to recreate them as closely as I could. The website is only an addition to the solution, so it is not very feature rich, but it is enough to show how the solution works and contains some nice animations. I hope you like it.

## 6. AI?
Since the material function is deterministic and takes an array of integers, we can try to train a model, which will try to predict the output of the function. Unfortunately since the input data is not treated as a sequence any methods such as RNNs with LSTMs are out of the question. Also CNNs are not good, because of global nature of each data point (any height can potentially influence any other). I tried to use a simple network with a couple of layers and in order to support variable size - use padding, but my results were horrible. Perhaps I have not enough knowledge in this field to choose right architecture, but I think that this problem is not suited for neural networks.

## 7. Conclusion
I hope you enjoyed my solution and the website. I tried to make it as interesting as possible. I had a good time solving this problem and I hope you liked reading about it. Solving this type of problem requires a lot of thinking in a different way than we are used to, so it is always a good exercise. Besides that making a website to show how the solution works can make people unfamiliar with the problem understand it better. It also turned out that AI is not always the best solution for a problem (even though technically AI solution is possible).