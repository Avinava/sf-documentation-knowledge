---
title: "Compliance Procedure Evaluation Info Input"
domain: omnistudio
topic: compliance-procedure-evaluation-info-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.092Z
keywords: [Compliance, Procedure, Evaluation, Info, Input]
---

# Compliance Procedure Evaluation Info Input

# Compliance Procedure Evaluation Info Input

Input representation for evaluating a compliance procedure.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessContext | Compliance Procedure Business Context Input[] | List of parameter names and parameter values that match the validation procedure parameters.You can specify up to 10 business context parameters in the businessContext array. | Required | 65.0 |
| inContextOf | String | User-provided key to store logs.Maximum length is 20 characters. | Required | 64.0 |
| transactionKey | String | User-provided transaction key for logging and tracking procedure evaluations originating from external systems.Maximum length is 45 characters. | Optional | 64.0 |