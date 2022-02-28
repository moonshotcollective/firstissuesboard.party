const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.github_token,
  });

  const projectIssueUrls = [
    "https://api.github.com/repos/moonshotcollective/tip.party/issues",
    "https://api.github.com/repos/moonshotcollective/publicgoods.party/issues",
    "https://api.github.com/repos/moonshotcollective/pay.party/issues",
    "https://api.github.com/repos/moonshotcollective/fund.party/issues",
    "https://api.github.com/repos/moonshotcollective/tokenstream.party/issues",
    "https://api.github.com/repos/moonshotcollective/recruiter.party/issues",
  ];

  const validLabels = ["good first issue"];

  //   let temp = [];
  //   const result = [];

  //   for (const url of projectIssueUrls) {
  //     temp = await octokit.request(url);
  //     console.log("VIEW TEMP ", temp);
  //     const tempFiltered = temp.data
  //       .filter(i => {
  //         if (i.labels !== []) {
  //           const num = i.labels.filter(i => validLabels.includes(i.name.toLowerCase()));
  //           return num.length > 0;
  //         }
  //       })
  //       .map(i => {
  //         const repository_url_arr = i.repository_url.split("/");
  //         return {
  //           url: i.url,
  //           repository_url: i.repository_url,
  //           title: i.title,
  //           created_at: i.created_at,
  //           updated_at: i.updated_at,
  //           project_name: repository_url_arr[repository_url_arr.length - 1],
  //         };
  //       });
  //     result.push(tempFiltered);
  //   }

  const issues = await octokit.request("https://api.github.com/repos/moonshotcollective/tip.party/issues");
  const filteredIssues = issues.data
    .filter(i => {
      if (i.labels !== []) {
        const num = i.labels.filter(i => validLabels.includes(i.name.toLowerCase()));
        return num.length > 0;
      }
    })
    .map(i => {
      const repository_url_arr = i.repository_url.split("/");
      return {
        url: i.url,
        repository_url: i.repository_url,
        title: i.title,
        created_at: i.created_at,
        updated_at: i.updated_at,
        project_name: repository_url_arr[repository_url_arr.length - 1],
      };
    });

  return res.status(200).json({ issues: filteredIssues });
};
