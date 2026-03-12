---
title: "LoyaltyPgmMbrLinkedPtnr"
domain: loyalty
topic: loyaltypgmmbrlinkedptnr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.153Z
estimatedTokens: 981
keywords: [LoyaltyPgmMbrLinkedPtnr, association, loyalty, program, member, their, membership, partner, acts, facilitates, points, accrual, data, exchange, joint]
---

# LoyaltyPgmMbrLinkedPtnr

> Represents the association between a loyalty program member and their membership with a partner. It acts as an association that facilitates points accrual and data exchange in a joint loyalty program. This object is available in API
      version 66.0 and later.

# LoyaltyPgmMbrLinkedPtnr

Represents the association between a loyalty program member and their membership with a partner. It acts as an association that facilitates points accrual and data exchange in a joint loyalty program. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description for the unlink reason. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier of the loyalty program member with partner. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the linkage is active (true) or inactive (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LinkDate | TypedateTimePropertiesCreate, Filter, SortDescriptionThe date on which a loyalty program member is linked to a partner. |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the loyalty program member to be linked to a partner.This field is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeMaster-detailRefers ToLoyaltyProgramMember (the master object) |
| LoyaltyProgramPartnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the partner to be linked to the loyalty program member.This field is a relationship field.Relationship NameLoyaltyProgramPartnerRefers ToLoyaltyProgramPartner |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the loyalty program member linked partner. |
| UnlinkDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which a loyalty program member is unlinked from a partner. |
| UnlinkReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for unlinking a loyalty program member from a partner. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmMbrLinkedPtnrChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[LoyaltyPgmMbrLinkedPtnrHistory](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LoyaltyPgmMbrLinkedPtnrChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
- LoyaltyPgmMbrLinkedPtnrHistory (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_history.htm)
