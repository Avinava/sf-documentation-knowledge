---
title: "AMPscript Dynamic Link Names"
domain: mc-programmatic-content
topic: ampscript-dynamic-link-names
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.818Z
estimatedTokens: 247
keywords: [AMPscript, Dynamic, Link, functionality, lets, include, content, including, substitution, strings, function, calls, assigned, track, resolved]
---

# AMPscript Dynamic Link Names

> This functionality lets you include dynamic content, including substitution strings and AMPscript function calls, in the name assigned to a link. You can then track the link by the resolved values.

# AMPscript Dynamic Link Names

This functionality lets you include dynamic content, including substitution strings and AMPscript function calls, in the name assigned to a link. You can then track the link by the resolved values.

Only use this functionality in HTML version of emails.

When creating an email, include your dynamic statements when setting the link name or alias attribute in the Content Editor inside the user interface.

```
<a href="http://website.example.com/key/p...ID=C12915x001B" target="new" alias="%%=CONCAT(Region,' Region')=%%">
```

This example tracks the link specified above separately by each subscriber's region included in the send. For example:

```
West Region
North Region
```

The system limits the number of unique resolved link names, as defined by a link alias, to 100. You can track each link with a dynamic link name. If the number of unique link names exceeds this limit, the system tracks excess links under the original unresolved link name.
