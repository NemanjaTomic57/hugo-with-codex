# Nemanja Tomic - Blogging About Tech

A polished Hugo starter for a personal technical blog focused on IT and philosophy. The site includes a custom home page, post listing with client-side tag filtering, reusable partials, responsive styling, sample content, and a contact page prepared for static form integration.

## Project structure

- `hugo.toml`: Site configuration, metadata, taxonomy setup, and main navigation.
- `content/`: Markdown content for pages and posts.
- `layouts/`: Hugo templates for the base layout, page types, partials, and taxonomy pages.
- `assets/css/main.css`: Main site styles.
- `assets/js/tag-filter.js`: Client-side tag filtering for the Posts page.
- `archetypes/default.md`: Default front matter for new content.

## Run locally

1. Install Hugo extended.
2. Start the local server:

```bash
hugo server
```

3. Open the local URL shown by Hugo, typically `http://localhost:1313/`.

To build the production output, run:

```bash
hugo
```

The generated static site will be written to `public/`.

## Add a new post

Create a new post with Hugo:

```bash
hugo new posts/my-new-post.md
```

Then edit the generated file in `content/posts/` and set:

- `title`
- `date`
- `summary`
- `tags`
- `slug` if you want a custom URL segment

Example front matter:

```toml
+++
title = "My New Post"
date = 2026-03-14T10:00:00+01:00
summary = "A short teaser used in post previews."
tags = ["Engineering", "Infrastructure"]
+++
```

## Contact form integration

The contact form lives in [content/contact.md](/home/nemo/Documents/workspace/nemanjatomic.net/content/contact.md) and reads these values from [hugo.toml](/home/nemo/Documents/workspace/nemanjatomic.net/hugo.toml):

- `params.contactFormAction`
- `params.contactFormMethod`
- `params.contactEmail`

To connect a real provider later:

1. Replace `contactFormAction` with your form service endpoint or serverless route.
2. Adjust `contactFormMethod` if your provider requires a different method.
3. Update the hidden fields in the form markup if your provider expects specific field names.

This keeps the integration points isolated so the site can remain fully static while still supporting email workflows.
