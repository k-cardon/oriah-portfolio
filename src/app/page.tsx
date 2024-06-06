import Header from '@/app/components/Header';
import Introduction from '@/app/components/Introduction';
import Skills from '@/app/components/Skills';
import Portfolio from '@/app/components/Portfolio';
import Contact from '@/app/components/Contact';

const Home = () => {
	return (
		<div>
			<Header />
			<main>
				<Introduction />
				<Skills />
				<Portfolio />
				<Contact />
			</main>
		</div>
	);
};

export default Home;
