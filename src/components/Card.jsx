
const Card = ( {card} ) => {
    const { id, image, name } = card;
    console.log(name)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl border-4 border-red-700">
                <figure><img src={image} alt="Car" /></figure>
                {/* <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Card;