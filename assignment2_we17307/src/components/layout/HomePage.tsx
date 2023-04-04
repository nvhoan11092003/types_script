import Card from "./Card"
import Banner from "./Banner"
const HomePage = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="p-3">ĐIỆN THOẠI NỔI BẬT NHẤT</div>
            <div className=" grid grid-cols-7">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}

export default HomePage
