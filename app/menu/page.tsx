import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Island Freeze",
  description: "Browse our full menu of frozen cocktails, slushies, and mocktails.",
};

const categories = [
  {
    id: "cocktails",
    label: "Frozen Cocktails",
    emoji: "🍹",
    items: [
      {
        name: "Blue Lagoon Freeze",
        desc: "Blue curacao, vodka, lemonade, crushed ice",
        price: "AWG 14",
        tags: ["Signature"],
      },
      {
        name: "Passion Fruit Margarita",
        desc: "Tequila, passion fruit puree, triple sec, lime",
        price: "AWG 15",
        tags: ["Spicy option"],
      },
      {
        name: "Coconut Colada Freeze",
        desc: "White rum, coconut cream, pineapple, crushed ice",
        price: "AWG 14",
        tags: [],
      },
      {
        name: "Watermelon Daiquiri",
        desc: "White rum, fresh watermelon, lime juice, mint",
        price: "AWG 13",
        tags: ["Refreshing"],
      },
      {
        name: "Frozen Mojito",
        desc: "White rum, lime, mint, simple syrup, soda",
        price: "AWG 14",
        tags: [],
      },
      {
        name: "Strawberry Frosé",
        desc: "Rosé wine, fresh strawberries, lemon, sugar",
        price: "AWG 15",
        tags: ["Seasonal"],
      },
    ],
  },
  {
    id: "slushies",
    label: "Tropical Slushies",
    emoji: "🌊",
    items: [
      {
        name: "Mango Tango",
        desc: "Fresh mango, lime, honey, crushed ice",
        price: "AWG 9",
        tags: ["Alcohol-free"],
      },
      {
        name: "Island Punch",
        desc: "Guava, passion fruit, pineapple, coconut water",
        price: "AWG 9",
        tags: ["Alcohol-free"],
      },
      {
        name: "Tamarind Chill",
        desc: "Tamarind, brown sugar, lime, salt rim",
        price: "AWG 8",
        tags: ["Local Favorite", "Alcohol-free"],
      },
      {
        name: "Soursop Dream",
        desc: "Fresh soursop, condensed milk, vanilla",
        price: "AWG 10",
        tags: ["Alcohol-free"],
      },
    ],
  },
  {
    id: "shooters",
    label: "Frozen Shooters",
    emoji: "🥃",
    items: [
      {
        name: "Freeze Shot — Rum",
        desc: "Frozen rum with a citrus rim",
        price: "AWG 6",
        tags: [],
      },
      {
        name: "Freeze Shot — Tequila",
        desc: "Frozen tequila with tajin and lime",
        price: "AWG 6",
        tags: ["Spicy"],
      },
      {
        name: "Freeze Shot — Vodka",
        desc: "Frozen vodka with a hint of cranberry",
        price: "AWG 6",
        tags: [],
      },
    ],
  },
  {
    id: "extras",
    label: "Add-Ons",
    emoji: "✨",
    items: [
      { name: "Alcohol Upgrade", desc: "Double the spirit in any drink", price: "AWG +5", tags: [] },
      { name: "Flavor Shot", desc: "Extra flavor syrup of your choice", price: "AWG +2", tags: [] },
      { name: "Rim Upgrade", desc: "Tajin, salt, sugar, or candy rim", price: "AWG +1", tags: [] },
    ],
  },
];

const tagColors: Record<string, string> = {
  Signature: "bg-cyan-100 text-cyan-800",
  "Alcohol-free": "bg-green-100 text-green-800",
  "Local Favorite": "bg-orange-100 text-orange-800",
  Seasonal: "bg-purple-100 text-purple-800",
  Refreshing: "bg-blue-100 text-blue-800",
  "Spicy option": "bg-red-100 text-red-800",
  Spicy: "bg-red-100 text-red-800",
};

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-28 pb-16 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #0c1a2e 0%, #0e4f6e 60%, #0891b2 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-5xl mb-4">🍹</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Menu</h1>
          <p className="text-white/70 text-lg">
            Handcrafted frozen cocktails and tropical slushies made fresh daily.
            Ask about today&apos;s specials.
          </p>
        </div>
      </section>

      {/* Menu sections */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{cat.emoji}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {cat.label}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 p-5 rounded-2xl border border-gray-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              tagColors[tag] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-bold text-cyan-700 whitespace-nowrap text-sm pt-0.5">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Allergy note */}
      <div className="bg-gray-50 border-t border-gray-200 py-8 text-center text-sm text-gray-500 px-4">
        Prices in Aruban florin (AWG). Alcohol served to guests 18+.
        Please inform us of any allergies or dietary restrictions.
      </div>
    </>
  );
}
