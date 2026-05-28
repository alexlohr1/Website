import React from "react";

const SectionDivider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#820000] to-transparent opacity-40" />
);

const reviews = [
  {
    quote: "Great service! Super fast and professional.",
    name: "Valerie Rocha",
  },
  {
    quote: "Best tint shop in Miami. Highly recommend.",
    name: "Jonathan Faithful",
  },
  {
    quote: "Extremely clean work and amazing customer care.",
    name: "Daniela Fundora",
  },
  {
    quote: "They completely transformed my car interior lighting.",
    name: "Victoria Bali",
  },
];

const ReviewCard = ({ quote, name }: { quote: string; name: string }) => (
  <div className="min-w-[340px] max-w-[340px] bg-[#111111] border border-white/10 rounded-3xl p-6">
    
    <div className="text-[#c90000] text-lg mb-3">★★★★★</div>

    <p className="text-gray-300 italic leading-relaxed">
      “{quote}”
    </p>

    <div className="mt-5 text-sm font-semibold text-[#820000]">
      — {name}
    </div>

  </div>
);

const images = [
  "/IMG (1).jpg",
  "/IMG (2).jpg",
  "/IMG (3).jpg",
  "/IMG (4).jpg",
  "/IMG (5).jpg",
];

const ServiceCard = ({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: string;
}) => (
  <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-[#820000] transition duration-300">
    <div className="text-[#c90000] text-sm mb-3">{number}</div>

    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>

    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);



export default function AutotronicsLanding() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <a href="#home" className="flex items-center">
            <img
              src="/Logo.png"
              alt="Autotronics & Tints"
              className="h-12 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-[#c90000] transition">Home</a>
            <a href="#about" className="hover:text-[#c90000] transition">About</a>
            <a href="#services" className="hover:text-[#c90000] transition">Services</a>
            <a href="#pics" className="hover:text-[#c90000] transition">Latest</a>
            <a href="#reviews" className="hover:text-[#c90000] transition">Reviews</a>
            <a href="#visit" className="hover:text-[#c90000] transition">Visit</a>
            <a href="#contact" className="hover:text-[#c90000] transition">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/Back.png"
            alt="Luxury Vehicle"
            className="w-full h-full object-cover blur-sm scale-100"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#820000]/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#c90000]/20 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl text-center">

          <img
            src="/Logo.png"
            alt="Autotronics & Tints"
            className="w-56 md:w-[400px] mx-auto mb-8 scale-200"
          />

          {/*<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Elevate Your Journey
            <span className="block text-[#c90000]">
              With Expert Vehicle Customization
            </span>
          </h1>*/}

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Miami’s trusted specialists in window tinting, ceramic coatings,
            custom sound systems, ambient lighting, and professional vehicle upgrades.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">

            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-[#820000] hover:bg-[#5f0000] transition text-white font-medium"
            >
              Book Appointment
            </a>

            <a
              href="tel:3058506618"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-[#c90000] transition text-white font-medium"
            >
              Call Now
            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 bg-black">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-[#c90000] uppercase tracking-[0.3em] text-sm mb-5">
              About Autotronics & Tints
            </p>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Precision. Performance.
              <span className="block text-[#820000]">
                Personalization.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Autotronics and Tints specializes in premium automotive
              customization services including expert window tinting,
              ceramic coatings, custom audio systems, ambient lighting,
              and professional part installations.
            </p>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              With over 10 years of experience, our team delivers
              high-quality craftsmanship using only premium materials
              and expert installation techniques designed to elevate
              both performance and aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-[#111111] rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-[#c90000] mb-2">
                  10+
                </div>
                <div className="text-gray-400 text-sm">
                  Years Experience
                </div>
              </div>

              <div className="bg-[#111111] rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-[#820000] mb-2">
                  Premium
                </div>
                <div className="text-gray-400 text-sm">
                  Quality Parts
                </div>
              </div>

            </div>

          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#820000]/20 to-[#c90000]/20 blur-3xl rounded-full" />

            <img
              src="/about.jpg"
              alt="Autotronics Garage"
              className="relative rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>

        </div>

      </section>

      <SectionDivider />

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 bg-[#090909]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-[#c90000] uppercase tracking-[0.3em] text-sm mb-5">
              Our Services
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Built For Car Enthusiasts
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We provide premium automotive upgrades designed
              to transform your vehicle’s style, comfort, and performance.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <ServiceCard number="01" title="Window Tinting"
              description="Premium tint installation for heat rejection, UV protection, privacy, and a sleek finish." />

            <ServiceCard number="02" title="Sound Systems"
              description="Custom audio systems engineered for crystal-clear sound and immersive driving experiences." />

            <ServiceCard number="03" title="Ambient Lighting"
              description="Custom LED interior lighting solutions tailored to your personal style and atmosphere." />

            <ServiceCard number="04" title="Part Installs"
              description="Professional installation of aftermarket accessories and vehicle enhancements." />

          </div>

        </div>

      </section>




{/* INSTAGRAM */}
<section id="pics" className="py-28 bg-black overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 mb-12">
    <h2 className="text-4xl font-bold mb-4">
      Latest Installs & Projects
    </h2>

    <p className="text-gray-400">
      Follow our latest tint jobs, audio builds, lighting installs,
      and custom vehicle transformations.
    </p>
  </div>

  {/* MASK WRAPPER (HIDES SEAMS ON ALL SCREEN SIZES) */}
  <div
    className="relative overflow-hidden py-4"
    style={{
      WebkitMaskImage:
        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      maskImage:
        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
    }}
  >
    
    {/* LEFT FADE (optional extra depth) */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

    {/* TRACK */}
    <div className="flex w-max gap-6 animate-marquee px-6">

      {/* SET A */}
      {images.map((img, i) => (
        <div
          key={`a-${i}`}
          className="w-[320px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 bg-[#111111]"
        >
          <img src={img} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* SET B (DUPLICATE FOR TRUE LOOP) */}
      {images.map((img, i) => (
        <div
          key={`b-${i}`}
          className="w-[320px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 bg-[#111111]"
        >
          <img src={img} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* SET B (DUPLICATE FOR TRUE LOOP) */}
      {images.map((img, i) => (
        <div
          key={`b-${i}`}
          className="w-[320px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 bg-[#111111]"
        >
          <img src={img} className="w-full h-full object-cover" />
        </div>
      ))}
            {/* SET B (DUPLICATE FOR TRUE LOOP) */}
      {images.map((img, i) => (
        <div
          key={`b-${i}`}
          className="w-[320px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 bg-[#111111]"
        >
          <img src={img} className="w-full h-full object-cover" />
        </div>
      ))}

    </div>
  </div>
</section>


{/* TESTIMONIALS */}
<section id="reviews" className="py-32 bg-[#090909] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 mb-16 text-center">

    <p className="text-[#c90000] uppercase tracking-[0.3em] text-sm mb-5">
      Testimonials
    </p>

    <h2 className="text-5xl font-bold mb-5">
      Trusted Across Miami
    </h2>

    <p className="text-gray-400 text-lg">
      Real experiences from satisfied customers.
    </p>

  </div>

  {/* MASK WRAPPER */}
  <div
    className="relative overflow-hidden"
    style={{
      WebkitMaskImage:
        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      maskImage:
        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
    }}
  >

    <div className="flex w-max gap-6 animate-marquee px-6">

      {/* SET A */}
      {reviews.map((r, i) => (
        <ReviewCard key={`a-${i}`} {...r} />
      ))}

      {/* SET B (DUPLICATE LOOP) */}
      {reviews.map((r, i) => (
        <ReviewCard key={`b-${i}`} {...r} />
      ))}

            {/* SET B (DUPLICATE LOOP) */}
      {reviews.map((r, i) => (
        <ReviewCard key={`b-${i}`} {...r} />
      ))}

            {/* SET B (DUPLICATE LOOP) */}
      {reviews.map((r, i) => (
        <ReviewCard key={`b-${i}`} {...r} />
      ))}

    </div>
  </div>

</section>


      {/* VISIT */}
      <section id="visit" className="py-28 px-6 bg-black">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-4">
            Visit Our Miami Shop
          </h2>

          <p className="text-gray-400">
            2476 SW 137th Ave, Miami, FL 33175
          </p>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl mt-6">

            <iframe
              className="w-full h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=2476+SW+137th+Ave,+Miami,+FL+33175&output=embed"
            />

          </div>

        </div>

      </section>






{/* CONTACT */}
<section id="contact" className="py-32 px-6 bg-[#090909]">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-5xl font-bold mb-6">
      Get In Touch
    </h2>

    {/* INFO CARDS */}
    <div className="grid md:grid-cols-3 gap-6 mb-12">

      <div className="bg-[#111111] rounded-2xl p-6 border border-white/10">
        <div className="text-[#c90000] mb-2">Phone</div>
        <div>(305) 850-6618</div>
      </div>

      <div className="bg-[#111111] rounded-2xl p-6 border border-white/10">
        <div className="text-[#c90000] mb-2">Email</div>
        <div>autotronics305@gmail.com</div>
      </div>

      <div className="bg-[#111111] rounded-2xl p-6 border border-white/10">
        <div className="text-[#c90000] mb-2">Hours</div>
        <div>Mon–Fri: 9AM – 6PM</div>
        <div>Sat: 10AM – 5PM</div>
      </div>

    </div>

    {/* SEND MESSAGE BOX */}
    <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 text-left">

      <h3 className="text-2xl font-semibold mb-6 text-white">
        Send us a Message
      </h3>

      <form className="space-y-5">

        {/* NAME + EMAIL */}
        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#0b0b0b] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#c90000] transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#0b0b0b] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#c90000] transition"
          />

        </div>

        {/* SUBJECT */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-[#0b0b0b] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#c90000] transition"
        />

        {/* MESSAGE */}
        <textarea
          placeholder="Tell us about your vehicle or project..."
          rows={5}
          className="w-full bg-[#0b0b0b] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#c90000] transition resize-none"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-[#820000] hover:bg-[#5f0000] transition font-semibold text-white"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>

</section>

      <footer className="py-10 text-center text-sm text-gray-500 border-t border-white/10 bg-black">
        © {new Date().getFullYear()} Autotronics & Tints • Miami, FL
      </footer>

    </div>
  );
}