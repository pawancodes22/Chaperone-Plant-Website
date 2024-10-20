const obj = [
    {
        "imageUrl": "https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729336004/Chaperonw/Plant1_upfzrs.png",
        "name": "Monsterra",
        "specification": "Outdoor Plant, Low maintenance",
        "rating": 4.9,
        "originalPrice": 359,
        "finalPrice": 299
    },
    {
        "imageUrl": "https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729336010/Chaperonw/Plant2_jjlt0j.png",
        "name": "Dracaena",
        "specification": "Indoor Plant, High maintenance",
        "rating": 4.3,
        "originalPrice": 450,
        "finalPrice": 249
    },
    {
        "imageUrl": "https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729336018/Chaperonw/Plant3_qagiwt.png",
        "name": "Hygrophilia",
        "specification": "Indoor Plant, Low maintenance",
        "rating": 4.9,
        "originalPrice": 350,
        "finalPrice": 199
    },
    {
        "imageUrl": "https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729350295/Chaperonw/Potted_Banana_lybn6j.jpg",
        "name": "Potted Banana",
        "specification": "Indoor Plant, Low Maintenance",
        "rating": 4.8,
        "originalPrice": 599,
        "finalPrice": 449
    }
]


const data = Array(30).fill().map((_, index) => {
    const product = obj[index % obj.length];
    return { ...product, id: index + 1 };
});

export default data