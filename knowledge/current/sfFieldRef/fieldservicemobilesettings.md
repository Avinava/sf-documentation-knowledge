---
title: "FieldServiceMobileSettings"
domain: sfFieldRef
topic: fieldservicemobilesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:57.944Z
estimatedTokens: 1387
keywords: [FieldServiceMobileSettings, configuration, settings, control, Service, iOS, Android, mobile, app, experience, API, version, 38.0, later]
---

# FieldServiceMobileSettings

> Represents a configuration of settings that control the Field
			Service iOS and Android mobile app experience. This object is available in API
		version 38.0 and later.

# FieldServiceMobileSettings

Represents a configuration of settings that control the Field Service iOS and Android mobile app experience. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FieldServiceMobileSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fieldservicemobilesettings.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AscAutomaticMode | Status Change Mode | picklist |  | 255 |  |  |
| AscCancellationTimerInSec | Cancellation Period (in seconds, 10-600) | int | 9 |  |  |  |
| AscCompletedStatus | Completed Status | picklist |  | 40 |  |  |
| AscOnSiteStatus | On-Site Status | picklist |  | 40 |  |  |
| AscRadiusInMeters | Radius (in meters, 10-5000) | int | 9 |  |  |  |
| AscTimeLimitationInMin | Time from Service Appointment (in minutes, 1-1440) | int | 9 |  |  |  |
| AscTravelStatus | Travel Status | picklist |  | 40 |  |  |
| BgGeoLocationAccuracy | Geolocation Accuracy (Background Mode) | picklist |  | 255 |  |  |
| BgGeoLocationMinUpdateFreqMins | Geolocation Update Frequency in Minutes (Background Mode) | int | 9 |  |  |  |
| BrandInvertedColor | Brand Inverted Color | string |  | 7 |  |  |
| ContrastInvertedColor | Contrast Inverted Color | string |  | 7 |  |  |
| ContrastPrimaryColor | Contrast Primary Color | string |  | 7 |  |  |
| ContrastQuaternaryColor | Contrast Quaternary Color | string |  | 7 |  |  |
| ContrastQuinaryColor | Contrast Quinary Color | string |  | 7 |  |  |
| ContrastSecondaryColor | Contrast Secondary Color | string |  | 7 |  |  |
| ContrastTertiaryColor | Contrast Tertiary Color | string |  | 7 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DaysAfterCurrentServiceDate | Days After Current Service Date | int | 9 |  |  |  |
| DaysBeforeCurrentServiceDate | Days Before Current Service Date | int | 9 |  |  |  |
| DefaultListViewDeveloperName | Default List View Developer Name | string |  | 255 |  |  |
| DestinationType | Destination Type | picklist |  | 255 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| FeedbackPrimaryColor | Feedback Primary Color | string |  | 7 |  |  |
| FeedbackSecondaryColor | Feedback Secondary Color | string |  | 7 |  |  |
| FeedbackSelectedColor | Feedback Selected Color | string |  | 7 |  |  |
| FeedbackTertiaryColor | Feedback Tertiary Color | string |  | 7 |  |  |
| FutureDaysInDatePicker | Future Days in the Date Picker | int | 9 |  |  |  |
| GeoLocationAccuracy | Geolocation Accuracy | picklist |  | 255 |  |  |
| GeoLocationMinUpdateFreqMins | Geolocation Update Frequency in Minutes | int | 9 |  |  |  |
| Id | Field Service Mobile Settings ID | id |  | 18 |  |  |
| IsAscTimeLimitEnabled | Enable Time from Service Appointment | boolean |  |  |  |  |
| IsAssignmentNotification | Send appointment notifications on assignment | boolean |  |  |  |  |
| IsDefault | Default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDispatchNotification | Send appointment notifications on dispatch | boolean |  |  |  |  |
| IsFeedDisabled | Enable Feed | boolean |  |  |  |  |
| IsFeedPrimingDisabled | Enable Feed Priming | boolean |  |  |  |  |
| IsLimitedLocTrackingEnabled | Enable Limited Tracking | boolean |  |  |  |  |
| IsOptimizedImageUploadEnabled | Limit image file size | boolean |  |  |  |  |
| IsScheduleViewResourceAbsences | Display resource absences in the Schedule page | boolean |  |  |  |  |
| IsSendLocationHistory | Collect service resource geolocation history | boolean |  |  |  |  |
| IsShowEditFullRecord | Enable full edit on records | boolean |  |  |  |  |
| IsTimeSheetEnabled | Enable mobile time sheets | boolean |  |  |  |  |
| IsTimeZoneEnabled | Collect time zones for time sheet entries | boolean |  |  |  |  |
| IsUseSalesforceMobileActions | Use Salesforce mobile actions | boolean |  |  |  |  |
| IsVirtualMeasurement | Virtual Measurement | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MaxNumberOfServiceAppointments | Max Number of Service Appointments | int | 9 |  |  |  |
| MetadataCacheTimeDays | Metadata Cache Time in Days | int | 9 |  |  |  |
| NavbarBackgroundColor | Navbar Background Color | string |  | 7 |  |  |
| NavbarInvertedColor | Navbar Inverted Color | string |  | 7 |  |  |
| OptimizeImageSizeInMb | Maximum Image File Size (in MB) | string |  | 7 |  |  |
| PastDaysInDatePicker | Past Days in the Date Picker | int | 9 |  |  |  |
| PrimaryBrandColor | Primary Brand Color | string |  | 7 |  |  |
| QuickStatusChangeFlowName | Flow Name | string |  | 255 |  |  |
| RecordDataCacheTimeMins | Record Data Cache Time in Minutes | int | 9 |  |  |  |
| SecondaryBrandColor | Secondary Brand Color | string |  | 7 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeIntervalSetupMins | Picklist Time Interval in Minutes | picklist |  | 255 |  |  |
| UpdateScheduleTimeMins | Schedule Update Frequency in Minutes | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
