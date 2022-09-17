import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

import { Loading } from '../../components/Loading'

import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { TbToolsKitchen } from 'react-icons/tb'
import { MdMenuBook } from 'react-icons/md'
import {
  BiMailSend,
  BiMap,
  BiMoney,
  BiPhoneCall,
  BiPlanet,
} from 'react-icons/bi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { toast } from 'react-toastify'
import { CommentsList } from '../../components/Comments/CommentsList'
import { CommentsAdd } from '../../components/Comments/CommentsAdd'

interface RestauranteDetailProps {
  [key: string]: string | number | undefined
  id: number
  nome: string
  descricao: string
  preco?: number
  logo: string
  maps: string
  ativo: number
  longitude: number
  latitude: number
  created_at: string
  updated_at: string
  cardapio?: string
  cozinhas?: string
  email?: string
  endereco?: string
  whats?: string
  insta?: string
  face?: string
  site?: string
  telefone?: string
}

interface DataLocalProps {
  estrelas: number[],
  comentarios: object[]
}

export function RestauranteDetail() {
  const { id } = useParams()
  const [data, setData] = useState<RestauranteDetailProps>()
  const [dataLocal, setDataLocal] = useState<DataLocalProps>({ estrelas: [], comentarios: [] });
  const contatosOption = ['whats', 'insta', 'face', 'site', 'telefone', 'email']
  const [qtdContato, setQtdContatos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  async function handleRating(rating: number) {
    const result = await fetch(`http://localhost:8000/api/restaurante/${id}/feedback/${rating}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const lista: number[] = [dataLocal.estrelas[0], dataLocal.estrelas[1], dataLocal.estrelas[2], dataLocal.estrelas[3], dataLocal.estrelas[4]]
    lista[rating - 1] += 1
    setDataLocal({ ...dataLocal, estrelas: lista });
    setRating(rating)
    toast.success('Obrigado por avaliar!')
  }

  useEffect(() => {
    setQtdContatos([])
    api.get(`/restaurantes/${id}`).then((response) => {
      setData(response.data.restaurantes[0])
      setLoading(false)
    })
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8000/api/restaurante/${id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const body = await result.json();
      const maiorValor = Math.max.apply(null, body.estrelas);
      const indexMaiorValor = body.estrelas.indexOf(maiorValor);
      setHover(indexMaiorValor + 1)
      setDataLocal(body);
    }
    fetchData();
    for (const x in data) {
      if (data[x] == null && contatosOption.includes(x)) {
        qtdContato.push(x)
      }
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="restaurante-detail">
      <div className="background-img">
        <img src={data?.logo} alt="" />
      </div>
      <div className="logo-img">
        <img src={data?.logo} alt="" />
      </div>

      <div className="container-detail">
        <div className="title-style-1 mt-5">
          <h1>{data?.nome}</h1>
        </div>
        <section className="info">
          <div className="flex items-center">
            <div>{dataLocal.estrelas[0] +
              dataLocal.estrelas[1] +
              dataLocal.estrelas[2] +
              dataLocal.estrelas[3] +
              dataLocal.estrelas[4]} avaliações</div>
            <div className="ml-5">{dataLocal.comentarios.length} comentários</div>
            <div className="star-rating ml-auto">
              {[...Array(5)].map((star, index) => {
                index += 1
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? 'on' : 'off'}
                    onClick={() => handleRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="mb-10">
            <h3>Descrição:</h3>
            <p className="my-3">{data?.descricao}</p>

            {data?.latitude && data?.longitude && (
              <div className="whitespace-nowrap">
                <a
                  className="google-maps inline-flex items-center"
                  target="_blank"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${data?.latitude},${data?.longitude}`}
                  rel="noreferrer"
                >
                  <FaMapMarkerAlt className="mr-2" size={16} />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            )}
          </div>

          <div className="mb-10 grid grid-flow-col">
            {data?.preco && (
              <div>
                <h3>Preço:</h3>
                <p className="flex items-center">
                  <BiMoney className="mx-2" size={32} /> R$ {data?.preco}
                </p>
              </div>
            )}
            {data?.cozinhas && (
              <div className="block">
                <h3>Cozinhas:</h3>
                <p className="flex items-center">
                  <TbToolsKitchen className="mx-2" size={32} />
                  {data?.cozinhas}
                </p>
              </div>
            )}
            {data?.cardapio && (
              <div className="block">
                <h3>Cardápio:</h3>
                <p className="flex items-center">
                  <MdMenuBook className="mx-2" size={32} />
                  {data?.cardapio}
                </p>
              </div>
            )}
          </div>

          <div className="mb-10">
            <div
              id="grid"
              className="grid grid-cols-2 lg:gap-x-20 md:gap-10 sm:gap-5"
            >
              <div className="mb-10">
                <h3>Endereço:</h3>
                {data?.endereco && (
                  <p className="flex items-center">
                    <BiMap size={32} className="mx-2" /> {data?.endereco}
                  </p>
                )}
                <iframe
                  className="mapa"
                  loading="lazy"
                  style={{ width: '100%', height: '200px', border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM-BKN-O6irIoDU8C-G9OFtPUvgb6bjg&q=${data?.latitude}, ${data?.longitude}`}
                ></iframe>
              </div>
              <div className="contatos">
                <h3>Contatos:</h3>
                <div
                  className={`my-3 grid ${qtdContato.length / 2 === 0
                    ? 'md:grid-cols-2'
                    : 'md:grid-cols-3'
                    } sm:grid-cols-1 gap-3 justify-items-center`}
                >
                  {data?.telefone && (
                    <p className="flex items-center">
                      <BiPhoneCall size={32} className="mx-2" />{' '}
                      {data?.telefone}
                    </p>
                  )}
                  {data?.whats && (
                    <p className="flex items-center">
                      <AiOutlineWhatsApp size={32} className="mx-2" />
                      <a
                        target="_blank"
                        href={`https://api.whatsapp.com/send?phone=${data?.whats}&text='Olá queria saber mais sobre o ${data?.nome}'`}
                        className="whats"
                        rel="noreferrer"
                      >
                        Whatsapp
                      </a>
                    </p>
                  )}
                  {data?.face && (
                    <p className="flex items-center">
                      <RiFacebookCircleLine size={32} className="mx-2" />{' '}
                      <a target="_blank" href={data?.face} rel="noreferrer">
                        Visitar facebook
                      </a>
                    </p>
                  )}
                  {data?.insta && (
                    <p className="flex items-center">
                      <FaInstagram size={32} className="mx-2" />{' '}
                      <a target="_blank" href={data?.insta} rel="noreferrer">
                        Visitar instagram
                      </a>
                    </p>
                  )}
                  {data?.site && (
                    <p className="flex items-center">
                      <BiPlanet size={32} className="mx-2" />{' '}
                      <a target="_blank" href={data?.site} rel="noreferrer">
                        Visitar nosso site
                      </a>
                    </p>
                  )}
                </div>
                {data?.email && (
                  <div className="grid grid-cols-1 justify-items-center">
                    <div className="flex items-center">
                      <BiMailSend size={32} className="mx-2" />{' '}
                      <p id="icon-email">{data?.email}</p>
                      <a
                        id="text-email"
                        target="_blank"
                        href={data?.site}
                        rel="noreferrer"
                      >
                        Entrar em contato por email
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <CommentsList comments={dataLocal.comentarios} />
            <CommentsAdd type='restaurante' id={data?.id} setInfo={setDataLocal} />
          </div>
        </section>
      </div>
    </div>
  )
}
