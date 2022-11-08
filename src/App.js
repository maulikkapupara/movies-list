import "./App.css";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

const App = () => {
  return (
    <>
      <h1 className="heading_style">Best movies list</h1>

      {Sdata.map((val) => {
        return (
          <Card
            key={val.key}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default App;
