import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
