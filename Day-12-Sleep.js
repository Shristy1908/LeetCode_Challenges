//Sleep
//https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript
//Difficulty - Easy

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

console.log(sleep(200));
