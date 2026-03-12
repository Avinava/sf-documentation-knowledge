---
title: "Debugging with the AJAX Toolkit"
domain: ajax
topic: debugging-with-the-ajax-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.584Z
estimatedTokens: 116
keywords: [Debugging, AJAX, Toolkit, window, pops, certain, errors, encountered]
---

# Debugging with the AJAX Toolkit

> The AJAX Toolkit provides a debugging window that pops up when certain errors are
  encountered.

# Debugging with the AJAX Toolkit

The AJAX Toolkit provides a debugging window that pops up when certain errors are encountered.

You can invoke logging explicitly using the log method. For example, if you wanted to display the debugging window with the value of a variable at a certain point in your client application, you could add this line at the appropriate place:

```

```

You can open the debugging window at any point by using this command:

```

```

## Code Examples

```
sforce.debug.log(myVar);
```

```
sforce.debug.open();
```
