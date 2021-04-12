import logo from './logo.svg';
import './App.css';
import LocationDetails from './LocationDetails';

const App = (props) => {
  const { location } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
    </div>
  );
};  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

App.propTypes = {
 location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    }).isRequired,
  };

export default App;
