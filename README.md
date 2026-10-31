# Nkambule Sibonginkosi S — IT Internship Portfolio

A responsive static portfolio built with HTML5, CSS3 and vanilla JavaScript. It has no database, backend, login system or build process.

## 1. Run locally

1. Extract the ZIP file.
2. Open the `it_internship_portfolio` folder.
3. Double-click `index.html` to open the public portfolio.
4. Open `editor.html` to use the local content manager.

The website is designed to work from a local folder and on static hosting. If your browser restricts local file behaviour, use a simple local static server (for example, VS Code Live Server); no backend application is needed.

## 2. Folder structure

```text
it_internship_portfolio/
├── index.html
├── editor.html
├── README.md
├── projects/
│   └── project-template.html
└── assets/
    ├── css/
    │   ├── style.css
    │   ├── responsive.css
    │   └── editor.css
    ├── js/
    │   ├── config.js
    │   ├── projects.js
    │   ├── renderer.js
    │   ├── main.js
    │   ├── project-detail.js
    │   └── editor.js
    ├── images/
    │   ├── profile/
    │   ├── projects/
    │   └── certificates/
    ├── documents/
    └── evidence/
        ├── logistics-network/
        ├── retail-security/
        ├── fare-collection/
        └── campus-daily/
```

## 3. Edit content using the local editor

1. Open `editor.html` in your browser.
2. Select Profile, Projects, Skills, Certifications or Strengths.
3. Edit the fields. Add or delete project cards, skill categories and certificates.
4. Click **Export updated files**.
5. The editor downloads `portfolio-content.json`, `config.js` and `projects.js`.
6. Back up your existing `assets/js/config.js` and `assets/js/projects.js`.
7. Replace those two files with the exported JavaScript files (rename them to `config.js` and `projects.js`).
8. Refresh `index.html` to see the updated content.

The editor is browser-only. It cannot write directly into the website folder, publish changes, or bundle evidence files. Keep your exported JSON as a backup. Import it later through the Import JSON button.

## 4. Edit content manually

- Profile, contact details, education-related profile fields, skills, certifications and strengths: `assets/js/config.js`.
- Projects, project descriptions, technologies, contributions and evidence paths: `assets/js/projects.js`.
- Colours, spacing and typography: `assets/css/style.css`.
- Mobile layout: `assets/css/responsive.css`.

Keep JavaScript strings inside quotation marks. If you edit manually, valid JSON-style JavaScript syntax is required.

## 5. Add a project

Recommended approach: use `editor.html` and click **Add project**. Give the project a unique ID using lowercase letters and hyphens, for example `inventory-management`.

You can also copy an existing project object in `assets/js/projects.js` and edit it. Include:
- `id`, `title`, `category`, `status`, `summary`
- `problem`, `objectives`, `technologies`, `contributions`
- `implementation`, `challenges`, `solutions`, `outcomes`, `future`
- `evidence` and optional `links`

Allowed status values include `Completed`, `Prototype`, `In Progress` and `Planned`.

Project detail pages use a reusable template at `projects/project-template.html`. The website opens the selected project in that template using its ID. You do not need to create a separate HTML page for every project.

## 6. Add screenshots, reports and videos

1. Create a folder under `assets/evidence/` using the project ID. Example: `assets/evidence/inventory-management/`.
2. Copy your files into that folder.
3. Add evidence entries to the project's `evidence` array.

Example:

```js
evidence: [
  {
    type: "image",
    title: "Application dashboard",
    file: "assets/evidence/inventory-management/dashboard.png",
    caption: "Main application dashboard."
  },
  {
    type: "pdf",
    title: "Project report",
    file: "assets/evidence/inventory-management/report.pdf",
    caption: "Project documentation."
  },
  {
    type: "video",
    title: "System demonstration",
    file: "assets/evidence/inventory-management/demo.mp4",
    caption: "Short demonstration of the application."
  }
]
```

Image evidence is displayed in the gallery. PDF and video evidence are linked so they open in a new tab. For externally hosted videos, add a link to the project's `links` array or include a safe URL in the project description. Only use evidence you have permission to publish.

**Important:** The editor's evidence field accepts a JSON array of evidence objects. Uploading a file through a browser form cannot place it in your website folder. Copy the file into the appropriate folder yourself, then enter its relative path.

## 7. Add a certification

Use the Certifications tab in `editor.html`. Add the certificate name, provider and any confirmed date. Add a relative path for a certificate image or PDF, for example:

`assets/images/certificates/ethical-hacking.pdf`

Do not add invented dates or verification links. Ensure the file exists at the path you enter.

## 8. Update your CV and profile image

- Replace `assets/documents/cv.pdf` with your current CV, keeping the same filename, or change the CV path in Profile.
- A profile photo can be placed in `assets/images/profile/`. The current design uses a typographic monogram rather than a fabricated photograph. To add a real photo, update the hero markup in `index.html` and use an image you choose.

## 9. Theme and appearance

The colour palette is defined at the top of `assets/css/style.css` using CSS variables:
- Navy: `--navy`
- Gold: `--gold`
- Light background: `--paper`
- Main text: `--ink`

The public site includes a dark/light theme toggle. The selected theme is saved in the browser's local storage.

## 10. Deploy with GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder (not the outer ZIP).
3. In repository **Settings → Pages**, select deployment from the `main` branch and root folder.
4. Save and wait for GitHub Pages to publish.
5. Test the live URL, including project detail links and evidence paths.

Netlify: drag the extracted portfolio folder into Netlify's manual deploy area, or connect the GitHub repository.

## 11. Quality and privacy checklist

- Confirm every image, PDF, video and CV path exists before publishing.
- Use compressed images, preferably WebP or optimised JPG/PNG.
- Do not publish private addresses, passwords, API keys, student numbers or confidential project data.
- Remove personal or client data from screenshots.
- Check external URLs before publishing.
- External links opened in a new tab use `rel="noopener noreferrer"`.
- Test keyboard navigation and mobile layout.
- Update the copyright year automatically; it is generated by JavaScript.
- Keep a backup of the entire portfolio folder and exported JSON.

## 12. Supplied content accuracy

The project descriptions and skills are based on the information supplied for this portfolio. Items such as detailed challenge narratives, test results, certificate dates, certificate scans and project outcomes remain limited or marked for later evidence. Add only details that can be supported by your actual work.

## 13. Known limitations

- This is a static website; it has no authentication or server-side content management.
- The content editor exports files but cannot write into the site folder directly.
- Evidence files must be copied into the project folder manually.
- The site does not submit contact forms; email and telephone links open the visitor's email or phone application.
- The Google Fonts stylesheet requires an internet connection for those fonts. System fallback fonts are provided.
- A static site cannot keep private editor data secure from someone who has access to the editor files. Do not put secrets or sensitive data in the content files.
