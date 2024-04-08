import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import "../styles/shared.css";
import Introduction from "./Introduction";
import Experience from "./Experience";

function App() {
  return (
    <div className="row justify-content-center gap-0">
      <div className="app-body my-3 my-sm-4 my-md-5 px-3 px-sm-4 px-md-5 col-11 col-sm-9 col-md-8 col-lg-7">
        <Introduction />
        <Experience />
      </div>
    </div>
  );
}

export default App;
