export default async function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path),
  };
}

function getPageTitle(path) {
  const titleMap = {
    '/': "Fil Maj's Home Page",
    '/resume': "Fil Maj's Resume",
    '/contact': 'Contact Fil Maj',
  };

  return titleMap[path];
}
