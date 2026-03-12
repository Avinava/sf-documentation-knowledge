---
title: "RegulatoryTrxnFee"
domain: psc-api
topic: regulatorytrxnfee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.493Z
estimatedTokens: 868
keywords: [RegulatoryTrxnFee, association, regulatory, transaction, fees, applications, inspections, violations, API, version, 51.0, later, Calls, Associated, Objects]
---

# RegulatoryTrxnFee

> Represents the association of regulatory transaction fees with your
      applications, inspections, or violations. This object is available in API version 51.0
    and later.

# RegulatoryTrxnFee

Represents the association of regulatory transaction fees with your applications, inspections, or violations. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business or personal account that the fee is calculated for. |
| CalculationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the fee is calculated. |
| Comments | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails about the fee. |
| DueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the fee must be paid by. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date that a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date that a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the fee. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the record. |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent record such as the application, inspection, violation, or license that the fee is calculated for.The new Nillable property is available in API version 59.0 and later. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the fee.Possible values are:CANCELEDDRAFTDUEPAIDPARTIALLY_PAID |
| TotalFeeAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the fee. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[RegulatoryTrxnFeeFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[RegulatoryTrxnFeeHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[RegulatoryTrnxFeeOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[RegulatoryTrxnFeeShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RegulatoryTrxnFeeFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- RegulatoryTrxnFeeHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- RegulatoryTrnxFeeOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- RegulatoryTrxnFeeShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
