---
title: "Engagement Signal"
domain: chatterapi
topic: engagement-signal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.561Z
estimatedTokens: 368
keywords: [Engagement, Signal, creating]
---

# Engagement Signal

> Response body for an Engagement Signal.

# Engagement Signal

Response body for an Engagement Signal.

JSON example

This example shows a sample response to create an engagement signal.

```

```

This example shows a sample response to get a single engagement signal.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The platform object ID of the Engagement Signal. | Small, 63.0 | 63.0 |
| name | String | The API name of the Engagement Signal. | Small, 63.0 | 63.0 |
| label | String | The label of the Engagement Signal. | Small, 63.0 | 63.0 |
| objectName | String | The API name of the Content Object associated with the Engagement Signal. | Small, 63.0 | 63.0 |
| dataSpaceName | String | The API name of the Data Space associated with the Engagement Signal. | Small, 63.0 | 63.0 |
| timestampField | Field | DateTime field on the content object DMO or its related DMO. | Small, 63.0 | 63.0 |
| userIdField | Field | A field on the content object DMO or its related DMO. | Small, 63.0 | 63.0 |
| uniqueIdentifier | Field | A field on the content object DMO or its related DMO. | Small, 63.0 | 63.0 |
| catalogIdField | Field | A field on the content object DMO or its related DMO. | Small, 63.0 | 63.0 |
| distinctFields | Field[] | Fields on the content object DMO or its related DMOs. | Big, 63.0 | 63.0 |
| filterGroups | Engagement Signal Filter Group[] | List of filter groups. | Big, 63.0 | 63.0 |
| metrics | Engagement Signal Metric[] | List of metrics. | Medium, 63.0 | 63.0 |
| parameters | Engagement Signal Parameter[] | List of parameters. | Medium, 63.0 | 63.0 |

## Code Examples

```
{
  "name": "EmailClicks",
  "label": "Email Clicks",
  "objectName": "Email_Engagement__dlm",
  "dataSpaceName": "default",
  "timestampField": { "objectName": "Email_Engagement__dlm", "name": "CreatedDate__c" },
  "userIdField": { "objectName": "Email_Engagement__dlm", "name": "IndividualId__c" },
  "uniqueIdentifierField": { "objectName": "Email_Engagement__dlm", "name": "Id__c" },
  "catalogIdField": { "objectName": "Email_Engagement__dlm", "name": "CampaignId__c" },
  "filterGroups": {
    "filterGroups": [
      {
        "conjunctiveOperator": "And",
        "filters": [
          {
            "action": "Includes",
            "operator": "Equals",
            "field": { "objectName": "Email_Engagement__dlm", "name": "EngagementTypeId__c" },
            "values": ["CLICK"]
          }
        ]
      }
    ]
  },
  "metrics": {
    "metrics": [
      {
        "name": "Clicks_Count",
        "aggregateFunction": "Count",
        "field": { "objectName": "Email_Engagement__dlm", "name": "Id__c" }
      }
    ]
  }
}
```

```
{
  "id": "1H0xx0000004CAeCAM",
  "name": "EmailClicks",
  "label": "Email Clicks",
  "objectName": "Email_Engagement__dlm",
  "dataSpaceName": "default",
  "timestampField": {
    "objectName": "Email_Engagement__dlm",
    "name": "CreatedDate__c",
    "label": "Created Date"
  },
  "userIdField": {
    "objectName": "Email_Engagement__dlm",
    "name": "IndividualId__c",
    "label": "Individual"
  },
  "uniqueIdentifier": {
    "objectName": "Email_Engagement__dlm",
    "name": "Id__c",
    "label": "Id"
  },
  "catalogIdField": {
    "objectName": "Email_Engagement__dlm",
    "name": "CampaignId__c",
    "label": "Campaign"
  },
  "filterGroups": [
    {
      "conjunctiveOperator": "And",
      "filters": [
        {
          "action": "Includes",
          "operator": "Equals",
          "field": {
            "objectName": "Email_Engagement__dlm",
            "name": "EngagementTypeId__c",
            "label": "Engagement Type"
          },
          "values": [
            "CLICK"
          ]
        }
      ]
    }
  ],
  "metrics": [
    {
      "id": "1H0xx0000004CAeCAZ",
      "name": "Clicks_Count",
      "aggregateFunction": "Count",
      "field": {
        "objectName": "Email_Engagement__dlm",
        "name": "Id__c",
        "label": "Id"
      }
    }
  ]
}
```

```
{
  "id": "1H0xx0000004CAeCAM",
  "name": "EmailClicks",
  "label": "Email Clicks",
  "objectName": "Email_Engagement__dlm",
  "dataSpaceName": "default"
}
```

## Related Topics

- Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_field_input.htm)
- Engagement Signal Filter Group Collection
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_filter_group_input.htm)
- Engagement Signal Metric Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_metric_collection_input.htm)
- Engagement Signal Parameter Collection
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_parameter_collection_input.htm)
- Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_field.htm)
- Engagement Signal Filter Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_filter_group.htm)
- Engagement Signal Metric (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_metric.htm)
- Engagement Signal Parameter (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_parameter.htm)
