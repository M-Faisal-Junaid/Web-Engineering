const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
   };
   
   function carInfo(car) {
    return `The ${car.brand} ${car.model} was manufactured in ${car.year}.`;
   }
   
   const carInfoString = carInfo(car);
   console.log(carInfoString);
   