import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";

function Builder() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-6 overflow-y-auto border-r">
        <ResumeForm />
      </div>
      <div className="w-1/2 p-6 bg-gray-100 overflow-y-auto">
        <ResumePreview />
      </div>
    </div>
  );
}

export default Builder;
