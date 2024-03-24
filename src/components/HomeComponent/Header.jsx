import bg from '../../assets/imgs/headerImg/header.png';

const Header = () => {
  return (
    <div className='p-12 w-100 flex' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
      <div className='flex flex-col'>
        <div className='mb-4'>
            <h1 className='text-3xl font-extrabold  ' style={{ backgroundImage: 'linear-gradient(90deg, #00baff, #f39807)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Deri Protocol
            </h1>
        </div>
        <div className='border border-sky-500 w-12 mb-2'></div>
        <div>
            <p className='text-white text-xs'>
                The Most Secure Cryptocurrency Trading Platform
            </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
