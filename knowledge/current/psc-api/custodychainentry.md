---
title: "CustodyChainEntry"
domain: psc-api
topic: custodychainentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.513Z
estimatedTokens: 1136
keywords: [CustodyChainEntry, entry, event, chain, custody, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# CustodyChainEntry

> Represents information about an entry or event in the chain of custody.
      This object is available in API version 59.0 and later.

# CustodyChainEntry

Represents information about an entry or event in the chain of custody. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Evidence Management is enabled in your org. To access this object, you need the Evidence Management permission set.

## Fields

| Field | Details |
| --- | --- |
| AssessmentTaskId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe assessment task for which a custody chain entry is created.This field is a relationship field.Relationship NameAssessmentTaskRelationship TypeLookupRefers ToAssessmentTask |
| CustodianId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user, organization, or location that has custody of the item.This field is a polymorphic relationship field.Relationship NameCustodianRelationship TypeLookupRefers ToAccount, Contact, ServiceTerritory, User |
| CustodyItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent custody item that's associated with the custody chain entry record.This field is a relationship field.Relationship NameCustodyItemRelationship TypeMaster-DetailRefers ToCustodyItem |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the custody chain entry record of the item. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of custody chain entry the item. |
| ItemCustodySiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe place where the item is held in custody.This field is a polymorphic relationship field.Relationship NameItemCustodySiteRelationship TypeLookupRefers ToAddress, Location, ServiceTerritory |
| ItemVerificationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of verification for the item.Possible values are:DualSignatureNoSignatureNotApplicableSingleSignature |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the custody chain entry record. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stage, step, task, or any custom object for which the custody entry is created.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToAssessmentTask |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of custody chain entry for the item. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the custody entry record. Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |
| StatusCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of the custody entry record's status.Possible values are:CompletedNew |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CustodyChainEntryFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CustodyChainEntryHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CustodyChainEntryFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CustodyChainEntryHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
