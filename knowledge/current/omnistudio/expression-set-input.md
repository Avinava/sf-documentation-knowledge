---
title: "Expression Set Input"
domain: omnistudio
topic: expression-set-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.276Z
keywords: [Expression, Set, Input]
---

# Expression Set Input

# Expression Set Input

Input representation of the expression set create and update request.

Root XML tag

<ExpressionSetInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | Unique name of the expression set. | Required | 58.0 |
| context​Definitions | Context Definition Input | List of context definitions in an expression set. | Optional | 58.0 |
| description | String | Description of the expression set. | Optional | 58.0 |
| name | String | Name of the expression set. | Required | 58.0 |
| usage​Type | String | Usage type of the expression set.Valid value is Bre. The default value is Bre.When Business Rules Engine is enabled for a Salesforce org, the default value is Bre. Other usage types may be available to you depending on your industry solution and permission sets. | Required | 58.0 |
| versions | Expression Set Version Input[] | List of the expression set versions. | Optional | 58.0 |