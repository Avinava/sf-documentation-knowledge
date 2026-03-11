---
title: "Expression Set (PATCH)"
domain: omnistudio
topic: expression-set-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.609Z
keywords: [Expression, Set, PATCH]
---

# Expression Set (PATCH)

# Expression Set (PATCH)

Endpoint to update expression set.

Resource

```

```

Resource Example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

PATCH

Request body for PATCH

Root XML tag

<ExpressionSetInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | Unique name of the expression set. | Required | 58.0 |
| context​Definitions | Context Definition Input | List of context definitions in an expression set. | Optional | 58.0 |
| description | String | Description of the expression set. | Optional | 58.0 |
| name | String | Name of the expression set. | Required | 58.0 |
| usage​Type | String | Usage type of the expression set.Valid value is Bre. The default value is Bre.When Business Rules Engine is enabled for a Salesforce org, the default value is Bre. Other usage types may be available to you depending on your industry solution and permission sets. | Required | 58.0 |
| versions | Expression Set Version Input[] | List of the expression set versions. | Optional | 58.0 |

Response body for PATCH

[Expression Set Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_expression_set_output.htm "Output representation of the expression set create, update and delete request.")