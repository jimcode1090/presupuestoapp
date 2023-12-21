import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34006a',
  },
  dashboardContainer: {
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    flex: 2,
  },
  resumenContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
  },
  rowContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textPE: {
    color: 'white',
    fontSize: 20,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  disponibleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 75,
    borderRadius: 50,
  },
});

export default styles;
