import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Clientes } from '../pages/Clientes'
import { Estadisticas } from '../pages/Estadisticas'
import { Diagramas } from '../pages/Diagramas'
import { Ajustes } from '../pages/Ajustes'
import { Reportes } from '../pages/Reportes'

function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/clientes' element={<Clientes />} />
            <Route path='/estadisticas' element={<Estadisticas />} />
            <Route path='/diagramas' element={<Diagramas />} />
            <Route path='/reportes' element={<Reportes />} />
            <Route path='/ajustes' element={<Ajustes />} />
        </Routes>
    )
}

export default MyRoutes;