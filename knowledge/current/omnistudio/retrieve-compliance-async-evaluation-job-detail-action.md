---
title: "Retrieve Compliance Async Evaluation Job Detail Action"
domain: omnistudio
topic: retrieve-compliance-async-evaluation-job-detail-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.493Z
keywords: [Retrieve, Compliance, Async, Evaluation, Job, Detail, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Retrieve Compliance Async Evaluation Job Detail Action

# Retrieve Compliance Async Evaluation Job Detail Action

Get job details for an asynchronous compliance evaluation.

This action is available in API version 65.0 and later.

## Special Access Rules

To use this action, you must have the Compliance User permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/retrieveCmplAsyncEvalJobDtl

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| compliance​AsyncEvaluation​JobId | TypestringDescriptionRequired. ID of the asynchronous compliance evaluation job. |
| offsetSize | TypeintegerDescriptionNumber of records after which you want to search records. |
| pageSize | TypeintegerDescriptionNumber of records to display on a single page. |

## Outputs

| Output | Details |
| --- | --- |
| retrieveCmpl​JobDetail​ActionResponse | TypeApex-definedDescriptionAn Apex ConnectApi.ComplianceJobStatusRepresentation record that contains the details and results of the compliance asynchronous evaluation job. |

## Example

POST

This example shows a sample request for the Retrieve Compliance Async Evaluation Job Detail action.

```

```

This is a sample request to call this invocable action from Apex code.

```

```

This example shows a sample response for the Retrieve Compliance Async Evaluation Job Detail action.

```

```