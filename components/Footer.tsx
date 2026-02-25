export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-bold mb-4">MANMALER</h3>
          <p>Professionel maler i Danmark.</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Kontakt</h3>
          <p>Telefon: +45 00 00 00 00</p>
          <p>Email: kontakt@manmaler.dk</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Adresse</h3>
          <p>Danmark</p>
        </div>

      </div>

      <div className="text-center py-4 border-t border-gray-700">
        © {new Date().getFullYear()} MANMALER. Alle rettigheder forbeholdes.
      </div>
    </footer>
  );
}