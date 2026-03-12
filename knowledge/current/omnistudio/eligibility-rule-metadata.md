---
title: "Eligibility Rule Metadata"
domain: omnistudio
topic: eligibility-rule-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.094Z
estimatedTokens: 167
keywords: [Eligibility, Rule, Metadata, Output, representation, details, get, eligibility, rule, metadata, request.]
---

# Eligibility Rule Metadata

> Output representation details of get eligibility rule metadata request.

# Eligibility Rule Metadata

Output representation details of get eligibility rule metadata request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| disQualificationDecisionTableDetails | Eligibility Rule Details[] | Eligibility rule details for disqualification. | Small, 66.0 | 66.0 |
| message | String | Additional information in the response. | Small, 66.0 | 66.0 |
| qualificationDecisionTableDetails | Eligibility Rule Details[] | Eligibility rule details for qualification. | Small, 66.0 | 66.0 |
| status | String | Status of the request. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "message": "Records fetched successfully",
  "status": "success",
  "qualificationDecisionTableDetails": [
    {
      "sourceCriteria": [],
      "sourceObject": "ProductQualification",
      "sourceType": "SingleSobject",
      "status": "Active",
      "usageType": "ProductQualification",
      "cellLevelCriteriaEnabled": true,
      "conditionCriteria": "1 AND 2 AND 3 AND 4 AND 5 AND 6 AND 7 AND 8",
      "conditionType": "All",
      "description": "Product Qualification Decision Table",
      "decisionTableName": "ProductQualificationDT",
      "decisionTableId": "0lDZ80000004CAN",
      "parameters": [
        {
          "columnMapping": "ProductId",
          "dataType": "String",
          "fieldName": "ProductId",
          "isRequired": true,
          "operator": "Equals",
          "sequence": 1,
          "sourceObjectLookUp": "Product2",
          "usage": "Input"
        }
      ]
    }
  ],
  "disQualificationDecisionTableDetails": [
    {
      "sourceCriteria": [],
      "sourceObject": "ProductDisQualification",
      "sourceType": "SingleSobject",
      "status": "Active",
      "usageType": "ProductDisQualification",
      "cellLevelCriteriaEnabled": true,
      "conditionCriteria": "1 AND 2 AND 3 AND 4 AND 5 AND 6 AND 7 AND 8",
      "conditionType": "All",
      "description": "Product DisQualification Decision Table",
      "decisionTableName": "ProductDisQualificationDT",
      "decisionTableId": "0lDZ80000004CAN",
      "parameters": [
        {
          "columnMapping": "ProductId
```

## Related Topics

- Eligibility Rule Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_eligibility_rule_details.htm)
