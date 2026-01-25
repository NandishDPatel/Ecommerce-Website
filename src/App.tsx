import { BrowserRouter } from "react-router-dom";
import Header from "./components/organisms/Header";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/organisms/Footer";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <AppRoutes />
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
