function getApi(){
    /*Skriv din kod här*/
    const search = document.querySelector('#text').value

    fullUri = 'https://www.swapi.tech/api/people/?name='+search
    fetch(fullUri)
    .then(res => {
        // Check if response is ok
        if (!res.ok) {
            throw new Error('Något gick fel med API-anropet')
        }
        return res.json()
    })
    .then(data =>
    {
        properties = data
        console.log(data)
        console.log(data.result[0])

        let string = `Name: ${data.result[0].properties.name} \nMass: ${data.result[0].properties.mass}\nHeight: ${data.result[0].properties.height}\nHair color: ${data.result[0].properties.hair_color}\nEye color: ${data.result[0].properties.eye_color}`
        document.querySelector('#textarea').innerHTML = string
    })  
    .catch(err => console.log(err))
} 

// Event (click) listener for button, calls the addToList function 
document.querySelector('#button').addEventListener('click', getApi)
