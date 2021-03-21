# Gentle introduction

Chapter 2 : All listings : https://codepen.io/collection/Xzwavm/

## predicting duration of a download using tensorflow.js

Can you predict how much time will it take your file to download?

Starter code : codepen.io/tfjs-book/pen/VEVMbx

My pen : https://codepen.io/fanbyprinciple/pen/LYbwJLE

Page 64 .

What we are attempting is linear regression

`timeSec = kernel * sizeMB + bias`

### What we need after defining a model

1. A measure to tell us how well we are doing at a fiven setting of weights

loss function -  to calculate the network performance no the training data and steers itself inthe right direction


2. A method to update the weights values so that next time we will do better thatn what we are currently doing

Optimizer - algorithm thorugh which model updates a parameter

### Why use weird Async syntax?

The fit() method can often be long-running, lasting for seconds or minutes. Therefore, we utilize the async/await feature of ES2017/ES8 so that this function can be
used in a way that does not block the main UI thread when running in the browser.
This is similar to other potentially long-running functions in JavaScript, such as async
fetch. Here, we wait for the fit() call to finish before going on, using the Immediately Invoked Async Function Expression pattern, but future examples will train in
the background while doing other work in the foreground thread.

But it is not working in my case:
![](async_not_working.png)

We need a diversion and learn about async in javascript.

## Async in Javascript







