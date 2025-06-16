type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?:string;
  BgColor?: string;
};

export default function Hero({ title, subtitle, ctaText, ctaLink,imageUrl,BgColor }: HeroProps) {
  return (
       <section
      className={`py-24 text-center text-white bg-cover bg-center bg-no-repeat bg-[${BgColor}]`}
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg sm:text-xl mb-6">{subtitle}</p>}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className=" cursor-pointer inline-block bg-white text-[#014fa7] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition shadow border"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
