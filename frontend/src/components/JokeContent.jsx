/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { filterJokes, getCookie, getJokes, getOneJoke, setCookie, setVoteJokes } from "../utils"
import { JOKES_COOKIE } from "../utils/constant"

const JokeContent = () => {

    const [jokes, setJokes] = useState([])
    const [votedJokes, setVotedJokes] = useState(getCookie(JOKES_COOKIE))
    const [currJoke, setCurrJoke] = useState({})
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const fetchJokes = async () => {
            try {
                setLoading(true)
                let data = await getJokes()

                data = filterJokes(data, votedJokes)
                setJokes(data)
                setCurrJoke(getOneJoke(data))
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }

        fetchJokes()
    }, [])

    useEffect(() => {
        const newData = filterJokes(jokes, votedJokes);
        setJokes(newData)
        setCookie(JOKES_COOKIE, JSON.stringify(votedJokes))
    }, [votedJokes])

    useEffect(() => {
        setCurrJoke(getOneJoke(jokes))
    }, [jokes])

    const handleVoteJoke = (isFunny) => {
        setVoteJokes(currJoke.id, isFunny)
        setVotedJokes((pre) => [...pre, currJoke.id])
    }

    return (
        <div className="bg-gray-100 flex-1 ">
            <div className='w-full h-full md:w-2/3 md:mx-auto px-4 py-10 md:p-10 flex flex-col'>
                {
                    isLoading ? null : (
                        currJoke ? (
                            <>
                                <div className="py-6 px-4 text-black text-opacity-70 text-sm md:text-base">
                                    <p>{currJoke.content}</p>
                                </div>
                                <div className='mx-auto w-full px-8 sm:px-10 md:px-0 lg:w-2/4 text-white mt-auto mb-4'>
                                    <div className="flex space-x-6 sm:space-x-10 md:space-x-6">
                                        <button
                                            className='bg-secondary flex-1 py-2 shadow'
                                            onClick={() => handleVoteJoke(1)}
                                        >
                                            This is Funny!
                                        </button>
                                        <button onClick={() => handleVoteJoke(0)} className='bg-primary flex-1 py-2 shadow'>This is not funny.</button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="py-6 px-4 text-black text-opacity-70 text-center">
                                <p>{`That's all the jokes for today! Come back another day!`}</p>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default JokeContent