import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import Navbar from "./Navbar";

function ItemInfo() {

    const navigate = useNavigate();
    const { strCategory = "" } = useParams();
    const [data, setData] = useState([]);


    const [loading, setloading] = useState(false)

    useEffect(() => {

        if (strCategory !== "") {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {

                    setloading(false);
                    setData(data.meals || []);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
        else {
            setloading(true);
        }
    }, [strCategory]);



    return (
        <>
            <Navbar />
            <div className="content mt-[50px]">
                <div>
                    <h1 id="heading" className="text-left text-2xl">{strCategory}</h1>
                </div>
                <div className="cards" >
                    {data && !loading ? (
                        data.map((ele) => {
                            return (
                                <div key={ele.idMeal} className="card" onClick={() => navigate(`/${ele.idMeal}`)}>
                                    <div className="img-box"><img src={ele.strMealThumb} className="" alt="" /></div>
                                    <div className="title text-xl pb-[14px] text-red-800"><h3>{ele.strMeal}</h3></div>
                                </div>
                            );
                        })
                    ) : (
                        <ClockLoader className="mt-36" color="green" size={50} loading />
                    )}
                </div>
            </div>
        </>
    );
}

export default ItemInfo;
