export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center text-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/hero4.png"
            alt="Professionel malerarbejde"
            className="w-full h-full object-cover object-[80%_center]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professionel maler i Danmark
          </h1>

          <p className="text-lg md:text-xl mb-10 text-white/90">
            Kvalitetsbevidst malerarbejde til private og erhverv.
            Indendørs og udendørs maling udført med præcision og omhu.
          </p>

          <div className="flex justify-center gap-5">
            <a
              href="/kontakt"
              className="bg-[#D9772B] hover:bg-[#B85E1F] text-white px-8 py-3 rounded-md font-semibold transition"
            >
              Få et tilbud
            </a>

            <a
              href="/ydelser"
              className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Se vores ydelser
            </a>
          </div>
        </div>
      </section>


      {/* SERVICES (OVERLAP) */}
{/* SERVICES */}
<section className="relative px-6 pb-24 bg-gradient-to-br from-[#DCEBFF] via-[#F2EDE6] to-[#FFE5CC]">

  <div className="max-w-6xl mx-auto -mt-10 z-20 relative">

    <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-12">

      <h2 className="text-3xl font-semibold text-center mb-12 text-[#2B2B2B]">
        Vores Ydelser
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="p-6 rounded-xl border border-[#E6DFD6] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
          <h3 className="font-semibold mb-3 text-lg">Indendørs maling</h3>
          <p className="text-[#6B6B6B]">
            Professionel maling af vægge, lofter og træværk.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-[#E6DFD6] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
          <h3 className="font-semibold mb-3 text-lg">Udendørs maling</h3>
          <p className="text-[#6B6B6B]">
            Facader, træværk og vedligeholdelse af bygninger.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-[#E6DFD6] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
          <h3 className="font-semibold mb-3 text-lg">Erhvervsløsninger</h3>
          <p className="text-[#6B6B6B]">
            Malerarbejde til kontorer, butikker og virksomheder.
          </p>
        </div>

      </div>
    </div>

  </div>

</section>

<section className="py-24 bg-white px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-semibold text-center mb-12">
      Udvalgte Projekter
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-xl overflow-hidden shadow-md">
        <img src="/project1.jpg" className="w-full h-64 object-cover" />
      </div>

      <div className="rounded-xl overflow-hidden shadow-md">
        <img src="/project2.jpg" className="w-full h-64 object-cover" />
      </div>

      <div className="rounded-xl overflow-hidden shadow-md">
        <img src="/project3.jpg" className="w-full h-64 object-cover" />
      </div>

    </div>

  </div>
</section>

<section className="py-24 bg-[#F2EDE6] px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl font-semibold mb-12">
      Hvad siger vores kunder?
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-white p-8 rounded-xl shadow-sm">
        <p className="italic mb-4">
          "Fantastisk arbejde og meget professionelt."
        </p>
        <p className="font-semibold">— Mette, København</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm">
        <p className="italic mb-4">
          "Pålidelig og flot resultat."
        </p>
        <p className="font-semibold">— Lars, Roskilde</p>
      </div>

    </div>

  </div>
</section>

{/* WHY CHOOSE US */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2B2B2B]">
        Hvorfor vælge MANMALER?
      </h2>
      <p className="text-[#6B6B6B] max-w-2xl mx-auto">
        Vi leverer kvalitetsbevidst malerarbejde med fokus på præcision,
        pålidelighed og tilfredse kunder.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {/* Experience */}
      <div className="text-center p-6 rounded-xl bg-[#F6F3EE] hover:shadow-md transition">
        <div className="text-3xl mb-4">🎨</div>
        <h3 className="font-semibold mb-3 text-lg">Erfaring & Ekspertise</h3>
        <p className="text-[#6B6B6B] text-sm">
          Mange års erfaring med både private hjem og erhvervsprojekter.
        </p>
      </div>

      {/* Quality */}
      <div className="text-center p-6 rounded-xl bg-[#F6F3EE] hover:shadow-md transition">
        <div className="text-3xl mb-4">🏆</div>
        <h3 className="font-semibold mb-3 text-lg">Høj Kvalitet</h3>
        <p className="text-[#6B6B6B] text-sm">
          Vi bruger kun kvalitetsmaterialer og sikrer et professionelt resultat.
        </p>
      </div>

      {/* Transparent Pricing */}
      <div className="text-center p-6 rounded-xl bg-[#F6F3EE] hover:shadow-md transition">
        <div className="text-3xl mb-4">💰</div>
        <h3 className="font-semibold mb-3 text-lg">Gennemsigtige Priser</h3>
        <p className="text-[#6B6B6B] text-sm">
          Ingen skjulte omkostninger – du får et klart og uforpligtende tilbud.
        </p>
      </div>

      {/* Reliable */}
      <div className="text-center p-6 rounded-xl bg-[#F6F3EE] hover:shadow-md transition">
        <div className="text-3xl mb-4">🤝</div>
        <h3 className="font-semibold mb-3 text-lg">Pålidelig Service</h3>
        <p className="text-[#6B6B6B] text-sm">
          Vi overholder aftaler og afleverer altid til tiden.
        </p>
      </div>

    </div>

  </div>
</section>

<section className="py-24 bg-[#D9772B] text-white px-6">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl font-semibold mb-6">
      Få et gratis og uforpligtende tilbud
    </h2>

    <p className="mb-8">
      Kontakt os i dag og få svar inden for 24 timer.
    </p>

    <a
      href="/kontakt"
      className="bg-white text-[#D9772B] px-8 py-3 rounded-md font-semibold"
    >
      Kontakt os nu
    </a>

  </div>
</section>
    </main>
  );
}