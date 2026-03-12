---
title: "Example Calls Using the Ajax Toolkit"
domain: ajax
topic: example-calls-using-the-ajax-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.662Z
estimatedTokens: 230
keywords: [Calls, Ajax, Toolkit, two, sections, contain, examples, synchrononous, asynchronous]
---

# Example Calls Using the Ajax Toolkit

> The next two sections contain examples of synchrononous and asynchronous calls.

# Example Calls Using the Ajax Toolkit

The next two sections contain examples of synchrononous and asynchronous calls.

The AJAX Toolkit provides a debugging window that pops up when certain errors are encountered.

You can invoke logging explicitly using the log() method. For example, if you wanted to display the debugging window with the value of a variable at a certain point in your client application, you could add this line at the appropriate place:

```

```

The AJAX Toolkit samples in the following sections use log(). To use the samples in the following sections, add this simple version of the log code before the first use of log:

```

```

You can make log() as sophisticated as you wish.

-   **[Examples of Synchronous Calls](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_more_samples.htm)**

-   **[Examples of Asynchronous Calls](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_more_samples_asynch.htm)**

## Code Examples

```
sforce.debug.log(myVar);
```

```
function log(message) {
  alert(message);
}
```

## Related Topics

- Examples of Synchronous Calls (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_more_samples.htm)
- Examples of Asynchronous Calls (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_more_samples_asynch.htm)
