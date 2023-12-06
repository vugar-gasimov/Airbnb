import ImgOne from "../images/group-1.webp";
import ImgTwo from "../images/group-2.webp";
const Hero = () => {
  return (
    <div className="hero--container">
      <div className="hero--img-container">
        <img
          srcSet={`${ImgOne} 1x, ${ImgTwo} 2x`}
          alt="People enjoyig different hobbys"
        />
      </div>
      <div className="hero--text-container">
        <h1 className="hero--title">Online Experiences</h1>

        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
