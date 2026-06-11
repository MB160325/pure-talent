PureTalent landing page

Open locally:
http://127.0.0.1:4173/

Main files:
- index.html
- css/styles.css
- js/main.js

Logo replacement:
- Replace assets/logo-placeholder.svg with your company logo file.
- If you use a PNG/JPG, update the two image paths in index.html from:
  assets/logo-placeholder.svg
  to your uploaded file name, for example:
  assets/logo.png

Browser tab icon:
- Replace assets/favicon.svg, or add a new favicon file and update the <link rel="icon"> path in index.html.

Client logos:
- Client placeholders are generated in js/main.js from the clientSeed array.
- Replace client names, sectors, scopes, and initials there.
- If you want image logos instead of initials, add logo files to assets/ and update renderClients() to render <img> tags.

Company start year and numbers:
- Edit the data-count values in the stats-band section inside index.html.

Application email:
- The form opens the applicant email app with a professional message addressed to ifo@puretalent.ae.
- Browsers cannot securely attach a local CV file automatically through mailto, so the email body reminds the applicant to attach the selected CV before sending.
