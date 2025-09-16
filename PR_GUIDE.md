# Pull Request Guide for Sleepy Tiger Resort Farmhouse Project

This document provides naming conventions and templates for Pull Requests (PRs).
Following this guide will keep our repository organized and help us achieve HD
in Configuration Management.

---

## 🔑 General Rules
- Each **feature/bugfix** must be developed in a separate branch.
- Branch names follow:  
  `feature/<module-task>` or `fix/<module-task>` or `docs/<topic>`.
- PR titles follow the format:  
  `<type>(<scope>): <short description>`  
  - **feat** → new feature  
  - **fix** → bug fix  
  - **docs** → documentation  
  - **chore** → configs, setup, minor changes  
  - **refactor** → code restructure  
- PR descriptions should include:
  - **What I did** – list of changes
  - **How to test** – steps to test
  - **Notes** – anything reviewers should know

---

## 📝 PR Templates by Branch

### A. `feature/frontend-shell`
**Title:**  
feat(frontend): base layout & styles
**Description:**  
What I did

Created base HTML layout in index.html

Added header, footer, and navigation structure

Set up CSS folder with base.css for global styles

How to test

Open /public/index.html in browser

Check that header, footer, and navigation display correctly

Verify styles are applied from base.css
Notes

This is a starting shell, content will be filled later

---

### B. `feature/frontend-services`
**Title:**  
**Description:**  
What I did

Built services.html page with service cards

Added placeholder text and images

Updated script.js to handle "More details" buttons

How to test

Open /public/services.html

Verify service cards display correctly

Click "More details" buttons → check placeholders
Notes

Backend integration will be added later

---

### C. `feature/frontend-booking`
**Title:**  
feat(booking): booking form & validation
**Description:**  
What I did

Added booking.html with form fields (name, date, service selection)

Implemented client-side validation in script.js

Added booking.css for form styling

How to test

Open /public/booking.html

Try submitting empty form → validation error appears

Fill valid data → form submits successfully (logs to console)

Notes

Backend integration will be added in integration branch

---

### D. `feature/backend-server`
**Title:**  
**Description:**  
What I did

Created server.js with Express setup

Added routes: GET /api/services, POST /api/bookings (placeholders)

Enabled CORS and JSON body parsing

How to test

Run npm install then npm start

Open http://localhost:3000/api/services
 → returns placeholder data

Test POST /api/bookings with Postman → returns confirmation

Notes

Database connection not yet implemented

---

### E. `feature/backend-db`
**Title:**  
feat(db): mysql connection & endpoints wiring
**Description:**  
What I did

Added db.js with MySQL connection pool

Connected /api/services route to DB

Connected /api/bookings route to insert booking into DB

How to test

Create .env file (see .env.example)

Start server with npm start

GET /api/services → returns DB rows

POST /api/bookings → inserts booking record

Notes

Requires DB setup (services, bookings tables)

---

### F. `feature/integration-booking`
**Title:**  
feat(integration): connect booking form to API
**Description:**  
What I did

Updated booking.html to send data to backend

Modified script.js to use fetch() for POST /api/bookings

Displayed confirmation message after success

How to test

Run backend server

Open /public/booking.html

Submit booking form

Check DB → new booking should be inserted

Notes

Requires backend-db branch merged before this

---

### G. `feature/config-deploy`
**Title:**  
chore(config): deployment & configuration docs
**Description:**  
What I did

Added .env.example with DB keys

Updated README.md with setup & deploy instructions

Added npm scripts: start, dev

How to test

Open README.md

Verify setup and deploy instructions

Check npm scripts run correctly

Notes

Deployment tailored for SCU cPanel

---

### H. `feature/docs-cm-report`
**Title:**  
docs(cm): add screenshots of branches, commits and PRs
**Description:**  
What I did

Created docs/ folder for CM evidence

Added screenshots: branches, commits, PRs

Linked evidence from README.md

How to test

Open docs/ folder → screenshots exist

Open README.md → evidence links visible

Notes

Will be updated as project progresses
---

