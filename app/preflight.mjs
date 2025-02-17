export default async function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path),
  };
}

function getPageTitle(path) {
  const titleMap = {
    '/': "Fil Maj's Home Page",
    '/contact': 'Contact Fil Maj',
    '/reads': "Fil Maj's Favourite Reads",
    '/resume': "Fil Maj's Resume",
    '/talks': "Fil Maj's Prior Speaking Sessions",
  };

  return titleMap[path] || 'Fil Maj';
}
