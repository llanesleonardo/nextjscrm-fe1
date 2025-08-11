import React from 'react';

type GridItem = {
  icon: React.ReactNode; // can be an SVG, <img>, or icon component
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
};

type GridFeaturesSectionProps = {
  sectionTitle: string;
  items: GridItem[];
  BgColor?: string;
  txtColor?: string;
  gridItemColor?: string;
    gridItemTxtColor?: string;
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

const bgGridItemTxtColorMap: Record<string, string> = {
  blue: 'text-blue-800',
  red: 'text-red-800',
  gray: 'text-gray-800',
  emerald: 'text-emerald-800',
  black: ' text-black',
  white: 'text-white',
  bluetres: 'text-[#014fa7]',
  graytres: 'text-gray-100'
  // add any other Tailwind-supported colors here
};


export default function GridFeaturesSection({ sectionTitle, items,BgColor,txtColor,gridItemColor,gridItemTxtColor }: GridFeaturesSectionProps) {
     const defaultTxtColor = txtColor || 'black'; // Default background color
   const defaultBgColor = BgColor || 'graytres'; // Default text color
   const defaultGridItemColor = gridItemColor || 'white'; // Default grid item color
   const defaultGridItemTxtColor  = gridItemTxtColor || 'black'; // Default grid item text color
  
  return (
    <section className={`py-16 px-4 ${bgColorMap[defaultBgColor] }`}>
      {/* Title */}
      <h2 className={`text-3xl font-bold ${TxtColorMap[defaultTxtColor] } mb-10 max-w-6xl mx-auto text-left `}>
        {sectionTitle}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg shadow hover:shadow-md transition duration-300 ${bgColorMap[defaultGridItemColor] }`}
          >
            <div className="mb-4 text-[#014fa7] text-4xl">{item.icon}</div>
            <h3 className={`text-xl font-bold mb-2 ${bgGridItemTxtColorMap[defaultGridItemTxtColor] } `}>{item.title}</h3>
            <p className={`${bgGridItemTxtColorMap[defaultGridItemTxtColor] } mb-4`}>{item.description}</p>
            {item.linkHref && item.linkText && (
              <a
                href={item.linkHref}
                className="text-[#014fa7] font-medium underline"
              >
                {item.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
