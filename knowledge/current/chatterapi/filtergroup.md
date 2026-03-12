---
title: "filterGroup"
domain: chatterapi
topic: filtergroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.789Z
estimatedTokens: 867
keywords: [filterGroup, URL, specify, whether, small, medium, big, group, API, version, 29.0, later, include, exclude]
---

# filterGroup

> Use the filterGroup parameter in a request URL
or in a request body to specify whether to return a small, medium,
or big group of properties. The filterGroup property is available in API version 29.0 and later.

# filterGroup

Use the filterGroup parameter in a request URL or in a request body to specify whether to return a small, medium, or big group of properties. The filterGroup property is available in API version 29.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The filterGroup parameter is supported for JSON only.

Every property in every response body is assigned a group size.

-   Big—The default size. Includes every property in a response body, including those marked Big, Medium, and Small.
-   Medium—Includes properties marked Medium and Small.
-   Small—The smallest response size. Includes only properties marked Small.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The size assignments are visible only in the documentation. They aren’t visible in the response bodies.

When a request includes a filterGroup, the response body only includes properties that are part of the specified group.

Things to know about using filter groups:

-   The default filterGroup size is Big.
-   Each filter group size assigned to a property has an API version. In future API versions properties may move to different filter groups.
-   Filter groups affect all HTTP verbs except DELETE and HEAD.
-   You can use a filterGroup parameter on any request URL, including subrequests in a batch request body, unless otherwise stated.
-   You can use a filterGroup parameter in conjunction with either an include or an exclude filter parameter to change the set of properties returned. The resulting set is a union of the two sets.

## Using a filterGroup parameter with an include or exclude parameter

Requests can contain a filterGroup parameter and group size value, and either an include or an exclude filter parameter and value on the URL. This is also true for subrequests in a [generic batch request](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm "Create a request body with a batch of up to 25 subrequests and send them to the server in a single request to improve your application’s performance. The response bodies and HTTP statuses for each subrequest in the batch are returned within a single response body. Each subrequest counts against rate limits.").

When a request (or a subrequest) contains both a filterGroup parameter and an include parameter, the response always includes the properties specified by the include parameter.

When a request (or a subrequest) contains both a filterGroup parameter and an exclude parameter, the response always excludes the properties specified by the exclude parameter.

In this table, read a row from left to right to see whether the property is included in the response.

| include Filter Provided in Request | Property Provided in include Filter in Request | exclude Filter Provided in Request | Property Provided in exclude Filter in Request | filterGroup Provided in Request | Property Provided in filterGroup in Request | Property Included In Response |
| --- | --- | --- | --- | --- | --- | --- |
| Yes | No | No | No | No | No | No |
| Yes | Yes | No | No | Yes or No | Yes or No | Yes |
| No | No | Yes | No | No | No | Yes |
| No | No | Yes | No | Yes | No | No |
| No | No | Yes | Yes | Yes or No | Yes or No | No |
| No | No | No | No | Yes | No | No |
| No | No | No | No | Yes | Yes | Yes |
| Yes | Yes or No | Yes | Yes or No | Yes or No | Yes or No | Error (400) |

## Related Topics

- generic batch request (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm)
