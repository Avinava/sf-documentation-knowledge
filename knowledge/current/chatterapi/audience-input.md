---
title: "Audience Input"
domain: chatterapi
topic: audience-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.020Z
estimatedTokens: 286
keywords: [Audience, Input]
---

# Audience Input

> An audience.

# Audience Input

An audience.

Root XML tag

<audience>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Audience Criterion Input[] | List of audience criteria to update or add. An audience can have up to 100 criteria. | Required when creating an audienceOptional when updating an audience | 47.0 |
| customFormula | String | Custom formula for the audience criteria. For example, (1 AND 2) OR 3. | Required when creating an audience with the formulaFilterType set to CustomLogicMatchesOptional, otherwise | 47.0 |
| formulaFilter​Type | String | Formula filter type for the personalization audience. Values are:AllCriteriaMatch—All audience criteria are true (AND operation).AnyCriterionMatches—Any audience criterion is true (OR operation).CustomLogicMatches—Audience criteria match the custom formula (for example, (1 AND 2) OR 3). | Required when creating an audienceOptional when updating an audience | 47.0 |
| name | String | Name of the audience. | Required when creating an audienceOptional when updating an audience | 47.0 |

## Code Examples

```
{
   "criteria": [
      {
      "criterion": [
         {
         "entityType": "User",
         "fieldValue": "60005500",
         "entityField": "Contact.Account.AnnualRevenue"
         },
         {
         "entityType": "User",
         "fieldValue": "6000557700",
         "entityField": "Contact.Account.AnnualRevenue"
         }
      ],
      "criterionNumber": 1,
      "criterionOperator": "Equal",
      "criterionType": "FieldBased"
      },
      {
      "criterion": [
         {
         "permission": "AssignTopics", // give permission id in case of custom permission
         "isEnabled": "true"
         }
      ],
      "criterionNumber": 2,
      "criterionOperator": "Equal",
      "criterionType": "Permission"
      },
      {
      "criterion": [
         {
         "domainId": "0I4...", // give domain id 
         },
         {
         "domainId": "0I4...", // give domain id 
         }
      ],
      "criterionNumber": 3,
      "criterionOperator": "Equal",
      "criterionType": "Domain"
      },
      {
      "criterion": [
         {
         "profileId": "00e...", // give profile id 
         },
         {
         "profileId": "00e...", // give profile id 
         }
      ],
      "criterionNumber": 4,
      "criterionOperator": "Equal",
      "criterionType": "Profile"
      },
      {
      "criterion": [
         {
         "country": "US",
         "subdivision" : "California",
         "city" : "LA"
         },
         {
         "country": "US",
         "subdivision" : "California",
         "city" : "SF"
         },
      ],
      "criterionNumber": 5,
      "criterionOperator": "Equal",
      "criterionType": "GeoLocation"
      },
      {
      "criterion": [
         {
         "audienceId": "6Au...": // give audience id 
         }
      ]
      "criterionNumber": 6,
      "criterionOperator": "Equal",
      "criterionType": "Audience"
      }
    ],
   "customFormula": "(1 OR (2 AND 3)) AND 4 AND 5 AND 6",
   "formulaFilterType": "CustomLogicMatches",
   "name": "CreateAudienceExample"
}
```

## Related Topics

- Audience Criterion Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_audience_criteria_input.htm)
