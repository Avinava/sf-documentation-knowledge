---
title: "Get Object Metadata Changes"
domain: rest-api
topic: get-object-metadata-changes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:25.821Z
keywords: [Get, Object, Metadata, Changes]
---

# Get Object Metadata Changes

# Get Object Metadata Changes

Use the sObject Describe resource and the If-Modified-Since HTTP header to determine if object metadata has changed.

You can include the If-Modified-Since header with a date in EEE, dd MMM yyyy HH:mm:ss z format when you use the [sObject Describe](atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm "Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.") resource. If you do, response metadata will only be returned if the object metadata has changed since the provided date. If the metadata has not been modified since the provided date, a 304 Not Modified status code is returned, with no response body.

The following example assumes that no changes, such as new custom fields, have been made to the Merchandise\_\_c object after July 3rd, 2013.

Example sObject Describe request

```

```

Example response body

No response body returned

Example response status code

```

```

If there were changes to Merchandise\_\_c made after July 3rd, 2013, the response body would contain the metadata for Merchandise\_\_c. See [Get Field and Other Metadata for an Object](atlas.en-us.api_rest.meta/api_rest/dome_sobject_describe.htm "Use the *** resource to retrieve all the metadata for an object, including information about each field, URLs, and child relationships.") for an example.