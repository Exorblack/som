import Navigations from "./(navbar)/page";
import Firstsection from "./(first-section)/page";
import Carousel from "./(curs)/page";
import Featuers from "./(featuers)/page";
import Price from "./(pricing)/page";
import Start from "./(contact)/page";
import Footer from "./(footer)/page";

export default function Home() {
  return (
    <div>
    <Navigations/>
    <Firstsection/>
    <Carousel />
    <Featuers/>
    <Price/>
    <Start/>
    <Footer/>
    </div>
  );
}

