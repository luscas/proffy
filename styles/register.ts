import { styled } from '../config/theme'
import { Button } from './button'

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

export const Badge = styled('span', {
	fontSize: 12,
	color: '#C1BCCC',
	fontStyle: 'italic'
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