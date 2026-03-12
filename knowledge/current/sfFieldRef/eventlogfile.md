---
title: "EventLogFile"
domain: sfFieldRef
topic: eventlogfile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.511Z
estimatedTokens: 449
keywords: [EventLogFile, event, log, files, monitoring, product, gathers, Salesforce, org’s, operational, events, analyze, usage, trends, user]
---

# EventLogFile

> Represents event log files for event monitoring. The event monitoring
   product gathers information about your Salesforce org’s operational events, which you can use to
   analyze usage trends and user behavior. This object is available in API version 32.0 and
  later. The Interval and Sequence fields are available
  only in API version 37.0 and later.

# EventLogFile

Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EventLogFile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiVersion | API Version | double |  |  | 18 | 1 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventType | Event Type | picklist |  | 255 |  |  |
| Id | Event Log File ID | id |  | 18 |  |  |
| Interval | Interval | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LogDate | Log Date | datetime |  |  |  |  |
| LogFile | Log File | base64 |  |  |  |  |
| LogFileContentType | Log File Content Type | string |  | 255 |  |  |
| LogFileFieldNames | Log File Field Names | string |  | 1333 |  |  |
| LogFileFieldTypes | Log File Field Types | string |  | 1333 |  |  |
| LogFileLength | Log File Length | double |  |  | 18 | 0 |
| Sequence | Sequence | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
