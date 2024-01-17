
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['wifi.json', 'router2.png', 'react.svg'],

      manifest: {
        name: 'captive-portal',
        theme_color: '#ffffff',
        icons: [
          
            {
              src: 'pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png'
          },
          {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
          },
          {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
          },
          {
              src: 'maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
          
          },
        ],
      },
      workbox:{
        runtimeCaching: [{


          // urlPattern: ({url}) => {
          //   return url.toString().pathname.startsWith('https://captive-portal5.onrender.com/stk_push');

          // },

          urlPattern: /^https:\/\/captive-portal5\.onrender\.com\/stk_push/,

          handler: "CacheFirst",
          options: {
            cacheName: "api-cache",
            cacheableResponse:{
              
              statuses: [0, 200]
            }
          }
        }]
      }
    }),
  ],
});













// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import {VitePWA} from 'vite-plugin-pwa'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
    
    
    
//     react(),
//   VitePWA({
//     registerType: 'autoUpdate',
//     includeAssets: ['wifi.json', 'router2.png', 'react.svg'],


//     manifest:{
//       name:'captive-portal',
//       theme_color: 'white',    
//       icons: [
//         {
//           src: '/vite.svg',
// size: "512X512",
// type: 'image/svg+xml',
// purpose: 'any'

//         }
//       ],

      
//     }
//   })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   ],
// })
