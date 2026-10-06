GREEN SWITCH — school pilot, October 2026

Features
- 250 missions, 10 per day; dated completions, daily streak and current-week progress.
- Student and teacher profiles. Teachers view the school activity without points or leaderboard positions.
- Firebase Authentication verifies the password. Profile progress synchronizes across devices with conflict-safe merging.
- Switch Exchange: real offers, one reservation per item, two confirmations before counting reuse. No sample offers or posting points.
- School Wall: shared photos and short videos (5 MB maximum). Earlier local uploads remain labelled on their original device.
- School student/class leaderboards and an overall school ranking. Public leaderboard records use surname initials. Environmental impact is an indicative estimate.

Deployment
Upload index.html, style.css, app.js, cloud.js, exchange-store.js and exchange.js to the main branch used by GitHub Pages.
Keep database.rules.json as the authoritative Firebase Realtime Database rules and publish it in the Firebase console. Enable Email/password in Firebase Authentication. Google, Apple and Microsoft sign-in are not enabled.
The web Firebase API key identifies the project; it is not an administrator credential. Never put service-account keys in this repository.

Account use
Use the same name, class, school, role and password on every device. Existing local profiles migrate when they first sign in online. Forgotten passwords require the project administrator; deleting local data no longer resets an online account. Accounts are based on profile details; use a consistent school name.
Teacher is a self-selected viewing role and does not verify employment or school enrolment. Student mission completions remain self-reported; this is a school pilot, not a certified impact measurement or anti-cheat system.

Tests
Node: node --test exchange-store.test.cjs
Keep isolated technical QA fixtures, tokens and accounts out of the public repository.
