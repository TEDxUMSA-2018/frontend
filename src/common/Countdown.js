import React from 'react';

export default class Countdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTimestamp: 0,
            remainingDays: 0,
            remainingHours: 0,
            remainingMins: 0,
            remainingSecs: 0,
        }
    }

    componentDidMount() {
        this.setState({
            currentTimestamp: new Date().getTime()
        });
        setInterval( () => {
            this.calculateRemaining();
        } )
    }
    
    render() {
        return (
            <div
                className='countdown'
            >
                <div>
                    {this.state.remainingDays} días
                    {this.state.remainingHours} horas
                    {this.state.remainingMins} minutos
                    {this.state.remainingSecs} segundos
                </div>
            </div>
        )
    }

    calculateRemaining = () => {
        let difference = this.props.deadline - this.state.currentTimestamp;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        this.setState({
            remainingDays: days,
            remainingHours: hours,
            remainingMins: minutes,
            remainingSecs: seconds
        })
    }
}