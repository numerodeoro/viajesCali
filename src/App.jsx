import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ItemListContainer />
              </>
            }
          />
          <Route path="/categoria/:category" element={<ItemListContainer />} />
          <Route path="/servicio/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<p className="state">Página no encontrada</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
