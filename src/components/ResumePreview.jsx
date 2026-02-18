import { useResume } from "../context/ResumeContext";

function ResumePreview() {
  const { state } = useResume();

  return (
    <div className="bg-white shadow-lg p-8 max-w-[700px] mx-auto">
      <h1 className="text-2xl font-bold">
        {state.personalInfo.fullName || "Your Name"}
      </h1>
      <p>{state.personalInfo.email}</p>
      <p>{state.personalInfo.phone}</p>

      <hr className="my-4" />

      <h2 className="font-semibold">Skills</h2>
      <p>{state.skills.join(", ")}</p>
    </div>
  );
}

export default ResumePreview;
