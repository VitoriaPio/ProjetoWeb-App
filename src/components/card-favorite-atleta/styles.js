import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
  },

  infoView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    gap: 10,
  },

  infos: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'space-around',
  },
  infoText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  // textos
  subtitle: {
    fontSize: 14,
    color: 'black',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  removeBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    backgroundColor: '#1e1e1e',
    width: '100%',
    color: 'white',
    borderRadius: 12,
    paddingVertical: 10,
  },
});

export default styles;
