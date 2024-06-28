const Header = () => {
    return (
        
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Mothers Secret Recipe</a>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <div className="flex gap-8 mr-36">
            <button>Home</button>
            <button>Recipes</button>
            <button>About</button>
            <button>Blogs</button>
          </div>
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
       
      </div>
      
    );
  };
  
  export default Header;
  