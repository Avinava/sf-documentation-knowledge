---
title: "Visit"
domain: life-sciences-dev-guide
topic: visit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.577Z
estimatedTokens: 638
keywords: [Visit, Track, rep’s, health, care, provider, Special, Access, Rules, Calls]
---

# Visit

> Track information related to a field rep’s visit to a health care
      provider.

# Visit

Track information related to a field rep’s visit to a health care provider.

## Special Access Rules

In Life Sciences Cloud, Visit is used for Customer Engagement.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that is associated with a visit.Relationship NameAccountRefers ToAccount |
| Channel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe channel of the visit.Possible values are:EmailIn-PersonPhoneRemoteSMSWeChatWhatsAppThe default value is In-Person. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| ParentVisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf this visit is the child of a larger group visit, this field is used to provide a link to that visit.This field is a relationship field. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later.Relationship NameParentVisitRefers ToVisit |
| PlaceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the location that sales reps visit.Relationship NamePlaceRefers ToAddress, ContactPointAddress, Location, RetailStore |
| PlannedVisitStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the visit is expected to start. |
| SignatureType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the signature.Possible values are:DigitalPhysicalThis field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of a visit.Possible values are:CompletedPlannedThe default value is Planned. |
| TerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the terriory for this visit.This field is a relationship field. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later.Relationship NameTerritoryRefers ToTerritory2 |
