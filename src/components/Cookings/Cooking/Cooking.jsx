import PropTypes from 'prop-types';
const Cooking = ({cooking}) => {
    const {recipe_name} = cooking;
    return (
        <div>
            <h3 className='text-3xl'>{recipe_name}</h3>
            
        </div>
    );
};
Cooking.propTypes = {
    cooking: PropTypes.object
}
export default Cooking;