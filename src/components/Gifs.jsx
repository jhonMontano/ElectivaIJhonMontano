import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const Gifs = () => {

    const categories = ['Soccer', 'Tennis', 'Basketball', 'Baseball', 'Cycling', 'Swimming'];

    const [category, setCategory] = useState(categories[0]);

    const [resulData, setResultData] = useState({
        region: '',
        gifs: []
    });

    useEffect(() => {
        getGifs(category).then(
            gifData => {
                const { gifs } = gifData;

                setResultData({
                    region: category,
                    gifs: gifs
                })
            }
        )
    }, [category]);

    const onSelectChange = (event) => {
        setCategory(event.target.value)
    }

    return (
        <>
            <div className="border border-dark border-3 p-2 rounded p-5" style={{ width: '80%', margin: 'auto' }}>
                <div className="container mt-4">
                    <h1 className="mb-4" style={{ textAlign: 'center' }}>Gifs by Sport</h1>
                    <label htmlFor="category">Select a Sport</label>
                    <select
                        name="category"
                        id="category"
                        onChange={onSelectChange}
                        className="form-control mb-3"
                    >
                        {categories.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <h2>Sport: <span>{resulData.region}</span></h2>
                    <hr className="border border-dark border-2" />

                    <div className="row row-cols-1 row-cols-md-4">
                        {resulData.gifs.map((gif, index) => (
                            <div key={index} className="col mb-2">
                                <div className="card">
                                    <img
                                        src={gif}
                                        alt={`Gif ${index + 1}`}
                                        className="card-img-top img-fluid"
                                        style={{ width: '410px', height: '280px' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};