import * as React from 'react';
import { Container, Header, Segment, Grid, Image, Divider, Label } from 'semantic-ui-react';

import { KenticoCloudClient } from '../helpers/KenticoCloudClient';
import { Home } from '../models/home';
import HeroUnit from '../components/HeroUnit';

export interface State {
    loaded: boolean;
    page: Home;
 }

class HomePage extends React.Component<{}, State> {
    constructor(state: State) {
        super();
        this.state = {
            loaded: false,
            page: new Home(),
        };
    }

    componentDidMount() {
        const self = this;
        KenticoCloudClient().item<Home>('sample_home_page')
            .get()
            .subscribe(response => { 
                self.setState({ loaded: true, page: response.item });
            });
    }

    render() {
        if (!this.state.loaded) {
            return <Segment basic padded loading />;
        }

        return (
            <div>
                <HeroUnit heroUnit={this.state.page.heroUnit[0]} to="/events" />
                <Segment basic padded>                    
                    <Container>  

                        <Header as="h2" textAlign="center">{this.state.page.system.name}</Header>
                        <Segment basic>
                            <div dangerouslySetInnerHTML={{__html: this.state.page.businessOverview.getHtml()}} />
                        </Segment>
                        <Divider horizontal>Features</Divider>
                        <Segment basic>
                            <Grid columns={3} stackable doubling centered>
                                <Grid.Column>
                                    <Segment basic textAlign="center">
                                        <Image 
                                            fluid={false}
                                            centered
                                            src="https://assets.kenticocloud.com:443/420a5669-0c05-4ca4-a79c-84becc5a5b12/2e2f08fc-d06b-4edc-a10c-774c17373163/sample-feature-1.png"
                                        />
                                        <Header as="h3">Sample feature 1</Header>
                                        <p>Discuss content. Make and respond to comments for a section of text or an asset so your team is on the same page.</p>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment basic textAlign="center">
                                        <Image 
                                            fluid={false}
                                            centered
                                            src="https://assets.kenticocloud.com:443/420a5669-0c05-4ca4-a79c-84becc5a5b12/2e2f08fc-d06b-4edc-a10c-774c17373163/sample-feature-1.png"
                                        />
                                        <Header as="h3">Sample feature 1</Header>
                                        <p>Discuss content. Make and respond to comments for a section of text or an asset so your team is on the same page.</p>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment basic textAlign="center">
                                        <Image 
                                            fluid={false}
                                            centered
                                            src="https://assets.kenticocloud.com:443/420a5669-0c05-4ca4-a79c-84becc5a5b12/2e2f08fc-d06b-4edc-a10c-774c17373163/sample-feature-1.png"
                                        />
                                        <Header as="h3">Sample feature 1</Header>
                                        <p>Discuss content. Make and respond to comments for a section of text or an asset so your team is on the same page.</p>
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                        <Divider horizontal>Testimonial</Divider>
                         <Grid centered>
                            <Grid.Column mobile={16} tablet={14} computer={10}>
                                <Segment inverted color="blue" tertiary clearing>
                                    <Label color="blue" attached="bottom right">
                                        Maria Warhol
                                        <Label.Detail>
                                            Content Strategist at Awesome Content &amp; Associates
                                        </Label.Detail>
                                    </Label>    
                                    <Image
                                        centered
                                        shape="circular"
                                        size="small"
                                        bordered
                                        src="https://assets.kenticocloud.com:443/420a5669-0c05-4ca4-a79c-84becc5a5b12/98c56e39-0b7c-41c7-bbac-1dded7b27b1c/testimonial-asset.jpg"
                                    />
                                    <p>I can only say how impressed I am with using Kentico Draft. It has cut my content production time so significantly, that we are able to take on more and more projects!</p>                                
                                </Segment>
                            </Grid.Column>
                        </Grid>

                    </Container>
                </Segment>
            </div>
        );
    }
}

export default HomePage;