// const fetch = require('node-fetch'); // uncomment this line for version <= 16.x >
const API_URL = "nzbird.json";


async function main() {


    // wait for the server to respond
    let response = await fetch(API_URL);
    // wait for the data to load 
    let birds = await response.json(); // .json() calls JSON.parse() for us


    /* Problems:

    - search bar, how to hide/show based on what should be shown
    - potentially make the sort by change the value of conservation status to ALL when another
    sorting method is chosen
    
 
    - provide css for smaller screens
    - get credits 
    - labels for primary name etc.
    - get other names
    - potentially sort the horizontal scrolling
    */





    function loadAllBirds() {

        /*Sort the birds from shortest to longest and use that as the initial state of the website */
        birds.sort(function compare(a, b) {
            return b.size.length.value - a.size.length.value;
        });
        for (let i = 0; i < birds.length; i++) {
            // console.log(birds[i].size.length.value + " " + birds[i].primary_name);
        }
        for (b in birds) {

            createBirdTextBox(
                "eachBirdBox",
                birds[b].photo.source,
                null,
                birds[b].primary_name,
                "Photo by " + birds[b].photo.credit,
                birds[b].english_name,
                birds[b].scientific_name,
                birds[b].order,
                birds[b].family,
                birds[b].status,
                birds[b].size.length.value + birds[b].size.length.units,
                birds[b].size.weight.value + birds[b].size.weight.units,
            )

        }


        /** Event Listener for a change in the dropdown menu, changes the sorting from shortest to longest */
        const input = document.getElementById('sort-by')
        input.addEventListener('change', (e) => {
            reset();
            const choice = e.target.value;
            console.log(choice);

            switch (choice) {
                case 'short-long':
                    birds.sort(function compare(a, b) {
                        return b.size.length.value - a.size.length.value;
                    });

                    break;
                case 'long-short':
                    birds.sort(function compare(a, b) {
                        return a.size.length.value - b.size.length.value;
                    });

                    break;
                case 'light-heavy':
                    birds.sort(function compare(a, b) {
                        return b.size.weight.value - a.size.weight.value;
                    });
                    for (let i = 0; i < birds.length; i++) {

                    }
                    break;
                case 'heavy-light':
                    birds.sort(function compare(a, b) {
                        return a.size.weight.value - b.size.weight.value;
                    });
                    for (let i = 0; i < birds.length; i++) {

                    }
                    break;

            }




            for (b in birds) {

                createBirdTextBox(
                    "eachBirdBox",
                    birds[b].photo.source,
                    null,
                    birds[b].primary_name,
                    "Photo By " + birds[b].photo.credit,
                    birds[b].english_name,
                    birds[b].scientific_name,
                    birds[b].order,
                    birds[b].family,
                    birds[b].status,
                    birds[b].size.length.value + birds[b].size.length.units,
                    birds[b].size.weight.value + birds[b].size.weight.units,
                )
                //let birdpicture = document.getElementsByClassName("birdImg");
                //birdpicture.src = "data/images/stitchbird-2.jpg";
                // '"' + birds[b].photo.source + '"';
            }
        });

    }
    loadAllBirds();
    const input = document.getElementById('sort-cons')
    input.addEventListener('change', (e) => {
        // reset();
        const conservation = e.target.value;
        console.log(conservation);

        switch (conservation) {
            case 'all':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "inline");
                break;
            case 'notThreatened':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#notThreatened").forEach(a => a.style.display = "inline");
                break;
            case 'naturallyUncommon':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#naturallyUncommon").forEach(a => a.style.display = "inline");
                break;
            case 'relict':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#relict").forEach(a => a.style.display = "inline");
                break;
            case 'recovering':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#recovering").forEach(a => a.style.display = "inline");
                break;
            case 'declining':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#declining").forEach(a => a.style.display = "inline");
                break;
            case 'nationallyIncreasing':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#nationallyIncreasing").forEach(a => a.style.display = "inline");
                break;
            case 'nationallyVulnerable':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#nationallyVulnerable").forEach(a => a.style.display = "inline");
                break;
            case 'nationallyEndangered':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#nationallyEndangered").forEach(a => a.style.display = "inline");
                break;
            case 'nationallyCritical':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#nationallyCritical").forEach(a => a.style.display = "inline");
                break;
            case 'dataDeficient':
                document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
                document.querySelectorAll("#dataDeficient").forEach(a => a.style.display = "inline");
                break;

        }



    });

    const search_bar = document.querySelector('#search')
    search_bar.addEventListener('keydown', searchBar);
    function searchBar(event) {
        const text = event.target.value.toLowerCase();
        document.querySelectorAll(".eachBirdBox").forEach(a => a.style.display = "none");
        for (b in birds) {
            if (birds[b].primary_name.toLowerCase().includes(text)) {
                console.log(birds[b].primary_name + "this bird was the one")
            } else if (birds[b].primary_name.toLowerCase().includes(text)) {



            }
        }
    }
}

main();


function reset() {
    let e = document.querySelector('main');
    e.innerHTML = "";
}
