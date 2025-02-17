export default function Head(state) {
  const { store = {} } = state;

  // pageTitle is set in /app/preflight.mjs
  const { pageTitle = 'Fil Maj' } = store;
  const description = `Fil Maj's personal website including resume and links to some of his favourite content.`;

  return `
    <!DOCTYPE html>
    <html lang="en-CA">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${pageTitle}</title>
      <link rel="apple-touch-icon" sizes="120x120" href="/_public/img/favicons/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/_public/img/favicons/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/_public/img/favicons/favicon-16x16.png">
      <meta name="author" content="Fil Maj">
      <meta name="description" content="${description}">
      <meta name="og:title" content="${pageTitle}" />
      <meta name="og:description" content="${description}" />
      <meta name="og:image" content="/_public/img/me/fil.png" />
      <meta name="og:site_name" content="Fil Maj" />
      <meta name="og:type" content="website" />
      <link rel="me" href="https://social.lunchlurkers.com/@filmaj">
      <link rel="stylesheet" type="text/css" href="/_public/css/reset.css">
      <link rel="stylesheet" type="text/css" href="/_public/css/filmaj.css">
      <link rel="stylesheet" type="text/css" media="print" href="/_public/css/print.css">
      <link rel="stylesheet" type="text/css" href="https://use.typekit.net/cwg3htt.css">
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined">
    </head>
`;
}
