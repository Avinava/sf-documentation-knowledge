---
title: "UserDeviceApplication"
domain: object-reference
topic: userdeviceapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.774Z
estimatedTokens: 297
keywords: [UserDeviceApplication, applications, installed, device, accessing, Salesforce, API, version, 43.0, later, Calls, Special, Access, Rules]
---

# UserDeviceApplication

> Represents information on applications installed on a device that is
			accessing Salesforce. Available in API version 43.0 and later.

# UserDeviceApplication

Represents information on applications installed on a device that is accessing Salesforce. Available in API version 43.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

You must have View Devices enabled to see devices.

## Fields

| Field Name | Details |
| --- | --- |
|  |  |
| ApplicationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of application used to log in to Salesforce. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThis field is system-generated and cannot be changed. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe activity status of the device application. The picklist options are:ApprovedPending ApprovalRevoked |
| UserDeviceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier used to identify a device when tracking events. UserDeviceId is a generated value that’s created when the mobile app is initially run after installation. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user. |
