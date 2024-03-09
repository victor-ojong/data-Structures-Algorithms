let text = '<div xmlns=\"http://www.w3.org/1999/xhtml\">Your appointment has been reserved for 2023-06-29 10:00:00. Reference ID is a06876d5-d1e1-4d83-a0e9-6715a6e4cdcc. Appt Block Id is 0. Appt Encounter Id is 31101.</div>'  




function exctractIDS() {

  const cache = {}

  return function inner(text) {

    if (cache[text]) {
      delete cache[text]
      console.log('deleting input by cache')
      return cache
    
  }

    text = text.split('is')
    const referenceID = text[1]?.split('.')[0]

    const apptBlockID = text[2]?.split('.')[0]

    const aptEncounterID = text[3]?.split('.')[0]

    cache[referenceID] = referenceID
    cache[apptBlockID] = apptBlockID
    cache[aptEncounterID] = aptEncounterID
    cache[text] = true
   return {referenceID, apptBlockID ,aptEncounterID}
  }
  
 
  
}

const extractId = exctractIDS()

console.log(extractId(text))

