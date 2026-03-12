---
title: "BatchApexErrorEvent"
domain: sfFieldRef
topic: batchapexerrorevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.452Z
estimatedTokens: 336
keywords: [BatchApexErrorEvent, event]
---

# BatchApexErrorEvent

> An event related to the BatchApexErrorEvent object.

# BatchApexErrorEvent

An event related to the BatchApexErrorEvent object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BatchApexErrorEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_batchapexerrorevent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AsyncApexJobId | Async Apex Job ID | string |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DoesExceedJobScopeMaxLength | Item Values Max Length Exceeded | boolean |  |  |  |  |
| EventUuid | Event UUID For Platform Event | string |  | 36 |  |  |
| ExceptionType | Exception Type Thrown | string |  | 200 |  |  |
| JobScope | Items In Failed Batch | textarea |  | 40000 |  |  |
| Message | Exception Message | string |  | 5000 |  |  |
| Phase | Phase | string |  | 8 |  |  |
| ReplayId | Replay ID For Platform Event | string |  | 1000 |  |  |
| RequestId | Jetty Request ID | string |  | 18 |  |  |
| StackTrace | Error Stack Trace | string |  | 5000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
