---
title: "getHeaders()"
domain: pages
topic: getheaders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.674Z
estimatedTokens: 133
keywords: [getHeaders, map, key, Usage]
---

# getHeaders()

> Returns a map of the request headers, where the key string contains the name of the
  header, and the value string contains the value of the header.

# getHeaders()

Returns a map of the request headers, where the key string contains the name of the header, and the value string contains the value of the header.

## Signature

public Map<String, String\> getHeaders()

## Return Value

Type: Map<String, String>

## Usage

This map can be modified and remains in scope for the PageReference object. For instance, you could do:

```

```

For a description of request headers, see [Request Headers](atlas.en-us.pages.meta/pages/apex_system_pagereference.htm#RequestHeadersSection).

## Code Examples

```
PageReference.getHeaders().put('Date', '9/9/99');
```

## Related Topics

- Request Headers (atlas.en-us.pages.meta/pages/apex_system_pagereference.htm)
