'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TheShroomBroV5() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const slides = [
    { bg: 'linear-gradient(135deg, #F5ECD7 0%, #E8D5BA 100%)' },
    { bg: 'linear-gradient(135deg, #FAF6EE 0%, #F5ECD7 100%)' },
    { bg: 'linear-gradient(135deg, #E8D5BA 0%, #D4B896 100%)' },
  ];

  const recipes = [
    { id: 1, title: 'Pink Oyster Ricotta Toast', time: '20 min', servings: '2', difficulty: 'Easy', filter: 'oyster' },
    { id: 2, title: 'Golden Oyster Brown Butter Pasta', time: '25 min', servings: '2', difficulty: 'Easy', filter: 'oyster' },
    { id: 3, title: 'Blue Oyster Mushroom Makhani', time: '30 min', servings: '3-4', difficulty: 'Medium', filter: 'oyster' },
    { id: 4, title: 'King Oyster Scallops with Herb Butter', time: '15 min', servings: '2', difficulty: 'Easy', filter: 'oyster' },
    { id: 5, title: 'Stuffed Portobello Mushroom Burger', time: '35 min', servings: '2', difficulty: 'Medium', filter: 'portobello' },
    { id: 6, title: 'Crispy Deep-Fried Oyster Mushrooms', time: '25 min', servings: '2-3', difficulty: 'Easy', filter: 'oyster' },
  ];

  const filteredRecipes = activeFilter === 'all' 
    ? recipes 
    : recipes.filter(r => r.filter === activeFilter);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--beige-light)' }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(250, 246, 238, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid var(--black)',
        padding: '16px 5%',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 900,
            color: 'var(--black)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            🍄 <span>The Shroom Bro Co</span>
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
          }}>
            <a href="#home" style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--black)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
              fontFamily: "'Poppins', sans-serif"
            }}>
              Home
            </a>
            <a href="#recipes" style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--black)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
              fontFamily: "'Poppins', sans-serif"
            }}>
              Recipes
            </a>
            <a href="#about" style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--black)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
              fontFamily: "'Poppins', sans-serif"
            }}>
              About
            </a>
            <a href="#contact" style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--black)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
              fontFamily: "'Poppins', sans-serif"
            }}>
              Contact
            </a>
            <button style={{
              background: 'var(--orange)',
              color: 'var(--white)',
              padding: '10px 24px',
              fontSize: '0.85rem',
              fontWeight: 700,
              border: '2px solid var(--black)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '0.02em'
            }}>
              🛒 Order Now
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden',
        background: 'var(--beige)'
      }}>
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            transition: 'opacity 1.2s ease',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1
          }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(110deg, rgba(250,246,238,0.93) 0%, rgba(250,246,238,0.6) 45%, rgba(250,246,238,0.1) 100%)'
        }} />
        
        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '660px', 
          padding: '0 5%', 
          marginTop: '80px',
          animation: 'fadeUp 1s ease forwards'
        }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'var(--black)', 
            color: 'var(--white)', 
            fontSize: '0.72rem', 
            fontWeight: 700, 
            letterSpacing: '0.12em', 
            textTransform: 'uppercase', 
            padding: '7px 16px', 
            marginBottom: '24px'
          }}>
            🌱 Noida&apos;s Homegrown Mushroom Farm
          </div>
          
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)', 
            fontWeight: 900, 
            color: 'var(--black)', 
            lineHeight: 1.08, 
            marginBottom: '10px'
          }}>
            Fresh.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>Organic.</em><br />
            <span style={{ 
              WebkitTextStroke: '2px var(--black)', 
              color: 'transparent' 
            }}>Farm Direct.</span>
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', 
            color: 'var(--brown)', 
            fontWeight: 400, 
            lineHeight: 1.7, 
            maxWidth: '500px', 
            marginBottom: '36px'
          }}>
            Premium Pink, Golden, Blue & King Oyster, Portobello & Cremini mushrooms — grown in Noida, delivered across Delhi-NCR.
          </p>
          
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button style={{ 
              background: 'var(--black)', 
              color: 'var(--white)', 
              padding: '14px 32px', 
              fontSize: '0.88rem', 
              fontWeight: 700, 
              letterSpacing: '0.04em', 
              border: '2px solid var(--black)', 
              transition: 'all 0.25s', 
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif"
            }}>
              🛒 Order Now
            </button>
            <button style={{ 
              background: 'transparent', 
              color: 'var(--black)', 
              padding: '13px 30px', 
              fontSize: '0.88rem', 
              fontWeight: 700, 
              letterSpacing: '0.04em', 
              border: '2px solid var(--black)', 
              transition: 'all 0.25s', 
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif"
            }}>
              Cook With Us
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div style={{ 
          position: 'absolute', 
          bottom: '32px', 
          left: '5%', 
          zIndex: 3, 
          display: 'flex', 
          gap: '8px'
        }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: i === currentSlide ? '28px' : '8px',
                height: '8px',
                borderRadius: i === currentSlide ? '4px' : '50%',
                background: i === currentSlide ? 'var(--orange)' : 'rgba(26,16,8,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </section>

      {/* Ticker Bar */}
      <div style={{ 
        background: 'var(--black)', 
        color: 'var(--white)', 
        padding: '12px 0', 
        overflow: 'hidden'
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '60px', 
          animation: 'ticker 28s linear infinite', 
          whiteSpace: 'nowrap', 
          width: 'max-content'
        }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'contents' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                🌸 Pink Oyster <span style={{ color: 'var(--orange)' }}>·</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                ✨ Golden Oyster <span style={{ color: 'var(--orange)' }}>·</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                🔵 Blue Oyster <span style={{ color: 'var(--orange)' }}>·</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                👑 King Oyster <span style={{ color: 'var(--orange)' }}>·</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                🍄 Portobello <span style={{ color: 'var(--orange)' }}>·</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                🟤 Cremini <span style={{ color: 'var(--orange)' }}>·</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                🚚 Farm-Direct NCR Delivery <span style={{ color: 'var(--orange)' }}>·</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                ✅ 100% Organic <span style={{ color: 'var(--orange)' }}>·</span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                📦 Wholesale Available <span style={{ color: 'var(--orange)' }}>·</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipes Section */}
      <section style={{ 
        background: 'var(--white)', 
        borderTop: '2px solid var(--black)',
        padding: '96px 5%'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-end', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: '20px', 
            marginBottom: '52px'
          }}>
            <div>
              <span style={{ 
                display: 'inline-block', 
                fontSize: '0.7rem', 
                fontWeight: 800, 
                letterSpacing: '0.18em', 
                textTransform: 'uppercase', 
                color: 'var(--orange)', 
                marginBottom: '10px', 
                borderBottom: '2px solid var(--orange)', 
                paddingBottom: '2px'
              }}>
                Cook With Us
              </span>
              <h2 style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 900, 
                color: 'var(--black)', 
                lineHeight: 1.12, 
                marginBottom: '20px'
              }}>
                From Our Farm<br /><em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>to Your Kitchen</em>
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--text-mid)', 
                fontWeight: 300, 
                lineHeight: 1.75, 
                maxWidth: '500px', 
                marginTop: '10px'
              }}>
                Original recipes created for The Shroom Bro Co mushrooms. Click any recipe to expand ingredients and method.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['all', 'oyster', 'portobello', 'cremini'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '8px 16px',
                    border: '2px solid var(--black)',
                    background: activeFilter === filter ? 'var(--black)' : 'transparent',
                    color: activeFilter === filter ? 'var(--white)' : 'var(--black)',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s',
                    fontFamily: "'Poppins', sans-serif"
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 0, 
            border: '2px solid var(--black)'
          }}>
            {filteredRecipes.map((recipe, idx) => (
              <div
                key={recipe.id}
                style={{
                  background: 'var(--white)',
                  borderRight: '2px solid var(--black)',
                  borderBottom: '2px solid var(--black)',
                  padding: '28px 30px',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--beige-light)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--white)'}
              >
                <div style={{ 
                  display: 'flex', 
                  gap: '16px', 
                  marginBottom: '12px', 
                  fontSize: '0.74rem', 
                  fontWeight: 600, 
                  color: 'var(--text-light)'
                }}>
                  <span>⏱ {recipe.time}</span>
                  <span>👥 {recipe.servings}</span>
                  <span>⭐ {recipe.difficulty}</span>
                </div>
                <h3 style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: '1.2rem', 
                  fontWeight: 800, 
                  color: 'var(--black)', 
                  marginBottom: '10px', 
                  lineHeight: 1.3
                }}>
                  {recipe.title}
                </h3>
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--text-mid)', 
                  lineHeight: 1.72, 
                  fontWeight: 300, 
                  marginBottom: '18px'
                }}>
                  Delicious recipe description goes here...
                </p>
                <button style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '0.78rem', 
                  fontWeight: 700, 
                  color: 'var(--orange)', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontFamily: "'Poppins', sans-serif", 
                  letterSpacing: '0.04em', 
                  padding: 0, 
                  transition: 'color 0.2s'
                }}>
                  View Recipe →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ 
        background: 'var(--beige)', 
        borderTop: '2px solid var(--black)',
        padding: '96px 5%'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ 
              display: 'inline-block', 
              fontSize: '0.7rem', 
              fontWeight: 800, 
              letterSpacing: '0.18em', 
              textTransform: 'uppercase', 
              color: 'var(--orange)', 
              marginBottom: '10px', 
              borderBottom: '2px solid var(--orange)', 
              paddingBottom: '2px'
            }}>
              Our Story
            </span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: 900, 
              color: 'var(--black)', 
              lineHeight: 1.12, 
              marginBottom: '20px'
            }}>
              We&apos;re <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>The Shroom<br />Bro Co</em>
            </h2>
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-mid)', 
              fontWeight: 300, 
              lineHeight: 1.78, 
              marginBottom: '16px'
            }}>
              We started <strong>The Shroom Bro Co</strong> with one simple mission — grow the freshest, cleanest mushrooms right here in the NCR and bring them directly to your table.
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-mid)', 
              fontWeight: 300, 
              lineHeight: 1.78
            }}>
              No middlemen. No chemicals. Just honest, organically farmed mushrooms grown with love — from our Noida farm to your kitchen across the entire Delhi-NCR region.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '16px', 
              marginTop: '40px'
            }}>
              <div style={{ 
                background: 'var(--white)', 
                border: '2px solid var(--black)', 
                padding: '24px', 
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 900, 
                  color: 'var(--orange)'
                }}>100%</div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  color: 'var(--black)', 
                  marginTop: '8px'
                }}>Organically Grown</div>
              </div>
              <div style={{ 
                background: 'var(--white)', 
                border: '2px solid var(--black)', 
                padding: '24px', 
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 900, 
                  color: 'var(--orange)'
                }}>Farm</div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  color: 'var(--black)', 
                  marginTop: '8px'
                }}>Direct to You</div>
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--orange)', 
            minHeight: '400px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '8rem',
            border: '2px solid var(--black)'
          }}>
            🍄
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--black)',
        color: 'var(--white)',
        borderTop: '2px solid var(--black)',
        padding: '64px 5% 32px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Main Footer Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '48px'
          }}>
            {/* Brand Column */}
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                fontWeight: 900,
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🍄 <span>The Shroom<br />Bro Co</span>
              </div>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                marginBottom: '20px',
                fontWeight: 300
              }}>
                Premium organic mushrooms grown fresh in Noida, delivered across Delhi-NCR.
              </p>
              <div style={{
                display: 'flex',
                gap: '12px'
              }}>
                <a href="#" style={{
                  width: '40px',
                  height: '40px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}>
                  📘
                </a>
                <a href="#" style={{
                  width: '40px',
                  height: '40px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}>
                  📷
                </a>
                <a href="#" style={{
                  width: '40px',
                  height: '40px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}>
                  💬
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: 'var(--orange)'
              }}>
                Quick Links
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['Home', 'Our Mushrooms', 'Recipes', 'About Us', 'Contact'].map(link => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      fontWeight: 300
                    }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Mushrooms */}
            <div>
              <h3 style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: 'var(--orange)'
              }}>
                Our Mushrooms
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['Pink Oyster', 'Golden Oyster', 'Blue Oyster', 'King Oyster', 'Portobello', 'Cremini'].map(mushroom => (
                  <li key={mushroom} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      fontWeight: 300
                    }}>
                      {mushroom}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: 'var(--orange)'
              }}>
                Get In Touch
              </h3>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                fontWeight: 300
              }}>
                <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span>📍</span>
                  <span>Noida, Delhi-NCR<br />India</span>
                </p>
                <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📧</span>
                  <span>hello@theshroombro.co</span>
                </p>
                <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📱</span>
                  <span>+91 XXXXX XXXXX</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
              fontWeight: 300
            }}>
              © 2024 The Shroom Bro Co. All rights reserved.
            </p>
            <div style={{
              display: 'flex',
              gap: '24px'
            }}>
              <a href="#" style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: 300
              }}>
                Privacy Policy
              </a>
              <a href="#" style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: 300
              }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
