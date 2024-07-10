import PropTypes from 'prop-types';
import Cooking from './Cooking/Cooking';

const Cookings = ({cookings}) =>  {
        return (
            <div className='md:w-1/2'>
            <h1 className='text-4xl'>Currently Cooking  :{cookings.length}</h1>
            {
                cookings.map(cooking => <Cooking key={cooking.id} cooking={cooking}></Cooking>)
            }



            <div><button className='btn btn-primary'>Cooking</button></div>
        </div>
        );
    }


Cookings.propTypes = {
 cooking: PropTypes.array
};

export default Cookings;