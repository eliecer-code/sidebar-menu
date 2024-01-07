import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../assets/react.svg';
import { variables } from '../styles/variables';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdOutlineAnalytics } from "react-icons/md"
import { AiOutlineHome, AiOutlineCustomerService, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { BsDiagram2 } from 'react-icons/bs'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { ThemeContext } from '../App';


export function SideBar({ sidebarOpen, setSidebarOpen }) {
    const handleClick = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const { theme, setTheme } = useContext(ThemeContext)
    const cambiarTema = () => {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
    }

    return (
        <Container isOpen={sidebarOpen}>
            <button className="sidebar-button" onClick={handleClick}>
                {
                    sidebarOpen ? <MdOutlineArrowBackIosNew /> : <MdOutlineArrowForwardIos />
                }
            </button>
            <section className='Logo-container'>
                <div className="imgContent">
                    <img src={logo} alt="" />
                </div>
                <h2>Sidebar</h2>
            </section>
            {
                arrayFirstLinks.map(({ label, icon, path }) => (
                    <NavLink key={label} to={path}
                        className={({ isActive }) => isActive ? `active` : ``}
                    >
                        <section key={label} className='link-container'>
                            <span className='link-icon'>{icon}</span>
                            <h4 className='link-label'>{label}</h4>
                        </section>
                    </NavLink>
                ))
            }
            <Divider />
            {
                arraySecondLinks.map(({ label, icon, path }) => (
                    <NavLink key={label} to={path}
                        className={({ isActive }) => isActive ? `active` : ``}
                    >
                        <section key={label} className='link-container'>
                            <span className='link-icon'>{icon}</span>
                            <h4 className='link-label'>{label}</h4>
                        </section>
                    </NavLink>
                ))
            }
            <Divider />
            <div className="Themecontent">
                {sidebarOpen && <span className="titletheme">Dark mode</span>}
                <div className="Togglecontent">
                    <div className="grid theme-container">
                        <div className="content">
                            <div className="demo">
                                <label className="switch" istheme={theme}>
                                    <input
                                        istheme={theme}
                                        type="checkbox"
                                        className="theme-swither"
                                        onClick={cambiarTema}
                                    ></input>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

/* ARRAYLINKS */
const arrayFirstLinks = [
    {
        label: 'Home',
        icon: <AiOutlineHome />,
        path: '/'
    },
    {
        label: 'Estadisticas',
        icon: <MdOutlineAnalytics />,
        path: '/estadisticas'
    },
    {
        label: 'Clientes',
        icon: <AiOutlineCustomerService />,
        path: '/clientes'
    },
    {
        label: 'Diagramas',
        icon: <BsDiagram2 />,
        path: '/diagramas'
    },
    {
        label: 'Reportes',
        icon: <HiOutlineDocumentReport />,
        path: '/reportes'
    },
]

const arraySecondLinks = [
    {
        label: 'Ajustes',
        icon: <AiOutlineSetting />,
        path: '/ajustes'
    },
    {
        label: 'Cerrar sesion',
        icon: <AiOutlineLogout />,
        path: '/salir'
    },

]

/* STYLED COMPONENT */
const Container = styled.div`
    background-color: ${(props) => props.theme.bg};
    position: sticky;
    /* transition: all .5s ease; */
    .sidebar-button{
        padding: 6px;
        border: none;
        width: 30px ;
        height: 40px ;
        border-radius: 0% 50% 50% 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: -30px;
        margin-top: ${variables.xxlSpacing};
        cursor: pointer;
        background-color: ${(props) => props.theme.bg};
        transition: all .3s ease;
        color: inherit;

        &:hover{
            background-color: ${(props) => props.theme.bg3};
        }
    }
    .Logo-container{
        display: flex;
        gap: .1em;
        justify-content: center;
        align-items: center;
        padding: ${variables.lgSpacing} 0;

        .imgContent{
            display: flex;
            cursor: pointer;
            img{
                max-width: 100%;
                height: auto;
            }
            transition: all .3s ease;
            transform : ${({ isOpen }) => (!isOpen ? `scale(1.5)` : `scale(0.8)`)};
        }
        h2{
            display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
        }
    }
    a{
        text-decoration:none;
        color: ${(props) => props.theme.text};

        &.active{
            color:${(props) => props.theme.bg4}
        }

    }
    .link-container{
        display: flex;
        align-items: center;
        justify-content: ${({ isOpen }) => isOpen ? `initial` : `center`};
        gap: 10px;
        padding: 8px 0 8px ${({ isOpen }) => isOpen ? variables.xlSpacing : `0`}; 
        transition: all .3s ease-out;

        .link-icon{
            font-size: ${({ isOpen }) => (isOpen ? `1.4em` : `1.5em`)};
        }

        .link-label{
            display: ${({ isOpen }) => (isOpen ? `block` : `none`)}
        }
        &:hover{
            background-color: ${(props) => props.theme.bg3};
        }
    }
    .Themecontent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
    }
    .Togglecontent {
      margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo {
          font-size: 32px;
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            .theme-swither {
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before {
                left: 4px;
                content: "🌑";
                transform: translateX(26px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({ themeUse }) => themeUse === "light" ? variables.lightcheckbox : variables.checkbox};

              transition: 0.4s;
              &::before {
                position: absolute;
                content: "☀️";
                height: 0px;
                width: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round {
                border-radius: 34px;

                &::before {
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
    }
`;

const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.theme.bg3};
  margin: ${variables.lgSpacing} 0 ${variables.lgSpacing} 0;
`