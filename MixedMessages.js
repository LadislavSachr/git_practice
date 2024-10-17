const chooseWord = array =>{
    return array[Math.floor(Math.random()*array.length)];
}
const main = () =>{
    const subject = ["I have","You have","He has","She has","It has","We have","You have","They have"];
    const adjective = ["big","small","nice","ugly","beautiful","clean","scary","white"];
    const object = ["car","horse","bike","hands","ears","baby","coat","eyes"];
    const sentence = [chooseWord(subject),chooseWord(adjective),chooseWord(object)];
    console.log(sentence);
    console.log(sentence.join(" ")+".");
}
main();