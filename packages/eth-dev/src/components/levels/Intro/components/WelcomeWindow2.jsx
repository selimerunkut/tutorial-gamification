import React from 'react'

import { backgroundIds } from '../../../gameItems/components/Background/backgroundsMap'
import { WindowModal, Button } from '../../../gameItems/components'

const WelcomeWindow2 = ({
  isOpen,
  enterGame,
  setBackgroundId,
  setShowWelcomeWindow2,
  setShowFactionSupportOverviewWindow
}) => {
  const initHeight = window.innerHeight * 0.9
  const initWidth = window.innerWidth * 0.8

  const audio = {
    soundtrack: new Audio('./assets/sounds/mixkit-game-level-music-689.wav'),
    click: new Audio(
      './assets/sounds/mixkit-quick-positive-video-game-notification-interface-265.wav'
    )
  }

  return (
    <WindowModal
      // place window in center of screen
      initTop={window.innerHeight / 2 - initHeight / 2}
      initLeft={window.innerWidth / 2 - initWidth / 2}
      initHeight={initHeight}
      initWidth={initWidth}
      backgroundPath="./assets/items/window.png"
      dragAreaHeightPercent={12}
      windowTitle="EAS.TUTORIAL"
      isOpen={isOpen}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <div
        className="content"
        style={{
          float: 'left',
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
          fontSize: '12px',
          lineHeight: '25px'
        }}
      >
        <h2 style={{ textAlign: 'center', marginTop: 20, marginBottom: 20, color: '#16DC8C' }}>
          Welcome to Polygone ID, proof who you are!
        </h2>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Welcome to the grim neon-lit metropolis of Polygon ID, an all-encompassing cybernetic
          realm where the construction of identity and trust services takes center stage. With
          relentless determination, the team orchestrates the birth of a sprawling, open ecosystem
          that thrives on the city's veins. A realm where trust markets flourish and trust
          management reigns supreme, fortified by an intoxicating cocktail of cutting-edge
          technology and clandestine dealings. This unforgiving landscape pulsates with the allure
          of new attestation and access services, each veiled behind a shroud of enigmatic
          incentives, ready to lure both daring renegades and shadowy corporate entities.
        </p>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Enter the Access-as-a-Service, a virtual domain teeming with existing solutions awaiting
          deployment and fresh creations yearning to materialize. Here, amidst the flickering
          holographic spectacles and the relentless hum of data streams, the pillars of Know Your
          Customer (KYC) and Know Your Business (KYB) stand tall, erecting formidable barriers
          against the ever-advancing tide of emerging crypto systems. Like an enigmatic underground
          distribution channel, Polygon ID beckons the audacious to leverage its manifold options,
          granting access to an elusive realm where power, secrets, and fortunes are tantalizingly
          intertwined.
        </p>
        <div style={{ float: 'left', width: '100%', padding: '0 20%' }}>
          <Button
            style={{ marginTop: 20 }}
            className="is-warning"
            onClick={() => {
              audio.click.play()
              setBackgroundId(backgroundIds.RoofSatellite)
              enterGame()
            }}
          >
            Find out who you are
          </Button>
          <div
            style={{
              float: 'left',
              width: '100%',
              marginTop: 15,
              marginBottom: 15,
              textAlign: 'center'
            }}
          >
            {/* or */}
          </div>
          <Button
            className="is-warning"
            onClick={() => {
              audio.click.play()
              setShowWelcomeWindow2(false)
            }}
          >
            Back
          </Button>
          {/*           <Button
            className='is-warning'
            onClick={() => {
              audio.click.play()
              enterGame(true)
              setBackgroundId(backgroundIds.CityOutskirts)
              setShowFactionSupportOverviewWindow(true)
            }}
          >
            Pick Level
          </Button> */}
        </div>
      </div>
    </WindowModal>
  )
}

export default WelcomeWindow2
