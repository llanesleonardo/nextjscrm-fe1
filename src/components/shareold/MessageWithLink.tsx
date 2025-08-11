import React from 'react';
import Link from 'next/link';

type MessageWithLinkProps = {
  message: string;
  linkText: string;
  linkHref: string;
  BgColor: string;
  txtColor: string;
  containerColor?: string;
  buttonColor?: string;
  btnTextColor?: string;
};

const TxtColorMap: Record<string, string> = {
  blue: 'text-blue-800',
  red: 'text-red-800',
  gray: 'text-gray-800',
  emerald: 'text-emerald-800',
  black: ' text-black',
  white: 'text-white',
  bluetres: 'text-[#014fa7]',
  // add any other Tailwind-supported colors here
};

const bgColorMap: Record<string, string> = {
  blue: 'bg-blue-800',
  red: 'bg-red-800',
  gray: 'bg-gray-800',
  emerald: 'bg-emerald-800',
  black: ' bg-black',
  white: 'bg-white',
  bluetres: 'bg-[#014fa7]',
  graytres: 'bg-gray-100'
  // add any other Tailwind-supported colors here
};


const bgContainerColorMap: Record<string, string> = {
  blue: 'bg-blue-800',
  red: 'bg-red-800',
  gray: 'bg-gray-800',
  emerald: 'bg-emerald-800',
  black: ' bg-black',
  white: 'bg-white',
  bluetres: 'bg-[#014fa7]',
  graytres: 'bg-gray-100'
  // add any other Tailwind-supported colors here
};


const bgButtonColorMap: Record<string, string> = {
  blue: 'bg-blue-800',
  red: 'bg-red-800',
  gray: 'bg-gray-800',
  emerald: 'bg-emerald-800',
  black: ' bg-black',
  white: 'bg-white',
  bluetres: 'bg-[#014fa7]',
  graytres: 'bg-gray-100',
    bluetobluer: "bg-gradient-to-r from-blue-500 to-[#014fa7]"
  // add any other Tailwind-supported colors here
};


const bgButtonTextColorMap: Record<string, string> = {
  blue: 'bg-blue-800',
  red: 'bg-red-800',
  gray: 'bg-gray-800',
  emerald: 'bg-emerald-800',
  black: ' bg-black',
  white: 'bg-white',
  bluetres: 'bg-[#014fa7]',
  graytres: 'bg-gray-100',

  // add any other Tailwind-supported colors here
};


export default function MessageWithLink({ message, linkText, linkHref,BgColor,txtColor,containerColor,buttonColor,btnTextColor }: MessageWithLinkProps) {
  const defaultTxtColor = txtColor || 'black'; // Default background color
   const defaultBgColor = BgColor || 'graytres'; // Default text color
   const defaultContainerColor = containerColor || 'bg-gray-100'; // Default container color
   const defaultButtonColor = buttonColor || 'bg-gradient-to-r from-blue-500 to-[#014fa7]'; // Default button color
   const defaultBtnTextColor = btnTextColor || 'text-white'; // Default button text color
  return (
   <section className={`py-20 px-4 ${bgColorMap[defaultBgColor] }`}>
   <div className= {`max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 mb-16 ${bgContainerColorMap[defaultContainerColor]} rounded-lg shadow`}>
      {/* Message */}
      <p className={`${TxtColorMap[defaultTxtColor] } text-base font-medium`}>{message}</p>

      {/* Gradient Link Button */}
      <Link
        href={linkHref}
        className={`px-6 py-2   ${bgButtonColorMap[defaultButtonColor]}   rounded-md  ${bgButtonTextColorMap[defaultBtnTextColor]} font-semibold shadow-md hover:opacity-90 transition text-center`}
      >
        {linkText}
      </Link>
    </div>
    </section>
  );
}
