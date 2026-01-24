import React from 'react'
import "remixicon/fonts/remixicon.css";


const FooterPage = () => {
    return (
        <div>
            <footer class="bg-gray-900 text-gray-300">
                <div class="max-w-7xl mx-auto px-6 py-12">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

                        {/* <!-- Brand --> */}
                        <div>
                            <h2 class="text-2xl font-bold text-white mb-4">THEGAMEUNTOLD</h2>
                            <p class="text-sm">
                                Thank you for being part of THEGAMEUNTOLD!
                                Your support and passion inspire us every day.
                                Together, we’re creating unforgettable adventures!
                            </p>
                        </div>

                        {/* <!-- Quick Links --> */}
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="hover:text-white transition">Home</a></li>
                                <li><a href="#" class="hover:text-white transition">About</a></li>
                                <li><a href="#" class="hover:text-white transition">Services</a></li>
                                <li><a href="#" class="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>

                        {/* <!-- Support --> */}
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-4">Support</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="hover:text-white transition">Help Center</a></li>
                                <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
                                <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
                                <li><a href="#" class="hover:text-white transition">FAQ</a></li>
                            </ul>
                        </div>

                        {/* <!-- Social Media --> */}
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-4">Follow Us</h3>
                            <div class="flex space-x-4">
                                <a href="#" class="hover:text-white transition"><i class="ri-instagram-line"></i></a>
                                <a href="#" class="hover:text-white transition"><i class="ri-facebook-line"></i></a>
                                <a href="#" class="hover:text-white transition"><i class="ri-twitter-x-line"></i></a>
                                <a href="#" class="hover:text-white transition"><i class="ri-github-fill"></i></a>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Bottom --> */}
                    <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                        © 2026 THEGAMEUNTOLD. All rights reserved.
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default FooterPage
