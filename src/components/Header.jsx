function Header() {
    return(
        <div>
            <header className="flex flex-col items-center justify-center relative py-48 gap-3 md:h-screen ">
                <p className="text-4xl md:text-7xl font-thin text-white ">WE <span>ARE</span></p>
                <p className="text-4xl md:text-7xl font-extrabold text-white ">ADUAVI'S<span className="font-thin text-amber-100">VLOG</span></p>

                <p className="md:max-w-100 text-sm text-[#ececec] font-semibold text-center uppercase leading-loose tracking-wider">We turn your events into videos you'll want to replay.Weddings, parties, and every moment in between. Watch our stories, edits, and behind-the-scenes in the vlog.</p>

                <buttons className="flex gap-2">
                    <a href="#" className="bg-[#5f5343] w-32 h-10 border border-white text-white font-sm text-center py-2" >ABOUT US</a>

                    <a href="#" className="bg-[#181006] w-32 h-10 border border-white text-white text-sm text-center py-2" >OUR WORK</a>
                </buttons>
            </header>
        </div>
    );
}

export default Header;