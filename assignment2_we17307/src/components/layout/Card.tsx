
const Card = () => {
    return (
        <a href="detail.html?id=${book.id}">
            <div className="flex flex-col sm:block items-center">
                <img className="max-h-[200px]" src="./sp1.png" alt="" />
                <p className="mt-2">iPhone 11 64GB I Chính hãng VN/A</p>
                <div className="my-2 flex gap-x-4">
                    <div className="flex gap-x-3">
                        <button className="flex items-center active:text-red-300 hover:text-red-500">
                            10.790.000 ₫
                            <p className="text-yellow-500">
                                18.000.000 ₫
                            </p></button>
                        <p></p>
                    </div>
                </div>
                <p className="text-red-500">  </p>
            </div>
        </a>
    )
}

export default Card
