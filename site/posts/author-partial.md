+++
created = 2020-07-09
draft = true
description = "Author partial and mentions"

[taxonomies]
tags = ["Author", "Partial", "Mention"]
+++

# {{title}}

{{> words}}

We designed [author attribution][] so that pages can easily reference `authors` by alias in the front matter like this:

```toml
authors = ["tmpfs"]
```

And some useful partials are supplied by the [std::author](https://github.com/uwe-app/plugins/tree/master/std/author) plugin; this article describes the various ways of using the author partials.

---

## Attribution

When we want to attribute the authors of a page for the byline of a blog post or article, we can render the `attribution` partial:

```handlebars
\{{> attribution~}}
```

Renders to:

```html
{{> attribution~}}
```

You can see an example of this in [our blog byline partial](https://github.com/uwe-app/blog/blob/site/site/partials/byline.hbs).

## Mention & Cite

If we want to link to an author's website we can use the `mention` partial with the context of a specific author like this:

```handlebars
{{{{raw}}}}{{#with authors.all.tmpfs}}{{> mention~}}{{/with~}}{{{{/raw}}}}
```

Which will render the markup for the link like this:

```html
{{#with authors.all.tmpfs}}{{> mention~}}{{/with~}}
```

But that is a bit long so we added the `cite` partial to make it more compact:

```handlebars
\{{> cite author="tmpfs"~}}
```

Which will render the same markup:

```html
{{> cite author="tmpfs"~}}
```

Sometimes we like to refer to people by their alias, in which case you can use the `at` flag:

```handlebars
\{{> cite author="tmpfs" at=true~}}
```

Which will render an inline link using the author's alias prefixed by `@`, for example: {{> cite author="tmpfs" at=true ~}}.

{{> back}}

---

{{> byline}}

[author attribution]: https://uwe.app/docs/content/author-attribution/
