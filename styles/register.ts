import { styled } from '../config/theme'
import { Button } from './button'

export const Layout = styled('div', {
	backgroundColor: '$gray',
})

export const Container = styled('div', {
	maxWidth: '70vw',
	marginX: 'auto',
	'@lg': {
		maxWidth: 736,
	},
})

export const Header = styled('div', {
	backgroundColor: '$primary',
	padding: '20px 0 128px 0',
})

export const Navbar = styled('div', {
	paddingX: 32,
	marginX: 'auto',
	justifyContent: 'space-between',
	display: 'flex',
	'@lg': {
		maxWidth: 1120,
	}
})

export const Jumbotron = styled('div', {
	maxWidth: '366px',
	paddingTop: 30,
})

export const Title = styled('h1', {
	fontFamily: 'Archivo',
	fontSize: 36,
	fontWeight: 'bold',
	color: 'white',
})

export const Description = styled('p', {
	fontSize: 16,
	color: '$textPurpleBase',
	lineHeight: '26px',
	paddingTop: 24
})

export const Main = styled('div', {
	marginTop: -64,
	paddingBottom: 60,
	marginX: 16,
	'@md': {
		marginX: 'auto',
		maxWidth: 736,
	}
})

export const Box = styled('div', {
	backgroundColor: 'white',
	border: '1px solid $linesInWhite',
	borderRadius: 10,
})

export const BoxBody = styled('div', {
	padding: '30px',
})

export const BoxTitle = styled('h1', {
	fontFamily: 'Archivo',
	fontSize: 24,
	fontWeight: 600,
	color: '$title',
	paddingBottom: 16,
	borderBottom: '1px solid $linesInWhite',
	flexDirection: 'column',
	gap: 16,
	display: 'flex',
	[`& ${Button}`]: {
		textAlign: 'left',
	},
	'@sm': {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})

export const InputLabel = styled('div', {
	fontSize: 14,
	color: '$label',
	marginTop: 24,
})

export const Badge = styled('span', {
	fontSize: 12,
	color: '#C1BCCC',
	fontStyle: 'italic'
})

export const Field = styled('input', {
	backgroundColor: '#FAFAFC',
	width: '100%',
	fontSize: 14,
	color: '#666',
	borderRadius: 8,
	border: '1px solid $linesInWhite',
	padding: '15px 24px',
	marginTop: 8,
	variants: {
		extend: {
			textarea: {
				resize: 'vertical',
			}
		}
	}
})

export const AvailableTimes = styled('div', {
	gridTemplateColumns: '1fr',
	gap: 16,
	display: 'grid',
	'@sm': {
		gridTemplateColumns: '1fr 0.5fr 0.5fr',
	},
	[`& ${Button}`]: {
		alignSelf: 'flex-end',
		padding: '18px 0'
	},
	variants: {
		with: {
			dismiss: {
				'@sm': {
					alignItems: 'center',
					gridTemplateColumns: '1fr 0.5fr 0.5fr 0.5fr',
				},
			}
		}
	}
})

export const BoxFooter = styled('div', {
	backgroundColor: '#FAFAFC',
	borderRadius: '0 0 8px 8px',
	borderTop: '1px solid $linesInWhite',
	padding: '30px',
	gap: 40,
	flexDirection: 'column',
	display: 'flex',
	'@lg': {
		justifyContent: 'space-between',
		flexDirection: 'row',
	}
})

export const Important = styled('div', {
	fontSize: 12,
	fontWeight: 400,
	lineHeight: 1.5,
	color: '$textLight',
	alignItems: 'center',
	display: 'flex',
	'& svg': {
		marginRight: 16
	}
})