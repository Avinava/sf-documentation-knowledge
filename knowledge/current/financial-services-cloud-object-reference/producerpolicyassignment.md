---
title: "ProducerPolicyAssignment"
domain: financial-services-cloud-object-reference
topic: producerpolicyassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.459Z
estimatedTokens: 1088
keywords: [ProducerPolicyAssignment, junction, associates, Insurance, Policy, Producer, producers, managing, API, version, 47.0, later, enabled, Let, Multiple]
---

# ProducerPolicyAssignment

> A junction object that associates the Insurance Policy object with the
			Producer object. This object represents the producers who are managing the same
			insurance policy. This object is available in API version 47.0 and later. You see
		this object only if you have enabled the Let Multiple Producers Work on the Same Policy org
		pref.

# ProducerPolicyAssignment

A junction object that associates the Insurance Policy object with the Producer object. This object represents the producers who are managing the same insurance policy. This object is available in API version 47.0 and later. You see this object only if you have enabled the Let Multiple Producers Work on the Same Policy org pref.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe insurance policy that the producer is managing. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LineOfBusiness | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe producer's line of business.Possible values are:Business LiabilityCommercial AutoCommercial Property |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number assigned to this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| ProducerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of one of the producers who are working on the insurance policy. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ProducerPolicyAssignmentChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[ProducerPolicyAssignmentFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProducerPolicyAssignmentHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProducerPolicyAssignmentOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProducerPolicyAssignmentShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProducerPolicyAssignmentChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ProducerPolicyAssignmentFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ProducerPolicyAssignmentHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProducerPolicyAssignmentOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProducerPolicyAssignmentShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
