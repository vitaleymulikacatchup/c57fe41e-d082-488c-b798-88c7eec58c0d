"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Bell, ChefHat, Crown, Dumbbell, Flower2, Mail, MessageSquare, Sparkles, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Serenity Hotel Logo"
          brandName="Serenity Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance at Serenity Hotel, where every moment becomes a cherished memory."
          tag="5-Star Excellence"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/3635805/pexels-photo-3635805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Serenity Hotel exterior view"
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="At Serenity Hotel, we believe luxury is found in the perfect harmony of exceptional service, timeless elegance, and unforgettable experiences that touch the soul."
          buttons={[
            {
              text: "Our Story",
              href: "about"
            },
            {
              text: "Virtual Tour",
              href: "https://virtualtour.example.com"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Exquisite Accommodations"
          description="Choose from our collection of beautifully appointed rooms and suites, each designed to provide the ultimate in comfort and luxury."
          tag="Premium Rooms"
          tagIcon={Crown}
          products={[
            {
              id: "1",
              name: "Deluxe Garden Room",
              price: "$320/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe Garden Room interior"
            },
            {
              id: "2",
              name: "Premium City Suite",
              price: "$580/night",
              imageSrc: "https://images.pexels.com/photos/6466496/pexels-photo-6466496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium City Suite bedroom"
            },
            {
              id: "3",
              name: "Presidential Suite",
              price: "$1,200/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential Suite living area"
            }
          ]}
          buttons={[
            {
              text: "View All Rooms",
              href: "rooms"
            },
            {
              text: "Check Availability",
              href: "https://booking.example.com"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our exceptional facilities and services designed to exceed your every expectation."
          tag="Premium Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and spirit at our award-winning spa featuring therapeutic treatments and wellness programs.",
              icon: Flower2,
              button: {
                text: "Book Treatment",
                href: "spa"
              }
            },
            {
              title: "Fine Dining Experience",
              description: "Savor exquisite cuisine crafted by our renowned chefs using the finest local and international ingredients.",
              icon: ChefHat,
              button: {
                text: "View Menu",
                href: "dining"
              }
            },
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special requests.",
              icon: Bell,
              button: {
                text: "Contact Concierge",
                href: "concierge"
              }
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your wellness routine in our fully equipped fitness center with modern equipment and personal training services.",
              icon: Dumbbell,
              button: {
                text: "Fitness Info",
                href: "fitness"
              }
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality is reflected in these achievements and guest satisfaction metrics."
          tag="Our Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "98%",
              description: "Guest Satisfaction Rating"
            },
            {
              id: "2",
              value: "25K+",
              description: "Happy Guests Annually"
            },
            {
              id: "3",
              value: "15",
              description: "Years of Excellence"
            },
            {
              id: "4",
              value: "24/7",
              description: "Premium Service Available"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Team"
          description="Our passionate professionals are dedicated to creating extraordinary experiences for every guest."
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Isabella Martinez",
              role: "General Manager",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Isabella Martinez, General Manager"
            },
            {
              id: "2",
              name: "Chef Antoine Dubois",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/8629076/pexels-photo-8629076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef Antoine Dubois, Executive Chef"
            },
            {
              id: "3",
              name: "Michael Chen",
              role: "Head Concierge",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen, Head Concierge"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Serenity Hotel for their most important moments."
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO, Tech Innovations",
              company: "Technology Sector",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3867837/pexels-photo-3867837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson testimonial"
            },
            {
              id: "2",
              name: "David Thompson",
              role: "Investment Banker",
              company: "Financial Services",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Thompson testimonial"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Art Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elena Rodriguez testimonial"
            },
            {
              id: "4",
              name: "James & Maria Wilson",
              role: "Celebrating Anniversary",
              company: "Leisure Travelers",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6181080/pexels-photo-6181080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James and Maria Wilson testimonial"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Subscribe for Exclusive Offers"
          description="Be the first to know about special packages, seasonal promotions, and exclusive experiences at Serenity Hotel."
          tagIcon={Mail}
          imageSrc="https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Serenity Hotel evening view"
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails. You may unsubscribe at any time. View our privacy policy for details."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Serenity Hotel"
          columns={[
            {
              items: [
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Dining",
                  href: "dining"
                },
                {
                  label: "Spa & Wellness",
                  href: "spa"
                },
                {
                  label: "Events",
                  href: "events"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "Press Room",
                  href: "press"
                },
                {
                  label: "Sustainability",
                  href: "sustainability"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Reservations",
                  href: "https://booking.example.com"
                },
                {
                  label: "Guest Services",
                  href: "guest-services"
                },
                {
                  label: "Concierge",
                  href: "concierge"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}