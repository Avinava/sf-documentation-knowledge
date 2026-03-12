---
title: "MobSecurityCertPinEvent"
domain: object-reference
topic: mobsecuritycertpinevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.020Z
estimatedTokens: 485
keywords: [MobSecurityCertPinEvent, event, mobile, security, certificate, pinning, Salesforce, app, Enhanced, API, version, 53.0, later, Calls, Special]
---

# MobSecurityCertPinEvent

> The event of mobile security certificate pinning on the Salesforce
         mobile app with Enhanced Mobile Security. This object is available in API version 53.0
      and later.

# MobSecurityCertPinEvent

The event of mobile security certificate pinning on the Salesforce mobile app with Enhanced Mobile Security. This object is available in API version 53.0 and later.

## Supported Calls

create(), describeSObjects()

## Special Access Rules

Accessing this object requires the Enhanced Mobile App Security add-on subscriptions and the Enforce Enhanced Mobile App Security user permission.

## Fields

| Field | Details |
| --- | --- |
| AppPackageIdentifier | TypestringPropertiesCreateDescriptionThe unique identifier for the certificate. |
| AppVersion | TypestringPropertiesCreateDescriptionThe version of the app. |
| CertPinResults | TypejsonPropertiesCreateDescriptionThe results of certificate pinning. |
| DeviceIdentifier | TypestringPropertiesCreateDescriptionThe hardware IDs or IDs to uniquely identify a mobile device. |
| DeviceModel | TypestringPropertiesCreateDescriptionThe model of the mobile device. |
| EventDate | TypedateTimePropertiesCreate, NillableDescriptionThe date of the certificate pinning event. |
| EventDescription | TypestringPropertiesCreate, NillableDescriptionThe description of the certificate pinning event. |
| EventIdentifier | TypestringPropertiesCreate, NillableDescriptionThe ID of the certificate pinning event. |
| EventUuid | TypestringPropertiesNillableDescriptionThe universally unique identifier of the event. |
| OsName | TypestringPropertiesCreateDescriptionThe name of the operating system. |
| OsVersion | TypestringPropertiesCreateDescriptionThe version of the operating system. |
| ReplayId | TypestringPropertiesNillableDescriptionThe position of the event in the event stream. |
| UserId | TypereferencePropertiesCreateDescriptionThis is polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| WebkitVersion | TypestringPropertiesCreate, NillableDescriptionThe version of the web browser engine developed by Apple. |
