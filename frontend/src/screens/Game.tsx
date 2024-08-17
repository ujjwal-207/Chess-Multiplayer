import React from "react";
import { ChessBoard } from "../components/ChessBoard";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Game = () => {
  const navigate = useNavigate();
  return (
    <div className="justify-center flex">
      <div className="pt-8 max-v-screen-lg">
        <div className="grid grid-cols-1">
          <div>
            <ChessBoard />
          </div>
          <div>
            <Button
              onClick={() => {
                navigate("/game");
              }}
            >
              Play Online
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
