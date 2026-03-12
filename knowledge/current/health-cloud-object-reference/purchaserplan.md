---
title: "PurchaserPlan"
domain: health-cloud-object-reference
topic: purchaserplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.917Z
estimatedTokens: 1336
keywords: [PurchaserPlan, payer, plan, purchaser, members, members’, dependents, Calls, Associated, Objects]
---

# PurchaserPlan

> Represents the payer plan that a purchaser makes available to its
			members and members’ dependents.

# PurchaserPlan

Represents the payer plan that a purchaser makes available to its members and members’ dependents.

## Supported Calls

create(),  delete(),  describeLayout(),  describeSObjects(),  getDeleted(),  getUpdated(),  query(),  retrieve(),  search(),  undelete(),  update(),  upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Affiliation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn affiliation to a government service, such as the army or navy. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this purchaser plan is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this purchaser plan ceases to be effective. |
| IsVerifiable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a benefits verification can be performed on this plan. |
| LineOfBusiness | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of insurance policy that the purchaser plan belongs to. For example, whether the plan is a group health insurance, individual health insurance, etc.This field is available in API version 64.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of this plan. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes about this payer. |
| Payer | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the payer’s Account object record. |
| PlanNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe plan’s reference number. |
| PlanStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the plan is active. |
| PlanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of plan, with the following default options:PPOHMOMedicareMedicaidWorkers Comp |
| ServiceType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the service type offered by this plan. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this plan record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this plan record on its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this plan record was last changed on the source system. |
| SponsorType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of sponsor for the plan. For example, if it's self-sponsored, government-sponsored, or company-sponsored.This field is available in API version 64.0 and later. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PurchaserPlanFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PurchaserPlanHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PurchaserPlanOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PurchaserPlanShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[PurchaserPlanChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change data capture is available for this object.

## Related Topics

- PurchaserPlanFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PurchaserPlanHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PurchaserPlanOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PurchaserPlanShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- PurchaserPlanChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
