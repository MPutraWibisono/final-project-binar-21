/* eslint-disable react/prop-types */
// import { getCourse } from "../../redux/actions/courseActions";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import Loading from "../Loading";

const ChapterChoose = ({ onSetId, course, setIsOpen2 }) => {
  //   const dispatch = useDispatch();
  //   const [errors, setErrors] = useState({
  //     isError: false,
  //     message: null,
  //   });
  //   useEffect(() => {
  //     dispatch(getCourse(setErrors));
  //   }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = event.target.courseId.value;
    onSetId(id);
    setIsOpen2("2");
  };

  return (
    <>
      <form className="w-full flex flex-col gap-2 my-6" onSubmit={handleSubmit}>
        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Pilih Course</span>
          </div>
          <select
            className="input input-bordered w-full"
            id="courseId"
            name="courseId"
          >
            {course.map((course, index) => (
              <option value={course.id} key={index}>
                {`${course.name} (${course.category.name})`}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Lanjut
          </button>
        </div>
      </form>
    </>
  );
};

export default ChapterChoose;
