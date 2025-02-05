function SvgFlecha(){
    return(

        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="15px" height="15px" viewBox="0 0 1280.000000 640.000000"
            preserveAspectRatio="xMidYMid meet">
                <metadata>
                    reated by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M3310 5925 c-36 -8 -92 -28 -125 -45 -33 -16 -352 -240 -710 -498
                -357 -257 -1010 -726 -1450 -1041 -536 -384 -822 -596 -866 -640 -193 -194
                -210 -498 -40 -724 48 -65 2884 -2387 2978 -2439 216 -119 480 -82 655 93 111
                111 164 239 162 394 -1 133 -35 235 -113 338 -22 29 -331 289 -814 685 l-778
                637 5078 5 5078 5 59 22 c241 91 391 319 372 563 -18 233 -162 415 -393 498
                -45 16 -369 17 -5132 22 l-5084 5 794 570 c445 319 818 594 849 625 176 177
                206 470 70 678 -74 114 -185 200 -306 237 -72 23 -207 28 -284 10z"/>
                </g>
        </svg>
    );
}

export default function Svg({opt}){
    return (
        opt=="flecha"? SvgFlecha() : (null)
    )
};