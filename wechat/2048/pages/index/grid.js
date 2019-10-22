class Grid {
  constructor(size) {
    this.size = size
    this.grid = this.init();
  }
  init() {
    let grid = []
    for (let i = 0; i < this.size; i++) {
      grid[i] = [];
      for (let j = 0; j < this.size; j++) {
        grid[i].push('');
      }
    }
    return grid;
  }
  //把空格子 找出来
  useFulCell() {
    let cells = [];
    for(let i = 0; i < this.size; i ++) {
      for (let j = 0; j < this.size; j++){
        if(this.grid[i][j] == ''){
          cells.push({
            i,
            j
          })
        }
      }
    }
    return cells;
  }
  selectCell() {
    let unUsed = this.useFulCell();//3
    let index = Math.floor(Math.random() * unUsed.length);//[0~3]
    return unUsed[index];
  }
}
module.exports = Grid;