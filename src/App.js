import ColorGenerator from "./components/colorGenerator";
import "./styles/App.css";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" component="div" gutterBottom>
          Color Swatch Generator
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Get inspired and search for colors with images
        </Typography>
        <ColorGenerator />
      </header>
    </div>
  );
}

export default App;
