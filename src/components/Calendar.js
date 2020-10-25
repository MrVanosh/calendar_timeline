import React from 'react'
import styled from 'styled-components'
import Day from './Day'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 870px) {
    flex-direction: row;
  }
`

// Formatowanie daty na RRRR-MM-DD (aby podzielić dane na odpowiednie dni)
function formatDate(date) {
  const newDate = new Date(date)
  const month = newDate.getMonth() < 10 ? `0${newDate.getMonth()}` : newDate.getMonth()
  const day = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()
  return `${newDate.getFullYear()}-${month}-${day}`
}

function Calendar(props) {
  let dates = props.calendar.map(el => formatDate(el.startDate)).filter((val, index, self) => self.indexOf(val) === index) // Unikalne daty, które występują
  dates = dates.map(date => {
    const correspondingData = props.calendar.filter(data => formatDate(data.startDate) === date)
    return {
      date: date,
      data: correspondingData
    }
  }) // Stworzenie listy obiektów danych dni

  return (
    <Wrapper {...props}>
      {dates.map(({data, date}) => <Day date={date} data={data} />)}
    </Wrapper>
  )
}

export default Calendar