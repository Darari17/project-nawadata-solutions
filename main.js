function sortCharacters(input) {
  const vowels = "aeiou";
  let vowelChars = "";
  let consonantChars = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();

    if (char >= "a" && char <= "z") {
      if (vowels.includes(char)) {
        vowelChars += char;
      } else {
        consonantChars += char;
      }
    }
  }

  console.log({ vowelChars });
  console.log({ consonantChars });
}
sortCharacters("Sample Case");
sortCharacters("Next Case");

// =====================================================================================================

function calculateMinimumBuses(n, familyMembers) {
  if (n !== familyMembers.length) {
    return "Input must be equal with count of family";
  }

  familyMembers.sort((a, b) => b - a);

  let bus = 0;
  let i = 0;
  let j = familyMembers.length - 1;

  while (i <= j) {
    if (familyMembers[i] + familyMembers[j] <= 4) {
      j--;
    }
    i++;
    bus++;
  }

  return `Minimum bus required is : ${bus}`;
}

console.log(calculateMinimumBuses(5, [1, 2, 4, 3, 3]));
console.log(calculateMinimumBuses(8, [2, 3, 4, 4, 2, 1, 3, 1]));
console.log(calculateMinimumBuses(5, [1, 5]));
