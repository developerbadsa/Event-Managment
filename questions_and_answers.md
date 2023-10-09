<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i

 It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as:
global.greetign = {} in Node.js
window.greetign = {}, frames.greetign = {} and self.greetign in browsers.
self.greetign in web workers.
globalThis.greetign in all environments.
In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>
  Here a calculation function called sum. i can see when calling this sum function passing 2 parameters one is number and another one is string.
  We know number and string cannot be addition.. when we go addition number and string automatically this number will be convert to string that's why is here ans is "12"
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>In code, an array feed is defined with an initial value. Then, an object data is created with a property FavoriteFood set to the first element of the Food array, which is "🍕". Later, the favoriteFood property is reassigned to "🍝", but this does not affect the food array. Therefore, when you log the food, it remains unchanged and the output is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>

Explanation: In the sayHi function, there is a parameter name that expects an argument to be passed when calling the function. However, when you call sayHi() without providing an argument, the name parameter remains undefined. The function still runs, but it uses the undefined value for name in the template string, resulting in "Hi there, undefined" being logged to the console.

</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Explanation: The forEach method iterates over the nums array, and for each element, it checks if the element num is truthy (not equal to 0). If the element is truthy, it increments the count variable by 1. Since three elements in the array (1, 2, and 3) are truthy, count gets incremented three times. Therefore, when you log count, it will be 3.
</i>

</p>
</details>
