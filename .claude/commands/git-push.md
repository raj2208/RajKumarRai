---
name: git-push
description: "Stage all changes, commit with a short message, and push to GitHub on main. Use when the user says 'commit', 'push', 'commit and push', or invokes /git-push. Commits appear under the user's own git identity with no Co-Authored-By attribution."
---

Stage everything, commit, and push to main. Follow these steps exactly:

1. Run `git add .` to stage all changes.

2. Commit message: if the user provided one, use it exactly. If not, write one yourself — 5 to 10 words, simple and lowercase. No long descriptions, no bullet points, no punctuation at the end.

3. Commit command — use exactly this form with no Co-Authored-By or attribution lines:

   ```
   git commit -m "the commit message here"
   ```

   Do NOT append any `Co-Authored-By` trailer. Do NOT append any attribution. The commit must appear as purely the user's own work on GitHub.

4. Push: `git push origin main`
