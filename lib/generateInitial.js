export function generateInitials(fullName){
  const words = fullName.split(/\s+/);

  const initials = words.map((word) => word.charAt(0)).join("");

  return initials.toUpperCase();
};

// const fullName = "Tan Tin";
// const initials = generateInitials(fullName)
// console.log(initials);

