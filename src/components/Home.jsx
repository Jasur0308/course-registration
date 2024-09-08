import { useSelector } from 'react-redux';

const Home = () => {
  const { current } = useSelector(state => state.theme);
  const students = useSelector(state => state.student.students);

  return (
    <div className={`w-full py-5 px-[50px] h-screen ${
      current === "light"
      ? 'bg-white text-black'
      : 'bg-gray-500 text-white'
    }`}>
      <h1 className="text-center font-bold text-3xl mb-6">The table of students</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">№</th>
            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">Name</th>
            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">Email</th>
            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">No students registered</td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b text-gray-700">{index + 1}</td>
                <td className="py-4 px-6 border-b text-gray-700">{student.name}</td>
                <td className="py-4 px-6 border-b text-gray-700">{student.email}</td>
                <td className="py-4 px-6 border-b text-gray-700">{student.course}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;