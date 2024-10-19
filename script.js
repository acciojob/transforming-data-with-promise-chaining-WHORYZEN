const input = document.getElementById('ip');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const inputValue = Number(input.value);  // Get the input number and convert to a number
  
  // Check if input is a valid number
  if (isNaN(inputValue)) {
    output.textContent = 'Please enter a valid number!';
    return;
  }

  // First promise: resolve after 2 seconds with the input value
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputValue);
    }, 2000);
  });

  // Chain the next promises one by one
  promise1
    .then((num) => {
      // Print initial result after 2 seconds
      output.textContent = `Result: ${num}`;
      return num;
    })
    .then((num) => {
      // Multiply the number by 2 after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = num * 2;
          output.textContent = `Result: ${multiplied}`;
          resolve(multiplied);
        }, 1000);
      });
    })
    .then((num) => {
      // Subtract 3 from the number after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const subtracted = num - 3;
          output.textContent = `Result: ${subtracted}`;
          resolve(subtracted);
        }, 1000);
      });
    })
    .then((num) => {
      // Divide the number by 2 after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const divided = num / 2;
          output.textContent = `Result: ${divided}`;
          resolve(divided);
        }, 1000);
      });
    })
    .then((num) => {
      // Add 10 to the number after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const added = num + 10;
          output.textContent = `Result: ${added}`;
          resolve(added);
        }, 1000);
      });
    })
    .then((finalResult) => {
      // Final result
      output.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      // Handle any errors that occur during promise chain
      console.error('Error in promise chain:', error);
      output.textContent = 'An error occurred, please try again.';
    });
});
