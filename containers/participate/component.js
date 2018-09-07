import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../../elements/button/component'
import ParticipateTitle from '../../elements/participate-title/component'
import ParticipateTextbox from '../../elements/participate-textbox/component'
import ParticipateP from '../../elements/participate-p/component'
import Separator from '../../elements/separator/component'
import ParticipateContainer from '../../components/participate-container/component'
import ParticipateItem from '../../components/participate-item/component'

const StyledParticipateSection = styled.section`
  margin-left: 5rem;
  padding: 8.4rem 4.3rem;
  background-size: 60px 60px;
  background-image: linear-gradient(to right, #f2f5f8 1px, transparent 1px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

const Participate = ({ children }) => (
  <StyledParticipateSection>
    <ParticipateTitle>Cómo puedo participar</ParticipateTitle>
    <ParticipateContainer>
      <ParticipateItem>
        <ParticipateTextbox number={'01'} action={'Informate'} description={'Entrá y lee.'} />
        <Separator />
        <ParticipateP text={'Elegí un proyecto que te interese  o te parezca relevante. Primero vas a encontrar una introducción a la propuesta de ley con los antecedentes, fundamentos e información relevante. a la ley, como surgió y su importancia. Después podés pasar a leer el texto del proyecto de ley.'} />
      </ParticipateItem>
      <ParticipateItem>
        <ParticipateTextbox number={'02'} action={'Informate'} description={'Entrá y lee.'} />
        <Separator />
        <ParticipateP text={'Elegí un proyecto que te interese  o te parezca relevante. Primero vas a encontrar una introducción a la propuesta de ley con los antecedentes, fundamentos e información relevante. a la ley, como surgió y su importancia. Después podés pasar a leer el texto del proyecto de ley.'} />
      </ParticipateItem>
      <ParticipateItem>
        <ParticipateTextbox number={'03'} action={'Informate'} description={'Entrá y lee.'} />
        <Separator />
        <ParticipateP text={'Elegí un proyecto que te interese  o te parezca relevante. Primero vas a encontrar una introducción a la propuesta de ley con los antecedentes, fundamentos e información relevante. a la ley, como surgió y su importancia. Después podés pasar a leer el texto del proyecto de ley.'} />
      </ParticipateItem>
    </ParticipateContainer>
    <Button primary>Registrate y participá</Button>
  </StyledParticipateSection>
)

Participate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Participate
