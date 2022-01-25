import { globalCss, styled } from '../config/theme'

export const extraGlobalCss = globalCss({
	'body': {
		backgroundColor: '#8257E5',
	}
})

export const Layout = styled('div', {
	'@lg': {
		width: '100vw',
		height: '100vh',
	}
})

export const Container = styled('div', {
	height: '100vh',
	marginX: 'auto',
	flexDirection: 'column',
	display: 'flex',
	'@md': {
		maxWidth: '70w',
	},
	'@lg': {
    maxWidth: 1120,
		justifyContent: 'center',
  },
})

export const Header = styled('div', {
	display: 'flex',
	'@lg': {
		justifyContent: 'space-between',
    gap: 87,
  },
})

export const Brand = styled('div', {
	flexDirection: 'column',
	display: 'none',
	'@lg': {
		display: 'flex'
  },
})

export const Logo = styled('div', {
	backgroundImage: 'url(/svg/logo.svg)',
	width: 434,
	height: 127,
})

export const Description = styled('div', {
	maxWidth: 340,
	fontSize: 36,
	color: '$textPurpleBase',
	lineHeight: '46px',
	paddingTop: 10,
})

export const Presentation = styled('div', {
	maxWidth: '100%',
	marginX: 16,
	marginTop: 106,
	'& > img': {
		maxWidth: '100%',
	},
	'@md': {
		marginX: 'auto',
  },
	'@lg': {
		marginX: 0,
		marginTop: -56,
  },
})

export const Footer = styled('div', {
	marginTop: 40,
	justifyContent: 'space-between',
	paddingX: 45,
	flexDirection: 'column',
	display: 'flex',
	paddingBottom: 80,
	'@lg': {
		paddingBottom: 0,
		flexDirection: 'row',
		marginTop: 147,
		paddingX: 0
	}
})

export const ButtonGroup = styled('div', {
	gap: 16,
	display: 'flex',
	'@lg': {
		paddingX: 0
	}
})

export const Button = styled('button', {
	backgroundColor: '$green',
	maxWidth: 340,
	fontFamily: 'Archivo',
	fontSize: 20,
	fontWeight: 'bold',
	color: 'white',
	border: 0,
	rounded: 'lg',
	paddingX: 24,
	paddingY: 30,
	cursor: 'pointer',
	transition: 'background 250ms ease-in',
	flexDirection: 'column',
	display: 'flex',
	flex: 1,
	'& > svg': {
		marginBottom: 48,
	},
	'@lg': {
		flex: 'none',
		paddingY: 35,
		paddingX: 64,
		fontSize: 24,
		display: 'block',
		'& > svg': {
			marginBottom: 0,
			marginRight: 29,
			verticalAlign: 'middle',
		}
	},
	'&:hover': {
		backgroundColor: '$greenDarken',
	},
	variants: {
		color: {
			purple: {
				backgroundColor: '$purpleLighten',
				color: 'white',
				'&:hover': {
					backgroundColor: '$purple'
				}
			}
		}
	},
})

export const TotalConnections = styled('div', {
	fontSize: 12,
	color: '$textPurpleBase',
	alignItems: 'center',
	flexGrow: 1,
	gap: 12,
	display: 'flex',
	marginTop: 40,
	'@lg': {
		justifyContent: 'flex-end',
		marginTop: 0,
	}
})

export const Welcome = styled('div', {
	fontSize: 20,
	color: 'white',
	display: 'block',
	marginTop: 90,
	paddingX: 45,
	'@lg': {
		paddingX: 0,
		display: 'none',
	}
})