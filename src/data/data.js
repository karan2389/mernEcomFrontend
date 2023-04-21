import headphones from "../assets/category/cat-1.jpg"
import smartWatches from "../assets/category/cat-2.jpg"
import speakers from "../assets/category/cat-3.jpg"
import earbuds from "../assets/category/cat-4.jpg"




export const productTypes = [ 
    {
        name: 'Headphones',
        img: headphones,
        id: crypto.randomUUID()
    },
    {
        name: 'Smart Watches',
        img: smartWatches,
        id: crypto.randomUUID()
    },
    {
        name: 'Portable Speakers',
        img: speakers,
        id: crypto.randomUUID()
    },
    {
        name: 'Bluetooth Earbuds',
        img: earbuds,
        id: crypto.randomUUID()
    },
]