// import React, {useState} from 'react'
// import "./Item.css"



// const Item = () => {
//     return (
//         <div className= "Item">
//             <h1></h1>
//         </div>
//     )
// }

// export default Item



import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Item = ({data}) => (
  <Card>
    <Image src={data.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
        {data.html_url}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default Item

