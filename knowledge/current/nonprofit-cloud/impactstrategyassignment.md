---
title: "ImpactStrategyAssignment"
domain: nonprofit-cloud
topic: impactstrategyassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.008Z
estimatedTokens: 645
keywords: [ImpactStrategyAssignment, connection, impact, strategy, outcome, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ImpactStrategyAssignment

> Represents the connection between the impact strategy and the outcome
         or other object related to the impact strategy. This object is available in API
      version 59.0 and later.

# ImpactStrategyAssignment

Represents the connection between the impact strategy and the outcome or other object related to the impact strategy. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available in products that include the Outcome Management license where Outcome Management is enabled and the Manage Outcomes system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ImpactStrategyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe impact strategy associated with this impact strategy assignment.This field is a relationship field.Relationship NameImpactStrategyRelationship TypeMaster-DetailRefers ToImpactStrategy |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last referenced this impact strategy assignment. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last viewed this impact strategy assignment. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number of the impact strategy assignment. |
| OutcomeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe outcome associated with this impact strategy assignment.This field is a relationship field.Relationship NameOutcomeRelationship TypeLookupRefers ToOutcome |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ImpactStrategyAssignmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ImpactStrategyAssignmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
