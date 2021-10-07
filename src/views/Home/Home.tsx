import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
// import LotteryCard from './components/LotteryCard'
// import LotteryCardSoon from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  // background-image: url('https://i.postimg.cc/52PsySxC/space-bg.png');;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 332px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('https://i.postimg.cc/ZK1wdF2B/space-bg-1.png');
    background-position: center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    // background-image: url('https://i.postimg.cc/52PsySxC/space-bg.png');
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('https://i.postimg.cc/52PsySxC/space-bg.png');
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="#ffffff">
          {TranslateString(576, 'Welcome to the Cryptospace')}
        </Heading>
        <Text color="#ffffff">{TranslateString(578, 'A new generation finance dApp on  Binance Smart Chain')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
         
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
