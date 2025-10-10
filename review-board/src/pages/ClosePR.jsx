import { useEffect, useState } from "react";
import { fetchPullRequests } from "../services/githubAPI";
import { RefreshCw, Save, Download } from "lucide-react";

export default function ClosedPR() {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");

  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedOwner = localStorage.getItem("lastOwner");
    const savedRepo = localStorage.getItem("lastRepo");
    const savedData = localStorage.getItem("closedPRs");

    if (savedOwner) setOwner(savedOwner);
    if (savedRepo) setRepo(savedRepo);
    if (savedData) setPrs(JSON.parse(savedData));
  }, []);

  const handleFetchPRs = async (e) => {
    e.preventDefault();
    await fetchData(owner, repo);
  };

  const fetchData = async (o, r) => {
    if (!o || !r) {
      setError("Please enter both owner and repository.");
      return;
    }

    setLoading(true);
    setError("");
    setPrs([]);

    try {
      const data = await fetchPullRequests(o, r, "closed");
      setPrs(data || []);
      localStorage.setItem("lastOwner", o);
      localStorage.setItem("lastRepo", r);
    } catch (err) {
      setError("Failed to fetch. Check owner/repo or your network.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    if (prs.length > 0) {
      localStorage.setItem("closedPRs", JSON.stringify(prs));
      alert("Saved results successfully!");
    } else {
      alert("No data to save.");
    }
  };

  const handleRefresh = async () => {
    const savedOwner = localStorage.getItem("lastOwner");
    const savedRepo = localStorage.getItem("lastRepo");

    await fetchData(savedOwner || owner, savedRepo || repo);
    alert("Refreshed data from GitHub.");
  };

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return "-";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header card */}
        <header className="mb-6 bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-100 p-3 shadow-inner">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0.5C5.38 0.5 0 5.88 0 12.5C0 17.9 3.438 22.5 8.207 24.09C8.807 24.2 9.02 23.84 9.02 23.53C9.02 23.25 9.01 22.56 9.005 21.66C5.672 22.31 4.968 20.09 4.968 20.09C4.422 18.75 3.633 18.36 3.633 18.36C2.547 17.61 3.71 17.63 3.71 17.63C4.91 17.72 5.54 18.86 5.54 18.86C6.61 20.7 8.32 20.15 9.01 19.86C9.12 19.09 9.44 18.57 9.8 18.25C7.14 17.94 4.34 16.87 4.34 12.02C4.34 10.66 4.82 9.57 5.62 8.74C5.5 8.43 5.07 7.08 5.75 5.28C5.75 5.28 6.74 4.95 8.995 6.53C9.92 6.26 10.9 6.13 11.88 6.13C12.86 6.13 13.85 6.26 14.78 6.53C17.04 4.95 18.03 5.28 18.03 5.28C18.71 7.08 18.28 8.43 18.16 8.74C18.96 9.57 19.44 10.66 19.44 12.02C19.44 16.88 16.64 17.93 13.98 18.24C14.44 18.63 14.83 19.36 14.83 20.48C14.83 22.03 14.82 23.19 14.82 23.53C14.82 23.84 15.03 24.21 15.64 24.09C20.41 22.5 24 17.9 24 12.5C24 5.88 18.62 0.5 12 0.5Z" fill="#111827"/>
                </svg>
              </div>

              <div>
                <h1 className="text-lg sm:text-xl font-semibold">Closed PRs — Closed Pull Requests</h1>
                <p className="text-sm text-gray-500">Enter owner and repository to show closed GitHub pull requests</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {prs.length} <span className="text-xs opacity-70">PRs</span>
              </span>
              <div className="text-sm text-gray-500">Last updated: {prs.length ? formatDate(prs[0]?.closed_at || prs[0]?.updated_at) : 'Not loaded'}</div>
            </div>
          </div>
        </header>

        {/* Form */}
        <div className="flex justify-center">
          <form onSubmit={handleFetchPRs} className="mb-6 bg-white p-5 rounded-2xl shadow-sm border w-full md:w-3/4 lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
              <div className="md:col-span-1">
                <label className="block mb-1 font-medium">Owner</label>
                <input
                  type="text"
                  placeholder="e.g. facebook"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  aria-label="owner"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block mb-1 font-medium">Repository</label>
                <input
                  type="text"
                  placeholder="e.g. react"
                  value={repo}
                  onChange={(e) => setRepo(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  aria-label="repository"
                />
              </div>

              <div className="md:col-span-1 flex gap-2 justify-center">
                <button
                  type="submit"
                  className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
                  aria-label="Fetch Closed PRs"
                >
                  <Download className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="p-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
                  aria-label="Save Closed PRs"
                >
                  <Save className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleRefresh}
                  className="p-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition"
                  aria-label="Refresh Closed PRs"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Status messages */}
        <div aria-live="polite">
          {loading && (
            <div className="mb-4 flex items-center justify-center gap-3">
              <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" aria-hidden>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              <div className="text-blue-600 font-medium">⏳ Loading...</div>
            </div>
          )}

          {error && <div className="mb-4 text-center text-red-600 font-medium">{error}</div>}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          {prs.length > 0 && !loading && !error ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y table-fixed text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">#</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">Author</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">Reviewers</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">Created</th>
                    <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">Closed</th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y">
                  {prs.map((pr) => (
                    <tr key={pr.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium">{pr.number}</td>

                      <td className="px-4 py-3 text-sm">
                        <a href={pr.html_url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-blue-600">
                          {pr.title}
                        </a>
                        <div className="text-xs text-gray-400 mt-1">{pr.body ? pr.body.slice(0, 100) + (pr.body.length > 100 ? '…' : '') : '—'}</div>
                      </td>

                      <td className="px-4 py-3 text-sm flex items-center gap-3">
                        <img src={pr.user.avatar_url} alt={pr.user.login} className="w-8 h-8 rounded-full" />
                        <div>
                          <div className="font-medium">{pr.user.login}</div>
                          <div className="text-xs text-gray-400">{pr.user.type}</div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-sm">
                        {pr.requested_reviewers && pr.requested_reviewers.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {pr.requested_reviewers.map((r) => (
                              <span key={r.id} className="px-2 py-1 text-xs bg-gray-100 rounded-full">{r.login}</span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>

                      <td className="px-4 py-3 text-sm">{formatDate(pr.created_at)}</td>
                      <td className="px-4 py-3 text-sm">{formatDate(pr.closed_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              {loading ? null : (
                <>
                  <svg width="120" height="80" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4 opacity-40">
                    <path d="M3 7h18M3 12h18M3 17h18" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="font-medium">No data to display right now.</div>
                  <div className="text-sm mt-2">Try entering owner and repo then click “Fetch”</div>
                </>
              )}
            </div>
          )}
        </div>

        <footer className="mt-6 text-center text-sm text-gray-500">Made with ♥ — ClosedPR viewer</footer>
      </div>
    </div>
  );
}