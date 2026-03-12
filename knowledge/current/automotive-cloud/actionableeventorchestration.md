---
title: "ActionableEventOrchestration"
domain: automotive-cloud
topic: actionableeventorchestration
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.899Z
estimatedTokens: 1519
keywords: [ActionableEventOrchestration, actionable, event, how, orchestrate, processes, record, stores, subtype, category, expression, context, mappings, orchestration, API]
---

# ActionableEventOrchestration

> Represents the details of an actionable event and specifies how to orchestrate the
      processes. The record stores details such as the event type, subtype, and category, and the
      expression set and the context mappings related to an orchestration. This object is available
      in API version 63.0 and later.

# ActionableEventOrchestration

Represents the details of an actionable event and specifies how to orchestrate the processes. The record stores details such as the event type, subtype, and category, and the expression set and the context mappings related to an orchestration. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe API name of an actionable event orchestration record. |
| ContextDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context definition related to the expression set that processes an actionable event.This field is a relationship field.Relationship NameContextDefinitionRefers ToContextDefinition |
| ContextDefinitionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of a context definition that's associated with the actionable event orchestration. |
| ContextMappingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context mapping that processes an actionable event.This field is a relationship field.Relationship NameContextMappingRefers ToContextMapping |
| ContextMappingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of a context mapping in the context definition that's associated with the actionable event orchestration. |
| DefinitionId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the actionable event orchestration's definition.This field is a relationship field.Relationship NameDefinitionRefers ToActionableEventOrchDef |
| EventCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of an actionable event. |
| EventSubtypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subtype of an actionable event.This field is a relationship field.Relationship NameEventSubtypeRefers ToActionableEventSubtype |
| EventTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of an actionable event.This field is a relationship field.Relationship NameEventTypeRefers ToActionableEventType |
| ExecutionProcedureId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe expression set or flow definition that executes the orchestration.This field is a relationship field.Relationship NameExecutionProcedureRefers ToExpressionSet |
| ExecutionProcedureName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the flow definition or the expression set template that executes the orchestration. |
| ExecutionProcedureType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of automated procedure that executes the orchestration.Possible values are:Expression Set-BasedFlow-Based |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies if an actionable event orchestration record is active (true) or not (false).The default value is false. |
| IsInstalledTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the actionable event orchestration is an installed template that can't be modified (true) or not (false).The default value is false. |
| IsTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the actionable event orchestration is a template (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of an actionable event orchestration record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner ID of an actionable event orchestration record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe usage type of the event orchestration.Possible values are:AutomotiveStandard |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionableEventOrchestrationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ActionableEventOrchestrationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionableEventOrchestrationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ActionableEventOrchestrationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ActionableEventOrchestrationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
