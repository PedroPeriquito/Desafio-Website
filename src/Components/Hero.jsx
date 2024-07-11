import '../Styles/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
	return (
		<section className='hero'>
			<div className='hero-content'>
				<h1 className='hero-title'>Lorem ipsum dolor sit</h1>
				<p className='hero-text'>Lorem ipsum dolor sit amet consectetur.</p>
			</div>
			<Link to='/cozinha' className='hero-footer'>
				<p>
					<i className='fa-solid fa-arrow-down'></i>Lorem ipsum dolor sit.
				</p>
			</Link>
		</section>
	);
}
export default Hero;
