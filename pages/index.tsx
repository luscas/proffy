import type { NextPage } from 'next'
import Head from 'next/head'

import {
	extraGlobalCss,
	Layout,
	Container,
	Header,
	Brand,
	Logo,
	Description,
	Presentation,
	Footer,
	ButtonGroup,
	Button,
	TotalConnections,
	Welcome
} from '../styles/landing'

const Home: NextPage = () => {
	extraGlobalCss();

	return (
		<Layout>
			<Head>
				<title>Landing - Proffy</title>
			</Head>

			<Container>
				<Header>
					<Brand>
						<Logo />
						<Description>Sua plataforma de estudos online.</Description>
					</Brand>

					<Presentation>
						<img src={'/svg/presentation.svg'} alt="Presentation" />
					</Presentation>
				</Header>

				<Welcome>
					Seja bem-indo. <br />
					<b>O que deseja fazer?</b>
				</Welcome>

				<Footer>
					<ButtonGroup>
							<Button color={'purple'}>
								<svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5 6H14C15.5913 6 17.1174 6.65555 18.2426 7.82245C19.3679 8.98934 20 10.572 20 12.2222V34C20 32.7623 19.5259 31.5753 18.682 30.7002C17.8381 29.825 16.6935 29.3333 15.5 29.3333H5V6Z" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
									<path d="M35 6H26C24.4087 6 22.8826 6.65555 21.7574 7.82245C20.6321 8.98934 20 10.572 20 12.2222V34C20 32.7623 20.4741 31.5753 21.318 30.7002C22.1619 29.825 23.3065 29.3333 24.5 29.3333H35V6Z" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
								</svg>

								Estudar
							</Button>

							<Button>
								<svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_160_2659)">
										<path d="M19.4444 25.04V32.52M19.4444 25.04H13.8889M19.4444 25.04H25M13.8889 25.04L7.22222 34M13.8889 25.04H9C6.79086 25.04 5 23.2491 5 21.04V10C5 7.79087 6.79086 6 9 6H31C33.2091 6 35 7.79086 35 10V21.04C35 23.2491 33.2091 25.04 31 25.04H25M25 25.04L32.7778 34" stroke="white" strokeWidth={3} strokeLinecap="round" />
									</g>
									<defs>
										<clipPath id="clip0_160_2659">
											<rect width={40} height={40} rx={8} fill="white" />
										</clipPath>
									</defs>
								</svg>

								Dar aulas
							</Button>
						</ButtonGroup>

						<TotalConnections>
								Total de 285 conexões já realizadas
								<svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14 3.69254C14 1.65319 12.2708 0 10.1382 0C8.84344 0 7.70098 0.611057 7 1.54504C6.29902 0.611057 5.15656 0 3.86223 0C1.72916 0 0 1.65281 0 3.69254C0 3.98142 0.0383562 4.26131 0.10411 4.5311C0.640313 7.71661 4.34481 11.0772 7 12C9.6548 11.0772 13.3597 7.71661 13.8951 4.53148C13.9616 4.26169 14 3.98179 14 3.69254Z" fill="#9871F5" />
								</svg>
							</TotalConnections>
					</Footer>
			</Container>
		</Layout>
	)
}

export default Home;