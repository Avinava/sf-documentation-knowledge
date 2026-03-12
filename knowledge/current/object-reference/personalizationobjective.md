---
title: "PersonalizationObjective"
domain: object-reference
topic: personalizationobjective
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.412Z
estimatedTokens: 814
keywords: [PersonalizationObjective, specific, business, outcome, want, achieve, creating, recommender, API, version, 62.0, later, Calls, Usage, Associated]
---

# PersonalizationObjective

> Represents a specific business outcome that you want to achieve when creating a
      recommender. Available in API version 62.0 and later.

# PersonalizationObjective

Represents a specific business outcome that you want to achieve when creating a recommender. Available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThree letter ISO currency codes for supported currencies. The default value is USD. This is an optional field. |
| DataSpaceId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the data space where an objective's resources originate. This is a required field.Relationship NameDataSpaceRefers ToDataSpace |
| Description | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionText description of the personalization objective. This is an optional field. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSystem or user-generated API name for the personalization objective. This is a required field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the personalized objective was referenced by another resource. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time a user viewed the personalization objective. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe text label that identifies the personalization objective. |

## Usage

Use this object to define a business objective. The personalized, targeted recommendations generated using deep learning algorithms are intended to help achieve this objective. For example, the objective “maximizing revenue” can return recommendations that aim to increase checkout frequency, increase cart value at checkout, or both.

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonalizationObjectiveChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[PersonalizationObjectiveFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PersonalizationObjectiveHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PersonalizationObjectiveOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)

Sharing rules are available for the object.

[PersonalizationObjectiveShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)

Sharing is available for the object.
