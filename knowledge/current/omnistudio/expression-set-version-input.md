---
title: "Expression Set Version Input"
domain: omnistudio
topic: expression-set-version-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.285Z
keywords: [Expression, Set, Version, Input]
---

# Expression Set Version Input

# Expression Set Version Input

Input representation of an expression set version.

Root XML tag

<ExpressionSetVersionInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the version. | Required | 58.0 |
| description | String | Description of the version. | Optional | 58.0 |
| enabled | Boolean | Indicates whether the version is active (true) or inactive (false). | Required | 58.0 |
| endDate | String | Effective end date of the version. | Required | 58.0 |
| id | String | ID of expression set version. | Optional | 58.0 |
| name | String | Name of the version. | Required | 58.0 |
| rank | Integer | Rank of the version. | Optional | 58.0 |
| show​Expl​Externally | Boolean | Indicates whether the decision explanation is exposed to community users (true) or not (false). | Required | 58.0 |
| start​Date | String | Effective start date of the version. | Required | 58.0 |
| steps | Expression Set Version Step Input[] | List of steps in an expression set. | Optional | 58.0 |
| variables | Expression Set Version Variable Input[] | List of variables in an expression set. | Optional | 58.0 |
| version​Number | Integer | Version number of the expression set version. | Required | 58.0 |