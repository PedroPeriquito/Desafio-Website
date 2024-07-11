import '../Styles/Cozinha.css';
import img1 from '../assets/Hero_food.jpg';
function Cozinha() {
	return (
		<section className='cozinha'>
			<div className='cz-hero'>
				<div className='cz-hero-content'>
					<h1 className='cz-hero-title'>Lorem ipsum dolor sit</h1>
					<p className='cz-hero-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, ipsam.</p>
				</div>
			</div>
			<div className='cz-body'>
				<div className='cz-body-left'>
					<h2>Cortes e confeção</h2>
					<ul className='cz-body-left-items'>
						<li>Assar</li>
						<li>Cozer</li>
						<li>Fritar</li>
						<li>Guisar</li>
						<li>Grelhar</li>
					</ul>
				</div>
				<div className='cz-body-mid'>
					<ul className='cz-body-mid-items'>
						<li>Cachaço</li>
						<li>Acém Redondo</li>
						<li>Vazia e Lombo</li>
						<li>Picanha</li>
						<li>Aba</li>
					</ul>
				</div>
				<div className='cz-body-right'>
					<ul className='cz-body-right-items'>
						<li className='highlight'>Vaca</li>
						<li>Porco</li>
						<li>Borrego</li>
						<li>Frango</li>
						<li>Perú</li>
					</ul>
					<div className='cz-body-right-cards'>
						<div className='cz-body-right-card'>
							<img src={img1} alt='' />
							<h3>Acem</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum omnis accusantium corporis ea ut voluptatibus quibusdam, odio veritatis saepe?</p>
						</div>
						<div className='cz-body-right-card-2'>
							<img src={img1} alt='' />
							<h3>Acem</h3>
						</div>
					</div>
					<div className='cz-body-right-buttons'>
						<button className='button'>
							<i className='fa-solid fa-less-than'></i>
						</button>
						<button className='button'>
							<i className='fa-solid fa-greater-than'></i>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cozinha;
