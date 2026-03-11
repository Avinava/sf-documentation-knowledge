---
title: "Expression Set (POST)"
domain: omnistudio
topic: expression-set-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.585Z
keywords: [Expression, Set, POST]
---

# Expression Set (POST)

# Expression Set (POST)

Creates an expression set in Business Rules Engine. An expression set performs a series of calculations by using lookup tables and user-defined variables and constants.

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

POST

Request body for POST

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

Response body for POST

[Expression Set Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_expression_set_output.htm "Output representation of the expression set create, update and delete request.")