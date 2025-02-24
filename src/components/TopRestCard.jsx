import { CLOUDINARY_URL } from '../utils/constants';

// restaurent card component
const TopRestCard = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } =
    restData.info;
  const { deliveryTime } = restData.info.sla;

  return (
    <div className="flex flex-col space-y-2 rest-card transform transition-all duration-300 hover:scale-95 hover:cursor-pointer">
    <div className="w-60 h-40 rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-cover rest-img"
        src={CLOUDINARY_URL + cloudinaryImageId}
        alt="Rest-img"
      />
    </div>
  
    <div className="rest-info">
      <h3 className="rest-info-text">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines}</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  </div>
  
  );
};

export default TopRestCard;
