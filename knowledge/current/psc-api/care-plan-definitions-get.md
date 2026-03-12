---
title: "Care Plan Definitions (GET)"
domain: psc-api
topic: care-plan-definitions-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.487Z
estimatedTokens: 167
keywords: [Care, Plan, Definitions, Retrieve, definition, record, goal, benefits]
---

# Care Plan Definitions (GET)

> Retrieve details about a specified definition record that is related
      to goal definition and the benefits of a care plan.

# Care Plan Definitions (GET)

Retrieve details about a specified definition record that is related to goal definition and the benefits of a care plan.

Resource

```

```

Resource example

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

You can either specify the benefit ID or goal definition ID.

```

```

Available version

56.0

Requires Chatter

No

HTTP methods

GET

Response body for GET

[Care Plan Definition Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan_definition_output.htm "Output representation of the care plan definition record and its related goal definition and benefits.")

## Code Examples

```
/connect/careplan/definitions/${definitionId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/​connect/careplan/definitions/0jiRM00000000JwYAI
```

## Related Topics

- Care Plan Definition
            Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan_definition_output.htm)
