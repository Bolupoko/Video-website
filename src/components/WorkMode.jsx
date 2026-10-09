import { GrSend } from "react-icons/gr";
import { MdMovieEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaRegFileVideo } from "react-icons/fa";
function WorkMode(){
    return(
        <div>
            <div className="relative flex flex-col gap-6 py-20 px-6 h-min-screen justify-center items-center">
                <h1 className="text-center font-bold text-3xl text-[#b4a086]">
                    HOW <span className="text-white">WE WORK</span>
                </h1>
                <p className="text-md text-white text-center font-semibold md:max-w-80 md:text-lg">From raw footage to a finished video, here's how we turn your event into a story worth replaying.</p>

               <div className="flex flex-col md:flex-row gap-12  justify-center items-center text-center">

                <div className="flex flex-col gap-4 items-center">
                     <icon className="flex justify-center text-center items-center  text-white text-4xl border border-2 rounded-full shrink-0 size-40 "><GrSend />
            </icon>

            <h4 className="text-white font-bold uppercase text-sm underline underline-offset-6 ">Send us your footage and your story</h4>

            <p className="text-white text-center md:max-w-80">Tell us about the event, the mood you want, and any must-have moments. Send the raw clips, and we'll go through them.</p>
                </div>

            <div className="flex flex-col gap-4 items-center">
                <icon className="flex justify-center text-center items-center  text-white text-5xl border border-2 rounded-full shrink-0 size-40 ">
                <MdMovieEdit />
            </icon>

             <h4 className="text-white font-bold uppercase text-sm underline underline-offset-6">We edit your first draft</h4>

             <p className="text-white text-center md:max-w-80">We cut the best moments, add music, fix colors and sound, and put it together as a story.</p>
            </div>

            <div className="flex flex-col gap-4 items-center">
                 <icon  className="flex justify-center text-center items-center  text-white text-5xl border border-2 rounded-full shrink-0 size-40 ">
                <FaRegEye />
             </icon>

             <h4 className="text-white font-bold uppercase text-sm underline underline-offset-6">You review, we adjust</h4>

             <p className="text-white text-center md:max-w-80">Watch the draft and tell us what to change. We make the changes until you're happy.</p>

            </div>


            <div className="flex flex-col gap-4 items-center">
                 <icon className="flex justify-center text-center items-center  text-white text-5xl border border-2 rounded-full shrink-0 size-40 ">
                <FaRegFileVideo />
             </icon>

              <h4 className="text-white font-bold uppercase text-sm underline underline-offset-6">You get your final video</h4>

               <p className="text-white text-center md:max-w-80">We send the finished video in the format you need, ready to share or keep.</p>
            </div>
               </div>
            </div>

            

            

            
        </div>
    )
}

export default WorkMode