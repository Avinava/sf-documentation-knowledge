---
title: "Get a List of Objects If Metadata Has Changed"
domain: rest-api
topic: get-a-list-of-objects-if-metadata-has-changed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.935Z
estimatedTokens: 380
keywords: [Get, List, Objects, Metadata, Changed, Describe, resource, If-Modified-Since, HTTP, header, determine, object’s, metadata, changed.]
---

# Get a List of Objects If Metadata Has Changed

> Use the Describe Global resource and the If-Modified-Since HTTP header to determine if an object’s metadata has
  changed.

# Get a List of Objects If Metadata Has Changed

Use the Describe Global resource and the If-Modified-Since HTTP header to determine if an object’s metadata has changed.

You can include the If-Modified-Since header with a date in EEE, dd MMM yyyy HH:mm:ss z format when you use the [Describe Global](atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm "Lists the available objects and the associated metadata. This resource returns both custom and standard objects.") resource. If you do, response metadata is returned only if an available object’s metadata has changed since the provided date. If no metadata has been modified since the provided date, a 304 Not Modified status code is returned with no response body.

The following example assumes that no changes have been made to objects after March 23, 2015.

Example Describe Global request

/services/data/v66.0/sobjects

Example If-Modified-Since header used with request

If-Modified-Since: Tue, 23 Mar 2015 00:00:00 GMT

Example response body

No response body returned

Example response status code

```

```

If changes to an object were made after March 23, 2015, the response body contains metadata for all available objects. For an example, see [Get a List of Objects](atlas.en-us.api_rest.meta/api_rest/dome_describeGlobal.htm "Use the Describe Global resource to list the objects available in your org and available to the logged-in user. This resource also returns the org encoding, as well as maximum batch size permitted in queries.").

## Code Examples

```
HTTP/1.1 304 Not Modified
Date: Wed, 25 Jul 2015 00:05:46 GMT
```

## Related Topics

- Describe Global (atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm)
- Get a List of Objects (atlas.en-us.api_rest.meta/api_rest/dome_describeGlobal.htm)
