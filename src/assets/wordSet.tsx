import testList from "./testList";

const wordSet = new Set()

testList.forEach((word) => {
    wordSet.add(word)
})


export default wordSet;