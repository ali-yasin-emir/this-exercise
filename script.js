'use strict';

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 7, 3];

console.log(`\n-------Dog's Julia-------`);
dogsJulia.forEach(function (dogs, i) {
  let type = dogs > 3 ? 'adult' : 'puppy';
  console.log(`Dog number ${i + 1} is an ${type}, and is ${dogs} years old`);
});

console.log(`\n-------Dog's Kate-------`);
dogsKate.forEach(function (dogs, i) {
  let type = dogs > 3 ? 'adult' : 'puppy';
  console.log(`Dog number ${i + 1} is an ${type}`);
});

console.log('\n**********CORRECT DOGS***************');
//////////////////////////////////////

const correctDogsJulia = [3, 5, 2, 12, 7].splice(1, 2);

console.log(`\n-------Dog's Julia-------`);
correctDogsJulia.forEach(function (dogs, i) {
  let type = dogs > 3 ? 'adult 🐕' : 'puppy';
  const one = type === 'adult 🐕' ? 'an' : 'a';
  const years = dogs == 1 ? 'year' : 'years';

  if (type === 'adult 🐕') {
    console.log(
      `Dog number ${i + 1} is ${one} ${type}, and is ${dogs} ${years} old`
    );
  }
  if (type === 'puppy') {
    type = `still a puppy 🐶`;
    console.log(`Dog number ${i + 1} is ${type}, and is ${dogs} ${years} old`);
  }
});

const correctDogsKate = [4, 1, 15, 7, 3].splice(1, 2);

console.log(`\n-------Dog's Kate-------`);
correctDogsKate.forEach(function (dogs, i) {
  let type = dogs > 3 ? 'adult 🐕' : 'puppy';
  const one = type === 'adult 🐕' ? 'an' : 'a';
  const years = dogs == 1 ? 'year' : 'years';

  if (type === 'adult 🐕') {
    console.log(
      `Dog number ${i + 1} is ${one} ${type}, and is ${dogs} ${years} old`
    );
  } else {
    type = `still a puppy 🐶`;
    console.log(`Dog number ${i + 1} is ${type}, and is ${dogs} ${years} old`);
  }
});

// Dog number ${i + 1} is

// checkDogs(dogsKate);

// const correctdogsJulia = [];
// const correctdogsKate = [];
