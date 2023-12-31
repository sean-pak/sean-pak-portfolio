import AboveFoldLeftText from "./above-fold-left-text.tsx";
import AboveFoldRightText from "./above-fold-right-text.tsx";

const AboveFold = () => {
  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `url("docs/assets/Calvin-and-Hobbes-StarryNight.png")`,
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between pt-[9rem] px-[4rem] h-full">
        <AboveFoldLeftText />
        <AboveFoldRightText />
      </div>
    </div>
  );
};

export default AboveFold;
