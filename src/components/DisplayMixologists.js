import axios from "axios"
import { useEffect, useState } from "react"

const DisplayMixologists = ()  => {
    const [mixologists, setMixologists] = useState([])

    useEffect (() => {
        axios
            .get('http://localhost:3000/api/v1/mixologists/')
            .then((res) => {
                const mixologist = res.data
                setMixologists(mixologist)
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <h1>coming soon</h1>
    )
}

export default DisplayMixologists