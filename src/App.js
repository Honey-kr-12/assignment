
import FooterContainer from "./components/Footer/FooterContainer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";


function App({data}) {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Home data={data} />  
      < FooterContainer />
    </div>
  );
}

export default App;
