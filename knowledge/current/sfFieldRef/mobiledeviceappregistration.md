---
title: "MobileDeviceAppRegistration"
domain: sfFieldRef
topic: mobiledeviceappregistration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.447Z
estimatedTokens: 590
keywords: [MobileDeviceAppRegistration, provided, mobile, device, registration, event, app, uses, Engagement, SDK, API, version, 65.0, later]
---

# MobileDeviceAppRegistration

> Represents the details provided in a mobile device registration event from an
         app that uses the Engagement Mobile SDK. This object is available in API version 65.0
      and later.

# MobileDeviceAppRegistration

Represents the details provided in a mobile device registration event from an app that uses the Engagement Mobile SDK. This object is available in API version 65.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MobileDeviceAppRegistration](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mobiledeviceappregistration.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| DatetimeInDevice | Date Time In Device | datetime |  |  |  |  |
| DeviceModel | Device Model | string |  | 100 |  |  |
| DevicePlatform | Device Platform | string |  | 100 |  |  |
| DeviceSystemToken | Device System Token | string |  | 4000 |  |  |
| DeviceSystemTokenHash | Device System Token Hash | string |  | 255 |  |  |
| DeviceTimezone | Device Time zone | string |  | 50 |  |  |
| DeviceVersion | Device Version | string |  | 100 |  |  |
| Deviceid | Device ID | string |  | 200 |  |  |
| Eventid | Event ID | string |  | 200 |  |  |
| Id | MobileDeviceAppRegistration ID | id |  | 18 |  |  |
| IsBackgroundRefreshEnabled | Background Refresh Enabled | boolean |  |  |  |  |
| IsBluetoothEnabled | Bluetooth Enabled | boolean |  |  |  |  |
| IsDst | Daylight Savings Time | boolean |  |  |  |  |
| IsLocationEnabled | Location Enabled | boolean |  |  |  |  |
| IsPushEnabled | Push Enabled | boolean |  |  |  |  |
| Locale | Locale | string |  | 55 |  |  |
| MobileAppName | Mobile App Name | string |  | 200 |  |  |
| MobileAppVersion | Mobile App Version | string |  | 100 |  |  |
| MobileAppid | Mobile App ID | string |  | 200 |  |  |
| PartyIdentificationName | Party Identification Name | string |  | 255 |  |  |
| PartyIdentificationNumber | Party Identification Number | string |  | 255 |  |  |
| PartyIdentificationType | Party Identification Type | string |  | 255 |  |  |
| RegistrationDatetime | Registration Datetime In Service | datetime |  |  |  |  |
| Registrationid | Registration ID | string |  | 200 |  |  |
| SdkVersion | SDK Version | string |  | 100 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
