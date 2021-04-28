let startOfCycle = 1617580800; // start of Gregorian-Bangwa cycle (Monday April 5)
let timestamp = 1619615720; // current UNIX timestamp in seconds
let xx = new Date();
xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
let UTCString = xx.toUTCString().slice(0, 16);

const convert = (currentTimestamp) => {
    let dayOfCycle = ((currentTimestamp - startOfCycle) - (currentTimestamp - startOfCycle) % 86400)/ 86400;
    let dayOfWeek;
    switch (dayOfCycle % 8) {
        case 0:
            dayOfWeek = 'Ankoah';
            break;
        case 1:
            dayOfWeek = 'Anzoah';
        case 2:
            dayOfWeek = 'Alena';
            break;
        case 3:
            dayOfWeek = 'Amina';
        case 4:
            dayOfWeek = 'Afeah';
            break;
        case 5:
            dayOfWeek = 'Agong';
        case 6:
            dayOfWeek = 'Aseih';
            break;
        case 7:
            dayOfWeek = 'AlungAnzoah';   
    }

    return `Today ${UTCString} is ${dayOfWeek} in the Bangwa week`;
}

console.log(convert(timestamp));
