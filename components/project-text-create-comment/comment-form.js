import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { consolidateStreamedStyles } from 'styled-components'
import fetch from 'isomorphic-unfetch'
import { Mark } from 'slate'
import WithUserContext from '../../components/with-user-context/component'
import UserAvatarLogged from '../../elements/user-avatar-logged/component'
const API_URL = process.env.API_URL

const CommentFormContainer = styled.form`
  width: 300px;
  min-height: 305px;
  border-radius: 3px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border: solid 1px #dae1e7;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-sizing: border-box;
  cursor: pointer;
  z-index:2;
  position: absolute;
  left: 70%;
`

const CommentFormContent = styled.div`
  display:flex;
  min-height:210px;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  box-sizing:border-box;
  padding-left:20px;
  padding-right:20px;
  background-color:#fff;
  padding-top:2rem;
`
const CommentFormHeader = styled.div`
  height: 40px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #5c97bc;
  font-size:1.3em;
  color: #fff;
  display:flex;
  align-items:center;
  padding-left:20px;
  box-sizing:border-box;
`

const CommentFormFooter = styled.button`
  height: 5.5rem;
  border:none;
  font-size: 1.6rem;
  color: #5c97bc;
  border-top: 1px solid #dae1e7;
  font-size:1.3em;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  box-sizing:border-box;
  padding-left:20px;
  padding-right:20px;
  opacity: 0.5;
  cursor:pointer;
  :focus {outline:0;}

`
const CommentText = styled.textarea`
  font-size:1.4rem;
  color: #181818;
  width:100%;
  min-height:130px;
  resize:none;
  border-style: none; 
  border-color: Transparent; 
`
class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    console.log('Saving comment on DB...')
    event.preventDefault()
    fetch(`${API_URL}/api/v1/documents/${this.props.id}/comments`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        field: 'articles',
        content: this.state.value
      })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        console.log('Saved on DB...')
        this.setCommentId(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  setCommentId = (savedComment) => {
    console.log(`Adding ID ${savedComment._id} to mark...`)
    this.setState({
      showCommentForm: false
    })
    const mark = Mark.create({
      data: {
        'data-id': savedComment._id
      },
      'type': 'comment'
    })
    const value = this.props.editor
      .select(this.range)
      .toggleMark({ type: 'highlight' })
      .addMark(mark)
      .value

    console.log('Updating document', value)
    fetch(`${API_URL}/api/v1/documents/${this.props.id}/update/articles`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(value)
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Error!')
      }
      window.alert('Exito! Comentario agregado al articulo')
      console.log('Yay')
      // location.reload();
    }).catch((err) => {
      window.alert('Error al guardar tu comentario, intentá mas tarde')
      console.log(err)
    })
  }

  render () {
    return (
      <CommentFormContainer onSubmit={this.handleSubmit} style={{ top: this.props.top }}>
        <CommentFormHeader>Agregar comentario</CommentFormHeader>
        <CommentFormContent>
          <UserAvatarLogged
            avatarImg={'/static/assets/userdefault.png'}
            name={this.props.authContext.profile.name} />
          <CommentText
            placeholder='Agregue su comentario aquí'
            value={this.state.value}
            onChange={this.handleChange} />
        </CommentFormContent>
        <CommentFormFooter onClick={this.handleSubmit}>Enviar comentario</CommentFormFooter>

      </CommentFormContainer>
    )
  }
}

export default WithUserContext(CommentForm)
