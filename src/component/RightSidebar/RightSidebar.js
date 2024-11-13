import './right.css'
import './../../tail.css'
import placeholder from './../assets/placeholder.svg'
import settings from './../assets/Setting.svg'
import notification from './../assets/notification.svg'
import chat from './../assets/chat.svg'
import transfer from './../assets/transfer.svg'
import topUp from './../assets/topUp.svg'
import background from './../assets/background.svg'
import location from './../assets/Location.svg'
import pep from './../assets/pepperoni.svg'
import cheese from './../assets/cheese.svg'
import vegan from './../assets/vegan.svg'
import cupon from './../assets/cupon.svg'
import chevron_down from './../assets/chevron-down.svg'
const orders = [
  {
    name : 'Pepperoni Pizza',
    price : 5.59,
    img : pep,
    quan : 1,
  },
  {
    name : 'Cheese Burger',
    price : 5.59,
    img : cheese,
    quan : 1,
  },
  {
    name : 'Vegan Pizza',
    price : 5.59,
    img : vegan,
    quan : 1,
  }
]

export default function RightSidebar() {
  return <div className='bg-white h-auto w-1/4 flex flex-col'>
         <div className='flex flex-row justify-between mt-3'>
           <div className='flex flex-row justify-center items-center'>
             <img src={chat} className='w-[50px] h-[50px] cursor-pointer'/>
             <img src={notification} className='w-[45px] h-[45px] cursor-pointer'/>
             <img src={settings} className='w-[45px] h-[45px] cursor-pointer'/>
           </div>
           <img src={placeholder} className='w-[60px] h-[60px] rounded-[16px]'/>
         </div>
    <div className='flex flex-col justify-start mt-4 gap-8'>
      <text className='w-[164px] h-[36px]  font-poppins text-[24px] font-bold leading-[36px] text-left text-[#2E2E2E]'>Your Balance</text>
      <div className='w-[95%] h-[135px] rounded-[16px] flex flex-row justify-center items-center gap-3' style={{ backgroundImage: `url(${background})` }}>
        <div className='bg-white rounded-[16px] flex flex-col w-[45%] h-[55%] justify-center items-start'>
          <text className='ml-2 w-[58px] h-[21px]  font-poppins text-[14px] font-normal leading-[21px] text-left text-[#2E2E2E] decoration-skip-ink-none'>Balance</text>
          <text className='ml-2 w-[124px] h-[48px] font-poppins text-[28px] font-bold leading-[48px] text-left text-[#2E2E2E] decoration-skip-ink-none'>$12.000</text>
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-col'>
            <img src={topUp} className='cursor-pointer'/>
            <text className='w-[49px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-white'>Top Up</text>
          </div>
          <div className='flex flex-col'>
            <img src={transfer} className='cursor-pointer'/>
            <text className='w-[58px] h-[21px]  font-poppins text-[14px] font-normal leading-[21px] text-left text-white'>Transfer</text>
          </div>
        </div>
      </div>
    </div>

    <div className='flex flex-col justify-start ml-2 mt-6 gap-3'>
      <text className='w-[119px] h-[27px]  font-poppins text-[18px] font-normal leading-[27px] text-left text-[#A098AE]'>Your Address</text>
      <div className='flex flex-row gap-8'>
        <div className='flex flex-row'>
          <img src={location} />
          <text className='w-[124px] h-[27px]  font-poppins text-[18px] font-bold leading-[27px] text-left text-[#2E2E2E]'>Elm Street, 23</text>
        </div>
        <button className='w-[80px] h-[25px] border-solid border-[1px]  border-[#F8B602] rounded-[8px] items-center text-center'><text className='w-[57px] h-[21px]   font-poppins text-[14px] font-normal leading-[21px] text-left text-[#F8B602]'>Change</text></button>
      </div>
      <text className='w-[95%] h-[48px] font-poppins text-[12px] font-normal leading-[24px] text-left text-[#A098AE]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</text>
      <div className='flex flex-row justify-start gap-3'>
        <button className='w-[120px] h-[32px] border-[1px] border-solid border-[#A098AE] rounded-[8px]'><text className='w-[80px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#2E2E2E]'>Add Details</text></button>
        <button className='w-[100px] h-[32px] border-[1px] border-solid border-[#A098AE] rounded-[8px]'><text className='w-[65px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#2E2E2E]'>Add Node</text></button>
      </div>
    </div>

    <div className='flex flex-col justify-center gap-5 mt-4'>
      <text
        className='w-[145px] h-[36px] font-poppins text-[24px] font-bold leading-[36px] text-left text-[#2E2E2E]'>Order
        Menu
      </text>

      <div>
        {orders.map((item, index) => (
          <div key={index} className='flex flex-row justify-start items-center'>
            <img src={item.img}/>
            <div className='flex flex-col justify-center'>
              <text
                className='w-[144px] h-[27px] font-semibold text-[18px] leading-[27px] text-left text-[#2E2E2E] decoration-slice decoration-transparent'>{item.name}</text>
              <text
                className='w-[12px] h-[21px] font-normal text-[14px] leading-[21px] text-left text-[#A098AE] decoration-slice decoration-transparent'>x{item.quan}</text>
            </div>
            <div>
              <p
                className='w-16 h-7 font-semibold text-[18px] leading-[27px] text-left  underline-offset-auto decoration-slice decoration-transparent text-[#2E2E2E]'>+<span
                className='text-[#F8B602] font-semibold text-[18px] leading-[27px] text-left decoration-slice decoration-transparent'>$</span>{item.price}
              </p>
            </div>
          </div>
        ))}


      </div>
      <div className="w-[95%] h-[1px] border-t-[1.5px] border-[#DBDBDB] mt-14">
      </div>
      <div className='flex flex-row justify-between'>
        <text
          className='w-[52px] h-[21px] font-normal text-[14px] leading-[21px] text-left text-[#A098AE] decoration-slice decoration-transparent'>Service
        </text>
        <p
          className='w-16 h-7 font-semibold text-[18px] leading-[27px] text-left  underline-offset-auto decoration-slice decoration-transparent text-[#2E2E2E]'>+<span
          className='text-[#F8B602] font-semibold text-[18px] leading-[27px] text-left decoration-slice decoration-transparent'>$</span>1.00
        </p>
      </div>
      <div className='flex flex-row justify-between'>
        <text
          className='w-[46px] h-[27px] font-medium text-[18px] leading-[27px] text-left text-[#2E2E2E] decoration-slice decoration-transparent'>Total
        </text>
        <p
          className='w-[96px] h-[36px] font-medium text-[24px] leading-[36px] text-left text-[#2E2E2E] decoration-slice decoration-transparent'><span
          className='text-[#F8B602] font-semibold text-[18px] leading-[27px] text-left decoration-slice decoration-transparent'>$</span>202.00
        </p>
      </div>
      <div
        className='flex flex-row justify-center items-center w-[95%] h-[64px] gap-5 rounded-[16px] border-[1px] border-[#F8B602] bg-[#F5F5F5] backdrop-blur-[16px] cursor-pointer '>
        <img src={cupon} className='w-[40px] h-[40px]'/>
        <text
          className='w-auto h-[21px] font-medium text-[14px] leading-[21px] text-left text-[#2E2E2E] decoration-slice decoration-transparent'>Have
          a coupon code?
        </text>
        <img src={chevron_down}/>
      </div>

      <button className='w-[95%] h-[64px] rounded-[16px] bg-[#F8B602]'>
        <text
          className='w-[88px] h-[27px] font-medium text-[18px] leading-[27px] text-left text-[#FFFFFF] decoration-slice decoration-transparent'>Checkout
        </text>
      </button>
    </div>

  </div>
}