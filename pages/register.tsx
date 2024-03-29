import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import {
	Layout,
	Container,
	Header,
	Navbar,
	Jumbotron,
	Title,
	Description,
	BoxFooter,
	InputLabel,
	Field,
	Important,
	Box,
	BoxTitle,
	BoxBody
} from '../styles/global'

import { Main, AvailableTimes, Badge } from '../styles/register'
import { Button } from '../styles/button'

import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { IAvailableTime } from '../types/register'

const Register: NextPage = () => {
	const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']

	const currencyMask = createNumberMask({
		prefix: 'R$ ',
		suffix: '',
		includeThousandsSeparator: true,
		thousandsSeparatorSymbol: '.',
		allowDecimal: true,
		decimalSymbol: ',',
		decimalLimit: 2,
		integerLimit: 7,
		allowNegative: false,
		allowLeadingZeroes: false,
	})

	const [availableTimes, setAvailableTimes] = useState<IAvailableTime[]>([{
		day: 'Sexta-feira',
		initial: '07:00',
		end: '12:30',
	}])

	const addAvailableTime = () => {
		setAvailableTimes([...availableTimes, {
			day: 'Segunda-feira',
			initial: '07:00',
			end: '12:30',
		}])
	}

	const removeAvailableTime = (key: number) => {
		availableTimes.splice(key, 1)
		setAvailableTimes([...availableTimes])
	}

	return (
		<Layout>
			<Head>
				<title>Register - Proffy</title>
			</Head>

			<Header>
				<Navbar>
					<Link href={'/'}>
						<a>
							<svg width="49" height="13" viewBox="0 0 49 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2 6.31042L48 6.31042" stroke="#BDA5F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M6.00098 11.3755L0.999977 6.31044L6.00098 1.24536" stroke="#BDA5F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</a>
					</Link>

					<svg width="46" height="17" viewBox="0 0 46 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.71176 1.24609H2.20497C0.739561 1.24609 0 2.10244 0 3.79864V12.8767C0 13.0991 0.0991996 13.236 0.312922 13.236H1.97754C2.17675 13.236 2.30498 13.0991 2.30498 12.8767V12.532C2.30498 11.6912 2.59935 11.233 3.33085 11.1446H7.71176C9.31912 11.1446 10.045 10.3057 10.045 8.47264V3.91806C10.045 2.08497 9.31912 1.24609 7.71176 1.24609ZM7.74241 7.70173C7.74241 8.69595 7.5553 8.90081 6.57298 8.90081H4.23978C3.25826 8.90081 2.63161 9.295 2.30417 10.0659V4.46663C2.30417 3.69572 2.46063 3.48989 3.24294 3.48989H6.57298C7.5553 3.48989 7.74241 3.69572 7.74241 4.68897V7.70173Z" fill="white"/>
						<path d="M15.3234 6.26486C14.0572 6.26486 13.5161 7.03577 13.5161 8.33777V12.9108C13.5161 13.1166 13.4306 13.236 13.2314 13.236H11.7232C11.524 13.236 11.4248 13.1166 11.4248 12.9108V4.55216C11.4248 4.34632 11.524 4.22593 11.7232 4.22593H12.9894C13.1749 4.22593 13.2741 4.34632 13.2741 4.55216V5.90076C13.5161 4.78809 14.2137 4.22205 15.4517 4.22205H15.9638C16.1485 4.22205 16.2477 4.34244 16.2477 4.54827V5.9396C16.2477 6.16194 16.1485 6.26486 15.9638 6.26486H15.3234Z" fill="white"/>
						<path d="M25.1404 10.7863C25.1404 12.4825 24.5145 13.236 23.0209 13.236H19.3215C17.8415 13.236 17.2012 12.4825 17.2012 10.7863V6.67741C17.2012 4.98219 17.8415 4.22778 19.3215 4.22778H23.0209C24.5145 4.22778 25.1404 4.98219 25.1404 6.67741V10.7863ZM23.0491 7.32695C23.0491 6.43565 22.9072 6.26477 22.0249 6.26477H20.3312C19.4352 6.26477 19.2924 6.43565 19.2924 7.32695V10.1358C19.2924 11.0261 19.4352 11.198 20.3312 11.198H22.0249C22.9072 11.198 23.0491 11.0261 23.0491 10.1358V7.32695Z" fill="white"/>
						<path d="M27.2461 6.26481H26.534C26.3485 6.26481 26.2493 6.1619 26.2493 5.93955V4.55211C26.2493 4.34628 26.3485 4.22588 26.534 4.22588H27.2453V3.11321C27.2461 1.41702 27.9857 0.560669 29.4511 0.560669H31.2012C31.4004 0.560669 31.4859 0.681063 31.4859 0.885926V2.27337C31.4859 2.49668 31.4004 2.59863 31.2012 2.59863H30.2769C29.4938 2.59863 29.3373 2.80446 29.3373 3.57537V4.22588H31.2012C31.4004 4.22588 31.4859 4.34628 31.4859 4.55211V5.93955C31.4859 6.1619 31.4004 6.26481 31.2012 6.26481H29.3373V12.9107C29.3373 13.1166 29.2381 13.236 29.0389 13.236H27.5308C27.3316 13.236 27.2461 13.1166 27.2461 12.9107V6.26481Z" fill="white"/>
						<path d="M33.0511 6.26481H32.3405C32.1558 6.26481 32.0566 6.1619 32.0566 5.93955V4.55211C32.0566 4.34628 32.1558 4.22588 32.3405 4.22588H33.0527V3.11321C33.0511 1.41702 33.7922 0.560669 35.256 0.560669H37.0061C37.2053 0.560669 37.2908 0.681063 37.2908 0.885926V2.27337C37.2908 2.49668 37.2053 2.59863 37.0061 2.59863H36.0811C35.2988 2.59863 35.1423 2.80446 35.1423 3.57537V4.22588H37.0061C37.2053 4.22588 37.2908 4.34628 37.2908 4.55211V5.93955C37.2908 6.1619 37.2053 6.26481 37.0061 6.26481H35.1423V12.9107C35.1423 13.1166 35.0423 13.236 34.8431 13.236H33.3349C33.1357 13.236 33.0511 13.1166 33.0511 12.9107V6.26481Z" fill="white"/>
						<path d="M43.6502 16.7303H40.5484C39.1547 16.7303 38.5571 16.0798 38.5571 14.469V14.2981C38.553 14.2522 38.5575 14.2057 38.5703 14.1621C38.5832 14.1185 38.604 14.079 38.6313 14.0464C38.6585 14.0139 38.6916 13.9891 38.7279 13.974C38.7642 13.959 38.8028 13.9539 38.841 13.9593H40.2927C40.4919 13.9593 40.5911 14.0797 40.5911 14.302V14.3875C40.5911 14.7302 40.7484 14.8671 41.0613 14.8671H42.8541C43.7074 14.8671 43.9211 14.6108 43.9211 13.737V11.0349C43.5937 11.8058 42.9679 12.2 41.9855 12.2H40.5338C39.0539 12.2 38.399 11.4466 38.399 9.75036V4.55207C38.3971 4.50718 38.4032 4.46232 38.4171 4.42057C38.4309 4.37881 38.452 4.34115 38.4791 4.31016C38.5061 4.27917 38.5384 4.25559 38.5737 4.24104C38.6091 4.22648 38.6466 4.2213 38.6837 4.22584H40.2064C40.3911 4.22584 40.4911 4.34623 40.4911 4.55207V9.1047C40.4911 9.99503 40.6476 10.1669 41.5299 10.1669H42.6114C43.5502 10.1669 43.9203 9.70376 43.9203 8.76197V4.55207C43.9203 4.34623 44.0195 4.22584 44.205 4.22584H45.7285C45.7649 4.2216 45.8017 4.22714 45.8361 4.24205C45.8706 4.25696 45.9018 4.28088 45.9277 4.31208C45.9535 4.34327 45.9733 4.38098 45.9855 4.42247C45.9978 4.46397 46.0023 4.50823 45.9987 4.55207V14.0069C45.9979 15.804 45.2011 16.7303 43.6502 16.7303Z" fill="white"/>
					</svg>
				</Navbar>

				<Container>
					<Jumbotron>
						<Title>
							Que incrível que você quer dar aulas.
						</Title>

						<Description>
							O primeiro passo, é preencher esse formulário de inscrição.
						</Description>
					</Jumbotron>
				</Container>
			</Header>

			<Main>
				<Box>
					<BoxBody>
						<BoxTitle>Seus dados</BoxTitle>

						<InputLabel>Nome completo</InputLabel>
						<Field required />

						<InputLabel>Link da sua foto <Badge>(comece com http://)</Badge></InputLabel>
						<Field type={'url'} required />

						<InputLabel>Whatsapp <Badge>(somente números)</Badge></InputLabel>
						<Field
							inputMode={'tel'}
							as={MaskedInput}
							mask={['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
							required
						/>

						<InputLabel>Biografia</InputLabel>
						<Field as={'textarea'} extend={'textarea'} rows={6} required />

						<BoxTitle css={{ marginTop: 64 }}>Sobre a aula</BoxTitle>
						<InputLabel>Matéria</InputLabel>
						<Field />

						<InputLabel>Custo da sua hora por aula <Badge>(em R$)</Badge></InputLabel>
						<Field as={MaskedInput} inputMode={'text'} mask={currencyMask}  />

						<BoxTitle css={{ marginTop: 64 }}>
							Horários disponíveis
							<Button type='link' color='purple' size='md' onClick={() => addAvailableTime()}>
								<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3.96186 5.96869H0V4.05088H3.96186V0H6.01695V4.05088H10V5.96869H6.01695V10H3.96186V5.96869Z" fill="currentColor"/>
								</svg>
								Novo horário
							</Button>
						</BoxTitle>

						{availableTimes.map((item, key) => (<AvailableTimes key={key} with={key != 0 ? 'dismiss' : undefined}>
							<div>
								<InputLabel>Dia da semana</InputLabel>
								<Field as={'select'}>
									{days.map((day, key) => <option value={day} key={key} selected={item.day == day}>{day}</option>)}
								</Field>
							</div>

							<div>
								<InputLabel>Das</InputLabel>
								<Field type={'time'} defaultValue={item.initial} />
							</div>

							<div>
								<InputLabel>Até</InputLabel>
								<Field type={'time'} defaultValue={item.end} />
							</div>

							{key != 0 && (<Button type='link' color='purple' size='md' onClick={() => removeAvailableTime((key))}>
								<svg width="10" height="10" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="10" height="2" fill="currentColor"/>
								</svg>
								Remover
							</Button>)}
						</AvailableTimes>))}
					</BoxBody>

					<BoxFooter>
						<Important>
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16 16V10" stroke="#8257E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M16 21.3333L16 21.3333" stroke="#8257E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M4 19.1747V12.8253C4 10.6893 5.136 8.71465 6.98133 7.63998L12.9813 4.14798C14.8467 3.06265 17.152 3.06265 19.0173 4.14798L25.0173 7.63998C26.864 8.71465 28 10.6893 28 12.8253V19.1747C28 21.3107 26.864 23.2853 25.0187 24.36L19.0187 27.852C17.1533 28.9373 14.848 28.9373 12.9827 27.852L6.98267 24.36C5.136 23.2853 4 21.3107 4 19.1747V19.1747Z" stroke="#8257E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>

							Importante!<br/>
							Preencha todos os dados
						</Important>

						<Link href={'/teachers'} passHref>
							<Button size='md'>Salvar cadastro</Button>
						</Link>
					</BoxFooter>
				</Box>
			</Main>
		</Layout>
	)
}

export default Register;