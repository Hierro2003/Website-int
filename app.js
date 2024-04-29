const checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", function() {
  const numberInput = document.getElementById("numberInput");
  const number = numberInput.value.trim();
  const result = document.getElementById("result");

  console.log("Input number:", number); // Check if input is retrieved

  if (!result) {
    console.error("Result element not found!");
    return;
  }

  const regex = /^[-+]?\d+(\.\d+)?[Ee][-+]?\d+$/;

  if (regex.test(number)) {
    result.textContent = "Yes, it is a scientific number";
  } else {
    result.textContent = "No, it's not a scientific number";
  }
});
