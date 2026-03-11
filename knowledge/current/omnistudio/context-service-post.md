---
title: "Context Service (POST)"
domain: omnistudio
topic: context-service-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.696Z
keywords: [Context, Service, POST]
---

# Context Service (POST)

# Context Service (POST)

Create new context records by submitting metadata and associated JSON data. After validating the data, the system generates a new context ID. Context objects created using this API apply only to a single request. They cannot be used to pass data across multiple requests.

Resource

```

```

Example

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| data | String | Payload containing context-specific information. | Required | 59.0 |
| metadata | Context MetaData Input | Metadata information about context. | Required | 59.0 |

Response body for POST

[Context Info](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_info.htm "Output representation containing detailed information about a context.")