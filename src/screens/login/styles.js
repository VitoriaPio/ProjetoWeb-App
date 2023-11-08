import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
    textAlign: 'center',
    gap: 20,
  },
  loginBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    width: 120,
  },

  loginText: {
    color: 'white',
  },
});

export default styles;
