---
title: "NetworkFeedResponseMetric"
domain: sfFieldRef
topic: networkfeedresponsemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.842Z
estimatedTokens: 475
keywords: [NetworkFeedResponseMetric, stores, date, time, question, posts, captures, creation, answer, marked, best, API, version, 51.0, later]
---

# NetworkFeedResponseMetric

> Represents an object that stores the date and time values of question posts. It
      captures information for question creation, answer creation, and when an answer is marked as
      best answer This object is available in API version 51.0 and later.

# NetworkFeedResponseMetric

Represents an object that stores the date and time values of question posts. It captures information for question creation, answer creation, and when an answer is marked as best answer This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NetworkFeedResponseMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_networkfeedresponsemetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BestCommentDateTime | Best Comment Date Time | datetime |  |  |  |  |
| BestCommentId | Feed Comment ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FeedItemCreatedById | Feed Item Created By ID | reference |  | 18 |  |  |
| FeedItemDateTime | Feed Item Date Time | datetime |  |  |  |  |
| FeedItemId | Feed Item ID | reference |  | 18 |  |  |
| FirstCommentDateTime | First Comment Date Time | datetime |  |  |  |  |
| FirstCommentId | Feed Comment ID | reference |  | 18 |  |  |
| Id | Network Feed Response Metric Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MarkedAsBestCommentDateTime | Marked As Best Comment Date Time | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NetworkId | Network ID | reference |  | 18 |  |  |
| ParentRecordId | Parent Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
