import '../css/index.css';
import '../css/home.css';
import Search from '../components/Search';
import Intro from '../components/Intro';

function Home() {
  return (
    <div className="About">
        <div className="container">
        <div className="row justify-content-center">
          {/* Column for IntroSection */}
          <div className="col-12 col-md-8">
            <Intro />
          </div>

          {/* Column for CenteredSearchBar */}
          <div className="col-12 col-md-8 mt-3">
            <Search />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;