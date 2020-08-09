import React from 'react'

class Feedback extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: 'Укажите Имя',
      email: 'Укажите email',
      question: 'Задайте вопрос'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { name, email, question} = this.state
    return (
      <div id="feedback">
        <h3>Форма обратной связи</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div><label>Имя:</label></div>
            <input name='name' value={name} onChange={this.handleChange} />
          </div>
          <div>
            <div><label>Имя:</label></div>
            <input name='email' value={email} onChange={this.handleChange} />
          </div>
          <div>
            <div><label>Зайдайте вопрос:</label></div>
            <textarea name='question' value={question} onChange={this.handleChange} />
          </div>
          <input type="submit" value="Отправить" />
        </form>
      </div>

    )
  }
}

export default Feedback