import React, { Component } from "react"
import Timer from "./Timer.jsx";

class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 100,
            showTime: true,
        }
    }

    componentDidMount() {
        this.countdownID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.showTime) {
            if (this.state.time <= 0) {
                this.setState({
                    showTime: false
                })
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.countdownID);
    }

    tick() {
        this.setState({
            time: this.state.time - 1
        });
    }

    render() {
        return (
            <>
                {
                    this.state.showTime && (
                        <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
                            <Timer />
                            <h2 style={{ textAlign: "right", display: "inline-block" }}>
                                hitung mundur: {this.state.time}
                            </h2>
                        </div>
                    )
                }
            </>
        )
    }
}

export default Countdown;
