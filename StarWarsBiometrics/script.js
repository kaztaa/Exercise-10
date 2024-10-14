function getApi(){
    /*Skriv din kod här*/
    const search = document.getElementById('text').value;


    fullUri = "https://www.swapi.tech/api/people/?name="+search
    fetch(fullUri)
    .then(res => {
        // Kontrollera om svaret är OK (statuskod 200-299)
        if (!res.ok) {
            throw new Error('Något gick fel med API-anropet');
        }
        return res.json();
    })
    .then(data =>
    {
        properties = data
        console.log(data);
        console.log(data.result[0]);

        let string = `Name: ${data.result[0].properties.name} \nMass: ${data.result[0].properties.mass}\nHeight: ${data.result[0].properties.height}\nHair color: ${data.result[0].properties.hair_color}\nEye color: ${data.result[0].properties.eye_color}`
        // document.getElementById("textarea").append(data.result[0].properties.name+"\n");
        // document.getElementById("textarea").append(data.result[0].properties.gender+"\n");
        // document.getElementById("textarea").append(data.result[0].properties.eye_color+"\n");
        document.getElementById("textarea").innerHTML = string;



    })  
    .catch(err => console.log(err))
} 





// Event (click) listener for button, calls the addToList function 
document.getElementById("button").addEventListener("click", getApi);
