---
title: "IndicatorDefinition"
domain: omnistudio
topic: indicatordefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.411Z
estimatedTokens: 869
keywords: [IndicatorDefinition, indicator, assignment, process, measuring, calculating, results, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# IndicatorDefinition

> Represents information about the indicator assignment and the process
         of measuring and calculating the indicator results. This object is available in API
      version 59.0 and later.

# IndicatorDefinition

Represents information about the indicator assignment and the process of measuring and calculating the indicator results. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   This object is available in products that include the Outcome Management license where Outcome Management is enabled and the Manage Outcomes system permission is assigned to users.
-   This object is available in Net Zero Cloud with a Growth license where the Manage Environmental, Social, and Governance Programs system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the indicator definition. |
| FlowDefinitionApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the flow definition associated with the indicator definition. This field is available from API version 60.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last referenced this indicator definition. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last viewed this indicator definition. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the indicator definition. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the outcome.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the indicator definition.Possible values are:ActiveCanceledCompletedPlanned |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unit of measure for the target, baseline, and result values that are associated with this indicator definition.This field is a relationship field.Relationship NameUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndicatorDefinitionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[IndicatorDefinitionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[IndicatorDefinitionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[IndicatorDefinitionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
