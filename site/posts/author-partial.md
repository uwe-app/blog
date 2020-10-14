+++
description = "Author partial and mentions"
created = 2020-07-09
draft = true

[taxonomies]
tags = ["Author", "Partial", "Mention"]
+++

## {{title}}

{{> words}}

We added [author settings][] so that they can easily be referred to using a `byline` in the front matter:

```toml
byline = ["tmpfs"]
```

Which prevents repetition when assigning authors to pages; the page templates have access to an `authors` list propagated via the identifiers in the `byline` which means we can create a useful partial to include all the authors in the byline at the bottom of each blog post:

```handlebars
{{{{raw}}}}
{{#each authors}}
<a href="{{this.link}}">{{this.name}}</a>{{#unless @last}}, {{/unless}}{{/each}}{{{{/raw}}}}
```

But what about if we want to reference an author using the identifier?

Luckily, the settings are exposed to our templates via `authors` so we can just look up an author in the map. First let's check we can access the map correctly:

```handlebars
{{{{raw}}}}
{{json authors}}{{{{/raw}}}}
```

Which yields:

```json
{{json authors}}
```

We can now refer to an author easily but we like short and sweet so let's create a partial to do the lookup for us:

{{>cite id="tmpfs"}}

```handlebars
```

{{> back}}

---

{{> byline}}

[author settings]: https://uwe.app/docs/settings/authors/
