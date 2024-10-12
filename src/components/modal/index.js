import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal } from "react-native";
  
export function ModalExtrato({ handleClose }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.area}>
        <TouchableOpacity style={styles.Fechar} onPress={handleClose}>
          <Text style={styles.ButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.content}>
        <Text style={styles.Titulo}>20/09/2024</Text>
          <Text style={styles.Lista}>Crédito: NF 001142 .................................... 50 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia .................................. 150 pontos</Text>
          <Text style={styles.Titulo}>16/09/2024</Text>
          <Text style={styles.Lista}>Crédito: NF 0000170 .................................... 50 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia .................................. 100 pontos</Text>
          <Text style={styles.Titulo}>15/09/2024</Text>
          <Text style={styles.Lista}>Crédito: NF 0000150 .................................... 50 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia .................................... 50 pontos</Text>
          <Text style={styles.Titulo}>07/09/2024</Text>
          <Text style={styles.Lista}>Débito: Resgate ........................................... -30 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia ....................................... 0 pontos</Text>
          <Text style={styles.Titulo}>01/09/2024</Text>
          <Text style={styles.Lista}>Crédito: NF 000001 ...................................... 50 pontos</Text>
          <Text style={styles.Lista}>Crédito: NF 000002 ...................................... 50 pontos</Text>
          <Text style={styles.Lista}>Débito: Resgate ........................................... -70 pontos</Text>
          <Text style={styles.Lista}>Saldo no final do dia .................................... 30 pontos</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function ModalPedido({ handleClose }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.area}>
        <TouchableOpacity style={styles.Fechar} onPress={handleClose}>
          <Text style={styles.ButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.content}>
        <View>
        <Text style={styles.Titulo}>07/09/2024</Text>
          <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10691/10691278.png' }}
          style={styles.thumbnail}/>
          <Text style={styles.Lista}>Produto 1</Text>
          <Text style={styles.Lista}>Valor: 100 pontos</Text>
          <Text style={styles.Lista}>Status: Pedido em rota de entrega</Text>
          <Text style={styles.Lista}>Previsão de entrega: 15/09/2024</Text>
        </View>
        <View>
        <Text style={styles.Titulo}>01/09/2024</Text>
          <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10691/10691278.png' }}
          style={styles.thumbnail}/>
          <Text style={styles.Lista}>Produto 2</Text>
          <Text style={styles.Lista}>Valor: 30 pontos</Text>
          <Text style={styles.Lista}>Status: Entregue</Text>
          <Text style={styles.Lista}>Entregue em 06/09/2024</Text>
        </View>
        </View>
      </View>
    </ScrollView>
  );
}

export function ModalCatalogo({ handleClose }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.area}>
        <TouchableOpacity style={styles.Fechar} onPress={handleClose}>
          <Text style={styles.ButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.item}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10691/10691278.png' }}
          style={styles.thumbnail}/>
        <Text style={styles.Lista}>Produto 1</Text>
        <Text style={styles.Titulo}>Valor: 70 pontos</Text>
        </View>
          <View style={styles.item}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10691/10691278.png' }}
          style={styles.thumbnail}/>
          <Text style={styles.Lista}>Produto 2</Text>
          <Text style={styles.Titulo}>Valor: 30 pontos</Text>
          </View>
          <View style={styles.item}>
          <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10691/10691278.png' }}
          style={styles.thumbnail}/>
          <Text style={styles.Lista}>Produto 3</Text>
          <Text style={styles.Titulo}>Valor: 10 pontos</Text>
          </View>        
          <View style={styles.item}>
          <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10691/10691278.png' }}
          style={styles.thumbnail}/>
          <Text style={styles.Lista}>Produto 4</Text>
          <Text style={styles.Titulo}>Valor: 100 pontos</Text>
        </View>
        <View style={styles.item}>
          <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10691/10691278.png' }}
          style={styles.thumbnail}/>
          <Text style={styles.Lista}>Produto 5</Text>
          <Text style={styles.Titulo}>Valor: 700 pontos</Text>
        </View>
        <View style={styles.item}>
          <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10691/10691278.png' }}
          style={styles.thumbnail}/>
          <Text style={styles.Lista}>Produto 6</Text>
          <Text style={styles.Titulo}>Valor: 1500 pontos</Text>
        </View>
        </View>
        </View>
        </View>
        </ScrollView>
  );
}

export function ModalDuvidas({ handleClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <TouchableOpacity style={styles.Fechar} onPress={handleClose}>
          <Text style={styles.ButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.Titulo}>O que é o programa?</Text>
          <Text style={styles.Lista}>O programa é um canal de relacionamento onde você pode ganhar pontos comprando nossos produtos</Text>
          <Text style={styles.Titulo}>Como faço para ganhar pontos?</Text>
          <Text style={styles.Lista}>Para ganhar pontos, basta você se cadastrar no programa e informar seu CPF no momento da compra.</Text>
          <Text style={styles.Lista}>Mas lembre-se: as compras só serão pontuadas após o cadastro.</Text>
          <Text style={styles.Titulo}>Como posso trocar meus pontos?</Text>
          <Text style={styles.Lista}>Para trocar seus pontos, basta acessar a opção "Catálogo de Prêmios".</Text>
        </View>
      </View>
    </View>
  );
}

export function ModalFaleConosco({ handleClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState({ MensagemEnviada: false });

  const openModal = (modal) => {
    setModalVisible({ ...modalVisible, [modal]: true });
  };

  const closeModal = (modal) => {
    setModalVisible({ ...modalVisible, [modal]: false });
  };

  const handleSendMessage = () => {
    // Lógica para enviar a mensagem
    openModal('MensagemEnviada');
  };

  return (
    <View style={styles.modalView}>
      <TouchableOpacity style={styles.FecharFaleConosco} onPress={handleClose}>
        <Text style={styles.ButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.modalText}>Como podemos te ajudar?</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#cedbfa"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#cedbfa"
      />
      <TextInput
        style={styles.mensagem}
        placeholder="Mensagem"
        value={message}
        onChangeText={setMessage}
        placeholderTextColor="#cedbfa"
        multiline={true}
      />
      <TouchableOpacity style={styles.areaEnviar} onPress={handleSendMessage}>
        <Text style={styles.Enviar}>Enviar</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible.MensagemEnviada} animationType='fade'>
        <ModalMensagemEnviada handleClose={() => closeModal('MensagemEnviada')} />
      </Modal>
    </View>
  );
} 

export function ModalMensagemEnviada({ handleClose }) {
  return (
    <View style={styles.modalViewMensagemEnviada}>
      <Text style={styles.modalText}>Mensagem enviada com sucesso</Text>
      <TouchableOpacity style={styles.FecharMensagemEnviada} onPress={handleClose}>
        <Text style={styles.ButtonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d3ca5",
    flex: 1
    },
  Titulo: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    margin: 15,
    color: "#c6d6fa",
  },
  Lista: {
    fontSize: 14,
    margin: 15,
    color: "#c6d6fa",
  },
  Fechar: {
    backgroundColor: "#c6d6fa",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 340,
    marginTop: 50,
  },
  ButtonText: {
    color: "#0d3ca5",
  },
  modalView: {
    flex: 1,
    backgroundColor: "#0d3ca5",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalText: {
    marginBottom: 30,
    textAlign: "center",
    color: "#cedbfa",
    fontSize: 16,
    marginTop: 50,
  },
  modalViewMensagemEnviada: {
    backgroundColor: "#0d3ca5",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 300,
    height: 200,
    margin: 90,
    width: '60%',
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2,
    },
  },
  input: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    color: 'white',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  mensagem: {
    height: 300,
    width: "90%",
    borderColor: "gray",
    color: 'white',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    textAlignVertical: "center",
    borderRadius: 15,
  },
  areaEnviar: {
    marginTop: 50,
    height: 25,
    backgroundColor: "#c6d6fa",
    width: "20%",
    borderRadius: 5,
  },
  Enviar: {
    textAlign: "center",
    color: "#0d3ca5",
  },
  FecharFaleConosco: {
    backgroundColor: "#c6d6fa",
    height: 30,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 340,
    marginTop: 30,
  },
  FecharMensagemEnviada: {
    backgroundColor: "#c6d6fa",
    height: 30,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 5,
  },
  thumbnail: {
    margin: 20,
    marginTop: 10,
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
    flexWrap: 'wrap', // Permite que os itens sejam empilhados em uma nova linha
  },
  item: {
    alignItems: 'center',
    flexBasis: '45%', // Cada item ocupa 45% da largura do container
    marginBottom: 20, // Espaço entre os itens
  }
});
