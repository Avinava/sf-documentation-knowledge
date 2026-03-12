---
title: "FlexQueueItem"
domain: sfFieldRef
topic: flexqueueitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.215Z
estimatedTokens: 241
keywords: [FlexQueueItem, asynchronous, Apex, job, flex, queue, position, AsyncApexJob, API, version, 36.0, later]
---

# FlexQueueItem

> Represents an asynchronous Apex job in the Apex flex
    queue. Provides information about the job type and flex queue position of the AsyncApexJob.
  This object is available in API version 36.0 and later.

# FlexQueueItem

Represents an asynchronous Apex job in the Apex flex queue. Provides information about the job type and flex queue position of the AsyncApexJob. This object is available in API version 36.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlexQueueItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flexqueueitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AsyncApexJobId | Apex Job ID | reference |  | 18 |  |  |
| FlexQueueItemId | Flex Queue Item Id | string |  | 255 |  |  |
| Id | Flex Queue Item Id | id |  | 18 |  |  |
| JobPosition | Job Position | int | 9 |  |  |  |
| JobType | Job Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
