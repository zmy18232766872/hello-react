import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}

class LikeButton extends Component {
  // props默认配置
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

  constructor () {
    super()
    this.state = { isLiked: false } // isLiked 存放在实例的 state 对象当中
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render () {
    const wordings = this.props.wordings || {
      likedText: '取消',
      unlikedText: '点赞'
    }
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? wordings.likedText : wordings.unlikedText} 👍
      </button>
    )
    // return (
    //   <button onClick={this.handleClickOnLikeButton.bind(this)}>
    //     {this.state.isLiked ? '取消' : '点赞'} 👍
    //   </button>
    // )
  }
}

class Title extends Component {
  handleClickOnTitle (word, e) {
    console.log(this, word)
    console.log(e.target.innerHTML)
    console.log('Click on title.')
  }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this, 'hello')}>React 小书</h1>
    )
  }
}

class Header extends Component {
  render () {
    return (
    <div>
      <Title />
      <h2>This is Header</h2>
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main content</h2>
    </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
    <div>
      <h2>This is footer</h2>
    </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        {users.map((user, i) => <User user={user} key={i} />)}
        <LikeButton
          wordings={{likedText: '已赞', unlikedText: '赞'}}
          onClick={() => console.log('Click on like button!')}/>
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)