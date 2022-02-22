import { styled } from '../config/theme'
import { InputLabel } from './global'

export const Main = styled('div', {
	marginTop: -64,
	paddingBottom: 60,
	marginX: 16,
	'@md': {
		marginX: 'auto',
		maxWidth: 736,
	}
})

export const MainHeader = styled('div', {
	position: 'relative',
	top: -10,
	gap: 16,
	display: 'grid',
	[`& div:first-of-type ${InputLabel}`]: {
		color: '$textPurpleBase',
	},
	[`& ${InputLabel}`]: {
		color: '$textBase',
	},
	'@md': {
		gridTemplateColumns: 'repeat(3, 1fr)',
		[`& ${InputLabel}`]: {
			color: '$textPurpleBase'
		}
	},
})

export const TeacherHeader = styled('div', {
	padding: '32px 32px 0 32px',
	gap: 24,
	alignItems: 'center',
	display: 'flex'
})

export const TeacherAvatar = styled('img', {
	width: 50,
	height: 50,
	borderRadius: 80,
	objectFill: 'cover',
	'@md': {
		width: 80,
		height: 80,
	}
})

export const TeacherInformations = styled('div', {
	'& h1': {
		fontFamily: 'Archivo',
		fontSize: 18,
		fontWeight: 'bold',
		color: '$title',
		marginBottom: 4,
		'@md': {
			fontSize: 24,
		}
	},
	'& span': {
		fontSize: 14,
		color: '$textBase',
		'@md': {
			fontSize: 16,
		}
	}
})

export const Price = styled('div', {
	fontSize: 12,
	color: '$complements',
	justifyContent: 'space-between',
	alignItems: 'center',
	display: 'flex',
	'& span': {
		fontFamily: 'Archivo',
		fontSize: 16,
		fontWeight: 600,
		color: '$purple',
		marginLeft: 16,
	},
	'@sm': {
		fontSize: 14,
		'& span': {
			fontSize: 20,
		},
	},
	'@lg': {
		justifyContent: 'flex-start',
	}
})