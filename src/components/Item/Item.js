import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Item = ({data}) => (
  <Card>
    <Image src={data.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
        {data.price}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Item

