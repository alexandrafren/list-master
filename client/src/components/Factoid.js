import React, { Component } from 'react'

class Factoid extends Component {
  constructor(){
    super();
    this.state = {
        facts: ["'Something that can be done at any time is often done at no time.'-Gretchen Rubin",
         "Make less decisions. President Obama and Steve Jobs notably wore the same, or almost the same, outfit every day to reduce the number of decisions they needed to make.",
          "Decision fatigue is a decline in energy and focus after making multiple decisions",
          "Try the Pomodoro Technique to get work done without getting burnout. Work for 25 minutes, then take a 5 minute break. After 2 hours, take a twenty minute break.",
          "According to the Zeigarnik effect, once we start a task, our brains become obsessed with finishing it. Force yourself to work on a task for 5 minutes before abandoning it. If you still can't motivate yourself to do it, come back to it later."],
          interval: 0
    }
  }

  componentDidMount(){
      setInterval(this.setIntervalFunc, 10000)
  }

  setIntervalFunc = () => {
      if (this.state.interval < 4) {
          this.setState({
              interval: this.state.interval + 1
          })
      }
      else {
          this.setState({
              interval: 0
          })
      }
  }


  render() {
    return(
      <>
        {this.state.facts[this.state.interval]}
      </>
    )
  }

}

export default Factoid;