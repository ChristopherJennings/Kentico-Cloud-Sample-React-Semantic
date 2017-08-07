import * as React from 'react';
import AppRouting from './components/AppRouting';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class App extends React.Component<{}, {}> {
  redirect(to?: string) {
    alert(`Clicked ${to}`);
  }
  render() {
    return (
      <div className="App">
        <Menu size="massive" color="teal" inverted secondary style={{ margin: '0' }} borderless widths={3} icon="labeled">
          <Container>
            <Menu.Item as={Link} name="Home" to="/">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as={Link} name="Events" to="/events">
              <Icon name="calendar" />
              Events
            </Menu.Item>
            <Menu.Item as={Link} name="Blog" to="/blog">
              <Icon name="newspaper" />
              Blog
            </Menu.Item>
          </Container>
        </Menu>
        <AppRouting />        
      </div>
    );
  }
}

export default App;
