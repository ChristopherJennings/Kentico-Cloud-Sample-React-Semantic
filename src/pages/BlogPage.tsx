import * as React from 'react';
import { Container, Header, Segment, Message } from 'semantic-ui-react';

class BlogPage extends React.Component<{}, {}> {
    render() {
        return (
            <Segment basic padded>
                <Container>
                    <Header as="h2">Blog</Header>
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

export default BlogPage;