---
title: "SignatureTaskLineItem"
domain: psc-api
topic: signaturetasklineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.509Z
estimatedTokens: 483
keywords: [SignatureTaskLineItem, junction, task, digital, captured, visit, API, version, 50.0, later, Calls, Associated, Objects]
---

# SignatureTaskLineItem

> Represents a junction between a signature task and a digital signature captured
      in a visit.  This object is available in API version 50.0 and later.

# SignatureTaskLineItem

Represents a junction between a signature task and a digital signature captured in a visit. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DigitalSignatureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the digital signature collected in a visit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the signature task line item. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAssessment task or signature task associated with this line item. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[SignatureTaskLineItemFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[SignatureTaskLineItemHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- SignatureTaskLineItemFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- SignatureTaskLineItemHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
