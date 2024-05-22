import HelloAnimation from "@/components/atoms/lottie";
import { AdminLogin } from "@/components/molecules/Form/AdminLogin";

export default function AdminSignIn() {
    return (
        <div className="flex lg:grid w-full lg:grid-cols-2 backdrop-blur-lg">
            <div className="hidden md:flex flex-col h-full w-full">
                <div className="flex items-center p-10 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6">
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    Glyph Admin
                </div>
                <HelloAnimation />
                <div className="mt-auto p-10">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;Glyph is the best. Work with you later&rdquo;
                        </p>
                        <footer className="text-sm">Special Grades</footer>
                    </blockquote>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex items-center p-10 z-10 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6">
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    Glyph Admin
                </div>
                <div className="flex w-[500px] h-[600px] flex-col justify-center items-center space-y-6">
                    <AdminLogin />
                </div>
            </div>
        </div>
    );
}
