import { Color, PieceSymbol, Square } from "chess.js";

export const ChessBoard = ({
  board,
}: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
}) => {
  return (
    <div>
      {board.map((row, i) => {
        return (
          <div key={i} className="">
            {row.map((square, j) => {
              return (
                <div key={j} className="">
                  {square ? square.type : ""}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
