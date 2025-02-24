import PropTypes from 'prop-types';
import { CLOUDINARY_URL } from '../utils/constants';

// Restaurant card component
const RestaurentCard = (props) => {
  const { restData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
  } = restData.info;
  const { deliveryTime } = restData.info.sla;

  return (
    <div className="flex flex-col space-y-2 transform transition-all duration-300 hover:scale-95 hover:cursor-pointer rest-card">
      <div className="w-60 h-40 rounded-xl overflow-hidden ">
        <img
          className="w-full h-full object-cover rest-img"
          src={CLOUDINARY_URL + cloudinaryImageId}
          alt="Rest-img"
        />
      </div>

      <div className="rest-info">
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export const withOpenLabel = (RestCard) => {
  const WithOpenLabel = (props) => {
    return (
      <div >
        <div className='absolute z-10 bg-black text-white px-3 py-1 rounded-tl-lg rounded-br-xl -ml-1.5 '>Opened</div>
        <RestCard {...props} />
      </div>
    );
  };

  // Add displayName for debugging
  WithOpenLabel.displayName = `WithOpenLabel(${RestCard.displayName || RestCard.name || 'Component'})`;

  return WithOpenLabel;
};

RestaurentCard.propTypes = {
  restData: PropTypes.shape({
    info: PropTypes.shape({
      cloudinaryImageId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avgRating: PropTypes.number.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
      areaName: PropTypes.string.isRequired,
      costForTwo: PropTypes.string.isRequired,
      sla: PropTypes.shape({
        deliveryTime: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default RestaurentCard;