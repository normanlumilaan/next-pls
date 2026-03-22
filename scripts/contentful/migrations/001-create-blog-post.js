/**  @see https://www.npmjs.com/package/contentful-migration */
module.exports = migration => {
  const blogPost = migration
    .createContentType('blogPost')
    .name('🚧 Blog Post')
    .description('A blog post content type created by the migration script')
    .displayField('contentfulID')

  blogPost
    .createField('contentfulID')
    .name('Contentful ID')
    .type('Symbol')
    .required(true)

  blogPost.createField('title').name('Title').type('Symbol').required(true)

  blogPost.createField('slug').name('Slug').type('Symbol').required(true)

  blogPost.createField('content').name('Content').type('Text').required(false)
}
