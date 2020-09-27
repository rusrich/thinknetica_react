import React from 'react'

class Feedback extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Укажите Имя',
      email: 'example@email.com',
      question: 'Задайте вопрос'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const {name, email, question} = this.state
    return (
      <div id="feedback">
        <h3>Форма обратной связи</h3>
        <form onSubmit={this.handleSubmit}>
          <Field type='name' name='name' value={name} label='Имя' onChange={this.handleChange}/>
          <Field type='email' name='email' value={email} label='E-mail' onChange={this.handleChange}/>
          <Field type='question' name='question' value={question} label='Вопрос' onChange={this.handleChange}/>
          <input type="submit" value="Отправить"/>
        </form>
      </div>
    )
  }
}

export default Feedback

const Field = (props) => {
  const Element = props.type === 'question' ? 'textarea' : 'input'
  return (
    <>
      <label>{props.label}</label>
      <div><Element name={props.name} onChange={props.onChange} value={props.value}/></div>
    </>
  )
}