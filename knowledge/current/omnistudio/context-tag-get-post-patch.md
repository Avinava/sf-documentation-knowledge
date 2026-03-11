---
title: "Context Tag (GET, POST, PATCH)"
domain: omnistudio
topic: context-tag-get-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.687Z
keywords: [Context, Tag, GET, POST, PATCH, Note]
---

# Context Tag (GET, POST, PATCH)

# Context Tag (GET, POST, PATCH)

Query, create, and update context tag.

Resource

```

```

Example for GET

```

```

Example for POST

```

```

Example for PATCH

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

GET, POST, PATCH

Response body for GET

[Context Tag List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_tag_list.htm "Output representation of list of context tags.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

When the includeReferencedDefinitionTag query parameter is set to true in a GET request, the response will include the name of the context tag in the format ContextDeveloperName.tagName.

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextAttributeId | String | ID of the (parent) context attribute. | Required | 59.0 |
| contextNodeId | String | ID of the (parent) context node. | Required | 59.0 |
| contextTagId | String | ID of this Context tag. Required only for update. | Optional | 59.0 |
| name | String | Name of the context tag. | Required | 59.0 |

Response body for POST

[Context Tag List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_tag_list.htm "Output representation of list of context tags.")

Request body for PATCH

JSON example

```

```

Response body for PATCH

[Context Tag List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_tag_list.htm "Output representation of list of context tags.")