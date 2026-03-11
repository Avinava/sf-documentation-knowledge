---
title: "CompliancePolicyVersion"
domain: omnistudio
topic: compliancepolicyversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.908Z
keywords: [CompliancePolicyVersion, Supported, Calls, Fields, Associated, Objects]
---

# CompliancePolicyVersion

# CompliancePolicyVersion

Represents the version of the Compliance Policy that tracks amendments. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChangeSummary | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA summary of the changes made to the compliance policy version. |
| CompliancePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe compliance policy associated with the compliance policy version.This field is a relationship field.Relationship NameCompliancePolicyRelationship TypeMaster-detailRefers ToCompliancePolicy (the master object) |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the compliance policy version becomes effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the compliance policy version remains effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the compliance policy version. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceDocumentList | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URLs to the supporting documents for the version. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the compliance policy version.Possible values are:ActiveDraftPublishedRetired |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CompliancePolicyVersionChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CompliancePolicyVersionFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CompliancePolicyVersionHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CompliancePolicyVersionShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.