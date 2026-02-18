import { useResume } from "../context/ResumeContext";

function ResumeForm() {
  const { state, dispatch } = useResume();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Personal Info</h2>

      <input
        className="w-full border p-2"
        placeholder="Full Name"
        value={state.personalInfo.fullName}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "fullName",
            value: e.target.value
          })
        }
      />

      <input
        className="w-full border p-2"
        placeholder="Email"
        value={state.personalInfo.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value
          })
        }
      />

      <input
        className="w-full border p-2"
        placeholder="Phone"
        value={state.personalInfo.phone}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "phone",
            value: e.target.value
          })
        }
      />
    </div>
  );
}

export default ResumeForm;
