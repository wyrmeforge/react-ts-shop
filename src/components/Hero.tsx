const Hero = () => {
    return (
        <section className="h-[800px] py-24 bg-pink-50 bg-hero bg-cover bg-center">
            <div className="container mx-auto flex h-full">
                <div className="flex flex-col justify-center">
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
                        New Trend
                    </div>
                    <h1 className="text-[70px] leading-[1.1] font-light mb-4">
                        autumn sale stylish <br />
                        <span className="font-semibold">womens</span>
                    </h1>
                    <div className="self-start uppercase font-semibold border-b-2 border-primary">
                        Discover more
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
