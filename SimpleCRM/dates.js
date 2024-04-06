const myUnixTimestamp = 1710820736; // start with a Unix timestamp

const myDate = new Date(myUnixTimestamp * 1000); // convert timestamp to milliseconds and construct Date object

console.log(myDate.toLocaleString());
