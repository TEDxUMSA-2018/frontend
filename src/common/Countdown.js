import React from 'react';

const MILLISECONDS = 1000;

class Countdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            remainingDays: 0,
            remainingHours: 0,
            remainingMins: 0,
            remainingSecs: 0
        };
    }

    componentWillMount() {
        this.interval = setInterval(this.onIntervalChange, MILLISECONDS);
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        const {
            remainingDays,
            remainingHours,
            remainingMins,
            remainingSecs
        } = this.state
        // return (
        //     <div className="countdown card">
        //         <footer className="card-footer">
        //             <p className="card-footer-item">
        //                 {remainingDays}
        //                 <br/> días
        //             </p>
        //             <p className="card-footer-item">
        //                 {remainingHours}
        //                 <br/> horas
        //             </p>
        //             <p className="card-footer-item">
        //                 {remainingMins}
        //                 <br/> minutos
        //             </p>
        //             <p className="card-footer-item">
        //                 {remainingSecs}
        //                 <br/> segundos
        //             </p>
        //         </footer>
        //     </div>
        // );
        return (
            <div className="column is-4 is-5-fullhd is-offset-1-fullhd">
                <div className="section-header has-text-centered">
                    <h1 className="day-number title">{remainingDays}</h1>
                    <h2 className="days subtitle is-3">días</h2>
                </div>
            </div>
        );
        
    }

    onIntervalChange = () => {
        let currentTimestamp = new Date().getTime()
        let difference = this.props.deadline - currentTimestamp;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        

        this.setState({
            remainingDays: this.addLeadingZero(days),
            remainingHours: this.addLeadingZero(hours),
            remainingMins: this.addLeadingZero(minutes),
            remainingSecs: this.addLeadingZero(seconds)
        });
        
        if (this.state.remainingDays === 0) {
            this.stop();
        }
    }

    stop() {
        if (this.interval !== null) {
          clearInterval(this.interval);
        }
    }

    addLeadingZero = num => 
        num < 10 ? `0${num}` : num;
}

export { Countdown }