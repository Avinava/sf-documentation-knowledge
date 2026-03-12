---
title: "WorkTypeSvcTerrSchdPrio"
domain: health-cloud-object-reference
topic: worktypesvcterrschdprio
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.305Z
estimatedTokens: 1307
keywords: [WorkTypeSvcTerrSchdPrio, priority, combination, service, territory, work, procedure, fetching, appointment, slots, API, version, 59.0, later, Calls]
---

# WorkTypeSvcTerrSchdPrio

> Represents the priority of the combination of the service territory, work
         type, and work procedure while fetching appointment slots. This object is available in
      API version 59.0 and later.

# WorkTypeSvcTerrSchdPrio

Represents the priority of the combination of the service territory, work type, and work procedure while fetching appointment slots. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the work type service territory scheduling priority record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the work type service territory scheduling priority record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the parent service territory condition for which priority is being defined.This field is a relationship field.Relationship NameParentServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| Priority | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe combined priority of all the conditions for a service territory. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the service territory condition for which priority is being defined.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe usage type of the scheduling priority in an application or cloud. For internal use only.Possible values are:Healthcare |
| WorkProcedureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the work procedure condition for which priority is being defined.This field is a relationship field.Relationship NameWorkProcedureRelationship TypeLookupRefers ToWorkProcedure |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the work type condition for which priority is being defined.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkTypeSvcTerrSchdPrioChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[WorkTypeSvcTerrSchdPrioFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkTypeSvcTerrSchdPrioHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WorkTypeSvcTerrSchdPrioOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkTypeSvcTerrSchdPrioShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkTypeSvcTerrSchdPrioChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- WorkTypeSvcTerrSchdPrioFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- WorkTypeSvcTerrSchdPrioHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- WorkTypeSvcTerrSchdPrioOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkTypeSvcTerrSchdPrioShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
