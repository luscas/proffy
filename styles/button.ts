import { styled } from "../config/theme";

export const Button = styled('button', {
	backgroundColor: '$green',
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
	'&:hover': {
		backgroundColor: '$greenDarken',
	},
	'& svg': {
		marginRight: 12,
	},
	variants: {
		type: {
			link: {
				padding: 0,
			}
		},
		color: {
			purple: {
				backgroundColor: '$purpleLighten',
				color: 'white',
				'&:hover': {
					backgroundColor: '$purple'
				},
			}
		},
		size: {
			md: {
				fontSize: 16,
				padding: '15px 40px',
			}
		}
	},
	compoundVariants: [{
		color: 'purple',
		type: 'link',
		css: {
			background: 'none',
			color: '$primary',
			padding: 0,
			'&:hover': {
				background: 'none',
				color: '$purpleDarken'
			},
		}
	}]
})
