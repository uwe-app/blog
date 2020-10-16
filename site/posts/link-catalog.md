+++
created = 2020-07-11
description = "All your link belong to us"

[taxonomies]
tags = ["Link", "Markdown"]
+++

## {{title}}

{{> words}}

We like using link references at the end of a markdown document to save repetition when using the same link multiple times but they do not span multiple documents. A link catalog allows us to use a single location for link references which makes managing links much easier and helps to prevent duplication.

To get started create the `site/links.md` file and add a link reference:

```markdown
[uwe]: https://uwe.app
```

But we don't want this file to be output to the build directory so we should ignore it, create the `site/.ignore` file if it does not exist and add `/links.md` on it's own line.

Next configure the settings to use the link catalog for markdown documents, add a `[link]` table to `site.toml`:

```toml
[link]
catalog = "links.md"
```

Paths for catalogs are resolved relative to the site source folder so we can omit the `site` prefix from the path.

That's it, now you can use link references in any markdown document like usual:

```markdown
News about the [UWE project][uwe].
```

{{> back}}

---

{{> byline}}
