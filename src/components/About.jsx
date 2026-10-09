import { VscGoToEditingSession } from "react-icons/vsc";
import { CiVideoOn } from "react-icons/ci";
import { CgStudio } from "react-icons/cg";

function About() {
    return(
        <div>
            <div className="flex flex-col bg-[#20201e] w-full min-h-screen md:min-h-[600px] py-20 gap-10 px-4 md:px-64">
                <h1 className="text-5xl md:text-7xl text-[#ddb37d] text-center font-bold md:leading-none">ABOUT 
                    <span className="block text-white text-lg md:leading-none md:mt-2">WE CREATE <span className="text-[#ddb37d] text-lg ">AWESOME STUFF</span></span></h1>

                <p className="text-gray-100 text-center text-lg font-semibold px-4">
                    We are storytellers passionate about capturing real moments and turning them into visual experiences. We explore places, people, and everyday adventures through our lens. From cinematic videos to personal vlogs, we create content that feels authentic, creative, and memorable. We believe great videos are not just about what you see, but what you feel. Join us as we capture stories, moments, and memories worth sharing.
                </p>

               <div className="flex gap-6 flex-col  md:flex-row">
                 <div className="flex gap-4 px-6 ">
                    <VscGoToEditingSession  className="text-[#dab483] text-4xl shrink-0"/>

                    <div className="flex flex-col  gap-2">
                        <div className="text-2xl font-semibold text-[#dab483]">VIDEO <span className="text-white">EDITING</span></div>
                        <p className="text-white text-md ">We turn raw footage into engaging visual stories through creative editing, smooth transitions, cinematic effects, and carefully chosen music. Every detail is crafted to make the final video feel natural, polished, and memorable.
</p>
                    </div>
                </div>



                <div className="flex gap-4 px-6 ">
                    <CiVideoOn className="text-[#dab483] text-4xl shrink-0"/>

                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-semibold text-[#dab483]">EVENT <span className="text-white">COVERAGE</span></div>
                        <p className="text-white text-md ">We turn raw footage into engaging visual stories through creative editing, smooth transitions, cinematic effects, and carefully chosen music. Every detail is crafted to make the final video feel natural, polished, and memorable.
</p>
                    </div>
                </div>



                <div className="flex gap-4 px-6 ">
                    <CgStudio className="text-[#dab483] text-4xl shrink-0"/>

                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-semibold text-[#dab483]">STUDIO <span className="text-white">SESSIONS</span></div>
                        <p className="text-white text-md ">We turn raw footage into engaging visual stories through creative editing, smooth transitions, cinematic effects, and carefully chosen music. Every detail is crafted to make the final video feel natural, polished, and memorable.
</p>
                    </div>
                </div>

  
            </div>
               </div>
        </div>

    );
}

export default About;