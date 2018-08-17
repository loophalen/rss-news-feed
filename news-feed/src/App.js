import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import News from './components/News'

class App extends React.Component {
  render() {
    return (
    <div>
      <Titles />
      <Form />
      <News />
    </div>
    )
  }
}

export default App
