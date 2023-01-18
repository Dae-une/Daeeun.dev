export const convertSlugToTitle = (slug: string) => {
  return slug
    .split('-')
    .map((i) => i.toUpperCase())
    .join(' ');
};
