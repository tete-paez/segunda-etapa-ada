const grid = document.querySelectorAll('.item');

for (let i = 0 ; i < grid.length ; i += 2) { // para que me pinte uno si y otro no 
    console.log(grid[i]);
    grid[i].style.backgroundColor = 'red';
}