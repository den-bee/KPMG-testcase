import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ChapterOne from "./pages/ChapterOne";
import ChapterThree from "./pages/ChapterThree";
import ChapterTwo from "./pages/ChapterTwo";
import ConclusionPage from "./pages/ConclusionPage";
import ContactPage from "./pages/ContactPage";
import MetricDataPage from "./pages/MetricDataPage";
import QuestionDataPage from "./pages/QuestionDataPage";

function App() {
  return (
    <div className="h-screen bg-white">
      <Header />
      <main>
        <ChapterOne />
        <ChapterTwo />
        <MetricDataPage />
        <ChapterThree />
        <CarouselComponent />
        <QuestionDataPage />
        <ConclusionPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
