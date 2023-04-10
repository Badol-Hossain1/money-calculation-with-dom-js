document.getElementById("total-income").addEventListener("click", function () {
  const totalAmount = document.getElementById("total-amount");
  const value = totalAmount.value;
  const TotalvalueNum = parseInt(value);
  const Food = document.getElementById("Food");
  const FoodValue = Food.value;
  const FoodNum = parseInt(FoodValue);
  const Rent = document.getElementById("Rent");
  const RentValue = Rent.value;
  const RentNum = parseInt(RentValue);
  const Clothes = document.getElementById("Clothes");
  const ClothesValue = Clothes.value;
  const ClothesNum = parseInt(ClothesValue);

  const sum = FoodNum + RentNum + ClothesNum 
  const allSum =  TotalvalueNum - sum
  console.log(allSum);
  const totalSum = document.getElementById('totalSum')
  totalSum.innerText = allSum
});
