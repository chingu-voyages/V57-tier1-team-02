import { useEffect, useState } from "react";
import { fetchPullRequests } from "../services/githubAPI";

function ClosedPRs() {
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPRs() {
      try {
        const data = await fetchPullRequests("facebook", "react", "closed"); 
        setPrs(data);
      } catch (err) {
        setError("can't get data");
      } finally {
        setLoading(false);
      }
    }
    loadPRs();
  }, []);

  if (loading) return <p className="text-center">⏳loading ...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Closed Pull Requests</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">id</th>
            <th className="border px-4 py-2">titles</th>
            <th className="border px-4 py-2">creater</th>
            <th className="border px-4 py-2">Reviewer</th>
            <th className="border px-4 py-2">creation date</th>
            <th className="border px-4 py-2">last update</th>
          </tr>
        </thead>
        <tbody>
          {prs.map((pr) => (
            <tr key={pr.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{pr.number}</td>
              <td className="border px-4 py-2">
                <a
                  href={pr.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {pr.title}
                </a>
              </td>
              <td className="border px-4 py-2">{pr.user.login}</td>
              <td className="border px-4 py-2">
                {pr.requested_reviewers.length > 0
                  ? pr.requested_reviewers.map((r) => r.login).join(", ")
                  : "—"}
              </td>
              <td className="border px-4 py-2">
                {new Date(pr.created_at).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">
                {pr.closed_at
                  ? new Date(pr.closed_at).toLocaleDateString()
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClosedPRs;
