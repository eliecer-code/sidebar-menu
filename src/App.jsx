import React, { useState } from 'react'
import MyRoutes from './routers/routes'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { SideBar } from './components/SideBar'
import { Light } from './styles/Theme'
import { Dark } from './styles/Theme'
import { variables } from './styles/variables'

export const ThemeContext = React.createContext(null);
function App() {
  const [theme, setTheme] = useState('light')
  const themStyle = theme === 'light' ? Light : Dark;
  

  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? 'sidebarState active' : 'sidebarState'}>
              <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
              <MyRoutes />
              {/* <button onClick={cambiarTema}>Cambiar</button> */}
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
    color: ${({ theme }) => theme.text};
    display: grid;
    grid-template-columns: 90px auto;
    height: 100vh;
    background-color: ${({ theme }) => theme.bgtotal};
    transition: all .5s ease;
      &.active{
        grid-template-columns: ${variables.sidebarWidth} auto;
      }
`;


export default App