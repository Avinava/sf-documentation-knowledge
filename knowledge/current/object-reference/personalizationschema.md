---
title: "PersonalizationSchema"
domain: object-reference
topic: personalizationschema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.432Z
estimatedTokens: 926
keywords: [PersonalizationSchema, personalization, template, that’s, build, decision, API, version, 62.0, later, Calls, Usage, Associated, Objects]
---

# PersonalizationSchema

> Represents a personalization response template that’s used when you build a
      personalization decision. Available in API version 62.0 and later.

# PersonalizationSchema

Represents a personalization response template that’s used when you build a personalization decision. Available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThree letter ISO currency codes for supported currencies. The default value is USD. This is an optional field. |
| DataSpaceId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the data space where a response template's resources originate. This is a required field.Relationship NameDataSpaceRefers ToDataSpace |
| Description | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionText description of the response template. This is an optional field. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSystem or user-generated API name for the personalization response template. This is a required field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the personalized response template was referenced by another resource. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time a user viewed the response template. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe text label that identifies the personalization response template. |
| PersonalizationType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the kind of personalization content to present. The default value is Recommendations, and the accepted values are ManualContent and Recommendations. |

## Usage

A response template outlines the attributes that ‌marketers use to configure the personalization response. It defines an expected format and shape for all decision response data.

-   For a recommendation-focused personalization, the response template can include an optional placeholder attribute to include header text before a set of recommendations.
-   For a ‌manual content personalization, the response template can include placeholders for background images, links, call-to-action text, and so on.

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonalizationSchemaChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[PersonalizationSchemaFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PersonalizationSchemaHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PersonalizationSchemaOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)

Sharing rules are available for the object.

[PersonalizationSchemaShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)

Sharing is available for the object.
