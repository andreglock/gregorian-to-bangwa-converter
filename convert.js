let startOfCycle = 1618704000; // start of Gregorian-Bangwa cycle (Sunday April 18 - Ankoah)

// Check https://www.epochconverter.com/ to find a given time
let timestamp = 1618704000; // date to convert in UNIX timestamp in seconds
//timestamp = new Date()/1000; // JavaScript function to fetch current date

const convert = (currentTimestamp) => {
    let UTCString = new Date(timestamp*1000).toUTCString().slice(0, 16); // display given time in string

    let dayOfCycle = ((currentTimestamp - startOfCycle) - (currentTimestamp - startOfCycle) % 86400)/ 86400; //86400 is one day
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
            dayOfWeek = 'AlungAnzoah';
            break;   
    }

    return `Today ${UTCString} is ${dayOfWeek} in the Bangwa week`;
}

console.log(convert(timestamp));
