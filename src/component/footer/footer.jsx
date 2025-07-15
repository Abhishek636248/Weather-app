import React from 'react';
export default function Footer(){
    return(
        <>
        <footer class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4">
         <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
         <p class="text-sm text-center md:text-left">
          © 2025 sky-forcast. All rights reserved.
         </p>
         <div class="flex space-x-4 mt-2 md:mt-0 text-sm">
          <a href="#" class="hover:underline">Privacy</a>
          <a href="#" class="hover:underline">Terms</a>
          <a href="#" class="hover:underline">Contact</a>
         </div>
         </div>
        </footer>
        </>
    )
}