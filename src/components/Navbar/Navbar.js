import React from 'react';
import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';
import {DiCssdeck} from "react-icons/di";
import { Bio } from '../../data/constants';

const Nav = styled.nav`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 11;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
  `;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    `;

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0, 60px;
    cursor: pointer;
    display: flex;
    justify-self: flex-start;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px) {
        padding: 0 0px;
    }    
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({theme}) => theme.text_primary};
    }
`;

const NavItems = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({theme}) => theme.primary};
    }
`;

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;


const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    padding: 0, 6px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;



const Navbar = () => {
    
  return (
    <Nav>
        <NavContainer>
            <NavLogo to='/'>
                <a
            style={{ 
                display: "flex",
                alignItems: 'center',
                color: "white",
                marginBottom: "20",
                cursor: "pointer",
             }}
            >
                <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
            </a></NavLogo>
            <MobileIcon></MobileIcon>
            <NavItems>
                <NavLink href='#about'>About</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#experience'>Experience</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#education'>Education</NavLink>
                {/* <NavLink href='#contact'>Contact</NavLink> */}
            </NavItems>
            <ButtonContainer>
                <GitHubButton href={Bio.github}>Github Profile</GitHubButton>
            </ButtonContainer>
        </NavContainer>
    </Nav>
  )
}

export default Navbar