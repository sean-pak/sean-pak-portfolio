const AboveFoldRightText = () => {
  return (
    <div className="h-60 w-[27rem] relative pb-10">
      <div className="absolute w-[8.75rem] h-full rounded-lg drop-shadow-md z-30 flex pb-6">
        <img src="docs/assets/Hero-Picture.png" alt="Photo of Sean Pak"></img>
      </div>

      <div className="absolute w-[25rem] h-[10rem] bg-[#1b1b1b] rounded-md z-20 left-8 top-20">
        <div className="justify-center h-full space-y-4 flex flex-col w-full pl-[8.5rem] text-body">
          <i>empathetic yet tenacious</i>
          <i>technical yet creative</i>
          <div className="flex">
            <i>all in all, a </i>
            <div className="pl-1.5 text-body-gold">
              <i>problem solver</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboveFoldRightText;
