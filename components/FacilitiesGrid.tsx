const facilities = [
  { name: 'Awesome Desk', icon: '/images/facilities/awesome-desk.svg' },
  { name: 'Personal Locker', icon: '/images/facilities/personal-locker.svg' },
  { name: 'Clean Environment', icon: '/images/facilities/clean-environment.svg' },
  { name: 'Shared Meeting room', icon: '/images/facilities/meeting-room.svg' },
  { name: '5+ Brain Storming Area', icon: '/images/facilities/brainstorming-area.svg' },
  { name: 'Lush Green', icon: '/images/facilities/clean-environment.svg' },
  { name: 'High Speed Internet', icon: '/images/facilities/high-speed-internet.svg' },
  { name: 'Awesome Community', icon: '/images/facilities/meeting-room.svg' },
  { name: 'RO Water', icon: '/images/facilities/ro-water.svg' },
  { name: 'AC Facility', icon: '/images/facilities/ac-facility.svg' },
  { name: 'Complete Security', icon: '/images/facilities/security.svg' },
  { name: 'Solar Energy', icon: '/images/facilities/solar-energy.svg' }
];

export default function FacilitiesGrid() {
  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            FACILITIES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide all the amenities you need for a productive and comfortable working experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src={facility.icon}
                    alt={facility.name}
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {facility.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* See Pictures Button */}
        <div className="mt-8 text-center">
          <a
            href="/facilities"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            See Pictures
          </a>
        </div>
      </div>
    </section>
  );
}