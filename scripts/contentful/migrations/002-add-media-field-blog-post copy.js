module.exports = migration => {
  const blogPost = migration.editContentType('blogPost')

  //blogPost.createField("media").name("Media").type("Link").linkType("Asset");

  blogPost.changeFieldControl('media', 'builtin', 'assetLinkEditor', {
    helpText: 'The media for the blog post',
  })
}
