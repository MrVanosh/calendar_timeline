import Calendar from './components/Calendar'

function App() {
  const calendar = [
    {
      startDate: '2020-10-25T02:00:00.0Z',
      endDate: '2020-10-25T03:00:00.0Z',
      status: 'available'
    },
    {
      startDate: '2020-10-25T03:00:00.000Z',
      endDate: '2020-10-25T03:30:00.000Z',
      status: 'notavailable'
    },
    {
      startDate: '2020-10-25T09:00:00.000Z',
      endDate: '2020-10-25T11:00:00.000Z',
      status: 'notavailable'
    },
    {
      startDate: '2020-10-25T15:00:00.000Z',
      endDate: '2020-10-25T17:00:00.000Z',
      status: 'delayed'
    },
    {
      startDate: '2020-10-26T12:00:00.000Z',
      endDate: '2020-10-26T13:00:00.000Z',
      status: 'available'
    },
    {
      startDate: '2020-10-26T13:00:00.000Z',
      endDate: '2020-10-26T14:00:00.000Z',
      status: 'notavailable'
    },
    {
      startDate: '2020-10-27T15:00:00.000Z',
      endDate: '2020-10-27T15:30:00.000Z',
      status: 'delayed'
    },
  ]

  return (
    <div>
      <Calendar calendar={calendar} />
    </div>
  );
}

export default App;
