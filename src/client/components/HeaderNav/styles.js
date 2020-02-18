import styled from 'react-emotion';

export const HeaderFixed = styled.header`
	background-color: #20232a;
	color: #ffffff;
	position: fixed;
	z-index: 1;
	width: 100%;
	top: 0;
	left: 0;
`;

export const NavContainer = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: 780px){
    width: 90%;
	}

	@media (min-width: 1340px) {
    max-width: 1260px;
	}
`;

export const NavFlexWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 60px;
`;

export const NavLogo = styled.a`
	display: flex;
	margin-right: 10px;
	height: 100%;
	width: 200px;
	align-items: center;
	color: #61dafb;
	text-decoration: none;

	> span {
    margin-left: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
	}
`;

export const NavLink = styled.a`
	color: #fff;
	text-decoration: none;

	&:hover{
		color: #61dafb;
	}
`;
