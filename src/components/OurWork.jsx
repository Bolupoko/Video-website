import videography from "../assets/videography.PNG"
function OurWork(){
    return(
        <div>
            <div className="flex flex-col md:flex-row justify-between pt-0 md:pt-64 bg-[#1b1b19] ">
                
                <div className=" flex justify-center min-h-screen md:min-h-120 bg-cover bg-center bg-no-repeat items-center w-full md:flex-1" 

                style={{backgroundImage: `url(${videography})` }}> <a href="#" className=" relative top-0 left-0 p-3 border  border-white text-center text-lg text-white" >VIEW OUR WORK</a> </div>

                <div className="flex flex-col  flex-1 gap-4 bg-[#111110] text-white px-4 py-16 md:items-center md:text-center justify-center   ">
                    <h3 className="text-4xl font-bold text-[#ddb37d] ">WHO <span className="text-white">WE ARE</span></h3>

                    <p className="text-sm font-semibold uppercase text-[#ddb37d] md:max-w-112  ">We capture the moments that matter, and share the stories behind them.</p>

                    <p className="text-white text-sm text-semibold md:max-w-112">We are a video team that films events so you never lose the memories. Weddings, birthdays, conferences, or community gatherings: we show up, film it, and turn it into a video you’ll want to rewatch.</p>

                    <p className="text-white text-sm text-semibold md:max-w-112">Besides event coverage, we share vlogs on this site. They show our behind-the-scenes work, what we learn on the job, and everyday life through our camera.</p>

                     <p className="text-white text-sm text-semibold md:max-w-102">Have an event coming up? Let’s film it together.</p>
                </div>
            </div>
        </div>
    );
}

export default OurWork;