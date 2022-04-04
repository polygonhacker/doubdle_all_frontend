import wordList from "./wordList";

const wordSet = new Set()

wordList.forEach((word) => {
    wordSet.add(word)
})


export default wordSet;