import { FaCheck } from 'react-icons/fa';


type PricingPlan = {
  name: string;
  price: string;
  subtitle?: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
};

const plans: PricingPlan[] = [
  {
    name: 'Free',
    price: '$0',
    subtitle: 'Free for individuals',
    features: ['Lead Management','Reports','Email Support','Up to 1 User'],
    ctaText: 'Get Started',
  },
  {
    name: 'Basic',
    price: '$8/seat/mo',
    subtitle: 'Basic features individuals or small teams',
    features: ['All Free features','Lead Management','Contact Management', 'Account Management', 'Deal Management','Reports','Phone & Email Support'],
    ctaText: 'Get Started',
  },
  {
    name: 'Standard',
    price: '$15/seat/mo',
    subtitle: 'For growing teams',
    features: ['All Basic features', 'Quote Management', 'Product Management','Sales Order Management','Purchase Order Management','Vendor Management' ,'Price List Management','Project Management','Case Management', 'Solution Management','Phone & Email Support'],
    ctaText: 'Get Started',
    popular: true,
  },
  {
    name: 'Professional',
    price: '$25/seat/mo',
    subtitle: 'Advanced CRM capabilities',
    features: ['All Standard features','Social Media Management','Customer Portal Management','Estimates Management','Routing Management','Manufacturing Order Management','Quality Management','OKRs Management', 'Specialized Support'],
    ctaText: 'Get Started',
  }
];

export default function PricingTable() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Choose Your Plan</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`text-black border rounded-lg p-6 shadow-lg flex flex-col justify-between ${
                plan.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="text-sm text-white bg-blue-500 px-3 py-1 inline-block mb-4 rounded-full self-start">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-xl font-bold mb-2">{plan.price}</p>
                {plan.subtitle && <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>}
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheck color='#014fa7'/> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/signup"
                className={`text-center mt-auto px-4 py-2 rounded-md text-white font-medium ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-800 hover:bg-gray-900'
                } transition`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
