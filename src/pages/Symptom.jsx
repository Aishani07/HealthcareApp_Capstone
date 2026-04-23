import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Symptom() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  // ✅ Keyword-based intelligent mapping
  const rules = [
    { keywords: ["fever", "cold", "cough"], doctor: "General Physician" },
    { keywords: ["skin", "rash", "acne"], doctor: "Dermatologist" },
    { keywords: ["heart", "chest pain"], doctor: "Cardiologist" },
    { keywords: ["headache", "migraine", "brain"], doctor: "Neurologist" },
    { keywords: ["bone", "joint", "fracture"], doctor: "Orthopedic" },
    { keywords: ["child", "baby"], doctor: "Pediatrician" },
  ];

  const handleCheck = () => {
    const text = input.toLowerCase();

    let found = "General Physician";

    for (let rule of rules) {
      for (let keyword of rule.keywords) {
        if (text.includes(keyword)) {
          found = rule.doctor;
          break;
        }
      }
      if (found !== "General Physician") break;
    }

    setResult(found);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Symptom Checker</h2>

      <input
        type="text"
        placeholder="Enter symptoms (e.g. chest pain, skin rash)"
        className="border p-2 mr-2 w-80"
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleCheck}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Check
      </button>

      {result && (
        <div className="mt-4">
          <p className="text-lg">
            Recommended Specialist: <b>{result}</b>
          </p>

          <button
            onClick={() => navigate("/doctors")}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
          >
            View Doctors
          </button>
        </div>
      )}
    </div>
  );
}

export default Symptom;