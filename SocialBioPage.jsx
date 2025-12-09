"use client";
    import  useState } from "react";
    import { 
    Instagram 
    MessageCircle
    Mail,
    Github
    Twitte
    Linkedin
    Youtub
    ArrowRight
    Menu,
   X
 from "lucide-react";

exrt  function SocialBioPage() {
cnst [isMenuOpen, setIsMenuOpen 
// Data tautan sosial media
const socialLink
    
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/6285806737802",
    color: "hover:bg-gren-500",
    description: "Hubungi saya via WhatsApp"
    },
    
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/andriannnpratama",
    color: "hover:bg-pink-600",
    description: "Follow saya di Instagram"
    },
    
    name: "TikTok",
    icon: Youtube, // Using Youtube as placeholder for TikTok
    url: "https://www.tiktok.com/@andriannnpratama2",
    color: "hover:bg-black",
    description: "Follow saya di TikTok"
    },
    
{
    name: "Email",
    icon: Mail,
    url: "mailto:mozaofc838@gmail.com", // gunakan mailto:
    color: "hover:bg-blue-600",
    description: "Kirim saya email"
    }
    ,
    {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/andriannpratamaa",
    color: "hover:bg-gray-800",
    description: "Liha project saya di GitHub"
    },
    {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    color: "hover:bg-blue-700",
    description: "Terhubung di LinkedIn"
    
];

return (
    <div className="min-h-screen bg-gray-900 text-white">
    * Header/Navigation */}
    <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-l font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Portfoli
        </div>
        
        /* Desktop Navigation */}
        <nav classNam"hidden md:flex space-x-8">
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#links" className="hover:text-purple-400 transition-colors">Links</a>
            <a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        /nav>
        
        /* Mobile Menu Button */}
        butto
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        /button>
        /div>
        
        /* Mobile Navigation */}
        isMeuOpen &&
        divclassName="md:hidden bg-gray-800 border-t border-gray-700">
            <div classNa="container mx-auto px-4 py-3 flex flex-col space-y-3">
            a href"#home" className="py-2 hover:text-purple-400 transition-colors">Home</a>
            a href="#links" className="py-2 hover:text-purple-400 transition-colors">Links</a>
            a href="#portfolio" className="py-2 hover:text-purple-400 transition-colors">Portfolio</a>
            a href="#contact" className="py-2 hover:text-purple-400 transition-colors">Contact</a>
            </div
        </div>
        )}
    </header>

    {/* Hero Section */}
    <section id="home" className="pt-32 pb-20 px-4">
        <dv className="container mx-auto max-w-4xl">
        < className="flex flex-col md:flex-row items-center gap-10">
           /* Profile Image */}
            <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg shadow-purple-500/20">
                <img 
                src="/pp1.jpg" 
                alt="Professional portrait of a creative person with a modern style against a dark background" 
                className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -inset-4 rounded-full border border-purple-500/50 animate-pulse"></div>
            </div>
            
            /* Hero Text */}
            <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Developer</span> & Engineer
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
            Machine Learning & IoT Engineer — Building intelligent systems that connect the physical and digital world through data-driven innovation and smart automation
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
                <a 
                href="#links" 
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center"
                >
                Connect With Me <ArrowRight className="ml-2" size={18} />
                </a>
                a 
                href="#portfolio" 
                className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-all"
                >
                View Portfolio
                </a>
            </div
            </div>
        </>
        </dv>
    </section>

    {/* Social Links Section */}
    <section id="links" className="py-20 bg-gray-800/50 px-4">
        <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
            Find Me On <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Social Media</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
            <a
                key={index}
                href={link.url}
                className={`group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-4 ${link.color}`}
            >
                <div className="p-3 rounded-lg bg-gray-700 group-hover:bg-white/10 transition-colors">
                link.icon size={24} />
                /div>
                <div>
                <h3 className="font-medium text-lg">{link.name}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300">{link.description}</p>
                </div>
            </a>
            ))}
        </div>
        </div>
    </section>

    {/* Portfolio Showcase */}
    <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Work</span></h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of my latest projects and creative works
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="group overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all">
            <div className="h-48 overflow-hidden">
                <img 
                src="/iot.jpg" 
                alt="Modern web design project showing a clean interface with dark mode aesthetics" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <i className="p-6">
                <h3 className="font-bold text-xl mb-2">IoT Engineer</h3>
                <p className="text-gray-400 mb-4">Modern online industri with IoT</p>
                <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">IoT Dev</span>
        <san className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">Development</san>
                </div>
            i>
            /div>
            
            {/* Portfolio Item 2 */}
            <div className="group overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all">
            <div className="h-48 overflow-hidden">
                <img 
                src="/app.jpg" 
                alt="Mobile app interface design with dark theme and vibrant accent colors" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            div className="p-6">
                h3 className="font-bold text-xl mb-2">Fitness App UI</h3>
                p className="text-gray-400 mb-4">Mobile application for workout tracking</p>
                div className="flex space-x-2">
                span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">UI/UX</span>
                span className="px-3 py-1 bg-pink-900/50 text-pink-300 rounded-full text-sm">Mobile App</span>
                /div>
            /div>
            /div>
            
            /* Portfolio Item 3 */}
            <div className="group overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all">
            <div className="h-48 overflow-hidden">
                <img 
                src="/ai.jpg" 
                alt="Brand identity design project including logo and marketing materials" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Machine Learning</h3>
                <p className="text-gray-400 mb-4">Person who builds AI models like YOLO for object detection</p>
                <div className="flex space-x-2">
                <span className="px-3 py-1 bg-amber-900/50 text-amber-300 rounded-full text-sm">AI Developer</span>
                <span className="px-3 py-1 bg-teal-900/50 text-teal-300 rounded-full text-sm">Computer Vision</span>
                </div>
            </div>
            </div>
        </div>
        
        <div className="text-center mt-12">
            <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800/50 transition-all"
            >
            View Full Portfolio
            <ArrowRight className="ml-2" size={18} />
            </a>
        </div>
        </div>
    </section>

    {/* Footer */}
    <footer id="contact" className="py-12 bg-gray-800/70 border-t border-gray-700 px-4">
        <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Let's Create Together
            </h3>
            <p className="text-gray-400 mt-2">Get in touch for collaborations</p>
            </div>
            
            <div className="flex space-x-4">
            <a href="mailto:mozaaofc838@gmail.com" className="p-3 bg-gray-700 rounded-lg hover:bg-purple-600 transition-colors">
                <Mail size={20} />
            </a>
            <a href="https://wa.me/6285806737802" className="p-3 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors">
                <MessageCircle size={20} />
            </a>
            <a href="https://www.instagram.com/andriannnpratama" className="p-3 bg-gray-700 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
            </a>
            </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
        </div>
    </footer>
    </div>
);
}
