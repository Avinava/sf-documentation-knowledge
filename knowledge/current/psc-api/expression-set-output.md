---
title: "Expression Set Output"
domain: psc-api
topic: expression-set-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.994Z
estimatedTokens: 330
keywords: [Expression, Output, representation]
---

# Expression Set Output

> Output representation of the expression set
      create,
      update and delete request.

# Expression Set Output

Output representation of the expression set create, update and delete request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| api​Name | String | Unique name of the expression set. | Small, 58.0 | 58.0 |
| context​Definitions | Context ​Definition Output | List of context definitions in an expression set. | Small, 58.0 | 58.0 |
| description | String | Description of the expression set. | Small, 58.0 | 58.0 |
| error | Expression Set​ Error | Details of the error message in the case of failure of the expression set create request. | Small, 58.0 | 58.0 |
| id | String | ID of the expression set. | Small, 58.0 | 58.0 |
| name | String | Name of the expression set. | Small, 58.0 | 58.0 |
| status | String | Response status of the expression set.Valid values are:FailedSuccess | Small, 58.0 | 58.0 |
| usage​Type | String | Usage type of the expression set.Valid value is Bre. The default value is Bre.When Business Rules Engine is enabled for a Salesforce org, the default value is Bre. Other usage types may be available to you depending on your industry solution and permission sets. | Small, 58.0 | 58.0 |
| versions | Expression Set​ Version Output | List of the expression set versions. | Small, 58.0 | 58.0 |

## Related Topics

- Context ​Definition Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_context_definition_output.htm)
- Expression Set​ Error (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_error.htm)
- Expression Set​ Version Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_version_output.htm)
