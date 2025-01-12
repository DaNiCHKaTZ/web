function getDayOfWeek(date: Date, k: number): string {

    const daysName = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    date.setDate(date.getDate() + k);

    return daysName[date.getDay()];
}


const inputDate = new Date('2024-10-17'); 
const k = 12;  

const dayOfWeek = getDayOfWeek(inputDate, k);
console.log(`День недели через ${k} дней от ${inputDate.toLocaleDateString()}: ${dayOfWeek}`);
