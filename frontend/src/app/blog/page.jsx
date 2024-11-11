import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

const Blog = () => {
    return (
        <div>
            <Header />
            <div
                className=' flex flex-col text-left justify-center   text-white bg-custom-gradient py-8 2xl:px-56 px-8'
                style={{
                    background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
                }}
            >


                <h1 className="text-5xl font-bold mt-28  mb-2">
                    Blue Fox Hoster Blog
                </h1>
                <p className=" mb-4 text-xl">
                    The latest news and announcemments about our services
                </p>




                {/* Search Bar */}
                <div className="relative w-full mb-28 max-w-xl">
                    <input
                        type="text"
                        placeholder="Enter search query here"
                        className="w-full p-4 text-black rounded-lg text-xl outline-none"
                        style={{ minWidth: '300px' }}
                    />
                    <button className="absolute text-xl right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                        Search
                    </button>
                </div>




            </div>

            {/* Latest Posts Section */}
            <div className="py-12 bg-gray-50 px-8 2xl:px-56">
                <div className="container mx-auto text-center mb-8">
                    <h2 className="text-3xl font-medium text-gray-800 text-left">Latest Posts</h2>
                    <p className="text-lg text-left text-gray-600 mt-2">Stay updated with our latest blog posts.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Post 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="" alt="Blog Post 1" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-2">Published on: Oct 1, 2024</p>
                            <h3 className="text-xl font-semibold text-gray-900">How to Choose the Right Web Hosting</h3>
                            <p className="text-gray-600 mt-4">
                                Learn how to select the best hosting provider for your website’s needs with our simple guide.
                            </p>
                            <a href="/blog/how-to-choose-hosting" className="text-blue-600 mt-4 inline-block font-medium">
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="" alt="Blog Post 2" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-2">Published on: Oct 5, 2024</p>
                            <h3 className="text-xl font-semibold text-gray-900">5 Tips for a Faster Website</h3>
                            <p className="text-gray-600 mt-4">
                                Speed is crucial for user experience. Here are five actionable tips to speed up your website.
                            </p>
                            <a href="/blog/5-tips-for-faster-website" className="text-blue-600 mt-4 inline-block font-medium">
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Post 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="" alt="Blog Post 3" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-2">Published on: Oct 10, 2024</p>
                            <h3 className="text-xl font-semibold text-gray-900">Understanding SSL Certificates</h3>
                            <p className="text-gray-600 mt-4">
                                SSL certificates are essential for security. Learn how they work and why you need one for your website.
                            </p>
                            <a href="/blog/understanding-ssl-certificates" className="text-blue-600 mt-4 inline-block font-medium">
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Post 4 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="" alt="Blog Post 4" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-2">Published on: Oct 15, 2024</p>
                            <h3 className="text-xl font-semibold text-gray-900">The Importance of Website Backups</h3>
                            <p className="text-gray-600 mt-4">
                                Discover why regular backups are vital for your website and how to implement an effective backup strategy.
                            </p>
                            <a href="/blog/website-backups" className="text-blue-600 mt-4 inline-block font-medium">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-gray-50 px-8 2xl:px-56">
                <div className="container mx-auto text-center mb-8">
                    <h2 className="text-3xl font-medium text-gray-800 text-left">Most Popular</h2>
                    <p className="text-lg text-left text-gray-600 mt-2">Explore our most-read articles.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Post 1 */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src=""
                                alt="Popular Post 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">Published on: Sep 28, 2024</p>
                                <h3 className="text-2xl font-semibold text-gray-900">Mastering SEO for Your Website</h3>
                                <p className="text-gray-600 mt-4">
                                    Boost your online visibility with these SEO techniques. Learn the tips and tricks to rank higher on search engines.
                                </p>
                                <a href="/blog/mastering-seo" className="text-blue-600 mt-4 inline-block font-medium">
                                    Read more
                                </a>
                            </div>
                        </div>

                        {/* Post 2 */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src=""
                                alt="Popular Post 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">Published on: Sep 20, 2024</p>
                                <h3 className="text-2xl font-semibold text-gray-900">10 Reasons to Choose a VPS</h3>
                                <p className="text-gray-600 mt-4">
                                    Discover the advantages of using a VPS over other hosting solutions for performance and flexibility.
                                </p>
                                <a href="/blog/choose-vps" className="text-blue-600 mt-4 inline-block font-medium">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>

                   
                    <div className="space-y-8">
                        {/* Post 3 */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src=""
                                alt="Popular Post 3"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">Published on: Sep 15, 2024</p>
                                <h3 className="text-xl font-semibold text-gray-900">Essential Security Tips for Website Owners</h3>
                                <a href="/blog/security-tips" className="text-blue-600 mt-2 inline-block font-medium">
                                    Read more
                                </a>
                            </div>
                        </div>

                        {/* Post 4 */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src=""
                                alt="Popular Post 4"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">Published on: Sep 10, 2024</p>
                                <h3 className="text-xl font-semibold text-gray-900">Choosing the Right Domain for Your Business</h3>
                                <a href="/blog/right-domain" className="text-blue-600 mt-2 inline-block font-medium">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-12 bg-gray-100 text-gray-900 px-8 2xl:px-56">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-medium">Subscribe to Our Newsletter</h2>
                    <p className="text-lg mt-2">
                        Join our mailing list to stay updated with the latest news and offers!
                    </p>


                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center max-w-lg mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-3/4 lg:w-full p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </div>


                    <p className="text-sm mt-4 text-gray-600">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>






            <Footer />
        </div>
    )
}

export default Blog
