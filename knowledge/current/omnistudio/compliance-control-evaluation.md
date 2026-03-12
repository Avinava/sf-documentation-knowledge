---
title: "Compliance Control Evaluation"
domain: omnistudio
topic: compliance-control-evaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.691Z
estimatedTokens: 288
keywords: [Compliance, Control, Evaluation, Output, representation, details, compliance, control, evaluation.]
---

# Compliance Control Evaluation

> Output representation details of a compliance control evaluation.

# Compliance Control Evaluation

Output representation details of a compliance control evaluation.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| compliance​ControlId | String | ID of the compliance control. | Big, 65.0 | 65.0 |
| complianceControl​VersionId | String | ID of the compliance control version. | Big, 65.0 | 65.0 |
| compliance​Message | String | Reason a control passes or fails a compliance check. | Big, 65.0 | 65.0 |
| errorId | String | ID of the error that's associated with the compliance control during evaluation. | Big, 65.0 | 65.0 |
| errorMessage | String | Message for the error that's associated with the compliance control during evaluation. | Big, 65.0 | 65.0 |
| isCompliant | Boolean | Indicates whether the control has passed the compliance check (true) or not (false). | Big, 65.0 | 65.0 |
| status | String | Compliance control status. Valid values are:ErrorSkipped—If a compliance control version is in Retired state, the API ignores the control during the compliance evaluation request.Success | Big, 65.0 | 65.0 |

## Code Examples

```
[
      {
        "complianceControlId": "18QXX0001234501",
        "complianceControlVersionId": "18tXX0001234501",
        "status": "SUCCESS",
        "isCompliant": true,
        "complianceMessage": "Control A passed",
        "errorId": [],
        "errorMessage": []
      }
    ]
```
