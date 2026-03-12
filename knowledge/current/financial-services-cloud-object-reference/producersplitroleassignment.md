---
title: "ProducerSplitRoleAssignment"
domain: financial-services-cloud-object-reference
topic: producersplitroleassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.505Z
estimatedTokens: 1281
keywords: [ProducerSplitRoleAssignment, revenue, generating, entities, assocaited, insurance, policy, account, API, version, later, Calls, Associated, Objects]
---

# ProducerSplitRoleAssignment

> Represents the revenue generating entities assocaited with an insurance policy and
         account. This object is available in API version 62 and later.

# ProducerSplitRoleAssignment

Represents the revenue generating entities assocaited with an insurance policy and account. This object is available in API version 62 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date from when the assignment of the procucer role becomes effective. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the assignment of the procucer role remains effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LineOfBusiness | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe line of business associated with the producer split role assignment.Possible values are:Employee BenefitsProperty & Casualty |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the producer split role assignment record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProducerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe producer associated with the assigned role.This field is a relationship field.Relationship NameProducerRefers ToProducer |
| ProducerRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe role of producer in the assignment.Possible values are:Primary ProducerSecondary ProducerTertiary Producer |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reference record associated with the assigned producer role.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToAccount, InsurancePolicy |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProducerSplitRoleAssignmentChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[ProducerSplitRoleAssignmentHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProducerSplitRoleAssignmentOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProducerSplitRoleAssignmentShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProducerSplitRoleAssignmentChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ProducerSplitRoleAssignmentHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProducerSplitRoleAssignmentOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProducerSplitRoleAssignmentShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
