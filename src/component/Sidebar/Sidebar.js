import './Sidebar.css';
import DashIcon from './../../component/assets/Vector.svg'
import FoodOrder from './../assets/foodOrder.svg'
import Favorite from './../assets/favorite.svg'
import third_1 from './../assets/31.svg'
import third_2 from './../assets/32.svg'
import forth_1 from './../assets/41.svg'
import forth_2 from './../assets/42.svg'
import forth_3 from './../assets/43.svg'
import bill from './../assets/bill.svg'
import setting from './../assets/Process.svg'
import tor from './../assets/tor.svg'
import ellipse from './../assets/Ellipse 5.svg'
import './../../tail.css'

export default function Sidebar() {
  return (
    <div className="flex flex-col w-1/4 h-auto items-center">
      <div className="w-[168px] h-[60px] mb-8 mt-8">
        <text className="font-poppins text-[40px] font-bold leading-[60px] text-left decoration-skip-ink-none">GoMeal
        </text>
        <text
          className="font-poppins text-[40px] font-bold leading-[60px] text-left decoration-skip-ink-none text-[#F8B602]">.
        </text>
      </div>

      <div
        className="cursor-pointer flex flex-row items-center gap-5 w-[252px] h-[64px] p-[16px_24px_16px_24px] rounded-[16px] bg-[#F8B602] mb-3">
        <img className="w-[25px] h-[28.33px]" src={DashIcon} alt="Dashboard"/>
        <text
          className="font-poppins text-[18px] font-medium leading-[27px] text-left decoration-skip-ink-none text-white">
          Dashboard
        </text>
      </div>

      <div className="cursor-pointer flex flex-row items-center gap-5 w-[252px] h-[64px] p-[16px_24px_16px_24px] rounded-[20px] mb-3">
        <img className="w-[28.33px] h-[23.34px]" src={FoodOrder} alt="Food Order"/>
        <text
          className="font-poppins text-[18px] font-medium leading-[27px] text-left decoration-skip-ink-none text-[#A098AE]">
          Food Order
        </text>
      </div>

      <div className="cursor-pointer flex flex-row items-center gap-5 w-[252px] h-[64px] p-[16px_24px_16px_24px] rounded-[20px] mb-3">
        <img className="w-[28.33px] h-[23.34px]" src={Favorite} alt="Favorite"/>
        <text
          className="font-poppins text-[18px] font-medium leading-[27px] text-left decoration-skip-ink-none text-[#A098AE]">
          Favorite
        </text>
      </div>

      <div
        className="cursor-pointer flex flex-row items-center gap-5 w-[252px] h-[64px] p-[16px_24px_16px_24px] rounded-[20px] mb-3 relative">
        <div className="relative w-[40px] h-[40px]">
          <img className="w-[13.34px] h-[10px] absolute top-[4px] left-[5px]" src={third_1} alt="Icon 1"/>
          <img className="w-[28.33px] h-[24.41px]" src={third_2} alt="Icon 2"/>
        </div>
        <text
          className="absolute top-[6px] left-[70px] font-poppins text-[18px] font-medium leading-[27px] text-left decoration-skip-ink-none text-[#A098AE]">
          Message
        </text>
      </div>

      <div
        className="cursor-pointer flex flex-row items-center gap-5 w-[252px] h-[64px] p-[16px_24px_16px_24px] rounded-[20px] mb-3 relative">
        <div className="relative w-[40px] h-[40px]">
          <img className="w-[11.51px] h-[8.33px] absolute left-[16px] top-[9px]" src={forth_1} alt="Icon 1"/>
          <img className=" w-[26.67px] h-[28.33px absolute" src={forth_2} alt="Icon 2"/>
          <img className="w-[21.67px] h-[18.33px] absolute top-[4px] left-[6px]" src={forth_3} alt="Icon 2"/>
        </div>
        <text
          className="absolute top-[6px] left-[70px] font-poppins text-[18px] font-medium leading-[27px] text-left decoration-skip-ink-none text-[#A098AE]">
          Order History
        </text>
      </div>


      <div className="cursor-pointer flex flex-row items-center gap-5 w-[252px] h-[64px] p-[16px_24px_16px_24px] rounded-[20px] mb-3">
        <img className="w-[28.33px] h-[23.34px]" src={bill} alt="Food Order"/>
        <text
          className="font-poppins text-[18px] font-medium leading-[27px] text-left decoration-skip-ink-none text-[#A098AE]">
          Bills
        </text>
      </div>

      <div className="cursor-pointer flex flex-row items-center gap-5 w-[252px] h-[64px] p-[16px_24px_16px_24px] rounded-[20px] mb-3">
        <img className="w-[28.33px] h-[23.34px]" src={setting} alt="Food Order"/>
        <text
          className="font-poppins text-[18px] font-medium leading-[27px] text-left decoration-skip-ink-none text-[#A098AE]">
          Setting
        </text>
      </div>


      <div className='w-[252px] h-[202px] rounded-[16px] flex flex-col justify-center items-center gap-5 relative'
           style={{
             background: 'linear-gradient(139.14deg, #F8B602 23.19%, #F0C868 104.35%, rgba(240, 200, 104, 0) 104.35%)',
           }}>
        <div className='relative'>
          <div
            className="justify-start w-[195px] h-[81px] font-poppins text-[18px] font-bold leading-[27px] text-left  decoration-skip-ink-none text-white">
            <span className="block font-poppins text-[18px] font-bold text-white">Upgrade your</span>
            <span className="block font-poppins text-[18px] font-bold text-white">Account to Get Free</span>
            <span className="block font-poppins text-[18px] font-bold text-white">Voucher</span>
          </div>
          <img className='absolute top-[-1px] left-[190px]' src={tor} />
        </div>

        <div className=" w-[107px] h-[40px] text-center rounded-[8px] bg-white flex items-center justify-center cursor-pointer">
            <span className="font-poppins text-[14px] font-bold leading-[21px] text-[#2E2E2E]">
              Upgrade
            </span>
        </div>
        <img className="absolute bottom-[0px] right-0" src={ellipse} />
      </div>

    </div>
  );
}
