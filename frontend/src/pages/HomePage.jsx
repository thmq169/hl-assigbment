import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import JokeContent from "../components/JokeContent"

const HomePage = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Banner />
            <JokeContent />
            <Footer />
        </div>
    )
}

export default HomePage