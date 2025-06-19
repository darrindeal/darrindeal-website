import glob from 'fast-glob'

async function importArticle(articleFilename, path = 'articles') {
  let { article } = await import(`../app/${path}/${articleFilename}`)

  return {
    slug: path + "/" + articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles(excludedTags = [], path = 'articles') {
  let articleFilenames = await glob('*/**/page.mdx', {
    cwd: `./src/app/${path}`,
  })

  let articles = await Promise.all(articleFilenames.map(name => importArticle(name, path)))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
