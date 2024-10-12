import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function MealItem({ data }) {
    const navigate = useNavigate();

    if (!data || data.length === 0) {
        return <div className="text-center text-lg">No meals found.</div>; // Handle empty data case
    }

    return (
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
                <div
                    key={item.idMeal}
                    className="card cursor-pointer transition-transform transform hover:scale-105"
                    onClick={() => navigate(`/${item.idMeal}`)}
                >
                    <div className="img-box">
                        <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="title text-xl pb-[14px] text-red-800">
                        <h3>{item.strMeal}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

// PropTypes validation
MealItem.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            idMeal: PropTypes.string.isRequired,
            strMealThumb: PropTypes.string.isRequired,
            strMeal: PropTypes.string.isRequired,
        })
    ),
};

export default MealItem;
