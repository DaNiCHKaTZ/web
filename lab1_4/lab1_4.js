function isPangram(sentence) {
    var bykavi = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    var stroch = sentence.toLowerCase();
    for (var _i = 0, bykavi_1 = bykavi; _i < bykavi_1.length; _i++) {
        var char = bykavi_1[_i];
        if (!stroch.includes(char)) {
            return false;
        }
    }
    return true;
}
var sentence = "Эх, чужд кайф, сплющь объём вши, грызя цент.";
var result = isPangram(sentence);
console.log(result ? "Предложение является панграммой." : "Предложение не является панграммой.");
