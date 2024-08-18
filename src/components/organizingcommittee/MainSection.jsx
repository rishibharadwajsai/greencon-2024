export function ImgCard({ imgSrc, name }) {
  return (
    <div className="my-10 w-80 h-96 flex flex-col items-center justify-end border-2 shadow-md hover:shadow-xl hover:cursor-pointer">
      <img src={imgSrc} alt={name} className="w-60" />
      <p className=" text-base md:text-xl font-medium my-5">{name}</p>
    </div>
  );
}

function MainSection({ title, imgSrc }) {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className=" text-base md:text-3xl font-bold tracking-tight text-center transition-colors first:mt-0 w-[50%] mx-auto text-[#3c5a96]">
        {title}
      </h1>
      <div className="mt-2 h-0.5 w-[10%] md:w-[8%] bg-gray-600 rounded-md" ></div>
      <div className="flex flex-wrap justify-evenly space-x-4">
        {imgSrc.map((imgObj, index) => (
          <ImgCard key={index} imgSrc={imgObj.imgSrc} name={imgObj.name} />
        ))}
      </div>
    </div>
  );
}

export default MainSection;
