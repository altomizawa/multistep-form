const formErrors = (error) => {
  if (error === 'name') {
    return 'Pleas enter at least 4 characters'
  } else if (error === 'email') {
    return 'Please return a valid email address'
  } else if (error === 'phone') {
    return 'Please enter a valid phone number'
  }
  return undefined
}

export default formErrors