import background from "../assets/background.mp4"
function Background(){
    return(
        <div>
            <video className=" fixed min-h-screen w-full h-full object-cover inset-0 z-0" src={background} type="video/mp4" autoPlay loop muted playsInline />
        </div>
    );
}

export default Background;