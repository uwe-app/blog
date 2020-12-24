+++
created = 2020-07-12
permalink = "/posts/html-minify"
description = "Managing whitespace with minified HTML documents"

[taxonomies]
tags = ["HTML", "Minify", "Whitespace"]
+++

{{import "header"}}

Having minified HTML is good to keep file sizes as small as possible but is also important for the diff logic used when publishing. Without minification insignificant whitespace changes to a page would re-publish the file which can invalidate all the pages if whitespace in the layout changes!

We enabled minification by default for `release` builds which fixes the issue with publishing insignificant whitespace changes but creates an issue for developers to consider; how to handle whitespace between inline block elements.

Consider this markup:

```html
<nav>
  <a href="/">Home</a>
  <a href="/about/">About</a>
</nav>
```

Would render with a single normalized space between the anchor elements but when a `release` build is created the whitespace would be removed and we now have a *visual inconsistency between different release profiles* - not cool!

There are various techniques to work around this issue, our preference is to use flex box to prevent the whitespace from rendering:

```css
nav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
```

Which is fine when you don't have too many elements with inline block elements but it would be nice to forget about the problem completely. We decided to create a setting for minification that would control when to minify, use it like this:

```toml
[minify.html]
profiles = ["debug", "release"]
```

Now we can stop [fighting the space betweeen inline block elements][fighting-the-space]!

{{import "footer"}}

[fighting-the-space]: https://css-tricks.com/fighting-the-space-between-inline-block-elements/
