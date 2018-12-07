export function giberish(data:string) {
    const symbols = "!@#$%^&*()_+";
    const randomSeed = getRandomInt(data.length);
    for (let i = 0; i < randomSeed; i++) {
        const index = getRandomInt(data.length);
        const symbolIndex = getRandomInt(symbols.length);
        data = replaceAt(data, index, symbols[symbolIndex]);
    }
    return data;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function replaceAt(str: string, index:number, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}