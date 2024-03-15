import axios from "axios";
import { useEffect, useState } from "react";

const getData = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        try {
            setLoading(true)
            axios.get(url).then((response) => {
                setData(response.data)
            })
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    return { data, loading, error }
}

export default getData