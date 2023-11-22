// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {PlanetAppContainer, Heading} from './styledComponents'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <PlanetAppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
        ))}
      </Slider>
    </PlanetAppContainer>
  )
}

export default PlanetSlider
