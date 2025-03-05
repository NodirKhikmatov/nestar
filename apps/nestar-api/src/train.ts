/**TASK-ZK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers() */

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
