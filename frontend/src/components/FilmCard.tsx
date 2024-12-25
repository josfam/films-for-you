import { SuccessToast } from "./toasts/Toasts";

interface FilmCardProps {
  coverName: string;
  title: string;
  released: string;
}

const FilmCard = ({ coverName, title, released }: FilmCardProps) => {
  return (
    <div className="flex w-full flex-grow items-center justify-center transition-all duration-200 hover:scale-105">
      <div className="group relative w-[300px] rounded-xl bg-slate-900 shadow-lg shadow-sky-900 hover:shadow-sky-600">
        <img
          src={`/covers/${coverName}.jpg`}
          alt={`Film cover for ${title}`}
          className="h-full w-full rounded-xl object-cover"
        />
        <div
          className={`group absolute bottom-0 flex h-full w-full scale-95 flex-col items-center justify-center gap-y-4 rounded-bl-xl rounded-br-xl px-7 opacity-0 transition-all delay-75 duration-200 hover:scale-100 hover:opacity-100`}
        >
          <div className="z-10">
            <p className="text-xl text-white">{title}</p>
            <p className="text-xl text-white">{`(${released})`}</p>
          </div>
          <button
            className="btn-pri"
            onClick={() =>
              SuccessToast({ message: "Okay 🎉 I will recommend another soon" })
            }
          >
            I've seen this one
          </button>
          {/* background overlay */}
          <div
            className={`absolute h-full w-full rounded-bl-xl rounded-br-xl rounded-tl-lg rounded-tr-lg bg-gray-900 opacity-75`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
