import { styled } from "../config/theme";
import { Button } from "./button";

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


export const Layout = styled('div', {
	backgroundColor: '$gray',
	overflowY: 'visible'
})

export const Container = styled('div', {
	maxWidth: '70vw',
	marginX: 'auto',
	'@lg': {
		maxWidth: 736,
	},
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

export const InputLabel = styled('div', {
	fontSize: 14,
	color: '$label',
	marginTop: 24,
})

export const Field = styled('input', {
	backgroundColor: '#FAFAFC',
	width: '100%',
	minHeight: 56,
	fontSize: 14,
	color: '#666',
	borderRadius: 8,
	border: '1px solid $linesInWhite',
	padding: '15px 24px',
	marginTop: 8,
	position: 'relative',
	variants: {
		extend: {
			textarea: {
				resize: 'vertical',
			},
			select: {
				justifyContent: 'space-between',
				alignItems: 'center',
				display: 'flex',
				'& svg': {
					width: 18,
					height: 18,
					verticalAlign: 'middle',
				},
			}
		}
	}
})

export const ListBoxButton = styled('div', {
	...Field,
})

export const ListBoxOptions = styled('div', {
	backgroundColor: 'white',
	maxWidth: 180,
	width: '100%',
	maxHeight: 300,
	overflow: 'auto',
	borderRadius: 10,
	boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
	paddingY: 6,
	marginTop: 6,
	position: 'absolute',
	outline: 'none',
	zIndex: 10,
	'& li': {
		fontSize: 14,
		color: '$title',
		listStyle: 'none',
		paddingY: 12,
		paddingX: 15,
		'&[data-selected=true]': {
			fontWeight: 600,
			color: '$primary'
		},
		'&:hover, &[data-selected=true]': {
			backgroundColor: 'rgba(0,0,0,0.025)'
		}
	},
	'& svg': {
		width: 18,
		height: 18,
		verticalAlign: 'middle',
		marginRight: 8,
	}
})

export const Box = styled('div', {
	backgroundColor: 'white',
	border: '1px solid $linesInWhite',
	borderRadius: 10,
	marginY: 32,
})

export const BoxBody = styled('div', {
	padding: '32px',
	'& p': {
		fontSize: 14,
		color: '$textBase',
		'@sm': {
			fontSize: 16
		}
	}
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