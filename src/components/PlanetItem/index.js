// Write your code here

import {PlanetContainer, Image, Name, Description} from './styledComponents'

const PlantItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet

  return (
    <PlanetContainer>
      <Image src={imageUrl} alt={`planet ${name}`} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </PlanetContainer>
  )
}

export default PlantItem
