---
title: "Decision Matrix Options Input"
domain: omnistudio
topic: decision-matrix-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.244Z
estimatedTokens: 137
keywords: [Decision, Matrix, Options, Input, representation, look]
---

# Decision Matrix Options Input

> Input representation of the options used to look up a decision
      matrix.

# Decision Matrix Options Input

Input representation of the options used to look up a decision matrix.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | The date from when a decision matrix version comes into effect. The date format is yyyy-mm-dd’T’hh:mm:ss’Z. | Optional | 55.0 |
| useDatesOnly | String | Specifies that only the date portion (yyyy-mm-dd) of the value of the effectiveDate field be used at the time of execution. | Optional | 55.0 |
