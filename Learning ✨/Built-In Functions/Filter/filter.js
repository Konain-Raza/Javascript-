const names = ["konain", "khubaib", "ali"];

const foundNames = names.filter((value) => {
    return value[0].toLowerCase() === "k"; // Check if the name starts with "k" (case-insensitive)
});

const count = foundNames.length; // Count how many names start with "k"

if (count > 0) {
    console.log(`There are ${count} names that start with 'k'`);
    console.log(foundNames);
} else {
    console.log("No names start with 'k'");
}
