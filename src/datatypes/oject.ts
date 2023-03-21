// Object declaration
const sinhvien: { name: string, grade: number, hometown: string, age: number } = {
    name: "Tài",
    grade: 5,
    age: 20,
    hometown: "Thái Bình",
}

const sinhvien2: { name: string, grade: number, hometown: string, age: number } = {
    name: "Thanh",
    grade: 5,
    age: 20,
    hometown: "Nam Định",
}

interface IBook {
    authors: Author[],
    book_cover?: string,
    categories: { id: number, name: string, is_leaf: boolean },
    description: string,
    images: Image[],
    list_price: number,
    name: string
    original_price: number,
    quantity_sold: {
        text: string,
        value: number
    },
    rating_average: Number,
    short_description: string
    specifications: {
        name : string,
        attributes : attribute[]
        id : number
    }
}

interface Author {
    id: number,
    name: string,
    slug: string
}

interface Image {
    base_url: string,
    is_gallery: boolean,
    label: string,
    large_url: string
}
interface  attribute{
    code: string,
    name: string,
    value:string
}

type user = {
    name : string
    id : string
}

type user1 = user & {
    id : number
}

function test( a : user | string){
                    
}