import Image from 'next/image';

export default function Logo() {
  return (
           <div className="flex items-center">
             <Image
               src="/logo.svg" // You can change this to PNG or JPEG as needed
               alt="Logo"
               width={40}
               height={40}
               className="mr-2"
             />
           </div>
  )
}
