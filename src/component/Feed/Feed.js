import './feed.css';
import './../../tail.css';
import ell1 from './../assets/ellps1.svg';
import ell2 from './../assets/ellps2.svg';
import ell3 from './../assets/ellps3.svg';
import searcher from './../assets/searcher.svg';
import person from './../assets/image-of-young-brunette-asian-woman-smiling-and-ho-2021-08-30-02-13-34-utc 1.svg';
import viewAll from './../assets/viewAll.svg'
import { useState } from 'react'
import Baked from './../assets/Baked.svg'
import Burger from './../assets/Burger.svg'
import Coffee from './../assets/Coffee.svg'
import Chicken from './../assets/Chicken.svg'
import Fast from './../assets/Fast.svg'
import Fish from './../assets/Fish.svg'
import fishBurger from './../assets/fishBurger.svg'
import beefBurger from './../assets/beefBurger.svg'
import cheeseBurger from './../assets/cheeseBurger.svg'
import notliked from './../assets/notliked.svg'
import liked from './../assets/liked.svg'
import stars from './../assets/Star 1.svg'
import bg from './../assets/bg.svg'
import button from './../assets/button.svg'
import japanRamen from './../assets/japanRamen.svg'
import friedRice from './../assets/friedRice.svg'
import fish_burger from './../assets/fish_Burger.svg'
const recentOrder = [
  {
    name : 'Fish Burger',
    price : 5.59,
    img : fish_burger,
    distant : '4.97 km',
    time : '21 min'
  },
  {
    name : 'Japan Ramen',
    price : 5.59,
    img : japanRamen,
    distant : '4.97 km',
    time : '21 min'
  },
  {
    name : 'Fried Rice',
    img : friedRice,
    distant : '4.97 km',
    time : '21 min',
    price: 5.59
  }
]

const burgers = [
   {
    name: 'Fish Burger',
    price : 5.59,
    img : fishBurger,
    star : 3,
  },
  {
    name : 'Beef Burger',
    price : 5.59,
    img : beefBurger,
    star : 5,
  },
  {
    name : 'Cheese Burger',
    price : 5.59,
    img : cheeseBurger,
    star : 4,
  }
]

const items = {
  baked : {
    name: 'Bakery',
    img : Baked
  },
  burger : {
    name :'Burger',
    img : Burger
  },
  beverage :{
    name :'Beverage',
    img : Coffee
  },
  chicken : {
    name :'Chicken',
    img : Chicken
  },
  fast : {
    name :'Pizza',
    img : Fast
  },
  fish : {
    name : 'Seafood',
    img : Fish
  }
}
export default function Feed() {
  const [isRotated, setIsRotated] = useState(false);
  const [isLiked , setIsLiked] = useState(false);
  const [isLikedForRecent , setIsLikedForRecent] = useState(false)
  const makeLikeOrNotLikedForRecent = (key) =>{
    setIsLikedForRecent((isLikedForRecent) =>({
      ...isLikedForRecent, [key] : !isLikedForRecent[key],
    }))
  }
  const makeLikedOrNotLiked = (key) =>{
    setIsLiked((isLiked) =>({
      ...isLiked, [key] : !isLiked[key],
    }))
  }
  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };
  return (
    <div className='flex flex-col w-1/2 bg-gray-100 h-auto items-center'>
      <div className='flex flex-row justify-around mt-3 items-center'>
        <h3 className='w-[256px] font-poppins text-[26px] font-bold leading-[44px] text-[#2E2E2E]'>
          Hello, Patricia
        </h3>
        <div className="w-[253px] h-[30px] flex flex-row p-[2px_32px_2px_24px] gap-[8px] rounded-[16px] bg-white">
          <img className="w-[24px] h-[24px] text-[#F8B602]" src={searcher} alt="search"/>
          <input
            type="text"
            className="w-[268px] h-[27px] font-poppins text-[12px] font-normal leading-[27px] text-left text-[#A098AE] focus:outline-none focus:ring-2 focus:ring-[#F8B602]"
            placeholder="What do you want to eat today..."
          />
        </div>
      </div>

      <div className='bg-[#F8B602] w-[97%] h-[140px] rounded-[16px] mt-8 flex flex-row justify-around relative'>
        <div>
          <div className="justify-start font-poppins text-[32px] font-bold leading-[32px] text-left text-white">
            <span className="block font-poppins text-[22px] font-bold text-white">Get Discount Voucher</span>
            <span className="block font-poppins text-[22px] font-bold text-white">Up To 20%</span>
          </div>
          <div className="font-poppins text-[12px] font-normal leading-[22px] text-left text-[#FFFFFF]">
            <span
              className="block text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
            <span className="block text-[#FFFFFF]">eiusmod tempor incididunt.</span>
          </div>
        </div>
        <img src={person} className='w-[250px] h-[141px]' alt="person"/>

        <img src={ell1} className='w-[85px] h-[85px] absolute bottom-0 left-0' alt="ellipse1"/>
        <img src={ell3} className='w-[125px] h-[125px] absolute top-0 right-[155px]' alt="ellipse3"/>
        <img src={ell2} className='w-[85px] h-[85px] absolute bottom-0 right-0' alt="ellipse2"/>
      </div>

      <div>
        <div className='flex flex-row justify-between gap-80 mt-3'>
          <text
            className='w-[117px] h-[36px] font-poppins text-[19px] font-bold leading-[36px] text-left text-[#2E2E2E]  decoration-skip-ink-none'>Category
          </text>
          <div className='flex flex-row object-center items-center cursor-pointer'>
            <text
              className='w-[69px] h-[27px] font-poppins text-[16px] font-normal leading-[27px] text-left decoration-skip-ink-none text-[#F8B602]'>
              View all
            </text>
            <img src={viewAll} className={`mt-1 ${isRotated ? 'rotate-90' : 'rotate-0'}`}
                 onClick={toggleRotation}/>
          </div>
        </div>
        <div className='flex flex-row gap-5 mt-3'>
          {Object.keys(items).map((key) => (
            <div key={key}
                 className="w-[85px] h-[85px] gap-[8px] rounded-[16px] bg-white flex flex-col justify-center items-center cursor-pointer">
              <img src={items[key].img} alt={items[key].name} className="w-[40px] h-[40px]  "/>
              <p
                className="w-[60px] h-[17px] font-poppins text-[14px] font-normal leading-[25px] text-center text-[#A098AE] decoration-skip-ink-none">{items[key].name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className='flex flex-row justify-between gap-[350px] mt-3'>
          <text
            className='w-[184px] h-[36px] font-poppins text-[20px] font-bold leading-[36px] text-left text-[#2E2E2E]  decoration-skip-ink-none'>Popular
            Dishes
          </text>
          <div className='flex flex-row object-center items-center cursor-pointer'>
            <text
              className='w-[69px] h-[27px] font-poppins text-[16px] font-normal leading-[27px] text-left decoration-skip-ink-none text-[#F8B602]'>
              View all
            </text>
            <img src={viewAll} className={`mt-1 ${isRotated ? 'rotate-90' : 'rotate-0'}`}
                 onClick={toggleRotation}/>
          </div>
        </div>

        <div className='flex flex-row  justify-center gap-5'>
          {burgers.map((item, index) => (
            <div className='rounded-[16px] flex flex-col w-[180px] h-auto'>
              <div key={index} className='bg-white flex flex-row justify-between mt-2'>
                <div className="relative inline-block">
                  <img src={bg} alt="Image" className="w-[66px] h-[22px]"/>
                  <span
                    className="w-full  absolute top-[-2px] left-0 text-center text-[#FFFFFF] text-[16px] font-normal leading-[27px] font-poppins">
                   15% Off
                </span>
                </div>
                <img className="w-[23.17px] h-[19.67px] cursor-pointer mr-3" src={isLiked[index] ? liked : notliked}
                     onClick={() => makeLikedOrNotLiked(index)}/>
              </div>

              <img src={item.img}/>
              <div className='flex flex-row '>
                {Array.from({ length: item.star }).map((_, i) => (
                  <img
                    key={i}
                    src={stars}
                    alt="img"
                    className="w-[24px] h-[24px] gap-0 rounded-[0.5px]"
                  />
                ))}
              </div>

              <div className='flex flex-row justify-around'>
                <div>
                  <text
                    className='text-left text-[18px] font-[500] leading-[27px] text-[#2E2E2E] font-poppins'>{item.name}</text>
                  <div>
                    <text className=' text-left text-[24px] font-[700] leading-[36px] font-poppins text-[#F8B602]'>$
                    </text>
                    <text
                      className=' text-left text-[24px] font-[700] leading-[36px] font-poppins text-[#2E2E2E]'>{item.price}</text>
                  </div>
                </div>
                <img src={button} className='w-[48px] h-[48px] cursor-pointer'/>
              </div>

            </div>
          ))}
        </div>

      </div>

      <div>
        <div className='flex flex-row justify-between gap-[350px] mt-3'>
          <text
            className='w-[184px] h-[36px] font-poppins text-[20px] font-bold leading-[36px] text-left text-[#2E2E2E]  decoration-skip-ink-none'>
            Recent Order
          </text>
          <div className='flex flex-row object-center items-center cursor-pointer'>
            <text
              className='w-[69px] h-[27px] font-poppins text-[16px] font-normal leading-[27px] text-left decoration-skip-ink-none text-[#F8B602]'>
              View all
            </text>
            <img src={viewAll} className={`mt-1 ${isRotated ? 'rotate-90' : 'rotate-0'}`}
                 onClick={toggleRotation}/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {recentOrder.map((item, indexx) => (
            <div key={indexx} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md relative">
              <img className="w-[23.17px] h-[19.67px] cursor-pointer mr-3 absolute top-2 right-0" src={isLikedForRecent[indexx] ? liked : notliked}
                   onClick={() => makeLikeOrNotLikedForRecent(indexx)}/>
              <img src={item.img} alt={item.name} className="w-24 h-24 object-cover mb-4"/>
              <h2 className="font-poppins text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="font-poppins text-gray-500 text-sm">{item.distant} • {item.time}</p>
              <p className="font-poppins text-yellow-500 text-lg font-bold mt-2">
                <span className="text-yellow-500">$</span>{item.price}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
