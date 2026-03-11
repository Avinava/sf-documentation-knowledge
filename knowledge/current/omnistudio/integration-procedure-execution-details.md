---
title: "Integration Procedure Execution Details"
domain: omnistudio
topic: integration-procedure-execution-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.556Z
keywords: [Integration, Procedure, Execution, Details]
---

# Integration Procedure Execution Details

# Integration Procedure Execution Details

Output representation of the execution details of the integration procedure.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Error message if the execution of the integration procedure fails. | Small, 64.0 | 64.0 |
| response | String[] | List of responses for the execution of the integration procedures. | Small, 64.0 | 64.0 |
| status | String | Execution status of the integration procedure. Valid values are:Error—Execution has failed due to an error.Success—Execution is successful. | Small, 64.0 | 64.0 |