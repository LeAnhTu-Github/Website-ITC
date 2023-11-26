import type { Config } from 'tailwindcss'
import Image from 'next/image'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'cartoonImg': "url('/images/bgLogin/img2.png')",
        // 'cloudOne' : "url(/images/bgLogin/cloud_1.png)",
        // 'cloudTwo' : "url(/images/bgLogin/cloud_2.png)"
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
