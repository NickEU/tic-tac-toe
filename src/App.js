import React from "react";

class Square extends React.Component {
  render() {
    return (
      <button className='square' onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: Array(9).fill(null), turnX: true };
  }

  renderSquare(i) {
    return (
      <Square value={this.state.board[i]} onClick={() => this.handleClick(i)} />
    );
  }

  handleClick = i => {
    const newLabel = !this.state.turnX ? "O" : "X";
    if (this.state.board[i] !== null) {
      return;
    }
    const newBoard = [...this.state.board];
    newBoard[i] = newLabel;
    this.setState(_state => {
      return { board: newBoard, turnX: !this.state.turnX };
    });
  };

  render() {
    const turnType = this.state.turnX ? "X" : "O";
    const status = `Next player: ${turnType}`;

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

const App = () => {
  return <Game />;
};

export default App;
