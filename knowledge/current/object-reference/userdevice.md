---
title: "UserDevice"
domain: object-reference
topic: userdevice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.770Z
estimatedTokens: 553
keywords: [UserDevice, unique, device, API, version, 43.0, later, Calls, Special, Access, Rules]
---

# UserDevice

> Represents information unique to a device. Available in API
		version 43.0 and later.

# UserDevice

Represents information unique to a device. Available in API version 43.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

You must have View Devices enabled to see devices.

## Fields

| Field Name | Details |
| --- | --- |
| BrowserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe browser used for login. |
| DeviceNativeUid | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA unique string used to identify a mobile device. |
| DeviceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe device used to log in to Salesforce. The picklist options are:DesktopTabletiPadiPhonePhoneUnknown |
| IsVerified | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReserved for future use. |
| LastLoginHistoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe most recent LoginHistory associated with the device. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThis field is system-generated and can’t be changed. |
| PlatformType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe operating system of the device. The picklist options are:iOSAndroidOSXLinuxPhoneWindowsAppleAppBlackberryOther |
| PlatformVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version of the operating system running on the device. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe activity status of the device. The picklist options are:ApprovedPending ApprovalRevoked |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user. |
| UserLastSeen | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time of the user’s last access. |
| UserProvidedDeviceIdentifier | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionAn identifier for the user’s device such as the International Mobile Equipment Identity (IMEI) number or the device serial number.NoteThis field isn’t automatically populated. The developer must provide values. |
