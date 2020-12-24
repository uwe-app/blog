+++
created = 2020-07-06
description = "Insights into how the incremental builds work"
+++

{{import "header"}}

If source files have not changed there is no need for us to render or copy them; a manifest is created for each [release tag]({{ link "https://uwe.app/docs/release-tags/" }}) which is written to the build directory as a JSON file.

The manifest contains a list of source files and modification times; when a build runs it will compare modification times to determine if a file appears to have changed.

When you run `uwe` on a fresh project you will see output like this:

```
INFO  uwe > debug
INFO  uwe::build > site/index.md -> build/debug/index.html
INFO  uwe::build > site/assets/style.css -> build/debug/assets/style.css
INFO  uwe               > 4.052078ms
```

If you run it again the output shows `noop`:

```
INFO  uwe > debug
INFO  uwe::build > noop site/index.md
INFO  uwe::build > noop site/assets/style.css
INFO  uwe               > 4.422663ms
```

If you want to force a full build you can use the `--force` option.

Note that when the `--live` option is given pages *must be compiled* to ensure they connect to the correct websocket server endpoint.

{{import "footer"}}

