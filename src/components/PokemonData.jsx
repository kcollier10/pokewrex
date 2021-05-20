import React from 'react'
import {Container, Row, Col, Card, ProgressBar} from 'react-bootstrap'

export default function PokemonData(props) {
    return (
        <Container className="mt-2 stats-container">
            <Row classname="card-container">
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header>
                            <Row className="stats-header">
                                <h3 className="stats-name">{props.name}</h3>
                                <img src={props.sprite} alt={props.name} />
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row className="abilities-types">
                                <div>
                                    <h4>Abilities</h4>
                                    {props.abilities.map((ability, key) => (
                                            <div key={key}>
                                                <span>{ability.ability.name}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div>
                                    <h4>Types</h4>
                                    {props.types.map((type, key) => (
                                        <div key={key}>
                                            <span>{type.type.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </Row>
                        </Card.Body>
                        <hr className="divider"/>
                        <Card.Body>
                            <div className="base-stats">
                                <h4>Overview</h4>
                                {props.stats.map((stat, key) => (
                                        <div key={key}>
                                            <strong>{stat.stat.name}</strong>
                                            <ProgressBar
                                                now={stat.base_stat}
                                                max={255}
                                                label={stat.base_stat}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}