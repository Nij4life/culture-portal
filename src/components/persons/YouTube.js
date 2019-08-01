import React from 'react'
import ModalVideo from 'react-modal-video'
import './YouTube.css'

export default class YouTube extends React.Component {

    constructor () {
      super()
      this.state = {
        isOpen: false
      }
      this.openModal = this.openModal.bind(this)
    }
  
    openModal () {
      this.setState({isOpen: true})
    }
  
    render () {
      return (
        <>
          <ModalVideo 
            channel='youtube' 
            isOpen={this.state.isOpen} 
            videoId={this.props.videoId} 
            onClose={() => this.setState({isOpen: false})} 
           />
          <button className="open" onClick={this.openModal}>Open</button>
        </>
      )
    }
  }