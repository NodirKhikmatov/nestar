/**TASK ZM:

Shunday function yozing, va bu function parametr
sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
raqamlarni orqasiga o'girib qaytarsin

MASALAN: reverseInteger(123456789); return 987654321;

Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
o'girib (reverse) qilib qaytarmoqda. */
function reverseInteger(num) {
    return Math.sign(num) * parseInt(num.toString().split('').reverse().join(''));
}


console.log(reverseInteger(123456789));
console.log(reverseInteger(-98765));   






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