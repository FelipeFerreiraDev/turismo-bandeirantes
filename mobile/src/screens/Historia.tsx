import { AspectRatio, Box, Button, FormControl, Heading, HStack, Image, Input, ScrollView, Text, useTheme, View, VStack, WarningOutlineIcon } from "native-base";
import { Header } from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import Swiper from 'react-native-swiper'
export function Historia() {

    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <VStack flex={1} mb={10} bg="gray.100" >
            <Header />
            <ScrollView>
                <View
                    flex={1}
                    alignItems="center"
                    justifyContent="center"
                    h={200}
                >
                    <Swiper
                        showsButtons={true}
                        loop
                        autoplay
                    >
                        <Image
                            source={require('../assets/album/album01.jpg')}
                            resizeMode="cover"
                            w="100%"
                            height={200}
                            flex={1}
                            alignItems="center"
                            justifyContent="center"
                            alt="Castelo"
                        />
                        <Image
                            source={require('../assets/album/album02.jpg')}
                            resizeMode="cover"
                            w="100%"
                            height={200}
                            flex={1}
                            alignItems="center"
                            justifyContent="center"
                            alt="Foto aerea"
                        />
                        <Image
                            source={require('../assets/album/album03.jpg')}
                            resizeMode="cover"
                            w="100%"
                            height={200}
                            flex={1}
                            alignItems="center"
                            justifyContent="center"
                            alt="Pra??a"
                        />
                        <Image
                            source={require('../assets/album/album04.jpg')}
                            resizeMode="cover"
                            w="100%"
                            height={200}
                            flex={1}
                            alignItems="center"
                            justifyContent="center"
                            alt="Esta????o"
                        />
                    </Swiper>
                </View>
                <Heading textAlign="center" mt={6} size="xl" px={5}>BANDEIRANTES</Heading>
                <VStack space={2} p={4}>
                    <Text my={2}>
                        At?? o Ano de 1920, a regi??o era um sert??o bruto, habitado apenas pelos ??ndios da tribo Caingangues. O primeiro a explorar este territ??rio foi o Engenheiro Carlos Borromei, onde ergue seu acampamento em uma clareira aberta no meio das matas ?? margens do Ribeir??o das Antas. Em 24 de dezembro de 1926, D. Josefina Alves de Lima, propriet??ria de grande gleba de terras na Fazenda Laranjinha, ao proceder a divis??o desse im??vel, vendeu a Jo??o Manoel dos Santos dez alqueires de terra, destinados a funda????o de um povoado, que deveria ser denominado Invernada.
                    </Text>
                    <Text my={2}>
                        Em 12 de abril de 1929, foi criado o Distrito de Invernada, como parte integrante do Munic??pio de Jacarezinho, sendo instalado no dia 8 de dezembro do mesmo ano. Em julho de 1930, a Empresa Ferrovi??ria S??o Paulo - Paran??, inaugurou uma esta????o ferrovi??ria, a 3 quil??metros do patrim??nio de Invernada, que passou a denominar-se Bandeirantes, surgindo, ent??o, um povoado nas proximidades da esta????o, em terreno de propriedade de Juvenal Mesquita. Em 27 de setembro de 1931, um pugilo de homens de boa vontade, iniciou um trabalho de coliga????o em favor do progresso da esta????o e, consequentemente, sobreveio a queda de Invernada, onde se achavam o cart??rio, a Coletoria Estadual, casas, hot??is, casas de com??rcio, farm??cias, correios, etc.
                    </Text>
                    <Text my={2}>
                        Em 1932, o ent??o Interventor Federal no Paran??, visitou Bandeirantes, notando que o povo desejava a cria????o do munic??pio. Houve a unifica????o dos dois povoados: Bandeirantes e Invernada. Dando inicio a hist??ria de Bandeirantes
                    </Text>
                </VStack>
                <Heading textAlign="center" mt={6} size="xl" px={5}>UM LUGAR DE F??, NATUREZA E TRADI????ES</Heading>
                <VStack space={2} p={4}>
                    <Text my={2}>
                    Localizada no Norte Pioneiro do Paran??, Bandeirantes se distingue pela terra f??rtil e pelo povo oriundo de diversas partes do Brasil e do mundo. O munic??pio tem forte influ??ncia dos paulistas, mineiros, italianos, japoneses e portugueses, origem primordial das voca????es econ??micas e tur??sticas do munic??pio.
                    </Text>
                    <Text my={2}>
                    A base da economia no munic??pio ?? o cultivo de uva fina de mesa, piment??o, pepino, cana-de-a????car e, principalmente, soja e milho. Anualmente, a festa do Milho Verde movimenta a economia local.
                    </Text>
                </VStack>
            </ScrollView>
        </VStack>
    )
}