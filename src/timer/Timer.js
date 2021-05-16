import React, {useEffect, useRef, useState} from 'react'
import styles from './Timer.module.css'
import Login from '../login/login';

function Timer({user}) {
    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    let interval = useRef()

    const startTimer = () => {
        const countDownDate = new Date('May 22, 2021 00:00:00').getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 24) / (1000 * 60)))
            const seconds = Math.floor((distance % (1000 * 60 ) / 1000))

            if(distance < 0){
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }


    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })


    return (
        <section className={styles.wrap}>
            <section className={styles.timerContainer}>
                <div>
                    {/*<span className='calendar'></span> */}
                    <h2 className={styles.titleContainer}>IT-KAMASUTRA PARTY STARTS IN:</h2>
                    {
                        !user && <Login />
                    }
                </div>
                <div>
                    <section>
                        <p>{timerDays}</p>
                        <p><small>days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p><small>hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p><small>minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p><small>seconds</small></p>
                    </section>
                </div>
            </section>

        </section>
    );
}

export default Timer