---
title: "Context Attribute (POST, PATCH)"
domain: omnistudio
topic: context-attribute-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.643Z
keywords: [Context, Attribute, POST, PATCH]
---

# Context Attribute (POST, PATCH)

# Context Attribute (POST, PATCH)

Create a list of context attributes.

Resource

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

POST, PATCH

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextAttributeId | String | ID of the attribute. | Required | 59.0 |
| dataType | String | Data type of the attribute. | Required | 59.0 |
| domainSet | String | Comma separated node names referenced by this attribute. | Optional | 59.0 |
| fieldType | String | Field type of the attribute. | Required | 59.0 |
| isKey | Boolean | Specifies if it used for transposable feature (true) or not (false). | Optional | 59.0 |
| isValue | Boolean | Specifies if it used for transposable feature (true) or not (false). | Optional | 59.0 |
| name | String | Name of the attribute. | Required | 59.0 |
| tags | Context Tag Input[] | List of tags for the attribute. | Optional | 59.0 |

Response body for POST

[Context Attribute List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_list.htm "Output representation of list of context attributes.")

Request body for PATCH

JSON example

```

```

Response body for PATCH

[Context Attribute List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_list.htm "Output representation of list of context attributes.")