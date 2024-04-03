import { createContentLoader } from 'vitepress'
import { formatDate, truncateText } from './helpers/helpers'

export default createContentLoader('articles/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        excerpt: truncateText(frontmatter.description, 100),
        date: formatDate(frontmatter.date),
        image: frontmatter?.image ? `images/${frontmatter.image}` : getImagePath(url),
        alt: frontmatter?.alt || `Illustration of ${frontmatter.title}`,
        author: frontmatter.author,
        draft: frontmatter.draft
      }))
      .filter((article) => !article.draft)
      .sort((a, b) => b.date.time - a.date.time)
  }
})

// function truncateText(text: string, length: number) {
//   if (text.length > length) {
//     return text.substring(0, length) + '...'
//   }
//   return text
// }

function getImagePath(url: string) {
  const filename = url.split('/').slice(-1)[0].split('.')[0]
  return filename + '.png'
}
