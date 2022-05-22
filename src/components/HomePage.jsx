import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Menu from "./Menu";
import Navigation from "./Navigation";

function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="flex">
        <Card />
        <Menu />
      </div>
    </div>
  );
}

export default HomePage;
