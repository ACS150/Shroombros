'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ShroomBroLanding() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedRecipe, setExpandedRecipe] = useState<number | null>(null);

  const recipes = [
    {
      id: 1,
      title: 'Pink Oyster Ricotta Toast',
      emoji: '🌸',
      type: 'Pink Oyster',
      time: '20 min',
      servings: '2',
      difficulty: 'Easy',
      filter: 'oyster',
      description: 'Crispy sourdough piled with whipped ricotta, sautéed pink oyster mushrooms and a drizzle of honey and chilli flakes. The most beautiful breakfast you\'ll ever make.',
      ingredients: ['200g Pink Oyster mushrooms', '2 thick slices sourdough', '150g fresh ricotta', '2 tbsp olive oil', '1 tbsp honey', 'Chilli flakes', 'Salt & fresh thyme'],
      method: ['Toast sourdough until deeply golden.', 'Sear oyster mushrooms in oil 4–5 min until crisp at edges.', 'Spread ricotta generously on toast.', 'Top with mushrooms, drizzle honey, finish with chilli flakes & thyme.']
    },
    {
      id: 2,
      title: 'Golden Oyster Brown Butter Pasta',
      emoji: '✨',
      type: 'Golden Oyster',
      time: '25 min',
      servings: '2',
      difficulty: 'Easy',
      filter: 'oyster',
      description: 'Golden oyster mushrooms sautéed in nutty brown butter with garlic, tossed through fresh pasta with parmesan and herbs. Simple perfection in a bowl.',
      ingredients: ['200g Golden Oyster mushrooms', '200g tagliatelle or linguine', '3 tbsp butter', '4 cloves garlic (sliced)', '50g parmesan', 'Fresh parsley', 'Salt & cracked pepper'],
      method: ['Cook pasta al dente, reserve ½ cup pasta water.', 'Brown butter until nutty. Add whole golden oysters, cook 5 min.', 'Add garlic 1 min, deglaze with pasta water.', 'Toss pasta through, finish with parmesan & parsley.']
    },
    {
      id: 3,
      title: 'Blue Oyster Mushroom Makhani',
      emoji: '🔵',
      type: 'Blue Oyster',
      time: '30 min',
      servings: '3–4',
      difficulty: 'Medium',
      filter: 'oyster',
      description: 'Velvety makhani gravy with blue oyster mushrooms. Lightly spiced, creamy and incredible with garlic naan or jeera rice. A proper North Indian weeknight dinner.',
      ingredients: ['300g Blue Oyster mushrooms', '2 onions', '3 tomatoes', '1 tsp garam masala', '1 tsp Kashmiri chilli', '2 tbsp butter', '3 tbsp cream', '1 tsp kasuri methi'],
      method: ['Blend cooked onion-tomato base until smooth.', 'Melt butter, add base, cook 8 min until deep red.', 'Add spices and mushrooms, simmer 10 min.', 'Finish with cream and kasuri methi. Serve hot.']
    },
    {
      id: 4,
      title: 'King Oyster Scallops with Herb Butter',
      emoji: '👑',
      type: 'King Oyster',
      time: '15 min',
      servings: '2',
      difficulty: 'Easy',
      filter: 'oyster',
      description: 'King oyster stems sliced into rounds, scored and pan-seared to a golden crust just like scallops. Finished with herb butter and lemon — the most elegant mushroom dish you\'ll ever make.',
      ingredients: ['300g King Oyster mushrooms', '2 tbsp butter', '2 cloves garlic', 'Thyme & rosemary', 'Juice of ½ lemon', 'Flaky sea salt', 'Cracked pepper'],
      method: ['Slice king oyster stems into 2cm rounds, score crosshatch on top.', 'Sear in hot dry pan 3 min each side until golden.', 'Add butter, garlic & herbs — baste mushrooms 1 min.', 'Finish with lemon juice & flaky salt. Serve immediately.']
    },
    {
      id: 5,
      title: 'Stuffed Portobello Mushroom Burger',
      emoji: '🍄',
      type: 'Portobello',
      time: '35 min',
      servings: '2',
      difficulty: 'Medium',
      filter: 'portobello',
      description: 'Giant portobello caps stuffed with melting cheese and caramelised onions, grilled and stacked in a brioche bun. The ultimate mushroom burger that needs no apology.',
      ingredients: ['2 large Portobello mushrooms', '1 onion (thinly sliced)', '50g mozzarella', '1 tbsp balsamic vinegar', '2 brioche buns', 'Rocket leaves', '2 tbsp mayo', 'Olive oil, salt, pepper'],
      method: ['Marinate portobellos in oil, balsamic, salt for 10 min.', 'Caramelise onions in pan on low heat for 15 min.', 'Grill portobellos 5 min each side, top with cheese & melt.', 'Stack in bun with onions, rocket & mayo.']
    },
    {
      id: 6,
      title: 'Crispy Deep-Fried Oyster Mushrooms',
      emoji: '🔵',
      type: 'Blue Oyster',
      time: '25 min',
      servings: '2–3',
      difficulty: 'Easy',
      filter: 'oyster',
      description: 'Blue oyster mushrooms dipped in a spiced buttermilk batter and fried until shatteringly crispy. Served with a tangy dipping sauce — the snack that converts every non-mushroom eater.',
      ingredients: ['300g Blue Oyster mushrooms', '100g flour', '50g cornflour', '1 tsp smoked paprika', '1 tsp chilli powder', '½ tsp garlic powder', '150ml buttermilk', 'Salt', 'Oil for frying', 'Lemon wedges to serve'],
      method: ['Mix flour, cornflour and spices. Whisk buttermilk separately.', 'Dip mushrooms in buttermilk then dredge in flour mixture.', 'Fry in hot oil (180°C) for 3–4 min until golden & crispy.', 'Drain on paper, season with salt, serve with lemon & dipping sauce.']
    },
    {
      id: 7,
      title: 'Creamy Cremini Mushroom Soup',
      emoji: '🟤',
      type: 'Cremini',
      time: '30 min',
      servings: '4',
      difficulty: 'Easy',
      filter: 'cremini',
      description: 'A silky, rich cremini mushroom soup with thyme and cream. Deeply flavourful and warming, ready in under 30 minutes. Serve with crusty bread for a perfect meal.',
      ingredients: ['400g Cremini mushrooms (sliced)', '1 large onion', '4 cloves garlic', '500ml vegetable stock', '150ml cream', '2 sprigs fresh thyme', '2 tbsp butter', 'Salt & pepper'],
      method: ['Sauté onion & garlic in butter until soft, 5 min.', 'Add cremini, cook until they release liquid & brown, 8 min.', 'Add stock & thyme, simmer 10 min.', 'Blend until smooth, stir in cream. Season well & serve.']
    }
  ];

  const products = [
    {
      name: 'Pink Oyster',
      emoji: '🌸',
      badge: 'Fan Favourite',
      color: 'pink',
      description: 'Stunning blush-pink clusters with a bold, ham-like flavour. Perfect for stir-fries, tacos and crispy mushroom bacon.',
      features: ['Organic', 'Farm Fresh', 'Pink']
    },
    {
      name: 'Golden Oyster',
      emoji: '✨',
      badge: "Chef's Pick",
      color: 'golden',
      description: 'Bright golden-yellow with a peppery finish. Gorgeous in pasta, risotto and noodle dishes. Cooks up beautifully crispy.',
      features: ['Organic', 'Farm Fresh', 'Golden']
    },
    {
      name: 'Blue Oyster',
      emoji: '🔵',
      badge: 'Bestseller',
      color: 'blue',
      description: 'The classic oyster — mild, buttery and tender. Ideal for curries, soups, sautés and Asian dishes.',
      features: ['Organic', 'Farm Fresh', 'Blue']
    },
    {
      name: 'King Oyster',
      emoji: '👑',
      badge: 'Premium',
      color: 'king',
      description: 'Thick, meaty stems with a scallop-like texture. Incredible pan-seared or roasted. The premium choice for gourmet cooking.',
      features: ['Organic', 'Farm Fresh', 'Premium']
    },
    {
      name: 'Portobello',
      emoji: '🍄',
      badge: 'Classic',
      color: 'brown',
      description: 'Rich, meaty and versatile. Perfect for grilling, stuffing, stir-fries and gourmet burgers. Freshly harvested daily.',
      features: ['Organic', 'Farm Fresh', 'Classic']
    },
    {
      name: 'Cremini',
      emoji: '🟤',
      badge: 'New',
      color: 'cremini',
      description: 'Firm texture with an earthy, robust flavour. Brilliant in soups, stir-fries, pasta sauces and casseroles.',
      features: ['Organic', 'Farm Fresh', 'Earthy']
    }
  ];

  const funFacts = [
    {
      emoji: '🌍',
      title: 'Fungi Kingdom',
      description: 'Mushrooms aren\'t plants — they belong to their own kingdom, Fungi, and are more closely related to animals than to plants.'
    },
    {
      emoji: '⚡',
      title: 'Speed Record',
      description: 'Oyster mushrooms can double in size every 24 hours during peak fruiting — some of the fastest-growing food crops on Earth.'
    },
    {
      emoji: '☀️',
      title: 'Vitamin D',
      description: 'Like humans, mushrooms produce Vitamin D when exposed to sunlight. Leave them gills-up in direct sun for 15 min to boost their Vitamin D content.'
    },
    {
      emoji: '🌱',
      title: 'Eco Warriors',
      description: 'Oyster mushrooms can grow on agricultural waste like straw and coffee grounds, turning low-value by-products into highly nutritious food.'
    },
    {
      emoji: '🧪',
      title: 'Lovastatin',
      description: 'Pink and Oyster mushrooms naturally contain lovastatin — the same compound found in some cholesterol-lowering medications.'
    },
    {
      emoji: '🍖',
      title: 'Meat-Like',
      description: 'Shredded and crisped oyster mushrooms are so convincingly meaty that many restaurants use them as a plant-based pulled \'chicken\' substitute.'
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: 'Super fresh mushrooms! I use them every week for my pasta and stir-fries. Love that they\'re locally grown — I know exactly where they come from.',
      name: 'Priya S.',
      role: 'Home Cook',
      location: 'Sector 62, Noida'
    },
    {
      rating: 5,
      text: 'We switched to The Shroom Bro Co for our café and the quality is consistently excellent. Great guys to work with — always on time and super reliable.',
      name: 'Rahul M.',
      role: 'Café Owner',
      location: 'Noida'
    },
    {
      rating: 5,
      text: 'Finally a local supplier! The Pink Oyster mushrooms are absolutely stunning. Will never go back to supermarket mushrooms — these are in a completely different league.',
      name: 'Ananya K.',
      role: 'Home Chef',
      location: 'Delhi-NCR'
    }
  ];

  const blogPosts = [
    {
      title: 'The Ultimate Beginner\'s Guide to Oyster Mushrooms',
      category: 'Beginner\'s Guide',
      date: 'March 2025',
      readTime: '5 min read',
      description: 'New to oyster mushrooms? Here\'s everything you need to know about why chefs love them, how to prep them, and how to start cooking with them at home.'
    },
    {
      title: 'Science-Backed Health Benefits of Oyster Mushrooms',
      category: 'Health & Nutrition',
      date: 'March 2025',
      readTime: '6 min read',
      description: 'Discover what the science says about oyster mushrooms — from nutrients and heart health to immunity support and blood sugar balance.'
    },
    {
      title: 'How to Cook Oyster Mushrooms: From Simple Sauté to Meat Substitute',
      category: 'Cooking Guide',
      date: 'March 2025',
      readTime: '7 min read',
      description: 'Learn the most practical, flavour-forward ways to cook oyster mushrooms — from a quick garlic sauté to plant-based pulled \'meat\' fillings.'
    },
    {
      title: 'Oyster Mushrooms vs Other Popular Mushrooms',
      category: 'Mushroom Guide',
      date: 'March 2025',
      readTime: '5 min read',
      description: 'How do oyster mushrooms compare with button, cremini and portobello in flavour, nutrition and culinary use? We break it all down.'
    }
  ];

  const filteredRecipes = activeFilter === 'all' 
    ? recipes 
    : recipes.filter(r => r.filter === activeFilter);

  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF6EE]/95 backdrop-blur-md border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-['Playfair_Display'] text-2xl font-black">
            🍄 <span>The Shroom Bro Co</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold hover:text-[#E67E22] transition">Home</a>
            <a href="#recipes" className="text-sm font-semibold hover:text-[#E67E22] transition">Cook With Us</a>
            <a href="#products" className="text-sm font-semibold hover:text-[#E67E22] transition">Products</a>
            <a href="#blog" className="text-sm font-semibold hover:text-[#E67E22] transition">Blog</a>
            <a href="#about" className="text-sm font-semibold hover:text-[#E67E22] transition">Meet the Bros</a>
            <button className="bg-[#E67E22] text-white px-6 py-2.5 text-sm font-bold border-2 border-black hover:bg-[#D35400] transition">
              🛒 Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#F5ECD7] to-[#E8D5BA]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE]/95 via-[#FAF6EE]/60 to-[#FAF6EE]/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold tracking-wider uppercase px-4 py-2 mb-6">
              🌱 Noida's Homegrown Mushroom Farm
            </div>
            
            <h1 className="font-['Playfair_Display'] text-7xl font-black leading-tight mb-4">
              Fresh.<br />
              <em className="italic text-[#E67E22]">Organic.</em><br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Farm Direct.</span>
            </h1>
            
            <p className="text-lg text-[#6B4423] leading-relaxed mb-8 max-w-xl">
              Premium Pink, Golden, Blue & King Oyster, Portobello & Cremini mushrooms — grown in Noida, delivered across Delhi-NCR.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-4 text-sm font-bold border-2 border-black hover:bg-[#1a1008] transition">
                🛒 Order Now
              </button>
              <button className="bg-transparent text-black px-8 py-4 text-sm font-bold border-2 border-black hover:bg-black hover:text-white transition">
                Cook With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-black text-white py-3 overflow-hidden">
        <div className="flex gap-16 animate-scroll whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              <span className="text-xs font-bold tracking-widest uppercase">🌸 Pink Oyster <span className="text-[#E67E22]">·</span></span>
              <span className="text-xs font-bold tracking-widest uppercase">✨ Golden Oyster <span className="text-[#E67E22]">·</span></span>
              <span className="text-xs font-bold tracking-widest uppercase">🔵 Blue Oyster <span className="text-[#E67E22]">·</span></span>
              <span className="text-xs font-bold tracking-widest uppercase">👑 King Oyster <span className="text-[#E67E22]">·</span></span>
              <span className="text-xs font-bold tracking-widest uppercase">🍄 Portobello <span className="text-[#E67E22]">·</span></span>
              <span className="text-xs font-bold tracking-widest uppercase">🟤 Cremini <span className="text-[#E67E22]">·</span></span>
              <span className="text-xs font-bold tracking-widest uppercase">🚚 Farm-Direct NCR Delivery <span className="text-[#E67E22]">·</span></span>
              <span className="text-xs font-bold tracking-widest uppercase">✅ 100% Organic <span className="text-[#E67E22]">·</span></span>
              <span className="text-xs font-bold tracking-widest uppercase">📦 Wholesale Available <span className="text-[#E67E22]">·</span></span>
            </div>
          ))}
        </div>
      </div>

      {/* Recipes Section */}
      <section id="recipes" className="bg-white border-t-2 border-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-[#E67E22] mb-3 border-b-2 border-[#E67E22] pb-1">
                Cook With Us
              </span>
              <h2 className="font-['Playfair_Display'] text-5xl font-black leading-tight mb-4">
                From Our Farm<br /><em className="italic text-[#E67E22]">to Your Kitchen</em>
              </h2>
              <p className="text-base text-gray-600 max-w-xl">
                Original recipes created for The Shroom Bro Co mushrooms. Click any recipe to expand ingredients and method.
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {['all', 'oyster', 'portobello', 'cremini'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs font-bold px-4 py-2 border-2 border-black uppercase tracking-wide transition ${
                    activeFilter === filter 
                      ? 'bg-black text-white' 
                      : 'bg-transparent text-black hover:bg-gray-100'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white border-r-2 border-b-2 border-black p-8 hover:bg-[#FAF6EE] transition cursor-pointer"
                onClick={() => setExpandedRecipe(expandedRecipe === recipe.id ? null : recipe.id)}
              >
                <div className="flex gap-4 mb-3 text-xs font-semibold text-gray-500">
                  <span>⏱ {recipe.time}</span>
                  <span>👥 {recipe.servings}</span>
                  <span>⭐ {recipe.difficulty}</span>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-2xl">{recipe.emoji}</span>
                  <h3 className="font-['Playfair_Display'] text-xl font-extrabold leading-tight">
                    {recipe.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {recipe.description}
                </p>
                
                {expandedRecipe === recipe.id && (
                  <div className="mt-4 pt-4 border-t-2 border-black">
                    <h4 className="font-bold text-sm mb-2">Ingredients</h4>
                    <ul className="text-sm text-gray-700 mb-4 space-y-1">
                      {recipe.ingredients.map((ing, idx) => (
                        <li key={idx}>• {ing}</li>
                      ))}
                    </ul>
                    <h4 className="font-bold text-sm mb-2">Method</h4>
                    <ol className="text-sm text-gray-700 space-y-2">
                      {recipe.method.map((step, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="font-bold">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                
                <button className="inline-flex items-center gap-2 text-xs font-bold text-[#E67E22] mt-2">
                  {expandedRecipe === recipe.id ? 'Hide Recipe ↑' : 'View Recipe →'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F5ECD7] border-t-2 border-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-black p-8 text-center">
              <div className="text-5xl font-black text-[#E67E22]">100%</div>
              <div className="text-sm font-bold mt-2">Organically Grown</div>
            </div>
            <div className="bg-white border-2 border-black p-8 text-center">
              <div className="text-5xl font-black text-[#E67E22]">NCR</div>
              <div className="text-sm font-bold mt-2">Wide Delivery Area</div>
            </div>
            <div className="bg-white border-2 border-black p-8 text-center">
              <div className="text-5xl font-black text-[#E67E22]">6+</div>
              <div className="text-sm font-bold mt-2">Premium Varieties</div>
            </div>
            <div className="bg-white border-2 border-black p-8 text-center">
              <div className="text-5xl font-black text-[#E67E22]">0</div>
              <div className="text-sm font-bold mt-2">Chemicals Used</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-white border-t-2 border-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-[#E67E22] mb-3 border-b-2 border-[#E67E22] pb-1">
              Farm Fresh
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl font-black leading-tight mb-4">
              What We Grow
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Every cluster harvested to order. No cold storage, no middlemen — the freshest mushrooms in Delhi-NCR, grown right here in Noida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="bg-[#FAF6EE] border-2 border-black p-8 hover:shadow-xl transition group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{product.emoji}</span>
                  <span className="text-xs font-bold bg-[#E67E22] text-white px-3 py-1 border border-black">
                    {product.badge}
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-black mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs font-semibold bg-white border border-black px-3 py-1">
                      ✅ {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#E67E22] border-2 border-black p-8 text-center">
            <p className="text-white font-bold text-lg mb-4">
              📦 Available for bulk & wholesale orders for restaurants, cafes & cloud kitchens across Noida & Delhi-NCR.
            </p>
            <button className="bg-white text-black px-6 py-3 font-bold border-2 border-black hover:bg-black hover:text-white transition">
              Contact us for pricing →
            </button>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="bg-[#F5ECD7] border-t-2 border-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-5xl font-black leading-tight mb-4">
              Did You Know?
            </h2>
            <p className="text-xl text-gray-700">Fun Facts About Mushrooms 🍄</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, idx) => (
              <div key={idx} className="bg-white border-2 border-black p-8 hover:shadow-xl transition">
                <div className="text-4xl mb-4">{fact.emoji}</div>
                <h3 className="font-bold text-xl mb-3">{fact.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white border-t-2 border-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-5xl font-black leading-tight mb-4">
              Why The Shroom Bro Co?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We didn't set out to build a business. We set out to find the freshest mushrooms in Noida — and when we couldn't, we grew them ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF6EE] border-2 border-black p-8 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-bold text-lg mb-2">Organically Grown</h3>
              <p className="text-sm text-gray-600">No chemicals, no pesticides. Clean, natural cultivation only.</p>
            </div>
            <div className="bg-[#FAF6EE] border-2 border-black p-8 text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold text-lg mb-2">Farm-Direct Delivery</h3>
              <p className="text-sm text-gray-600">Straight from our Noida farm to your doorstep across NCR.</p>
            </div>
            <div className="bg-[#FAF6EE] border-2 border-black p-8 text-center">
              <div className="text-4xl mb-4">🍄</div>
              <h3 className="font-bold text-lg mb-2">Harvested to Order</h3>
              <p className="text-sm text-gray-600">Peak freshness guaranteed — never sitting on shelves.</p>
            </div>
            <div className="bg-[#FAF6EE] border-2 border-black p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-2">Supporting Local</h3>
              <p className="text-sm text-gray-600">A homegrown Noida venture. Buy local, support local farming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5ECD7] border-t-2 border-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-[#E67E22] mb-3 border-b-2 border-[#E67E22] pb-1">
              Happy Customers
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl font-black leading-tight">
              What People Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border-2 border-black p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#E67E22]">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t-2 border-black pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role} · {testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-white border-t-2 border-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-[#E67E22] mb-3 border-b-2 border-[#E67E22] pb-1">
              The Shroom Bro Blog
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl font-black leading-tight">
              Learn About Mushrooms
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mt-4">
              Everything you need to know about oyster mushrooms — from cooking guides to health benefits to how they stack up against other varieties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="bg-[#FAF6EE] border-2 border-black p-8 hover:shadow-xl transition group">
                <span className="inline-block text-xs font-bold bg-[#E67E22] text-white px-3 py-1 border border-black mb-4">
                  {post.category}
                </span>
                <div className="flex gap-4 text-xs text-gray-500 mb-3">
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.readTime}</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-black mb-3 group-hover:text-[#E67E22] transition">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {post.description}
                </p>
                <button className="text-sm font-bold text-[#E67E22] hover:underline">
                  Read Article →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-2 border-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-['Playfair_Display'] text-3xl font-black mb-4 flex items-center gap-2">
                🍄 <span>The Shroom<br />Bro Co</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Premium organic mushrooms grown fresh in Noida, delivered across Delhi-NCR.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 border-2 border-gray-600 flex items-center justify-center text-xl hover:border-[#E67E22] transition">
                  📘
                </a>
                <a href="#" className="w-10 h-10 border-2 border-gray-600 flex items-center justify-center text-xl hover:border-[#E67E22] transition">
                  📷
                </a>
                <a href="#" className="w-10 h-10 border-2 border-gray-600 flex items-center justify-center text-xl hover:border-[#E67E22] transition">
                  💬
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold tracking-widest uppercase text-[#E67E22] mb-6">
                Explore
              </h3>
              <ul className="space-y-3">
                {['Home', 'Cook With Us', 'Our Mushrooms', 'Blog', 'Meet the Bros', 'Order Now'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-extrabold tracking-widest uppercase text-[#E67E22] mb-6">
                Our Mushrooms
              </h3>
              <ul className="space-y-3">
                {['Pink Oyster', 'Golden Oyster', 'Blue Oyster', 'King Oyster', 'Portobello', 'Cremini'].map(mushroom => (
                  <li key={mushroom}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition">
                      {mushroom}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-extrabold tracking-widest uppercase text-[#E67E22] mb-6">
                Get In Touch
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Noida, Delhi-NCR<br />India</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  <span>theshroombro.co@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span>
                  <span>+91 9560300899</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>💬</span>
                  <span>+91 9910100428</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 The Shroom Bro Co. All rights reserved. · Noida, India
            </p>
            <p className="text-sm text-gray-500 italic">
              "We're Fun Guys 🍄"
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
