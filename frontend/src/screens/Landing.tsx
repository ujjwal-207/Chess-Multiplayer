import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <div>
            <img src={"/chess-board.webp"} alt="chess board" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Play Chess With your friends</h1>
            <div className="mt-4 align-middle">
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
    </div>
  );
};
