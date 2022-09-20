import { ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import { CardPrincipal } from "../components/Card/Principal";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import api from "../services/api";
import { PropsGeral } from "../utils/tipagens";

export function Restaurantes() {
  const [restaurantes, setRestaurantes] = useState<PropsGeral[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    api.get('/restaurantes').then((response) => {
      setRestaurantes(response.data.restaurantes)
      setLoading(true)
    })
  }, [])

  if (!loading) {
    return <Loading />
  }

  return (
    <VStack flex={1} mb={10} bg="gray.100" >
      <Header />
      <ScrollView pt={4} >
        { restaurantes!.map((item) => (
          <CardPrincipal
            key={item.id}
            id={item.id}
            descricao={item.descricao}
            email={item.email}
            endereco={item.endereco}
            face={item.face}
            insta={item.insta}
            latitude={item.latitude}
            logo={item.logo}
            longitude={item.longitude}
            nome={item.nome}
            preco={item.preco}
            site={item.site}
            telefone={item.telefone}
            whats={item.whats}
            tipo="Restaurante"
          />
        )) }
      </ScrollView>
    </VStack>
  )
}