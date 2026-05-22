import React from "react";

const SectionDivider = () => (
  <div className="w-full h-[0px] bg-[#1E52C2] opacity-100" />
);

const InstagramCard = ({ image }: { image: string }) => (
  <div className="min-w-[300px] h-[300px] rounded-3xl overflow-hidden shadow-lg border bg-gray-100">
    <img
      src={image}
      alt="Instagram Post"
      className="w-full h-full object-cover hover:scale-105 transition duration-500"
    />
  </div>
);

const ReviewCard = ({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) => (
  <div className="min-w-[340px] max-w-[340px] bg-white border border-gray-200 rounded-3xl p-6">
    <div className="text-[#FFB500] text-lg mb-3">★★★★★</div>

    <p className="text-gray-700 italic leading-relaxed">
      “{quote}”
    </p>

    <div className="mt-5 text-sm font-semibold text-[#1E52C2]">
      — {name}
    </div>
  </div>
);



export default function SimplyCollectiblesLanding() {
  return (
    <div className="relative min-h-screen bg-white text-black overflow-x-hidden scroll-smooth">



{/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
  <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

    {/* LOGO */}
    <a href="#home" className="flex items-center">
      <img
        src="/Logo.png"
        alt="Simply Collectibles"
        className="h-10 md:h-12 w-auto object-contain"
      />
    </a>

    {/* LINKS */}
    <div className="flex gap-6 text-sm font-medium text-black-700">
      <a href="#home" className="hover:text-[#1E52C2] transition">Home</a>
      <a href="#about" className="hover:text-[#1E52C2] transition">About</a>
      <a href="#info" className="hover:text-[#1E52C2] transition">Info</a>
      <a href="#drops" className="hover:text-[#1E52C2] transition">Community</a>
      <a href="#visit" className="hover:text-[#1E52C2] transition">Visit</a>
      <a href="#contact" className="hover:text-[#1E52C2] transition">Contact</a>
    </div>

  </div>
</nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24"
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Back.png"
            alt="Background"
            className="w-full h-full object-cover blur-sm scale-100"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          <div className="mb-6">
            <img
              src="/Logo.png"
              alt="Simply Collectibles Logo"
              className="w-48 md:w-[500px] object-contain mx-auto"
            />
          </div>

          <p className="text-lg md:text-xl max-w-2xl text-black-700">
            Miami’s collectible card hub for Pokémon, sports cards (NBA, NFL, MLB),
            sealed products, singles, slabs, and trading culture.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <span className="px-4 py-2 rounded-full bg-[#1E52C2] text-white text-sm">
              Community Trading Hub
            </span>
            <span className="px-4 py-2 rounded-full bg-[#FFB500] text-black text-sm">
              Live Restocks & Drops
            </span>
          </div>
        </div>

      </section>

<section id="about" className="py-28 px-6 bg-white">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT: TEXT */}
    <div>

      <h2 className="text-4xl font-semibold mb-6 leading-tight">
        Built for Collectors. <br />
        Powered by Community.
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed">
        Simply Collectibles is a Miami-based hobby store centered around
        trading cards, sealed product, and collector culture. It’s more than
        a shop — it’s a meeting point for people who actually live the hobby.
      </p>

      <p className="mt-5 text-gray-700 text-lg leading-relaxed">
        Whether you’re chasing Pokémon, NBA slabs, NFL rookies, or sealed
        drops, the store focuses on authenticity, fair pricing, and a space
        where collectors can actually connect.
      </p>

      {/* MINI HIGHLIGHTS */}

    </div>

    {/* RIGHT: VISUAL CARD STACK */}
    <div className="relative">

      {/* BACK CARD */}
      <div className="absolute top-6 left-6 w-full h-full rounded-3xl bg-[#1E52C2]/10 border" />

      {/* FRONT CARD */}
      <div className="relative bg-white rounded-3xl border shadow-xl p-8">

        <h3 className="text-xl font-semibold mb-6">
          What makes us different
        </h3>

        <div className="space-y-5">

          <div>
            <p className="font-semibold text-[#1E52C2]">Trading Culture First</p>
            <p className="text-gray-600 text-sm">
              Built around collectors, not just transactions.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#FFB500]">Real Market Pricing</p>
            <p className="text-gray-600 text-sm">
              No inflated nonsense — transparent value.
            </p>
          </div>

          <div>
            <p className="font-semibold text-black">Community Hub</p>
            <p className="text-gray-600 text-sm">
              People come to trade, talk, and stay.
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

      {/* INFO */}
      <SectionDivider />
      <section id="info" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold text-lg mb-2">📍 Location</h3>
            <p className="text-gray-700">8036 SW 81st Dr, Miami, FL 33143</p>
            <p className="text-sm text-gray-400 mt-1">
              Kendall area • Miami, Florida
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold text-lg mb-2">⏰ Hours</h3>
            <p className="text-gray-700">Mon–Sat: 11AM – 7PM</p>
            <p className="text-gray-700">Sun: 12PM – 6PM</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold text-lg mb-2">📞 Contact</h3>
            <p className="text-gray-700">(786) 483-7948</p>
            <p className="text-gray-700">Local collectible shop</p>
          </div>

        </div>
      </section>

{/* INSTAGRAM */}
<section className="py-24 overflow-hidden bg-white">
  <div className="max-w-6xl mx-auto px-6 mb-10">
    <h2 className="text-3xl font-semibold mb-3">
      Latest Drops & Community
    </h2>

    <p className="text-gray-600">
      Follow the newest pulls, restocks, events, and collector moments.
    </p>
  </div>

  {/* ROW 1 */}
<div className="overflow-hidden whitespace-nowrap py-4">
  <div className="flex w-max animate-marquee gap-6">
      
      <iframe
  src="https://www.instagram.com/p/DYDSYTiEbmW/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXpq5q3j_86/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXXpSO5BkrE/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYfbBuZxv0y/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYSn8N8y-N1/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>

      {/* DUPLICATE FOR SMOOTH LOOP */}
      <iframe
  src="https://www.instagram.com/p/DYDSYTiEbmW/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXpq5q3j_86/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXXpSO5BkrE/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYfbBuZxv0y/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYSn8N8y-N1/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      {/* DUPLICATE FOR SMOOTH LOOP */}
      <iframe
  src="https://www.instagram.com/p/DYDSYTiEbmW/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXpq5q3j_86/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXXpSO5BkrE/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYfbBuZxv0y/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYSn8N8y-N1/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      {/* DUPLICATE FOR SMOOTH LOOP */}
      <iframe
  src="https://www.instagram.com/p/DYDSYTiEbmW/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXpq5q3j_86/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXXpSO5BkrE/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYfbBuZxv0y/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYSn8N8y-N1/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
    </div>
  </div>

  {/* ROW 2 */}
  <div className="relative flex overflow-hidden">
    <div className="flex animate-marquee-reverse gap-6 min-w-full px-6">

      <iframe
  src="https://www.instagram.com/p/DYNqqVRvJDx/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYKbzKJnJD_/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DX97iugMHjw/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXhbu3Zj8LN/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXcy1ibDw8l/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>

      {/* DUPLICATE FOR SMOOTH LOOP */}
      <iframe
  src="https://www.instagram.com/p/DYNqqVRvJDx/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYKbzKJnJD_/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DX97iugMHjw/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXhbu3Zj8LN/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXcy1ibDw8l/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
{/* DUPLICATE FOR SMOOTH LOOP */}
      <iframe
  src="https://www.instagram.com/p/DYNqqVRvJDx/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYKbzKJnJD_/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DX97iugMHjw/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXhbu3Zj8LN/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXcy1ibDw8l/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
{/* DUPLICATE FOR SMOOTH LOOP */}
      <iframe
  src="https://www.instagram.com/p/DYNqqVRvJDx/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DYKbzKJnJD_/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DX97iugMHjw/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXhbu3Zj8LN/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
      <iframe
  src="https://www.instagram.com/p/DXcy1ibDw8l/embed"
  className="w-[320px] h-[400px] rounded-2xl border bg-white"
  loading="lazy"
/>
    </div>
  </div>
</section>


{/* REVIEWS */}
<section className="py-28 bg-gray-50 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 mb-14 text-center">
    <h2 className="text-3xl font-semibold mb-4">
      Collector Reviews
    </h2>

    <p className="text-gray-600">
      Built around trust, community, and the hobby.
    </p>
  </div>

  {/* VIEWPORT */}
  <div className="relative overflow-hidden">

    {/* EDGE FADE */}
    <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

    {/* TRACK */}
    <div className="flex w-max animate-scrollReviews gap-6 px-6">

      {/* CARD WRAPPERS CONTROL HEIGHT POSITION (THIS IS THE STAGGER) */}
      
      <div className="pt-0">
        <ReviewCard quote="Best Pokémon selection in Miami. Always something new." name="Alex M." />
      </div>

      <div className="pt-10">
        <ReviewCard quote="Feels like a real collector community, not just a store." name="Jordan T." />
      </div>

      <div className="-pt-6 pt-0 mt-6">
        <ReviewCard quote="Fair pricing and honest staff every time I visit." name="Chris R." />
      </div>

      <div className="pt-8">
        <ReviewCard quote="Insane sports card selection, especially NBA slabs." name="Daniel K." />
      </div>

      <div className="-pt-4 pt-0 mt-4">
        <ReviewCard quote="You can tell they actually care about the hobby." name="Sophia L." />
      </div>

      {/* DUPLICATE SET */}
      <div className="pt-0">
        <ReviewCard quote="Best Pokémon selection in Miami. Always something new." name="Alex M." />
      </div>

      <div className="pt-10">
        <ReviewCard quote="Feels like a real collector community, not just a store." name="Jordan T." />
      </div>

      <div className="pt-0">
        <ReviewCard quote="Fair pricing and honest staff every time I visit." name="Chris R." />
      </div>

      <div className="pt-8">
        <ReviewCard quote="Insane sports card selection, especially NBA slabs." name="Daniel K." />
      </div>

      <div className="pt-4">
        <ReviewCard quote="You can tell they actually care about the hobby." name="Sophia L." />
      </div>
      {/* DUPLICATE SET */}
      <div className="pt-0">
        <ReviewCard quote="Best Pokémon selection in Miami. Always something new." name="Alex M." />
      </div>

      <div className="pt-10">
        <ReviewCard quote="Feels like a real collector community, not just a store." name="Jordan T." />
      </div>

      <div className="pt-0">
        <ReviewCard quote="Fair pricing and honest staff every time I visit." name="Chris R." />
      </div>

      <div className="pt-8">
        <ReviewCard quote="Insane sports card selection, especially NBA slabs." name="Daniel K." />
      </div>

      <div className="pt-4">
        <ReviewCard quote="You can tell they actually care about the hobby." name="Sophia L." />
      </div>
      {/* DUPLICATE SET */}
      <div className="pt-0">
        <ReviewCard quote="Best Pokémon selection in Miami. Always something new." name="Alex M." />
      </div>

      <div className="pt-10">
        <ReviewCard quote="Feels like a real collector community, not just a store." name="Jordan T." />
      </div>

      <div className="pt-0">
        <ReviewCard quote="Fair pricing and honest staff every time I visit." name="Chris R." />
      </div>

      <div className="pt-8">
        <ReviewCard quote="Insane sports card selection, especially NBA slabs." name="Daniel K." />
      </div>

      <div className="pt-4">
        <ReviewCard quote="You can tell they actually care about the hobby." name="Sophia L." />
      </div>

    </div>
  </div>
</section>

      {/* VISIT */}
      <SectionDivider />
      <section id="visit" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Visit Us</h2>

          <div className="rounded-2xl overflow-hidden border shadow-md">
            <iframe
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=8036+SW+81st+Dr,+Miami,+FL+33143&output=embed"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <SectionDivider />
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Contact</h2>

        <form className="space-y-4">
          <input className="w-full border p-3 rounded-xl" placeholder="Name" />
          <input className="w-full border p-3 rounded-xl" placeholder="Email" />
          <textarea
            className="w-full border p-3 rounded-xl h-32"
            placeholder="What are you looking for?"
          />

          <button
            className="w-full bg-[#1E52C2] text-white py-3 rounded-xl hover:opacity-90"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <SectionDivider />
      <footer className="py-10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Simply Collectibles • Miami, FL</p>
      </footer>

    </div>
  );
}