import * as React from 'react';
import { Container, Header, Segment, Message } from 'semantic-ui-react';

class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <Segment basic padded>
                <Container>
                    <Header as="h2">Events</Header>
                    <Message
                        icon="announcement"
                        size="huge"
                        header="Come back soon!"
                        content="This page is still being worked on."
                    />
                </Container>
            </Segment>
        );
    }
}

export default HomePage;