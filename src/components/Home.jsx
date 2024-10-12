import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { RiSearchLine } from "react-icons/ri";
import MealItem from "./MealItem";
import { BounceLoader } from "react-spinners";
import '../components/css/responsive.css';
import Items from "./Items";

function Home() {
    const [search, setSearch] = useState("");
    const [Mealdata, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // For error handling
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

    useEffect(() => {
        if (url !== "") {
            setLoading(true);
            setError(null); // Reset error state before fetching
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data.meals || []);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setError('Failed to fetch data. Please try again later.'); // Set error message
                    setLoading(false);
                });
        }
    }, [url]);

    const searchRecipe = () => {
        if (search === "") {
            setUrl("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
        } else if (search.length >= 2) {
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="box flex flex-col w-full">
                    <div className="flex justify-center gap-2 items-center">
                        <input
                            type="text"
                            className="border py-2 px-4 border rounded-[25px] border-[#E64833]"
                            placeholder="Search the recipe"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <RiSearchLine
                            size={20}
                            className="mt-5 cursor-pointer hover:shadow-xl transition duration-300 bg-[#E64833] w-[38px] h-[38px] rounded-[50%] flex justify-center items-center p-2"
                            onClick={searchRecipe}
                        />
                    </div>
                    {loading ? (
                        <div className="flex justify-center items-center mt-20">
                            <BounceLoader size={32} color={"#E64833"} />
                        </div>
                    ) : (
                        <>
                            {error && (
                                <div className="text-red-500 text-center mt-4">
                                    {error}
                                </div>
                            )}
                            {Mealdata.length > 0 ? (
                                <div className="mt-20">
                                    <h1 id="heading" className="text-left text-2xl">MEALS</h1>
                                    <div className="items mt-12">
                                        <MealItem data={Mealdata} />
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center mt-4">
                                    <h2 className="text-lg">No meals found.</h2>
                                </div>
                            )}
                        </>
                    )}
                    <div className="mt-20">
                        <h1 id="heading" className="text-left text-2xl">Categories</h1>
                        <div className="items mt-12">
                            <Items />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
