---
title: "AttribModelStage"
domain: object-reference
topic: attribmodelstage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.199Z
estimatedTokens: 983
keywords: [AttribModelStage, funnel, stage, that’s, predefined, custom, attribution, configuration, API, version, 62.0, later, Calls, Usage, Associated]
---

# AttribModelStage

> Represents a funnel stage that’s used in a predefined or custom attribution
      configuration. Available in API version 62.0 and later.

# AttribModelStage

Represents a funnel stage that’s used in a predefined or custom attribution configuration. Available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AttribModelId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the attribution configuration that uses this stage. This is a required field.Relationship NameAttribModelRelationship TypeMaster-detailRefers ToAttribModel (the master object) |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThree letter ISO currency codes for supported currencies. The default value is USD. This is an optional field. |
| EngagementSignalEnum | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPicklist value that indicates the engagement signal that’s selected for an attribution stage. This value represents a step in a customer journey.The accepted values are the engagement signals that are configured in the selected data space. |
| IsContentMatchRequired | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether to link item attribution from one funnel stage to the next. The default value is false, meaning not required. If you set this value to true, only engagement with the same item from the previous stage is linkable. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionText label that identifies the attribution model stage. This is a required field. |
| Sequence | TypeintPropertiesFilter, Group, SortDescriptionIndicates the position of a stage in its journey sequence, reflecting funnel engagement from start to finish. The funnel requires a minimum of two stages, with a maximum of four stages. Accepted values are 1, 2, 3, or 4. |
| StageUnionGroupName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of a certain group of stages. It can be used to reference individual, consecutive stages as a combined group with a common name. |

## Usage

Use this object to create attribution funnel stages. The funnel mirrors key touchpoints of an individual’s personalization journey, which you define by selecting an engagement signal and any relevant metrics. The order that you create stages in describes funnel engagement from start to finish.

For example, view a product, click the product, add it to cart, and submit the order. The funnel requires a minimum of two stages, with a maximum of four stages in a journey.

## Associated Objects

This object has the these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AttribModelStageChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AttribModelStageFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AttribModelStageHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AttribModelStageOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)

Sharing rules are available for the object.

[AttribModelStageShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)

Sharing is available for the object.
