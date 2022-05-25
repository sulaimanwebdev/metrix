
export default function Home() {
  return (
    <>

    <div className="w-full">
      <div className="w-full relative mx-auto max-w-[1000px]">



     <div className="w-full relative">
     <img src="assets/bg.jpg" alt="bg" className="w-full -z-10 min-h-[540px] max-h-[540px] absolute top-0 left-0 object-cover object-top"/>
     <div className="bg-black opacity-60 w-full -z-10  h-[540px] max-h-[540px] absolute top-0 left-0 object-cover object-top"></div>
      <div className="w-full mb-12 z-10 flex items-center justify-end py-3">
        <img src="/assets/logo.png" alt="logo"  className='bg-white px-5 py-2'/>
      </div>

      <h1 className='px-3 z-10'><span className='text-white text-[44px] font-bold'>Are you going to the LTEN Conference?</span><br /><span className='text-white text-[26px]'>Are you looking for some new and innovative<br/> approaches to learning?</span></h1>

        
      <div className="h-auto min-h-[113px] mx-5 w-full max-w-[780px] relative pr-[110px] pl-3 py-4 mt-20">
        <img src="assets/top-bg.png" alt="bg" className='absolute top-0 left-0 w-full h-full' />
        <div className='z-[999999999999] text-[24px] font-bold relative'>Well look and no further and come visit us at bhoot <span className='bg-white/60 text-[25px]'>#414</span> located close to learning lab 3 in the next exhibit hall.</div>
      </div>

     </div>



       <div className="grid grid-cols-1 md-second:grid-cols-2 mb-5 gap-7 px-5">
         <div>
           <img src="/assets/lten-logo.png" alt="lten-logo" className='bg-white mx-auto py-1 w-[110px] mt-10' />
           <div className='text-white text-[30px] font-semibold mt-7'>Metrix is a proud preferred industry partner of LTEN and is happy to be sponsoring the award ceremony this year.</div>
           <div className="bg-white w-[200px] h-[5px] mt-2 mx-auto"></div>
           <div className='mt-7 text-white text-[25px]'>We are also excited theat we partnered with  one of the innovative Award finalists, Roch, on the initiative 'Using Technology to Build Personalized Healthcare Capability.'</div>
           <div className='mt-10 text-white text-[25px]'>At Metrix, we pride ourselves in designing and developing forward-thinking custom learning, and we do so with flawless execution.</div>
        
        <div className="bg-[#E6E6E6] px-3 py-2 mt-7 md-second:mt-0 md-second:transform  md-second:translate-y-[160px] lg-second:translate-y-[128px]">
           <div className='text-[22px] font-semibold mb-2'>Book a meeting with us!</div>
           <div className="grid grid-cols-2 gap-2">
             <input type="text" className='bg-white px-2 text-[18px] h-[50px] outline-none' placeholder='First name*' />
             <input type="text" className='bg-white px-2 text-[18px] h-[50px] outline-none' placeholder='Last name*' />
           </div>
           <input type="text" className='bg-white w-full px-2 text-[18px] h-[50px] outline-none mt-2' placeholder='Email*' />
           <input type="text" className='bg-white w-full px-2 text-[18px] h-[50px] outline-none mt-2' placeholder='Company*' />
            <button className='w-full py-2 rounded-full text-[26px] text-center mt-3 mb-2 font-semibold text-black bg-[#D4E100]'>Submit</button>
        </div>
         </div>




         <div className="relative  z-50">
    <img src="assets/right-bg.png" alt="bg" className="w-full -z-10 w-full h-full  absolute top-0 right-0 object-cover object-top"/>
     <div className="w-full flex items-center justify-end"><img src="/assets/chevron-down.png" className='w-[120px] extra-small:w-[160px] mt-[140px] extra-small:mt-[70px]' alt="chevron-down" /></div>
     <div className='mt-[30px] extra-small:mt-[60px] sm-second:mt-[120px] md-second:mt-0 font-semibold px-6  pr-4 text-black text-[20px]'>Metrix will be faciliatating a learning lab on Tuesday, June 14th at 12:00pm in learning lab #1. Our team below will be speaking about:</div>
    
     <div className='text-black text-[28px]  px-6  pr-4 font-bold mt-5'>Power skills: why they are now more important than ever before</div>
   

      <div className="mx-auto relative text-center w-[260px] mt-7 px-6  pr-4">
          <img src="/assets/ariella-head.png" alt="ariella-head" className='w-[160px] mx-auto' />
     <div className='text-black text-[24px] font-bold mt-2'>ARIELLA SAX</div>
     <div className='text-black text-[18px] font-semibold'>Cheif Operating Officer</div>

      </div>


      <div className="bg-[#EFF68C] w-[80px] h-[9px] mt-7 mb-7 mx-auto"></div>


      <div className="mx-auto relative text-center w-[260px]  px-6  pr-4">
          <div className="triangle w-0 h-0 absolute top-0 left-12"></div>
          <img src="/assets/kaidi-head.png" alt="kaidi-head" className='w-[140px] relative z-50 mx-auto' />
     <div className='text-black text-[24px] font-bold mt-2'>KAIDI ZHOU</div>
     <div className='text-black text-[18px] font-semibold'>Director, Healthcare Strategy & Client Services</div>

      </div>



     <div className='text-black text-[32px] font-bold mx-auto text-center px-6  pr-4 mt-5 mb-3'>You won't to miss it!</div>




    

         </div>





       </div>










    {/* right bg */}
    <img src="assets/lef-bg.png" alt="bg" className="w-full -z-10 max-h-[440px] absolute top-[300px] -left-[1px] object-cover object-top"/>




      {/* footer */}
      <div className="max-w-[900px] mx-auto w-full border-t border-[#D4E100] mt-12 mb-5 px-5 text-center">
           <img src="/assets/logo-footer.png" alt="logo-footer" className='mx-auto' />
           <div className='text-white font-semibold opacity-90 italic'>Copyright © 2022 Metrix Group Inc. All rights reserved.</div>
           <div className='text-white font-[400] opacity-90 mt-3'>Want to change how you receive these emails?</div>
           <div className='text-white font-[400] opacity-90'>You can <a href="#" className='underline'>update your preferences</a> or <a href="#" className='underline'>unsubscribe from this list</a>.</div>
      </div>



      </div>

    </div>


    </>
  )
}
