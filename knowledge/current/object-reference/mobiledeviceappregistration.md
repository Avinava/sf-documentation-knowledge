---
title: "MobileDeviceAppRegistration"
domain: object-reference
topic: mobiledeviceappregistration
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.979Z
estimatedTokens: 1149
keywords: [MobileDeviceAppRegistration, provided, mobile, device, registration, event, app, uses, Engagement, SDK, API, version, 65.0, later, Calls]
---

# MobileDeviceAppRegistration

> Represents the details provided in a mobile device registration event from an
         app that uses the Engagement Mobile SDK. This object is available in API version 65.0
      and later.

# MobileDeviceAppRegistration

Represents the details provided in a mobile device registration event from an app that uses the Engagement Mobile SDK. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DatetimeInDevice | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the registration event, based on values provided by the device. |
| DeviceModel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model of the device that’s being registered, such as iPhone 17 or Google Pixel. |
| DevicePlatform | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe operating system of the mobile device, such as iPhone OS or Android. |
| DeviceSystemToken | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA unique token that represents the mobile device. The push notification service (such as Apple Push Notification service or Firebase Cloud Messaging) uses this token to deliver messages to the device. |
| DeviceSystemTokenHash | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA hash of the device token. |
| DeviceTimezone | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time zone that the device is located in when the registration event occurs. |
| DeviceVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version or model number of the device. |
| Deviceid | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier for the mobile device. |
| Eventid | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier for the registration event. |
| IsBackgroundRefreshEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the device gives permission for the app to receive updates while it’s in the background.The default value is false. |
| IsBluetoothEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether Bluetooth is enabled on the device.The default value is false. |
| IsDst | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the device’s locale observes daylight saving time (DST).The default value is false. |
| IsLocationEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the device has location services enabled for the app.The default value is false. |
| IsPushEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the device has push notifications enabled for the app.The default value is false. |
| Locale | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe locale string for the device, such as en_US or ja_JP. |
| MobileAppName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the mobile app, as configured in Setup. |
| MobileAppVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version number of the mobile app that generated the registration event. |
| MobileAppid | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique ID that represents the mobile app. |
| PartyIdentificationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the party identifier for identity resolution rules. |
| PartyIdentificationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID used for identity resolution comparisons. |
| PartyIdentificationType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA string that provides additional information about the type of party identifier used, such as Driver License or SSN. |
| RegistrationDatetime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the registration event occurred. |
| Registrationid | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique ID for the registration event. |
| SdkVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version of the Mobile Engagement SDK that the app uses. |
