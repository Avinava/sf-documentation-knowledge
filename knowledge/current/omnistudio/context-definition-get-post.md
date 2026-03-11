---
title: "Context Definition (GET, POST)"
domain: omnistudio
topic: context-definition-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.651Z
keywords: [Context, Definition, GET, POST]
---

# Context Definition (GET, POST)

# Context Definition (GET, POST)

Create a context definition, clone an existing context definition, extend a standard definition (file based definition) or to persist entire context definition.

Resource

```

```

Example for GET

```

```

Example for POST

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

GET, POST

Response body for GET

[Context Definition List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_list.htm "Output representation of list of context definitions.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextTtl | Integer | Time to live (TTL) of context. | Optional | 59.0 |
| description | String | Short description of context definition. | Optional | 59.0 |
| developerName | String | Developer name. | Required | 59.0 |
| endDate | String | End date till context definition is valid. | Optional | 59.0 |
| isActive | Boolean | Specifies whether context is active (true) or not (false). | Optional | 59.0 |
| name | String | Name of the context definition. | Required | 59.0 |
| payload | String | JSON payload containing all the definitions and mappings. | Optional | 59.0 |
| sourceDefinitionId | String | Source context definition ID. | Optional | 59.0 |
| startDate | String | Start date from when context definition is valid. | Required | 59.0 |

Response body for POST

[Context Definition Information](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_definition_info.htm "Output representation of context definition information.")