import "./App.css";
import Card from "./Card";
import { data } from "./data";

//get time dd/mm/yyyy
new Date().toLocaleDateString();
const date = new Date();

console.log(data);

function App() {
  return (
    <div
      className="bg-[#fbfbfb] w-100"
      style={{
        fontFamily: "Old Standard TT, serif",
        fontWeight: 600,
        fontStyle: "normal",
      }}
    >
      <div className="felx h-screen items-center justify-center w-[1200px] m-auto pt-2 text-center max-sm:w-full">
        {/* HEADER */}
        <div className="flex items-center justify-between w-100">
          <div className="w-2/12 max-sm:hidden">
            <p>BREAKING NEWS FOR ING. INFORMATICA</p>
          </div>

          <div className=" w-8/12 h-[5m] border-x-[1px] border-black max-sm:w-full max-sm:border-x-0">
            <h1 className="text-7xl font-bold text-black pt-2 max-sm:text-5xl">
              INDUCCION A LA INGENIERIA
            </h1>
          </div>

          <div className="w-2/12 max-sm:hidden">
            <p>UDG CUCEI LATEST NEWS</p>
          </div>
        </div>
        {/* DATA */}
        <div className="flex w-100 justify-between px-2 pt-1 border-y-[2px] border-black text-lg font-bold text-black max-sm:flex-col max-sm:text-sm">
          <h3>ABRAHAM EMMANUEL GONZALEZ RINCON</h3>
          <h3>{date.toLocaleDateString()}</h3>
          <h3>MTRA. ENYA LISSET GOMES ROMERO</h3>
        </div>
        {/* TITLE */}
        <div>
          <h2 className="text-7xl font-bold text-black pt-2 italic max-sm:text-3xl">
            WHAT YOU NEED TO KNOW AS A UDG CUCEI STUDENT:
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1 max-sm:gap-1">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              url={item.url}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
