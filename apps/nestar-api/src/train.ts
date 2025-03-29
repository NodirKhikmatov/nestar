/*TASK-ZR:

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6} */


function countNumberAndLetters(input: string): { number: number; letter: number } {
    let numberCount = (input.match(/[0-9]/g) || []).length;
    let letterCount = (input.match(/[a-zA-Z]/g) || []).length;

    return { number: numberCount, letter: letterCount };
}

console.log(countNumberAndLetters("string152%¥")); // Output: { number: 3, letter: 6 }





















/*TASK-ZQ:

Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4] 

function findDuplicates(arr: number[]): number[] {
	const countMap = arr.reduce((acc, num) => ((acc[num] = (acc[num] || 0) + 1), acc), {} as Record<number, number>);
	return Object.keys(countMap)
		.filter((key) => countMap[+key] === 2)
		.map(Number);
}

console.log(findDuplicates([1, 2, 3, 4, 5,  3]));




*/







/*TASK-ZP:

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6} 

function countNumberAndLetters(input: string): { number: number; letter: number } {
    let numberCount = (input.match(/[0-9]/g) || []).length;
    let letterCount = (input.match(/[a-zA-Z]/g) || []).length;

    return { number: numberCount, letter: letterCount };
}

console.log(countNumberAndLetters("string152%¥")); // Output: { number: 3, letter: 6 }

*/
/*TASK-ZO:

Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true 


function areParenthesesBalanced(s: string): boolean {
    let count = 0;
    for (const char of s) {
        if (char === "(") count++;
        else if (char === ")" && --count < 0) return false;
    }
    return count === 0;
}

console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));  // true
console.log(areParenthesesBalanced("(balans)emas)"));  // false

*/

/* TASK-ZN:

Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]


function rotateArray<T>(arr: T[], index: number): T[] {
    if (index < 0 || index >= arr.length) {
        throw new Error("Index out of bounds");
    }
    return [...arr.slice(-index), ...arr.slice(0, -index)];
}


console.log(rotateArray([1, 2, 3, 4, 5, 6], 3))
;*/
/**TASK ZM:

Shunday function yozing, va bu function parametr
sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
raqamlarni orqasiga o'girib qaytarsin

MASALAN: reverseInteger(123456789); return 987654321;

Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
o'girib (reverse) qilib qaytarmoqda.
function reverseInteger(num) {
    return Math.sign(num) * parseInt(num.toString().split('').reverse().join(''));
}


console.log(reverseInteger(123456789));
console.log(reverseInteger(-98765));   



 */

/*TASK-ZL:

Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

function stringToKebab(str: string): string {
    return str
        .toLowerCase() 
        .replace(/\s+/g, '-') 
        .replace(/[^a-z0-9-]/g, ''); 
}

// Test
console.log(stringToKebab("I love Kebab")); 
*/

/**TASK-ZK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers() 

function printNumbers(): void {
	let counter = 1;
	const interval = setInterval(() => {
		console.log(counter);
		counter = (counter % 5) + 1;
	}, 1000);

	setTimeout(() => clearInterval(interval), 5000);
}

printNumbers();

console.log(printNumbers());
*/
