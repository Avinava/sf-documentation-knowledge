---
title: "AuthApplicationAsset"
domain: psc-api
topic: authapplicationasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.096Z
estimatedTokens: 678
keywords: [AuthApplicationAsset, association, Asset, Application, license, API, version, 49.0, later, Calls, Associated, Objects]
---

# AuthApplicationAsset

> Information related to the association between an Asset and the Application for
      the license of an Asset. This object is available in API version 49.0 and later.

# AuthApplicationAsset

Information related to the association between an Asset and the Application for the license of an Asset. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated asset. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the authorization application asset. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the authorization application asset record owner. |
| RgltyAuthApplicationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated regulatory authorization application. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AuthApplicationAssetFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[AuthApplicationAssetHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[AuthApplicationAssetOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

History is available for the object.

[AuthApplicationAssetShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

History is available for the object.

## Related Topics

- AuthApplicationAssetFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- AuthApplicationAssetHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- AuthApplicationAssetOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- AuthApplicationAssetShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
