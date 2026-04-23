import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-100 min-h-screen">

      {/* 🔹 HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            Your Health, Our Priority
          </h1>

          <p className="text-blue-700 mb-6">
            Book appointments with top doctors, choose convenient time slots,
            and manage your healthcare effortlessly.
          </p>

          <button
            onClick={() => navigate("/doctors")}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg"
          >
            Book Appointment
          </button>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
          alt="healthcare"
          className="w-72 mt-6 md:mt-0"
        />
      </div>

      {/* 🔹 FEATURES SECTION */}
      <div className="p-10">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-8">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Easy Booking
            </h3>
            <p className="text-gray-600">
              Book appointments in just a few clicks without any hassle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Verified Doctors
            </h3>
            <p className="text-gray-600">
              Choose from experienced and trusted healthcare professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Flexible Slots
            </h3>
            <p className="text-gray-600">
              Select time slots that fit your schedule perfectly.
            </p>
          </div>

        </div>
      </div>

      {/* 🔹 CTA SECTION */}
      <div className="text-center p-10 bg-blue-100">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Ready to take care of your health?
        </h2>

        <button
          onClick={() => navigate("/doctors")}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow"
        >
          Get Started
        </button>
      </div>

    </div>
  );
}

export default Home;