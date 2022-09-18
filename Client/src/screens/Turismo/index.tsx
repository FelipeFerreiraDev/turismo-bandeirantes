import Toolbar from '../../components/Toolbar'
import Card from '../../components/Card'
import './style.css'
import { optionTurismo } from './optionData'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Loading } from '../../components/Loading'

interface turismoProps {
  id: number
  nome: string
  descricao: string
  logo: string
  telefone: string
  latitude: string
  longitude: string
  categoria: string
}

export function Turismo() {
  const [turismo, setTurismo] = useState<turismoProps[]>([])

  const [loading, setLoading] = useState(true)

  const [religioso, setReligioso] = useState("Religioso")

  const [cultural, setCultural] = useState("Cultural")

  const [ecologico, setEcologico] = useState("Ecologico")

  useEffect(() => {
    api.get('/atracoes').then((response) => {
      setTurismo(response.data.atracoes)
      setLoading(false)
    })
  }, [])

  const atracoesReligioso = turismo.filter(
    (turismo) => turismo.categoria === 'Religioso',
  )

  if ("Religioso") {
    return (
      <section className="turismo">
        <div className="title-style-1">
          <h1>O que fazer?</h1>
          <h2>Um lugar de fé, natureza e tradições</h2>
        </div>
        <Toolbar objectList={optionTurismo} />
        {
          loading ? <Loading /> : null
        }
        <div id="grid" className="grid grid-cols-3 gap-5 justify-items-center">
          {atracoesReligioso.map((atracao) => {
            return (
              <Card
                key={atracao.id}
                title={atracao.nome}
                description={atracao.descricao}
                cell={atracao.telefone}
                latitude={atracao.latitude}
                longitude={atracao.longitude}
                img={atracao.logo}
                id={atracao.id}
                type="turismo"
              />
            )
          })}
        </div>
      </section>
    )
  }

  const atracoesCultural = turismo.filter(
    (turismo) => turismo.categoria === 'Cultural',
  )

  if ("Cultural") {
    return (
      <section className="turismo">
        <div className="title-style-1">
          <h1>O que fazer?</h1>
          <h2>Um lugar de fé, natureza e tradições</h2>
        </div>
        <Toolbar objectList={optionTurismo} />
        {
          loading ? <Loading /> : null
        }
        <div id="grid" className="grid grid-cols-3 gap-5 justify-items-center">
          {atracoesCultural.map((atracao) => {
            return (
              <Card
                key={atracao.id}
                title={atracao.nome}
                description={atracao.descricao}
                cell={atracao.telefone}
                latitude={atracao.latitude}
                longitude={atracao.longitude}
                img={atracao.logo}
                id={atracao.id}
                type="turismo"
              />
            )
          })}
        </div>
      </section>
    )
  }

  const atracoesEcologico = turismo.filter(
    (turismo) => turismo.categoria === 'Ecologico',
  )

  if ("Ecologico") {
    return (
      <section className="turismo">
        <div className="title-style-1">
          <h1>O que fazer?</h1>
          <h2>Um lugar de fé, natureza e tradições</h2>
        </div>
        <Toolbar objectList={optionTurismo} />
        {
          loading ? <Loading /> : null
        }
        <div id="grid" className="grid grid-cols-3 gap-5 justify-items-center">
          {atracoesEcologico.map((atracao) => {
            return (
              <Card
                key={atracao.id}
                title={atracao.nome}
                description={atracao.descricao}
                cell={atracao.telefone}
                latitude={atracao.latitude}
                longitude={atracao.longitude}
                img={atracao.logo}
                id={atracao.id}
                type="turismo"
              />
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <section className="turismo">
      <div className="title-style-1">
        <h1>O que fazer?</h1>
        <h2>Um lugar de fé, natureza e tradições</h2>
      </div>
      <Toolbar objectList={optionTurismo} />
      {
        loading ? <Loading /> : null
      }
      <div id="grid" className="grid grid-cols-3 gap-5 justify-items-center">
        {turismo.map((atracao) => {
          return (
            <Card
              key={atracao.id}
              title={atracao.nome}
              description={atracao.descricao}
              cell={atracao.telefone}
              latitude={atracao.latitude}
              longitude={atracao.longitude}
              img={atracao.logo}
              id={atracao.id}
              type="turismo"
            />
          )
        })}
      </div>
    </section>
  )
}
