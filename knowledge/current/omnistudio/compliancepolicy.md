---
title: "CompliancePolicy"
domain: omnistudio
topic: compliancepolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.304Z
estimatedTokens: 1063
keywords: [CompliancePolicy, internal, policies, organization, API, version, 65.0, later, Calls, Associated, Objects]
---

# CompliancePolicy

> Represents information on internal policies of the organization. This
      object is available in API version 65.0 and later.

# CompliancePolicy

Represents information on internal policies of the organization. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe additional information about the policy. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the compliance policy. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastReviewDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last review date of the compliance policy. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the compliance policy. |
| NextReviewDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe next policy review date. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PolicyRepresentativeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user or contact associated with the policy in the organization.This field is a polymorphic relationship field.Relationship NamePolicyRepresentativeRefers ToContact, User |
| ReferenceDocumentList | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URLs to the supporting document for the policy. |
| ReviewFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the frequency of the compliance policy review. |
| Scope | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the areas or domains covered by the compliance policy. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CompliancePolicyChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CompliancePolicyFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CompliancePolicyHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CompliancePolicyShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CompliancePolicyChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
- CompliancePolicyFeed (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)
- CompliancePolicyHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
- CompliancePolicyShare (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)
