import NavbarDemo from "./NavbarDemo.jsx";
import {HeroParallax} from "./HeroParallax.jsx";
import ExpandButton from "./ExpandButton.jsx";
import HoverEffect from "./ui/HoverEffect.jsx";
import UseContact from "./UseContact.jsx";

export default function Homepage() {
    const products = [
        {
            title: "Junior Devta",
            link: "https://gomoonbeam.com",
            thumbnail: "https://i.ibb.co/23Q01vsM/juniornigga.jpg",
        },
        {
            title: "Exam Devta",
            link: "https://cursor.so",
            thumbnail: "https://i.ibb.co/FLndTbdj/exam.jpg",
        },
        {
            title: "Senior Devta",
            link: "https://userogue.com",
            thumbnail: "https://i.ibb.co/d0ZFmXh6/senior.jpg",
        },

        {
            title: "Foundation Devta",
            link: "https://editorially.org",
            thumbnail: "https://i.ibb.co/PsvJNpYh/foundation.jpg" ,
        },
        {
            title: "Junior Devta",
            link: "https://editrix.ai",
            thumbnail: "https://i.ibb.co/23Q01vsM/juniornigga.jpg",
        },
        {
            title: "Exam Devta",
            link: "https://app.pixelperfect.quest",
            thumbnail: "https://i.ibb.co/FLndTbdj/exam.jpg",
        },

        {
            title: "Senior Devta",
            link: "https://algochurn.com",
            thumbnail: "https://i.ibb.co/d0ZFmXh6/senior.jpg",
        },
        {
            title: "Foundation Devta",
            link: "https://ui.aceternity.com",
            thumbnail: "https://i.ibb.co/PsvJNpYh/foundation.jpg",
        },
        {
            title: "Junior Devta",
            link: "https://tailwindmasterkit.com",
            thumbnail: "https://i.ibb.co/23Q01vsM/juniornigga.jpg",
        },
        {
            title: "Exam Devta",
            link: "https://smartbridgetech.com",
            thumbnail: "https://i.ibb.co/FLndTbdj/exam.jpg",
        },
        {
            title: "Senior Devta",
            link: "https://renderwork.studio",
            thumbnail: "https://i.ibb.co/d0ZFmXh6/senior.jpg",
        },

        {
            title: "Foundation Devta",
            link: "https://cremedigital.com",
            thumbnail: "https://i.ibb.co/PsvJNpYh/foundation.jpg",
        },
        {
            title: "Junior Devta",
            link: "https://goldenbellsacademy.com",
            thumbnail: "https://i.ibb.co/23Q01vsM/juniornigga.jpg",
        },
        {
            title: "Exam Devta",
            link: "https://invoker.lol",
            thumbnail: "https://i.ibb.co/FLndTbdj/exam.jpg",
        },
        {
            title: "Senior Devta",
            link: "https://efreeinvoice.com",
            thumbnail: "https://i.ibb.co/d0ZFmXh6/senior.jpg",
        },
    ]
    const items = [
        { title: "Basic Plan", description: (
                <>
                    <ul className="list-none space-y-1">
                        <li>✔️ AI-powered learning</li>
                        <li>❌ Includes ads</li>
                        <li>❌ Limited features</li>
                    </ul>
                </>
            ), link: "https://example.com/1" },
        { title: "Premium Plan", description: "Ad-free, personalized AI learning with advanced tools", link: "https://example.com/2" },
        { title: "Ultimate Plan", description: "AI tutoring, exam coaching, and exclusive early access", link: "https://example.com/3" },
    ];
    return (
        <>


            {/*</div>*/}
            <div className={"min-h-screen bg-black overflow-hidden"}>
                <div className={"mt-[-2rem]"}>
                    <NavbarDemo/>

                </div>


                <HeroParallax products={products}/>
                <div className="fixed bottom-5 right-5">
                    <ExpandButton
                        logo={"https://logosandtypes.com/wp-content/uploads/2022/03/cognito.svg"}
                        name="COGNITO"
                    />
                </div>
                <div className={"mt-[4rem]"}>
                    <HoverEffect items={items}/>

                </div>
                <div>
                    <UseContact />
                </div>

            </div>


        </>
    )
}