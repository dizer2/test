const ctx = document.getElementById("myChart");
let arr = [1,1,1];
function randomSetup() {
	config = {};
	let arr = [];
	let r1 = Math.floor(Math.random() * 100);
	let r2 = Math.floor(Math.random() * (100 - r1));
	let r3 = 100 - r2 - r1;
	arr.push(r1);
	arr.push(r2);
	arr.push(r3);
	config.arr = arr;

	let c1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	let c2 = "#" + Math.floor(Math.random()*16777215).toString(16);
	let c3 = "#" + Math.floor(Math.random()*16777215).toString(16);
	let colors = []
	colors.push(c1);
	colors.push(c2);
	colors.push(c3);
	config.colors = colors;


  return config;
}
console.log(randomSetup())


const data = {
  labels: ["", "", ""],
  datasets: [
	{
	  label: "My First Dataset",
	  data: arr,
	  backgroundColor:[
		'rgb(255, 99, 132)',
		'rgb(54, 162, 235)',
		'rgb(255, 205, 86)'
	  ],
	  hoverOffset: 4,
	},
  ],
};
let myChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
});

randomBtn.onclick = function () {
  data.datasets[0].data = randomSetup().arr;
  data.datasets[0].backgroundColor = randomSetup().colors;

  myChart.update();
};