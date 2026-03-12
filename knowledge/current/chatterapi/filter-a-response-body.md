---
title: "Filter a Response Body"
domain: chatterapi
topic: filter-a-response-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.874Z
estimatedTokens: 307
keywords: [Filter, bodies, Connect, REST, API]
---

# Filter a Response Body

> Filter response bodies in Connect REST API.

# Filter a Response Body

Filter response bodies in Connect REST API.

Resource

All

HTTP method

GET

Request parameters

exclude, include, and filterGroup

Use the exclude and include query parameters to filter a response body when making a request. The query value is a bar (|) delimited list of properties. URL encode the bar as %7C. Use a forward slash (/) before each property name.

Use the filterGroup query parameter to specify whether to return a Big, Medium, or Small response body. Every property in every response body is assigned one of these group sizes.

Request parameter example

This News Feed URL resource:

```

```

For a detailed list of rules and examples, see [Specify Response Sizes](atlas.en-us.chatterapi.meta/chatterapi/connect_returns_filters.htm "Use filter parameters to return only the data the application needs. To specify the response size by group (big, medium, or small), use filterGroup as a request parameter or in a request body. In addition, to exclude or include specific properties, use either exclude or include as a request parameter or in a request body.").

Returns

A filtered response body

The request parameter example above returns this for the Feed response body:

```

```

## Code Examples

```
/chatter/users/me?include=/aboutMe%7C/address
```

```
{
   "aboutMe": "Salesforce Administrator and Citizen Developer",
   "address": {
      "city": "San Francisco",
      "country": "US",
      "formattedAddress": "1 Market St
San Francisco, CA 94105
US",
      "state": "CA",
      "street": "1 Market St",
      "zip": "94105"
   }
}
```

## Related Topics

- Specify Response Sizes (atlas.en-us.chatterapi.meta/chatterapi/connect_returns_filters.htm)
