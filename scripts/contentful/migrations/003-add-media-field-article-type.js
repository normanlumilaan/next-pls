module.exports = migration => {
  const article = migration.editContentType('article')

  article.changeFieldControl('media', 'builtin', 'assetLinksEditor', {
    helpText: 'The media for the article post',
  })
}
