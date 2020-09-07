import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            output: "",
            template: 'h:m:s'
        };
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.convertDate()
        this.setState({
            date: new Date()
        });
    }

    convertDate() {
        let hours = this.state.date.getHours();
        if (hours < 10) hours = '0' + hours;
        if (hours > 12) hours = hours - 12;

        let mins = this.state.date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = this.state.date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.state.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        if (this.state.date.getHours() > 12) {
            this.setState({
                output: `${output} PM`
            })
        } else {
            this.setState({
                output: `${output} AM`
            })
        }
    }

    render() {
        return (
            <h2 style={{display: "inline-block"}}>Sekarang jam : {this.state.output}</h2>
        );
    }
}

export default Timer;