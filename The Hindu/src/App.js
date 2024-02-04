import './App.scss';
import { FirstRow } from './components/FirstRow';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import ImagewithContent from './components/ImagewithContent';
import { ThirdRow } from './components/ThirdRow';
import List from './libs/list.json'

function App() {

  function Scroll(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <>
      <div className="App w-[80%] md:w-[90%] m-[0_auto]">
        <Header />
        {List && List.data && List.data.map((res, i) => {
          return (
            <div className='p-[10px_0_20px_0] border-b-[3px] border-b-[#000] last:!border-b-[0]'>
              {res.type == 'One' && <FirstRow array={res.data} />}
              {res.type == 'Two' && <ImagewithContent show_more={res.show_more} heading={res.heading} data={res.data} subscribtion={res.subscribtion} subscribtion_value={res.subscribtion_value} />}
              {res.type == 'Three' && <ThirdRow heading={res.heading} data={res.data} subscribtion={res.subscribtion} subscribtion_value={res.subscribtion_value} />}
            </div>
          )
        })}
      </div>
      <Footer />

      <div className='flex justify-end bottom-[40px] mr-[40px] fixed w-full right-[10px]'>
          <button onClick={()=>{Scroll()}} className=' cursor-pointer primary_bg flex items-center gap-[10px] text-[14px] text-[#fff] p-[5px_10px] h-[35px] rounded-[20px]'>Move To Top <span><img className='h-[15px]' src="/arrowup1.svg"></img></span></button>
      </div>
    </>
  );
}

export default App;
