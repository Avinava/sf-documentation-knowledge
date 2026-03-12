---
title: "AppAnalyticsQueryRequest"
domain: sfFieldRef
topic: appanalyticsqueryrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.329Z
estimatedTokens: 496
keywords: [AppAnalyticsQueryRequest, AppExchange, App, Analytics, data]
---

# AppAnalyticsQueryRequest

> Represents a request for AppExchange App Analytics
		data.

# AppAnalyticsQueryRequest

Represents a request for AppExchange App Analytics data.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AppAnalyticsQueryRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appanalyticsqueryrequest.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AvailableSince | Available Since | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| DownloadExpirationTime | Download Expiration Time | datetime |  |  |  |  |
| DownloadSize | Download File Size | long | 18 |  |  |  |
| DownloadUrl | Download URL | textarea |  | 8096 |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| ErrorMessage | Error Message | string |  | 255 |  |  |
| FileCompression | File Compression | picklist |  | 255 |  |  |
| FileType | File Type | picklist |  | 255 |  |  |
| Id | App Analytics Query Request ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Number | string |  | 255 |  |  |
| OrganizationIds | Organization IDs | string |  | 255 |  |  |
| PackageIds | Package IDs | string |  | 255 |  |  |
| QuerySubmittedTime | Query Submitted Time | datetime |  |  |  |  |
| RequestState | Request State | picklist |  | 255 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
