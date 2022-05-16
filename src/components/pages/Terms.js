import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  margin-top: 10rem;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
  font-size: 2rem;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -300px
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  text-align: center;
  align-items: center;
`;


const Terms = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Header>TERMS OF SERVICE</Header>
          <p>
            This web site is completely unofficial and in no way endorsed by Games Workshop Limited, Forge World or Privateer Press.
            Adeptus Astartes, Battlefleet Gothic, Black Flame, Black Library, the Black Library logo, BL Publishing, Blood Angels, Bloodquest, Blood Bowl, the Blood Bowl logo, The Blood Bowl Spike Device, Cadian, Catachan, the Chaos device, Cityfight, the Chaos logo, Citadel, Citadel Device, City of the Damned, Codex, Daemonhunters, Dark Angels, Dark Eldar, Dark Future, the Double-Headed/Imperial Eagle device, 'Eavy Metal, Eldar, Eldar symbol devices, Epic, Eye of Terror, Fanatic, the Fanatic logo, the Fanatic II logo, Fire Warrior, Forge World, Games Workshop, Games Workshop logo, Genestealer, Golden Demon, Gorkamorka, Great Unclean One, the Hammer of Sigmar logo, Horned Rat logo, Inferno, Inquisitor, the Inquisitor logo, the Inquisitor device, Inquisitor:Conspiracies, Keeper of Secrets, Khemri, Khorne, Kroot, Lord of Change, Marauder, Mordheim, the Mordheim logo, Necromunda, Necromunda stencil logo, Necromunda Plate logo, Necron, Nurgle, Ork, Ork skull devices, Sisters of Battle, Skaven, the Skaven symbol devices, Slaanesh, Space Hulk, Space Marine, Space Marine chapters, Space Marine chapter logos, Talisman, Tau, the Tau caste designations, Tomb Kings, Trio of Warriors, Twin Tailed Comet Logo, Tyranid, Tyrannid, Tzeentch, Ultramarines, Warhammer, Warhammer Historical, Warhammer Online, Warhammer 40k Device, Warhammer World logo, Warmaster, White Dwarf, the White Dwarf logo, and all associated marks, names, races, race insignia, characters, vehicles, locations, units, illustrations and images from the Blood Bowl game, the Warhammer world, the Talisaman world, and the Warhammer 40,000 universe are either ®, TM and/or © Copyright Games Workshop Ltd 2000-2010, variably registered in the UK and other countries around the world. Used without permission. No challenge to their status intended. All Rights Reserved to their respective owners.
          </p>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Terms