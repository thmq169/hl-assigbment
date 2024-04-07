import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="md:w-2/3 md:mx-auto pb-1">
            <div className="flex justify-between">
                <div>
                    <Link to="/">
                        <img className="h-[5rem]" src="/logo.png" />
                    </Link>
                </div>
                <div className="flex items-center space-x-3 mr-4 md:mr-0">
                    <div className="text-right">
                        <p className="text-sm text-gray-400">Handicrafted by</p>
                        <h4 className="text-base">Jim HLS</h4>
                    </div>
                    <div className="overflow-hidden rounded-full w-14 h-14 flex items-center justify-startx">
                        <img src="/avatar.jpg" alt="" className="object-cover block" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
