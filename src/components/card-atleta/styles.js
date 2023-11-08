import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
  },

  infoView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 12,
    padding: 5,
    gap: 10,
  },

  infos: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-around',
  },
  iconButton: {
    width: '100%',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 12,
    padding: 10,
  },

  disabled: {
    backgroundColor: '#474747',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 12,
    padding: 10,
  },
  infoText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  // textos
  subtitle: {
    color: 'white',
    fontSize: 14,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
