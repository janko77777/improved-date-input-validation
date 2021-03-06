import {useState} from 'react'
    
const [fromInputIsValid, setFromInputIsValid] = useState(true)
const [toInputIsValid, setToInputIsValid] = useState(true)

// Assumes MM/DD/YYYY input by user and that extraDateValidation is called onChange with string 'TO' or 'FROM' passed to the function

const extraDateValidation = (dateString: string, changeHandled: string) => {

const monthInput = dateString.substring(0, 2);
const dayInput = dateString.substring(3, 5);
const yearInput = dateString.substring(6, 10);
const monthLength = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

setFromInputIsValid(true);
setToInputIsValid(true);

// Check MM/ is valid

if ((monthInput.length === 2 && Number(monthInput) > 12) || (monthInput.length === 2 && monthInput === '00')) {
  if (changeHandled === 'FROM') setFromInputIsValid(false);
  else if (changeHandled === 'TO') setToInputIsValid(false);
}

// Check MM/DD is valid

if (
  (dayInput.length === 2 && Number(dayInput) > monthLength[Number(monthInput) - 1])
  || (dayInput.length === 2 && dayInput === '00')
) {
  if (changeHandled === 'FROM') setFromInputIsValid(false);
  else if (changeHandled === 'TO') setToInputIsValid(false);
}

// Check MM/DD/YYYY is valid including leap years

if (
  yearInput.length === 4
  && new Date(Number(yearInput), 1, 29).getMonth() - 1
  && monthInput === '02'
  && Number(dayInput) > 28
) {
  if (changeHandled === 'FROM') setFromInputIsValid(false);
  else if (changeHandled === 'TO') setToInputIsValid(false);
}
};