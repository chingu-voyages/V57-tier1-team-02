import { useEffect, useState } from "react";
import { fetchPullRequests } from "../services/githubAPI";

function OpenPR() {
  // المدخلات
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");

  // البيانات
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // عند تحميل الصفحة
  useEffect(() => {
    const savedOwner = localStorage.getItem("lastOpenOwner");
    const savedRepo = localStorage.getItem("lastOpenRepo");
    const savedData = localStorage.getItem("openPRs");

    if (savedOwner) setOwner(savedOwner);
    if (savedRepo) setRepo(savedRepo);
    if (savedData) setPrs(JSON.parse(savedData));
  }, []);

  // جلب البيانات
  const handleFetchPRs = async (e) => {
    e.preventDefault();
    await fetchData(owner, repo);
  };

  const fetchData = async (o, r) => {
    if (!o || !r) {
      alert("⚠️ الرجاء إدخال Owner و Repository.");
      return;
    }

    setLoading(true);
    setError("");
    setPrs([]);

    try {
      const data = await fetchPullRequests(o, r, "open");
      setPrs(data);

      // حفظ اسم الريبو والمالك
      localStorage.setItem("lastOpenOwner", o);
      localStorage.setItem("lastOpenRepo", r);
    } catch (err) {
      setError("⚠️ تحقق من اسم الـ owner أو الـ repo.");
    } finally {
      setLoading(false);
    }
  };

  // حفظ النتائج يدويًا
  const handleSave = () => {
    if (prs.length > 0) {
      localStorage.setItem("openPRs", JSON.stringify(prs));
      alert("✅ تم حفظ النتائج بنجاح!");
    } else {
      alert("⚠️ لا توجد بيانات لحفظها.");
    }
  };

  // تحديث النتائج
  const handleRefresh = async () => {
    const savedOwner = localStorage.getItem("lastOpenOwner");
    const savedRepo = localStorage.getItem("lastOpenRepo");

    await fetchData(savedOwner || owner, savedRepo || repo);
    alert("🔄 تم تحديث البيانات من GitHub.");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* الفورم */}
      <form
        onSubmit={handleFetchPRs}
        className="mb-6 p-4 border rounded-md bg-gray-50 flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-center">🔎 Fetch Open PRs</h2>

        <div>
          <label className="block mb-1 font-semibold">Owner</label>
          <input
            type="text"
            placeholder="مثال: facebook"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Repository</label>
          <input
            type="text"
            placeholder="مثال: react"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          OKAY
        </button>
      </form>

      {/* أزرار التحكم */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          💾 Save
        </button>
        <button
          onClick={handleRefresh}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          🔄 Refresh
        </button>
      </div>

      {/* الرسائل */}
      {loading && <p className="text-center text-blue-500">⏳ جاري التحميل...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* الجدول */}
      {prs.length > 0 && !loading && !error && (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">
            Open Pull Requests
          </h3>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Creator</th>
                <th className="border px-4 py-2">Reviewer</th>
                <th className="border px-4 py-2">Created</th>
                <th className="border px-4 py-2">Updated</th>
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
                    {new Date(pr.updated_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {prs.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500">لا توجد بيانات معروضة حاليًا.</p>
      )}
    </div>
  );
}

export default OpenPR;
