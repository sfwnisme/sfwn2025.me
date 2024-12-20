import { useEffect } from "react";
import Nav from "./components/Nav";
import About from "./pages/website/home/About";
import Contact from "./pages/website/home/Contact";
import Footer from "./pages/website/home/Footer";
import Intro from "./pages/website/home/Intro";
import FrontendSkills from "./pages/website/home/FrontendSkills";
import AOS from "aos";

import Loader from "./components/Loader";
import MarketingSkills from "./pages/website/home/MarketingSkills";
import Projects from "./pages/website/home/Projects";

export default function App() {
	useEffect(() => {
		AOS.init({
			offset: 0,
			duration: 200,
			easing: "ease-in-sine",
			delay: 0,
		});
	}, []);
	return (
		<div className="mx-auto">
			<Nav />
			<div className="mx-auto">
				<Intro />
				<Projects />
				<About />
				<Contact />
				{/* <Work /> */}
				<FrontendSkills />
				<MarketingSkills />
				<Footer />
				<Loader />
			</div>
		</div>
	);
}
