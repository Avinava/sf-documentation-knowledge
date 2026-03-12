---
title: "PersonalizationDecision"
domain: object-reference
topic: personalizationdecision
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.405Z
estimatedTokens: 1000
keywords: [PersonalizationDecision, targeting, rules, personalization, point, determine, individual's, eligibility, receive, personalized, content, deliver, API, version, 62.0]
---

# PersonalizationDecision

> Represents a set of targeting rules within a personalization point that determine an
      individual's eligibility to receive personalized content and the content to deliver. Available
      in API version 62.0 and later.

# PersonalizationDecision

Represents a set of targeting rules within a personalization point that determine an individual's eligibility to receive personalized content and the content to deliver. Available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThree letter ISO currency codes for supported currencies. The default value is USD. This is an optional field. |
| DataSpaceId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the data space from where a personalization decision's resources originate. This is a required field.Relationship NameDataSpaceRefers ToDataSpace |
| Description | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionText description of the personalization decision. This is an optional field. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSystem or user-generated API name for the personalization decision. This is a required field. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe text label that identifies the personalization decision. |
| PersonalizationPointId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to a personalization point.Relationship NamePersonalizationPointRelationship TypePrimary-detailRefers ToPersonalizationPoint (the primary object) |
| PersonalizerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to the personalizer service called at runtime, which retrieves the necessary information for a decision response.Relationship NamePersonalizerRefers ToPersonalizationRecommender |
| Priority | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents the order in which personalization decisions are evaluated. If an individual qualifies for multiple decisions, the one with the highest priority is returned. The possible values are positive integers such as 1, 2, and 3. |
| State | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionPicklist value that indicates the state of the decision. The default value is Draft, and accepted values are Draft and Live. Personalization evaluates only live decisions. |

## Usage

Use this object for defining and managing personalized responses. It includes targeting rules to determine eligibility and specifies the content to return, such as product recommendations.

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonalizationDecisionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[PersonalizationDecisionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PersonalizationDecisionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PersonalizationDecisionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)

Sharing rules are available for the object.

[PersonalizationDecisionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)

Sharing is available for the object.
