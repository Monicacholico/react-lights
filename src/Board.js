import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);

    this.state = {
      hasWon: false,
      board: this.createBoard()
    }

  }

  createBoard() {
    let board = [];
    for( let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for(let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
  }

  /** Render game board or winning message. */

  render() {
    return (

      // if the game is won, just show a winning msg & render nothing else

      // TODO
      <div className='Board'>
        <table>
          <tbody>
            <tr>
              <Cell isLit={true}/>
              <Cell isLit={false}/>
              <Cell isLit={true}/>
              <Cell isLit={false}/>
              <Cell isLit={true}/>
            </tr>
            <tr>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
            </tr>
            <tr>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
            </tr>
            <tr>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
            </tr>
            <tr>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
            </tr>
          </tbody>
        </table>
      </div>

      // make table board

      // TODO
    )

  }
}


export default Board;
