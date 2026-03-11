---
title: "Compliance Job Results (GET)"
domain: omnistudio
topic: compliance-job-results-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.628Z
keywords: [Compliance, Job, Results, GET]
---

# Compliance Job Results (GET)

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