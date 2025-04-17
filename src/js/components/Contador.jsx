import React, { useEffect, useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";

export const Contador = () => {


    const [counter, setCounter] = useState(0)
    const [stopCounter, setStopCounter] = useState(false)
    const [lapCounter, setLapCounter] = useState(false)

    useEffect(() => {
        if (stopCounter) {
            const interValid = setInterval(() => {
                setCounter(counter + 1)
            }, 1000)
            return () => clearInterval(interValid)
        }

    }, [counter, stopCounter])


    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5 mt-3 crono d-flex justify-content-center align-items-center flex-wrap bg-body-bs">


                    <button type="button" className="btn btn-dark diseño fs-1 m-1">
                        <FontAwesomeIcon icon={faClock} />
                    </button>

                    <button type="button" className="btn btn-dark diseño m-1 fs-1">
                        <h1>{Math.floor((counter / 100000) % 10)}</h1>
                    </button>

                    <button type="button" className="btn btn-dark diseño m-1 fs-1">
                        <h1>{Math.floor((counter / 10000) % 10)}</h1>
                    </button>

                    <button type="button" className="btn btn-dark diseño m-1 fs-1">
                        <h1>{Math.floor((counter / 1000) % 10)}</h1>
                    </button>

                    <button type="button" className="btn btn-dark diseño m-1 fs-1">
                        <h1>{Math.floor((counter / 100) % 10)}</h1>
                    </button>

                    <button type="button" className="btn btn-dark diseño m-1 fs-1">
                        <h1>{Math.floor((counter / 10) % 10)}</h1>
                    </button>

                    <button type="button" className="btn btn-dark diseño m-1 fs-1">
                        <h1>{Math.floor((counter / 1) % 10)}</h1>
                    </button>

                    <button
                        type="button"
                        className="btn btn-dark diseño m-1"
                        onClick={() => setStopCounter(!stopCounter)}>
                        {!stopCounter ? "Start" : "Stop"}
                    </button>

                </div>
            </div>


        </>


    );
};
