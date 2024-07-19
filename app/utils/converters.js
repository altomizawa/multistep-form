function toCamelCase(str) {
  return str
    .split(' ') // Split the string by spaces
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase(); // Lowercase the first word
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter of subsequent words
    })
    .join(''); // Join the words back together
}

const totalCalculator = ({plan, yearly, onlineService, largerStorage, customizableProfile}) => {
  if (plan === 'arcade' && yearly === false) {
    plan = 9;
  } else if(plan === 'advanced' && yearly === false) {
    plan = 12
  } else if(plan === 'pro' && yearly === false) {
    plan = 15
  } else if (plan === 'arcade' && yearly === true) {
    plan = 90
  } else if(plan === 'advanced' && yearly === true) {
    plan = 120
  } else if(plan === 'pro' && yearly === true) {
    plan = 150
  }

  if (onlineService === true && yearly === false) {
    onlineService = 9;
  } else if(onlineService === true && yearly === false) {
    onlineService = 12
  } else if (onlineService === false && yearly === true) {
    onlineService = 90
  } else if(onlineService === false && yearly === true) {
    onlineService = 120
  }

  return {plan, onlineService, largerStorage, customizableProfile}
}

const upperCaseFirstLetter = (string) => {
  const firstLetter = string.slice(0,1).toUpperCase();
  const remaining = string.slice(1)
  return firstLetter.concat(remaining)
}

export {toCamelCase, totalCalculator, upperCaseFirstLetter}