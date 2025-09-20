import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities | Ready Coworking',
  description: 'Complete facilities overview for Ready Coworking Space Bhilwara. Energetic environment, modern amenities, and everything you need for productive work.',
};

const detailedFacilities = [
  { name: 'Energetic Environment', image: '/images/facilities-page/energetic-environment.jpg' },
  { name: 'Desk', image: '/images/facilities-page/desk.jpg' },
  { name: 'Chair', image: '/images/facilities-page/chair.jpg' },
  { name: '3 Power Sockets', image: '/images/facilities-page/power-sockets.jpg' },
  { name: 'Uninterrupted Power Supply', image: '/images/facilities-page/ups.png' },
  { name: 'One Locker', image: '/images/facilities-page/locker.jpg' },
  { name: 'Parking', image: '/images/facilities-page/parking.jpg' },
  { name: 'Secured by CCTV', image: '/images/facilities-page/cctv-security.jpg' },
  { name: '3 Shared Meeting Rooms', image: '/images/facilities-page/meeting-rooms.jpg' },
  { name: '6 Boards to Brainstorm', image: '/images/facilities-page/brainstorm-boards.jpg' },
  { name: 'Printer /Copier / Scanner', image: '/images/facilities-page/printer-scanner.jpg' },
  { name: 'Projector', image: '/images/facilities-page/projector.png' },
  { name: 'Gigabit Networking', image: '/images/facilities-page/gigabit-networking.jpg' },
  { name: 'Reliable Structured Cabling', image: '/images/facilities-page/structured-cabling.jpg' },
  { name: 'Powerful Air Conditioning', image: '/images/facilities-page/air-conditioning.jpg' },
  { name: 'Library', image: '/images/facilities-page/library.jpg' },
  { name: 'First Aid Kit', image: '/images/facilities-page/first-aid-kit.jpg' },
  { name: 'Lounge Area', image: '/images/facilities-page/lounge-area.jpg' },
  { name: 'Weight Machine', image: '/images/facilities-page/weight-machine.jpg' },
  { name: 'Apple TV to Test TV Apps', image: '/images/facilities-page/apple-tv.jpg' }
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Facilities
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete overview of all facilities available at Ready Coworking Space Bhilwara.
              Designed specifically for computer professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {detailedFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {facility.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience These Facilities?
              </h2>
              <p className="text-gray-600 mb-6">
                Schedule a visit to see all these facilities in person and meet our community of tech professionals.
              </p>
              <a
                href="/visit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Schedule Your Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}