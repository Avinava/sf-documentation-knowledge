---
title: "DigitalSignature"
domain: life-sciences-dev-guide
topic: digitalsignature
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.052Z
estimatedTokens: 477
keywords: [DigitalSignature, Life, Sciences, Cloud, extend, standard, represent, API, version, 65.0, later, Calls]
---

# DigitalSignature

> Life Sciences Cloud fields extend the standard DigitalSignature object to
         represent a signature. This object is available in API version 65.0 and
         later.

# DigitalSignature

Life Sciences Cloud fields extend the standard DigitalSignature object to represent a signature. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Fields

| Field | Details |
| --- | --- |
| DeviceOs | Reserved for future use. |
| DeviceType | Reserved for future use. |
| DigitalSignatureRequestId | Reserved for future use. |
| Geolocation | TypelocationPropertiesNillableDescriptionCaptures the GPS location at the time the signature was captured, providing a record of where the signing occurred. |
| GeolocationMissingReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionIdentifies the reason why GPS data was not collected when the signature was captured.Possible values are:BadDataDeviceRestrictedOfflineUserRestricted |
| GeolocationTimestamp | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionCaptures the exact time when GPS data was collected, especially in mobile offline cases where the GPS collection time differs from the signature capture time. |
| IsSignatureCopyRequested | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the user has requested a copy of the signed document. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to a related record, such as a visit or inquiry.This field is a polymorphic relationship field.Relationship NameParentRelationship TypeMaster-detailRefers ToCommSubConsentCmplSnpsht, Inquiry, Visit |
| WebBrowser | Reserved for future use. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: DigitalSignature](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_digitalsignature.htm)
