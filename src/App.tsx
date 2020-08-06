import React from 'react'
import { Link } from 'react-router-dom'
import './sass/app.scss'

function App() {
    return (
		<div className="landing">
			<div className="presentation">
				<main className="content">
					<div className="brand">
						<img src="./svg/logo.svg" width="434" height="127" draggable={false} alt="Proffy" />
						<h2>Sua plataforma de <br/>  estudos online.</h2>
					</div>

					<img src="./svg/presentation.svg" draggable={false} alt="Ilustração Proffy" />
				</main>

				<footer className="footer">
					<div className="options">
						<Link to="/create-account" className="button">
							<img src="./svg/icons/book.svg" draggable={false} alt="Estudar" />
							Estudar
						</Link>

						<Link to="/dashboard" className="button button-green">
							<img src="./svg/icons/school.svg" draggable={false} alt="Dar aulas" />
							Dar aulas
						</Link>
					</div>

					<div className="total-connections">
						<span>Total de 285 conexões já realizadas</span>
						<img src="./svg/icons/heart.svg" draggable={false} alt="Total de conexões" />
					</div>
				</footer>
			</div>
		</div>
    );
}

export default App;
