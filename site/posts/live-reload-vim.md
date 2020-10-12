+++
title = "Live Reload and VIM"
description = "Configure VIM for live reload"
created = 2020-07-03
+++

## {{title}}

{{> words}}

When using live reload (`ht --live`) and the VIM text editor swap files and backups can interfere with the operating system file change notifications.

We recommend disabling swap files and backups with VIM to prevent errors using the live reload functionality.

To disable swap files and backups we add these lines to our `~/.vimrc`:

```
set noswapfile
set nobackup
set nowritebackup
```

{{> back}}

---

{{> byline}}
