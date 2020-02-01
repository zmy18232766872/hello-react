import React, { Component } from 'react'

class CommentInput extends Component {
  // 保存用户名&评论
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit () {
    // 判断 props 中是否传入了 onSubmit 属性,有的话把用户输入的用户名和评论数据传入该函数
    // 通过 setState 清空用户输入的评论内容
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({ content: '' })
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea  value={this.state.content}  onChange={this.handleContentChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
