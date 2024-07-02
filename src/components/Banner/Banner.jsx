import Cover from '../../assets/images/cover.jpeg'
const Banner = () => {
    return (
      <div
        className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white rounded-xl"
        style={{ backgroundImage: `url(${Cover})` }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Mothers Secret Recipe</h1>
        <p className="text-xl mb-6">Discover the best recipes handed down from generations.</p>
        <div className="flex gap-4">
          <button className="btn btn-success">Explore Now</button>
          <button className="btn btn-active btn-neutral">Our Feedback</button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  