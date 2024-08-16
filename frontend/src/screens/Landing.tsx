export const Landing = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <img src={"/chess-board.webp"} alt="chess board" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Play Chess With your friends</h1>
          <div className="mt-4">
            <button className="bg-indigo-500  ">Start The game</button>
          </div>
        </div>
      </div>
    </div>
  );
};
