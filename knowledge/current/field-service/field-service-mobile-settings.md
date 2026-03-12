---
title: "Field Service Mobile Settings"
domain: field-service
topic: field-service-mobile-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.448Z
estimatedTokens: 1020
keywords: [Field, Service, Mobile, Settings, information, mobile, app, settings, assigned, profile, context, user., resource, REST, API, version, 42.0, later., Response, Body]
---

# Field Service Mobile Settings

> Returns information about the Field Service mobile app settings assigned to the profile
  of the context user. This resource is available in REST API version 42.0 and later.

# Field Service Mobile Settings

Returns information about the Field Service mobile app settings assigned to the profile of the context user. This resource is available in REST API version 42.0 and later.

The Field Service mobile app for Android and iOS comes with a variety of customizable settings, including branding colors, geolocation accuracy, app extensions, and date picker display. You can assign unique configurations of those settings to user profiles for a customized Field Service mobile experience. For example, configure separate settings to address the mobile needs of contractors, technicians of varying levels, and service crew leaders.

The FieldServiceMobileSettings object represents a configuration of the mobile app settings. The assignment of a settings configuration to a user profile is stored in a child object, MobileSettingsAssignment. A FieldServiceMobileSettings record can also have zero or more child AppExtension records. The userSettings extension enables the return of user profile settings information.

Each user profile can be associated with only one FieldServiceMobileSettings record. If a user’s profile isn’t explicitly assigned a settings record, the profile uses the default settings.

This resource returns information about the FieldServiceMobileApp settings assigned to the profile of the user in the context of which the call is made. It is available in orgs where Field Service is enabled, and can be used for users who have one or more of the following:

-   Field Service Mobile permission set license
-   View Setup user permission
-   Customize Application user permission
-   System Administrator profile

This resource can also be executed in the context of an Experience Builder site user with the Field Service Mobile permission set license.

URI

/services/data/vXX.X/sobjects/FieldServiceMobileSettings/userSettings

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

None.

## Response Body

A FieldServiceMobileSettings record contains the following properties. All string properties have a maximum length of 7 characters unless otherwise noted. For descriptions, see [FieldServiceMobileSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fieldservicemobilesettings.htm "HTML (New Window)") in the Salesforce Object Reference.

| Field | Type |
| --- | --- |
| BgGeoLocationAccuracy | EnumValues: Medium, Coarse, VeryCoarse |
| BgGeoLocationMinUpdateFreqMins | Integer |
| BrandInvertedColor | String |
| ContrastInvertedColor | String |
| ContrastPrimaryColor | String |
| ContrastQuaternaryColor | String |
| ContrastQuinaryColor | String |
| ContrastSecondaryColor | String |
| ContrastTertiaryColor | String |
| DefaultListViewDeveloperName | String (maximum length: 255) |
| FeedbackPrimaryColor | String |
| FeedbackSecondaryColor | String |
| FeedbackSelectedColor | String |
| FutureDaysInDatePicker | Integer |
| GeoLocationAccuracy | EnumValues: Fine, Medium, Coarse |
| GeoLocationMinUpdateFreqMins | Integer |
| Id | String |
| IsAssignmentNotification | Boolean |
| IsDefault | Boolean |
| IsDispatchNotification | Boolean |
| IsScheduleViewResourceAbsences | BooleanAvailable in API version 55.0 and later. |
| IsSendLocationHistory | Boolean |
| IsShowEditFullRecord | Boolean |
| IsUseSalesforceMobileActions | Boolean |
| MetadataCacheTimeDays | Integer |
| NavbarBackgroundColor | String |
| NavbarInvertedColor | String |
| PastDaysInDatePicker | Integer |
| PrimaryBrandColor | String |
| RecordDataCacheTimeMins | Integer |
| SecondaryBrandColor | String |
| TimeIntervalSetupMins | EnumValues: 1, 5, 15, 20, 30, 60 |
| UpdateScheduleTimeMins | Integer |

If any of the following is true, an error message is returned:

-   The user does not have access to FieldServiceMobileSettings
-   Field Service is not enabled in the org
-   An internal server error occurs

## Example

Request

GET

/services/data/v56.0/sobjects/FieldServiceMobileSettings/userSettings

Response

```

```

## Code Examples

```
{
  "attributes" : {
    "type" : "FieldServiceMobileSettings",
    "url" : "/services/data/v46.0/sobjects/FieldServiceMobileSettings/0MfRM0000000rpR0AQ"
  },
  "Id" : "0MfRM0000000rpR0AQ",
  "IsDeleted" : false,
  "DeveloperName" : "Field_Service_Mobile_Settings",
  "Language" : "en_US",
  "MasterLabel" : "Field Service Mobile Settings",
  "CreatedDate" : "2019-02-17T05:20:47.000+0000",
  "CreatedById" : "005RM000001hTsLYAU",
  "LastModifiedDate" : "2019-03-22T22:48:17.000+0000",
  "LastModifiedById" : "005RM000001k2kpYAA",
  "SystemModstamp" : "2019-03-22T22:48:17.000+0000",
  "NavbarBackgroundColor" : "#803ABE",
  "BrandInvertedColor" : "#FFFFFF",
  "FeedbackPrimaryColor" : "#C23934",
  "FeedbackSecondaryColor" : "#13C4A3",
  "PrimaryBrandColor" : "#803ABE",
  "SecondaryBrandColor" : "#2A7AB0",
  "ContrastPrimaryColor" : "#000000",
  "ContrastSecondaryColor" : "#444444",
  "ContrastTertiaryColor" : "#9FAAB5",
  "ContrastQuaternaryColor" : "#E6E6EB",
  "ContrastQuinaryColor" : "#EEEEEE",
  "ContrastInvertedColor" : "#FFFFFF",
  "IsScheduleViewResourceAbsences" : true,
  "IsSendLocationHistory" : false,
  "GeoLocationMinUpdateFreqMins" : 10,
  "GeoLocationAccuracy" : "Medium",
  "RecordDataCacheTimeMins" : 240,
  "MetadataCacheTimeDays" : 7,
  "UpdateScheduleTimeMins" : 30,
  "IsShowEditFullRecord" : false,
  "TimeIntervalSetupMins" : "15",
  "DefaultListViewDeveloperName" : null,
  "NavbarInvertedColor" : "#FFFFFF",
  "FeedbackSelectedColor" : "#FFFFFF",
  "FutureDaysInDatePicker" : 45,
  "PastDaysInDatePicker" : 45,
  "IsDefault" : true,
  "BgGeoLocationMinUpdateFreqMins" : 60,
  "BgGeoLocationAccuracy" : "Coarse",
  "IsUseSalesforceMobileActions" : false,
  "IsAssignmentNotification" : false,
  "IsDispatchNotification" : true
}
```
