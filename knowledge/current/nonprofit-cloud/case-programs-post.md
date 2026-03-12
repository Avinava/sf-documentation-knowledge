---
title: "Case Programs (POST)"
domain: nonprofit-cloud
topic: case-programs-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.801Z
estimatedTokens: 154
keywords: [Case, Programs, POST]
---

# Case Programs (POST)

> Create case programs.

# Case Programs (POST)

Create case programs.

Resource

```

```

Example URI

```

```

Available version

57.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| caseProgramRequest | String[] | The list of case programs to be added. | Required | 57.0 |

Response body for POST

[Case Programs Output](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_case_programs_output.htm "Output representation of the request to add case programs to a benefit session.")

## Code Examples

```
/connect/program-mgmt/case-programs/${caseId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect​​/program-mgmt/case-programs/${caseId}
```

```
{
  "caseProgramRequest": {
    "programIds": [
      "11Wxx0000004F0WEAU",
      "11Wxx0000004F0WEBQ"
    ]
  }
}
```

## Related Topics

- Case Programs Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_case_programs_output.htm)
