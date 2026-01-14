import { Link } from "react-router-dom";

export default function Home(){
  return (
    <>
    <main class="banner">
        <div class="container">
            <h1>Step Up Your<span id="style"> Style</span></h1>
            <p class="para">Explore the latest drops from Nike, Adidas, Vans, and Converse — designed for comfort and
                performance.</p>
            <button class="Bshop">Shop Now</button>
        </div>
    </main>

    <div class="cards">
        <div class="companycard">
            <a><Link to='/men/skechers' onClick={() => window.scrollTo(0, 0)}><img src="/pictures/NeoTrek.jpg"/></Link></a>
        </div>
        <div class="companycard">
           <Link to='/men/sneakers' onClick={() => window.scrollTo(0, 0)}><img src="/pictures/PeakFlex.jpg"/></Link>
        </div>
        <div class="companycard">
           <Link to='/men/formal' onClick={() => window.scrollTo(0, 0)}><img src="/pictures/VeloSole.jpg"/></Link>
        </div>
        <div class="companycard">
          <Link to='/men/sneakers' onClick={() => window.scrollTo(0, 0)}><img src="/pictures/Flexon.jpg"/></Link>
        </div>
        <div class="companycard">
          <Link to='/women/formal' onClick={() => window.scrollTo(0, 0)}><img src="/pictures/PrimeWalk.jpg"/></Link>
        </div>
        <div class="companycard">
          <Link to='/men/formal' onClick={() => window.scrollTo(0, 0)}><img src="/pictures/CoreStep.jpg"/></Link>
        </div>
    </div>
    <footer>
        &copy; <span id="year"></span> SneakerShop — Designed by NxStep
    </footer>
    </>
  );
};