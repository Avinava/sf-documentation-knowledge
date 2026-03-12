---
title: "Decision Model Export Output"
domain: omnistudio
topic: decision-model-export-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.985Z
estimatedTokens: 149
keywords: [Decision, Model, Export, Output, representation, completed, DMN, Notation, export, request.]
---

# Decision Model Export Output

> Output representation of a completed DMN (Decision Model Notation)
      export request.

# Decision Model Export Output

Output representation of a completed DMN (Decision Model Notation) export request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Decision Model Export Error[] | List of errors corresponding to a failed export request. | Small, 58.0 | 58.0 |
| message | String | Response message from the completed export request. | Small, 58.0 | 58.0 |
| success | Boolean | Indicates whether the export request was successful (true) or not (false). | Small, 58.0 | 58.0 |

## Code Examples

```
{
   "message":"OK",
   "success":true,
   "errors":[
      {
         "errorCode":"BAD_REQUEST",
         "errorMessage":"We couldn’t find this record. Specify a valid ID for decisionModelEntityIds parameter.",
         "recordId":"0lNRO00000004fsdfAA"
      }
   ]
}
```

## Related Topics

- Decision
                  Model Export Error (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_model_export_error.htm)
