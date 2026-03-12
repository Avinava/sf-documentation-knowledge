---
title: "setBackground()"
domain: lightning
topic: setbackground
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.625Z
estimatedTokens: 114
keywords: [setBackground, action, run, background, cannot, unset, actions, usually, long, running, lower, priority, useful, want, app]
---

# setBackground()

> Sets the action to run as a background action. This cannot be unset.
   Background actions are usually long running and lower priority actions. A background action is
   useful when you want your app to remain responsive to a user while it executes a low priority,
   long-running action. A rough guideline is to use a background action if it takes more than five
   seconds for the response to return from the server.

# setBackground()

Sets the action to run as a background action. This cannot be unset. Background actions are usually long running and lower priority actions. A background action is useful when you want your app to remain responsive to a user while it executes a low priority, long-running action. A rough guideline is to use a background action if it takes more than five seconds for the response to return from the server.

## Signature

setBackground()
