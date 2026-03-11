---
title: "Compliance Procedure Evaluation Input"
domain: omnistudio
topic: compliance-procedure-evaluation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.094Z
keywords: [Compliance, Procedure, Evaluation, Input]
---

# Compliance Procedure Evaluation Input

# Compliance Procedure Evaluation Input

Input representation details of a compliance evaluation request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessOperations​Process | String | API name of the business operations process for the evaluation. | Optional | 65.0 |
| evaluations | Compliance Procedure Evaluation Info Input[] | Business context to be evaluated.The synchronous evaluation API supports only one business context per validation, whereas the asynchronous evaluation API supports a list of business contexts per validation. Each business context can contain multiple sets of paramName and paramValue. | Required | 65.0 |