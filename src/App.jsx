import RouteList from "../src/components/RouteList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Header />
        <RouteList />
        <Footer />
      </div>
    </>
  );
}

export default App;
