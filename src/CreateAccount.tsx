import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
	<div className="create-account">
		<header className="header">
			<div className="container">
				<nav className="navbar">
					<Link to="/"> <img src="/svg/icons/arrow-left.svg" draggable={false} alt="Voltar à página anterior" /> </Link>
					<img src="/svg/logo.svg" width={46} height={16.21} draggable={false} alt="Logo" />
				</nav>

				<div className="jumbotron">
					<h1>Que incrível que você<br />
						quer dar aulas.</h1>
					<p>O primeiro passo, é preencher esse<br />
						formulário de inscrição.</p>
				</div>
			</div>
		</header>

		<main className="main">
			<div className="card">
				<div className="title">Seus dados</div>
				
				<label htmlFor="name">Nome completo</label>
				<input type="text" className="form-control" />

				<label htmlFor="name">Link da sua foto</label> <span className="text-helper">(comece com //http)</span>
				<input type="text" className="form-control" />

				<label htmlFor="name">Whatsapp</label> <span className="text-helper">(somente números)</span>
				<input type="text" className="form-control" />

				<label htmlFor="name">Biografia</label>
				<textarea className="form-control"></textarea>
			</div>
		</main>
	</div>
)