---
title: "Connect REST API Request Bodies"
domain: chatterapi
topic: connect-rest-api-request-bodies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.900Z
estimatedTokens: 153
keywords: [Connect, REST, API, Bodies, perform, POST, PATCH, PUT, pass, query, formatted, either, XML, JSON, chapter]
---

# Connect REST API Request Bodies

> To perform a POST, PATCH, or PUT request, pass query parameters
or create a request body formatted in either XML or JSON. This chapter
lists the request bodies. The query parameters are listed with each
resource.

# Connect REST API Request Bodies

To perform a POST, PATCH, or PUT request, pass query parameters or create a request body formatted in either XML or JSON. This chapter lists the request bodies. The query parameters are listed with each resource.

To create a JSON request body, specify the properties of the request body in JSON format.

This is an example of a Comment request body.

```

```

If a request body is top-level, it has a root XML tag listed. To create an XML request body, nest the properties as XML tags inside the root XML tag.

This is the same Connect request body in XML format:

```

```

## Code Examples

```
{
	"body" : "Let's look for a new solution."
}
```

```
<comment>
	<body>Let's look for a new solution.</body>
</comment>
```
