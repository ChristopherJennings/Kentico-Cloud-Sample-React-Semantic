import * as React from 'react';
import { HeroUnit as HeroUnitModel } from '../models/heroUnit';
import { Link } from 'react-router-dom';
import { Button, Container, Segment, Header, Icon } from 'semantic-ui-react';

export interface Props {
    heroUnit: HeroUnitModel;
    to: string;
}

function HeroUnit({ heroUnit, to }: Props) {
    return (
        <Segment
            className="section hero"
            textAlign="center"
            vertical
            style={
                {
                    minHeight: 250,
                    padding: '1em 0em',
                    color: 'white',
                    backgroundSize: 'cover',
                    backgroundImage:
                        `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), \
                        url(${heroUnit.teaserImage.assets[0].url})`
                }
            }
        >
            <Container text>
                <Header
                    as="h1"
                    content={heroUnit.title.text}
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginTop: '1em' }}
                />
                <div dangerouslySetInnerHTML={{ __html: heroUnit.marketingMessage.getHtml() }} style={{ fontSize: '1.7em', fontWeight: 'normal' }} />
                <Button 
                    color="teal"
                    size="huge"
                    as={Link}
                    to={to}
                    style={{ marginTop: '1em', marginBottom: '4em' }}
                >
                    {heroUnit.ctaButtonLabel.text}
                    <Icon name="right arrow" />
                </Button>
            </Container>
        </Segment>
    );
}

export default HeroUnit;