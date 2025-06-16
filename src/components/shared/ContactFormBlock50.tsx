import Image from "next/image";

type ContactFormBlock50Props = {
  title: string;
  description: string;
  imageUrl: string;
  children: React.ReactNode;
};

export default function ContactFormBlock50({
  title,
  description,
  imageUrl,
  children,
}: ContactFormBlock50Props) {
  return (
       <section className='bg-white py-20 '>
   <div className="flex flex-col md:flex-row items-stretch justify-between max-w-6xl mx-auto px-6 py-12 gap-8">
      
      {/* Left: Image and Text */}
      <div className="md:w-1/2 flex flex-col justify-start items-center">
                <h2 className="text-3xl font-bold mb-4 text-black text-center">{title}</h2>
        <Image 
            src={imageUrl} 
            alt="Contact illustration" 
            className="rounded-lg my-16 mx-auto" 
            width={200}
            height={200}
            
            />
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Right: Custom Form or Any Component */}
      <div className="md:w-1/2">{children}</div>
    </div>
    </section>
  );
}
