// Any code you will write for your website (in the future!) should go here

const date = document.querySelector("input");
const startOfCycle = 12355200; // start of Gregorian-Bangwa cycle (Sunday, May 24, 1970 - Ankoah)
const button = document.querySelector("button");
const p = document.querySelector("p");

const timestamp = button.addEventListener("click", () => {
    const timestamp = date.valueAsNumber/1000;
    const UTCString = new Date(timestamp*1000).toUTCString().slice(0, 16); // display given time in string

    const dayOfCycle = ((timestamp - startOfCycle) - (timestamp - startOfCycle) % 86400)/ 86400; //86400 is one day
    let dayOfWeek;
    switch (dayOfCycle % 8) {
        case 0:
            dayOfWeek = 'Ankoah';
            break;
        case 1:
            dayOfWeek = 'Anzoah';
            break;
        case 2:
            dayOfWeek = 'Alena';
            break;
        case 3:
            dayOfWeek = 'Amina';
            break;
        case 4:
            dayOfWeek = 'Afeah';
            break;
        case 5:
            dayOfWeek = 'Agong';
            break;
        case 6:
            dayOfWeek = 'Aseih';
            break;
        case 7:
            dayOfWeek = 'Alung';
            break;
        case -7:
            dayOfWeek = 'Anzoah';
            break;
        case -6:
            dayOfWeek = 'Alena';
            break;
        case -5:
            dayOfWeek = 'Amina';
            break;
        case -4:
            dayOfWeek = 'Afeah';
            break;
        case -3:
            dayOfWeek = 'Agong';
            break;
        case -2:
            dayOfWeek = 'Aseih';
            break;
        case -1:
            dayOfWeek = 'Alung';
            break;   
        default:
            dayOfWeek = 'Error';
    }

    p.innerText = `${UTCString} is ${dayOfWeek} in the Bangwa week`;
});
