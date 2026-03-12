---
title: "FieldServiceOrgSettings"
domain: sfFieldRef
topic: fieldserviceorgsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.952Z
estimatedTokens: 553
keywords: [FieldServiceOrgSettings, org, settings, Service, Appointment, Assistant, enabled, read-only, record, API, version, 51.0, later]
---

# FieldServiceOrgSettings

> Represents the org settings for Field Service, such as Appointment Assistant
         settings. If Field Service is enabled, the org contains one read-only record of this
      object. This object is available in API version 51.0 and later.

# FieldServiceOrgSettings

Represents the org settings for Field Service, such as Appointment Assistant settings. If Field Service is enabled, the org contains one read-only record of this object. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FieldServiceOrgSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fieldserviceorgsettings.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdsPollingIntervalSec | Advanced Data Sync Polling Interval (sec) | int | 9 |  |  |  |
| CanPopulateGoogleAddress | Send geolocation and map data to Google and Apple | boolean |  |  |  |  |
| CanSendAppCenterCrashReports | Send crash reports to Microsoft App Center | boolean |  |  |  |  |
| CanStoreMobileAnalytics | Allow third parties to store mobile analytics data | boolean |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeepLinkPublicSecurityKey | Deep Link Public Security Key | textarea |  | 4000 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| DoesAvlCalcInclOvertime | Allow Service to Calculate the overtime in Resource Availability Calculation | boolean |  |  |  |  |
| DoesAvlCalcInclPrimOnly | Allow Service to Calculate Primary and Secondary Service territory in Resource Availability Calculation | boolean |  |  |  |  |
| EnrouteStatus | Enroute Status | string |  | 40 |  |  |
| Id | Field Service Org Setting ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MobileFeedbackEmails | Mobile Feedback Email | textarea |  | 4000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
