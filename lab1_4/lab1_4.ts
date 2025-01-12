function isPangram(sentence: string): boolean {
    const bykavi = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const stroch = sentence.toLowerCase();

    for (const char of bykavi) {
        if (!stroch.includes(char)) {
            return false;
        }
    }
    return true;
}

const sentence = "Эх, чужд кайф, сплющь объём вши, грызя цент.";
const result = isPangram(sentence);

console.log(result ? "Предложение является панграммой." : "Предложение не является панграммой.");
