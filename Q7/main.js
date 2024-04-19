var character = window.prompt("WRITE THE CHARACTER |").toLowerCase();
// We convert the input character to lowercase using toLowerCase() to make the comparison case-insensitive.

if (character==="a" || character==="e" || character==="o" || character==="i" || character==="u") {
    console.log("Vowel");
}
// we would typically use logical OR (||) to check if the character is equal to any of those vowels

else {
    console.log("Consonant");
}