---
title: "Personalization Audiences"
domain: chatterapi
topic: personalization-audiences
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.210Z
estimatedTokens: 803
keywords: [Personalization, Audiences, assigned, match, user, context, audience]
---

# Personalization Audiences

> Get a list of assigned audiences that match the user context. Create
      an audience.

# Personalization Audiences

Get a list of assigned audiences that match the user context. Create an audience.

Resource

```

```

Available version

47.0

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| domain | String | Name of the user’s Salesforce custom domain. If not specified, no audiences with domain criteria are returned. | Optional | 47.0 |
| includeAudience​Criteria | Boolean | Specifies whether to include audience criteria (true) or not (false). If unspecified, defaults to false. | Optional | 47.0 |
| ipAddress | String | IP address of the user. If not specified, no audiences with location criteria are returned. | Optional | 47.0 |
| publishStatus | String | Publish status of the audience. Values are:DraftLiveIf not specified, the default is Live. | Optional | 47.0 |
| recordId | String | ID of the record for field based criteria. If not specified, all applicable audiences with field based criteria are returned. | Optional | 51.0 |
| targetTypes | String[] | Comma-separated list of target types to filter the results. Supported values include:ExperienceVariation (version 47.0 and later)Custom object API names, such as CustomObjectName__c (version 47.0 and later)NavigationLinkSet (version 49.0 and later)Topic (version 49.0 and later)CollaborationGroup (version 49.0 and later)KnowledgeArticle (version 49.0 and later)ContentDocument (version 49.0 and later)ManagedContent (version 49.0 and later)Report (version 49.0 and later)Dashboard (version 49.0 and later)If not specified, all target types are returned. | Optional | 47.0 |
| userId | String | ID of the user. If not specified, the default is the ID of the context user. | Optional | 47.0 |

Response body for GET

[Audience Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience_collection.htm "Collection of audiences.")

Request body for POST

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

Response body for POST

[Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience.htm "An audience.")

## Code Examples

```
/connect/communities/communityId/personalization/audiences
```

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

- Audience Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience_collection.htm)
- Audience Criterion Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_audience_criteria_input.htm)
- Audience (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience.htm)
