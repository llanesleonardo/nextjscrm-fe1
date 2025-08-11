import Image from 'next/image';
import Link from 'next/link';

type FlexBlock50Props  = {
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


export default function FlexBlock50( props: FlexBlock50Props ) {
  const { title, text, imageUrl, imageAlt = 'Image',  imgPosition = 'right',BgColor,txtColor,linkTo,linkTxt } = props;

    return (
        <section className={`py-20 px-4 ${BgColor }`}>
        <h2 className={`text-3xl font-bold text-${txtColor} mb-10 max-w-6xl mx-auto text-left`}>
            {title}
        </h2>   
      <div
        className={`flex flex-col ${
          imgPosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
        } max-w-6xl mx-auto gap-8 items-center`}
      >
        <div className="w-full md:w-1/2 mt-10">
          <p className={`text-${txtColor } text-lg leading-relaxed`}>{text}</p>
          <p className='mt-10'>{linkTo && <Link href={linkTo} className='bg-none text-[#014fa7]'>{linkTxt}</Link>}</p>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={40}
            height={40}
            className="w-full h-auto rounded-lg shadow-md object-cover"
            priority={true} 
            />
        </div>
      </div>
    </section>
  );
}

