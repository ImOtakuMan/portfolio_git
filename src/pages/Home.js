import "./Pages.css";
import PageTransition from "../components/PageTransition";

const Home = () => {
    return (
        <PageTransition>
      <div>
        <h1>Strona główna</h1>
        <p>Witaj na stronie domowej!</p>
      </div>
        </PageTransition>
    );
  };
  
  export default Home;