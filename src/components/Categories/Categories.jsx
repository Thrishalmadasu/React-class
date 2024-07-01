// Categories.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../store/CategoriesReducer";
import './Categories.css';
function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories); // Adjust the path to match your state shape

    useEffect(() => {
        dispatch(loadCategories());
    }, [dispatch]);

    return (
        <div className="cat-div">
            <h1>Categories</h1>
            <div className="div-cat">
                {categories.map((item) => (
                    <div className="categor">
                    <div key={item.id}>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;