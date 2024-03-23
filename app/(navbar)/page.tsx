import Logo from "./logo";
import Nav from "./nav";
import Buttons from "./a-buttons";
export default function navigations() {
  return (
    <div className="flex justify-between items-center border-b px-10 h-[100px]">
    <Logo />
    <Nav />
    <Buttons />
    </div>
  );
}