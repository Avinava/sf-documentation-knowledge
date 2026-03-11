---
title: "Compliance Job Status"
domain: omnistudio
topic: compliance-job-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.136Z
keywords: [Compliance, Job, Status]
---

# Compliance Job Status

# Compliance Job Status

Output representation for the details of the compliance job.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| compliance​ProcedureId | String | ID of the compliance procedure. | Big, 65.0 | 65.0 |
| compliance​Procedure​VersionId | String | ID of the compliance procedure version. | Big, 65.0 | 65.0 |
| failed​EvaluationCount | Integer | Number of evaluations that failed. | Big, 65.0 | 65.0 |
| jobId | String | Job ID that's associated with the async evaluation of the compliance procedure. | Big, 65.0 | 65.0 |
| results | Compliance Procedure Evaluation[] | List of evaluation results for the compliance procedure. | Big, 65.0 | 65.0 |
| successful​EvaluationCount | Integer | Number of evaluations that are successful. | Big, 65.0 | 65.0 |
| total​EvaluationCount | Integer | Total number of evaluations. | Big, 65.0 | 65.0 |