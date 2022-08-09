function createBirdTextBox(BirdTextClass, birdpicture, colour, primary_name, credit, english_name, scientific_name, order, family, status, length, weight) {
    const birdBox = document.createElement('div');
    birdBox.setAttribute('class', BirdTextClass);

    var image = new Image();
    image.src = birdpicture;
    birdBox.appendChild(image);

    var colour = document.createElement('div');
    colour.id = 'colourCircle';
    birdBox.appendChild(colour);

    birdBox.append(newElement('p', 'primaryName', primary_name));
    birdBox.append(newElement('p', 'photoCred', credit));
    birdBox.append(newElement('p', 'engName', english_name));
    birdBox.append(newElement('p', 'scienceName', scientific_name));
    birdBox.append(newElement('p', 'birdOrder', order));
    birdBox.append(newElement('p', 'birdFamily', family));
    //birdBox.append(newElement('p', 'birdOtherNames', other_names));
    birdBox.append(newElement('p', 'birdStatus', status));
    birdBox.append(newElement('p', 'birdLength', length));
    birdBox.append(newElement('p', 'birdWeight', weight));


    switch (status) {
        case 'Not Threatened':
            birdBox.setAttribute("id", "notThreatened");
            break;
        case 'Naturally Uncommon':
            birdBox.setAttribute("id", "naturallyUncommon");
            break;
        case 'Relict':
            birdBox.setAttribute("id", "relict");
            break;
        case 'Recovering':
            birdBox.setAttribute("id", "recovering");
            break;
        case 'Declining':
            birdBox.setAttribute("id", "declining");
            break;
        case 'Nationally Increasing':
            birdBox.setAttribute("id", "nationallyIncreasing");
            break;
        case "Nationally Vulnerable":
            birdBox.setAttribute("id", "nationallyVulnerable");
            break;
        case 'Nationally Endangered':
            birdBox.setAttribute("id", "nationallyEndangered");
            break;
        case 'Nationally Critical':
            birdBox.setAttribute("id", "nationallyCritical");
            break;
        case 'Data Deficient':
            birdBox.setAttribute("id", "dataDeficient");
            break;
        default:
        // code block

    }




    document.querySelector('main').prepend(birdBox);
}
function newElement(type, className, content) {
    const e = document.createElement(type);
    e.setAttribute('class', className);
    e.textContent = content;
    return e;
}

