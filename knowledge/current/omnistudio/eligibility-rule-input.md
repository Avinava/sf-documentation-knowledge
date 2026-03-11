---
title: "Eligibility Rule Input"
domain: omnistudio
topic: eligibility-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.227Z
keywords: [Eligibility, Rule, Input]
---

# Eligibility Rule Input

# Eligibility Rule Input

Input representation details of eligibility rule associated with the decision table.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| condition​Criteria | String | Custom logic that's used to decide how the input fields are processed. | Required | 66.0 |
| conditionType | String | Condition logic that's used for input fields. | Required | 66.0 |
| decisionTableId | String | The unique identifier of the decision table that's associated with the eligibility rule. | Required | 66.0 |
| ruleValue | Eligibility Rule Value Input[] | Details of the rule value. | Required | 66.0 |
| source​ObjectName | String | Name of the source object associated with the decision table. | Required | 66.0 |
| sourceObject​RecordId | String | The unique identifier of the source object record. | Required | 66.0 |