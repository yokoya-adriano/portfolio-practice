import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                ref={imgRef}
                src={img}
                alt={title}
                className="w-96 z-10 h-auto hidden absolute rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity:1, transition: { duration: 0.3 }}}
            />
        </Link>
    )
}

const FeaturedArticles = ({ img, title, time, summary, link }) => {
    return (
        <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark
            dark:border-light"
        >
            <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"></div>
            <Link href={link} target="_blank"
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">{title}</h2>
            </Link>
            <p className="text-sm mb-2">
                {summary}
            </p>
            <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
        </li>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition:{ duration: 0.5, ease:"easeInOut" }}}
            viewport={{ once: true }}
            className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0
            border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light"
        >
            <MovingImg title={title} img={img} link={link} />
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark">{date}</span>
        </motion.li>
    )
}

export default function Articles() {
    return (
        <>
            <Head>
                <title>AY - Articles Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Words Can Change The World! " className="mb-16" />
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticles
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={article1}
                        />
                        <FeaturedArticles
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={article2}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
                    <ul>
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="May 28, 2023"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="May 28, 2023"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="May 28, 2023"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="May 28, 2023"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="May 28, 2023"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="May 28, 2023"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="May 28, 2023"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="May 28, 2023"
                            link="/"
                            img={article4}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}