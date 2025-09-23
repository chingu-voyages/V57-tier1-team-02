export async function fetchPullRequests(owner, repo, state = "open") {
  const token = import.meta.env.VITE_GITHUB_TOKEN; // token
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls?state=${state}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`, //  checking othorisation
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    throw new Error(`Error fetching PRs: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
