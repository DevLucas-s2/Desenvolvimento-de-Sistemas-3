import { StyleSheet, Text, ScrollView } from 'react-native';

export default function Modal() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.titulo}>Sobre</Text>

      <Text style={styles.texto}>
        O SENAI (Serviço Nacional de Aprendizagem Industrial) é a maior rede privada
        de educação profissional da América Latina, focada na qualificação técnica,
        inovação e tecnologia para a indústria.
      </Text>

      <Text style={styles.texto}>
        Criado em 1942, oferece cursos técnicos, superiores e de iniciação,
        com alta taxa de empregabilidade e presença nacional.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
});