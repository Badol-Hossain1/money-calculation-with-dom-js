function getElementValueAsInt(elementId) {
  const element = document.getElementById(elementId);
  const value = element.value.trim(); // trim whitespace from input value
  if (value === "") {
    return null; // input value is empty, return null
  }
  const parsedValue = parseInt(value);
  if (isNaN(parsedValue)) {
    return null; // input value contains non-numeric characters, return null
  } else {
    return parsedValue;
  }
}

document.getElementById("total-income").addEventListener("click", function () {
  const totalAmount = getElementValueAsInt("total-amount");
  const Food = getElementValueAsInt("Food");
  const Rent = getElementValueAsInt("Rent");
  const Clothes = getElementValueAsInt("Clothes");

  if (isNaN(totalAmount) || isNaN(Food) || isNaN(Rent) || isNaN(Clothes)) {
    return; // one of the values is NaN, return early
  }

  const sum = Food + Rent + Clothes;
  const allSum = totalAmount - sum;
  const totalSum = document.getElementById("totalSum");
  const saveN = allSum * 0.1;

  if (allSum < 0) {
    return;
  } else {
    totalSum.innerText = allSum;
  }
});

document.getElementById("saveId").addEventListener("click", function () {
  const add = document.getElementById("save");
  const totalAmount = getElementValueAsInt("total-amount");
  const Food = getElementValueAsInt("Food");
  const Rent = getElementValueAsInt("Rent");
  const Clothes = getElementValueAsInt("Clothes");
  if (isNaN(totalAmount) || isNaN(Food) || isNaN(Rent) || isNaN(Clothes)) {
    return; // one of the values is NaN, return early
  }

  const sum = Food + Rent + Clothes;
  const allSum = totalAmount - sum;
  const saveN = allSum * 0.1;
  add.innerText = saveN;
});
