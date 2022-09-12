import { Routes, Route } from 'react-router-dom'
import Historia from './screens/Historia'
import { Hoteis } from './screens/Hotel'
import { Hotel } from './screens/HotelDetail'
import Inicio from './screens/Inicio'
import Restaurantes from './screens/Restaurantes'
import Contato from './screens/Contato'
import { Agenda } from './screens/Agenda'
import { Turismo } from './screens/Turismo'
import { TurismoDetail } from './screens/TurismoDetail'
import LazerEsporte from './screens/LazerEsporte'
import Map from './screens/Map'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/restaurantes" element={<Restaurantes />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/turismo" element={<Turismo />} />
      <Route path="/turismo/detalhe/:id" element={<TurismoDetail />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/hoteis" element={<Hoteis />} />
      <Route path="/hotel/detalhe/:id" element={<Hotel />} />
      <Route path="/lazer-esporte" element={<LazerEsporte />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  )
}
