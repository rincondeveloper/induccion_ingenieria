// eslint-disable-next-line react/prop-types
function Card({ title, url, description }) {
  const id = Math.floor(Math.random() * 826) + 1;
  const IMAGE =
    "https://rickandmortyapi.com/api/character/avatar/" + id + ".jpeg";
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="flex w-100 h-auto p-5 max-sm:h-[10em] max-sm:p-2">
        <div className="w-[10em] h-auto bg-black mr-4 max-sm:w-[150px] max-sm:h-[150px]">
          <img src={IMAGE} alt="UDG" className="w-full h-full grayscale" />
        </div>

        <div className="flex flex-col justify-start text-start w-2/3 max-sm:overflow-hidden">
          <h1 className="text-xl font-bold max-sm:text-sm">{title}</h1>
          <hr className="h-[2px] bg-black mb-2 max-sm:hidden" />
          <p className="text-sm text-[1.1em] font-thin max-sm:text-[.9em] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:line-clamp-6">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default Card;
