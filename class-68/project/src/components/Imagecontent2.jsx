import React from "react";
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";

const images = [
    {
        src: Img1,
        title: "Stay Focused",
        desc: "Small steps create unstoppable daily progress.",
    },
    {
        src: Img2,
        title: "Keep Building",
        desc: "Skills compound when practice beats motivation.",
    },
    {
        src: Img3,
        title: "Never Quit",
        desc: "Consistency today becomes freedom tomorrow always.",
    },
];

const Imagecontent2 = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
            {images.map((item, index) => (
                <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                >
                    {/* Image */}
                    <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-100 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Text content */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 
                transition-all duration-300 translate-y-4 group-hover:translate-y-0">

                        <div className="backdrop-blur-md bg-white/30 rounded-xl p-3">
                            <h3 className="text-lg font-semibold text-black">
                                {item.title}
                            </h3>
                            <p className="text-sm text-black/80">
                                {item.desc}
                            </p>
                        </div>

                    </div>


                </div>
            ))}
        </div>
    );
};

export default Imagecontent2;
