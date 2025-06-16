import Image from 'next/image';
import Link from 'next/link';

type FlexBlock50 = {
  title: string;
  text: string;
  imageUrl: string;
  imageAlt?: string;
  imgPosition?: 'left' | 'right';
  BgColor?: string;
  txtColor?: string;
  linkTo?: string;
  linkTxt?: string;
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


export default function FlexBlock50({ title, text, imageUrl, imageAlt = 'Image',  imgPosition = 'right',BgColor,txtColor,linkTo,linkTxt }: FlexBlock50) {
 
   const isImageLeft = imgPosition === 'left';
   const defaultTxtColor = txtColor || 'black'; // Default background color
   const defaultBgColor = BgColor || 'graytres'; // Default text color
    return (
    <section className={`py-20 px-4 ${bgColorMap[defaultBgColor] }`}>
      {/* Title */}
    <h2 className={`text-3xl font-bold ${TxtColorMap[defaultTxtColor] } mb-10 max-w-6xl mx-auto text-left`}>
        {title}
    </h2>   
         {/* Flex Row with conditional reverse */}
      <div
        className={`flex flex-col ${
          isImageLeft ? 'md:flex-row-reverse' : 'md:flex-row'
        } max-w-6xl mx-auto gap-8 items-center`}
      >
        {/* Left Block - Text */}
        <div className="w-full md:w-1/2 mt-10">
          <p className={`${TxtColorMap[defaultTxtColor] } text-lg leading-relaxed`}>{text}</p>
          <p className='mt-10'>{linkTo && <Link href={linkTo} className='bg-none text-[#014fa7]'>{linkTxt}</Link>}</p>
        </div>

        {/* Right Block - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={40}
            height={40}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

