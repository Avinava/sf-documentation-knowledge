---
title: "Compliance Job Results (GET)"
domain: omnistudio
topic: compliance-job-results-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.849Z
estimatedTokens: 230
keywords: [Compliance, Job, Results]
---

# Compliance Job Results (GET)

> Get the compliance job results.

# Compliance Job Results (GET)

Get the compliance job results.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

GET

Path parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| jobId | String | ID of the compliance evaluation job to get the details for. | Required | 65.0 |

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| offset | Integer | Number of records skipped before returning results. | Optional | 65.0 |
| pageSize | Integer | Number of results per page. | Optional | 65.0 |

Response body for GET

[Compliance Job Status](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_job_status.htm "Output representation for the details of the compliance job.")

## Code Examples

```
/connect/compliance/jobs/jobId
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/compliance/jobs/YYx123456789012345
```

## Related Topics

- Compliance Job Status (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_job_status.htm)
