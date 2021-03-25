+++
created = 2020-07-07
description = "Use an ephemeral port for multiple projects"
+++

{{import "header"}}

Ephemeral ports are very helpful when working with local development servers to prevent collisions when running multiple projects at the same time.

If we are working on multiple websites and sharing the same port we would need to either close down the other web server or keep specifying different ports for each project; which becomes a chore fast!

To simplify launching multiple projects set the `--port` option to zero to use an ephemeral port:

```
uwe dev --port=0
```

The operating system will allocate the web server a free port when it attempts to bind and our code will operate on the actual socket address that was used so your browser will be launched with the right URL.

The downside to this approach is that if you close the browser tab and want to manually navigate to the project preview it is not immediately obvious which port the project is running on so it may be easier to close the live reload server and restart it when using ephemeral ports.

{{import "footer"}}
