const styles = {
  box: {
    width: '100%',
    height: '100%'
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 5
  },
  navLeft: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu: {
    flex: 4,
    height: 60
  },
  menuItembox: {
    height: '100%'
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  menuItemText: {
    fontSize: 16,
  },
  menuIcon: {
    fontSize: 20,
    width: 20,
    height: 20,
    display: 'inline-block',
    marginRight: 10
  },
  content: {
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: '#ccc',
    height: '100%',
    position: 'relative'
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
    height: 30,
    textAlign: 'center',
    // lineHeight: 30
  }
}
export default styles