import React, { useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 870px) {
    width: 140px;
    flex-direction: column;
  }
`

const Timeline = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 870px) {
    flex-direction: column;
    max-height: 440px;
    flex-wrap: wrap;
  }
`

const Info = styled.div`
  text-align: center;
  margin-right: .5rem;
  & h3 {
    margin: 0;
    padding: 0;
  }
  & p {
    font-size: 10px;
    margin: 0;
  }
`

const Hour = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 870px) {
    ${({last}) => last && 'align-self: flex-start'}
  }
`

const HourTime = styled.h5`
  margin: 0;
  padding: 0;
  align-self: flex-start;
  @media (max-width: 870px) {
    ${({last}) => last && 'margin-left: -25px !important'}
  }
`

const HourLine = styled.div`
  display: flex;
  @media (max-width: 870px) {
    transform: rotate(90deg);
  }
`

const FirstHalf = styled.div`
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 2px solid #000;
  width: 15px;
  height: 15px;
`

const SecondHalf = styled.div`
  border-right: 1px solid #000;
  border-bottom: 2px solid #000;
  width: 15px;
  height: 15px;
`

function remainingTo30(date) {
  if(date.getMinutes() < 30) {
    return 30
  } else {
    return 60
  }
}

function getStatusColor(status) {
  if(status === 'available') return '#2f74bc'
  if(status === 'notavailable') return '#52afaf'
  if(status === 'delayed') return '#f2a53c'
}

const weekdays = [
  'Ni',
  'Pn',
  'Wt',
  'Śr',
  'Cz',
  'Pt',
  'So'
]

function Day({date, data}) {
  const hours = []
  Array(25).fill().forEach((_, index) => hours.push({
    hour: index,
    firstHalf: React.createRef(),
    secondHalf: React.createRef()
  })) // Stworzenie tablicy z godzinami i referencjami do pól tych dni

  useEffect(() => {
    data.forEach(({startDate, endDate, status}) => {
      startDate = new Date(startDate) // zamiana JSON daty na datę
      endDate = new Date(endDate) // zamiana JSON daty na datę
      for (let d = startDate; d < endDate; d.setMinutes(remainingTo30(d))) { // pętla ustawiająca daną połówkę godziny
        if(d.getMinutes() < 30) {
          hours[d.getHours()].firstHalf.current.style.backgroundColor = getStatusColor(status)
        }
        if(d.getMinutes() >= 30) {
          hours[d.getHours()].secondHalf.current.style.backgroundColor = getStatusColor(status)
        }
      }
    })
  }) // useEffect by dopiero zacząć działać na godzinach gdy zostanie stworzona i wyrenderowana tablica z godzinami

  date = new Date(date) // zamiana JSON daty na datę

  return (
    <Wrapper>
      <Info>
        <h3>{weekdays[date.getDay()]}</h3>
        <p>{date.getFullYear()}-{date.getMonth()+1}-{date.getDate()}</p>
      </Info>
      <Timeline>
        {hours.map(({hour, firstHalf, secondHalf}, index) => {
          return (
            <>
              {(window.innerWidth < 870 && index === 12) && (
                <Hour key={`${date}-${index}`} last={index === 24}>
                  <HourTime last style={{marginLeft: hour >= 10 ? -9 : -5}}>
                    {hour}
                  </HourTime>
                </Hour>
              )}
              <Hour key={`${date}-${index}`} last={index === 24}>
                <HourTime last={index === 24} style={{marginLeft: hour >= 10 ? -9 : -5}}>
                  {hour}
                </HourTime>
                {hour !== 24 && (
                  <HourLine>
                    <FirstHalf ref={firstHalf} />
                    <SecondHalf ref={secondHalf} />
                  </HourLine>
                )}
              </Hour>
            </>
          )
        })}
      </Timeline>
    </Wrapper>
  )
}

export default Day