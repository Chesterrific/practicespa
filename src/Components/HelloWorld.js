import React from 'react'

class HellowWorld extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  }
}

export default HellowWorld