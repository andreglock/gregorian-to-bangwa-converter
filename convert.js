let startOfCycle = 12355200; // start of Gregorian-Bangwa cycle (Sunday, May 24, 1970 - Ankoah)

let timestamp = new Date(
    1970 /* Year */, 
    1 /* Month */ - 1, 
    3, /* Day */ 
    1) /* 1 hour between UTC and CET */
    / 1000; /* JavaScript works with Milliseconds */

const convert = (currentTimestamp) => {
    let UTCString = new Date(timestamp*1000).toUTCString().slice(0, 16); // display given time in string

    let dayOfCycle = ((currentTimestamp - startOfCycle) - (currentTimestamp - startOfCycle) % 86400)/ 86400; //86400 is one day
    let dayOfWeek;
    console.log("day of cycle", dayOfCycle, "timestamp:", currentTimestamp, "difference", currentTimestamp - startOfCycle);
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
            console.log(`${dayOfCycle % 8}`)
            dayOfWeek = 'Error';
    }

    return `${UTCString} is ${dayOfWeek} in the Bangwa week`;
}

console.log(convert(timestamp));
