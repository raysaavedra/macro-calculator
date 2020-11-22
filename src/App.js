import Grid from "@material-ui/core/Grid";

import "./App.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Home />
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
