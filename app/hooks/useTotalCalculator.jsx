import React from 'react'

const useTotalCalculator = ({plan, yearly, onlineService, largerStorage, customizableProfile }) => {
  let planCost = 0;
  let onlineServiceCost = 0;
  let largerStorageCost = 0;
  let customizableProfileCost = 0;

  if (plan === 'arcade') {
    planCost = yearly ? 90 : 9
  } else if (plan === 'advanced') {
    planCost = yearly ? 120 : 12
  } else {
    planCost = yearly ? 150 : 15
  }

  if (onlineService) {
    onlineServiceCost = yearly ? 10 : 1;
  }
  
  if (largerStorage) {
    largerStorageCost = yearly ? 20 : 2;
  }
  
  if (customizableProfile) {
    customizableProfileCost = yearly ? 20 : 2;
  }

  
  return {
    planCost,
    onlineServiceCost,
    largerStorageCost,
    customizableProfileCost,
    totalCost: planCost + onlineServiceCost + largerStorageCost + customizableProfileCost
  }
}

export default useTotalCalculator
