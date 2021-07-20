export const DELIMETER = ", ";

export const formatData = (formData) => ({
  title: formData.title,
  context: formData.context,
  author: formData.author,
  books: formData.books.split(DELIMETER),
  languages: formData.languages.split(DELIMETER),
  contextAuthors: formData.contextAuthors.split(DELIMETER),
  sources: formData.sources.split(DELIMETER),
  tags: {
    ru: formData.tags.ru.split(DELIMETER),
    he: formData.tags.he.split(DELIMETER),
    en: formData.tags.en.split(DELIMETER),
  },
});
