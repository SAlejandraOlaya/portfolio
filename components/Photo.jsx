'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
                }}
                className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]"
            >
                {/*image*/}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-[95%] h-[95%] relative overflow-hidden rounded-full">
                        <Image
                            src="/smaller.png"
                            alt="Alejandra Olaya"
                            layout="fill"
                            objectFit="cover"
                            priority
                            quality={100}
                        />
                    </div>
                </motion.div>
                {/*circle*/}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#B85EFF"
                        strokeWidth='4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72 ", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo;