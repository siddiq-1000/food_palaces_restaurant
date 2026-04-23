import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-gray-800 pb-6">
          <h1 className="text-3xl font-serif text-[#D4AF37]">Food Palaces Admin</h1>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Website
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#111] border border-gray-800 p-6 rounded-sm">
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total Reservations</h3>
            <div className="text-4xl text-[#D4AF37] font-serif">1,248</div>
            <div className="mt-4 text-xs text-green-500">+12% from last month</div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111] border border-gray-800 p-6 rounded-sm">
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Today's Guests</h3>
            <div className="text-4xl text-[#D4AF37] font-serif">84</div>
            <div className="mt-4 text-xs text-gray-500">Across 22 tables</div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111] border border-gray-800 p-6 rounded-sm">
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Pending Inquiries</h3>
            <div className="text-4xl text-[#D4AF37] font-serif">3</div>
            <div className="mt-4 text-xs text-red-400">Requires attention</div>
          </div>
        </div>

        <div className="mt-12 bg-[#111] border border-gray-800 p-6 rounded-sm">
          <h2 className="text-xl font-serif text-white mb-6">Recent Reservations</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-800 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="pb-3 font-normal">Name</th>
                  <th className="pb-3 font-normal">Date</th>
                  <th className="pb-3 font-normal">Time</th>
                  <th className="pb-3 font-normal">Guests</th>
                  <th className="pb-3 font-normal">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 text-gray-200">Rahul Sharma</td>
                  <td className="py-4 text-gray-400">Oct 24, 2025</td>
                  <td className="py-4 text-gray-400">7:00 PM</td>
                  <td className="py-4 text-gray-400">4</td>
                  <td className="py-4"><span className="bg-green-900/40 text-green-400 px-2 py-1 rounded text-xs border border-green-800">Confirmed</span></td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 text-gray-200">Priya Desai</td>
                  <td className="py-4 text-gray-400">Oct 24, 2025</td>
                  <td className="py-4 text-gray-400">8:30 PM</td>
                  <td className="py-4 text-gray-400">2</td>
                  <td className="py-4"><span className="bg-yellow-900/40 text-yellow-400 px-2 py-1 rounded text-xs border border-yellow-800">Pending</span></td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-200">Arjun Menon</td>
                  <td className="py-4 text-gray-400">Oct 25, 2025</td>
                  <td className="py-4 text-gray-400">1:00 PM</td>
                  <td className="py-4 text-gray-400">8</td>
                  <td className="py-4"><span className="bg-green-900/40 text-green-400 px-2 py-1 rounded text-xs border border-green-800">Confirmed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
