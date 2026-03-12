---
title: "PersonalizationPoint"
domain: object-reference
topic: personalizationpoint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.424Z
estimatedTokens: 1430
keywords: [PersonalizationPoint, specific, touch, point, experience, personalization, decision, made, connects, data, space, profile, graph, template, deliver]
---

# PersonalizationPoint

> Represents a specific touch point in an experience where a personalization decision
      can be made. It connects a data space, profile data graph, personalization type, and response
      template to deliver personalized content at that time in a customer journey. Available in API
      version 62.0 and later.

# PersonalizationPoint

Represents a specific touch point in an experience where a personalization decision can be made. It connects a data space, profile data graph, personalization type, and response template to deliver personalized content at that time in a customer journey. Available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AbnExperimentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to a related experiment.Relationship NameAbnExperimentRefers ToAbnExperiment |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThree letter ISO currency codes for supported currencies. The default value is USD. This is an optional field. |
| DataSpaceId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the data space where a personalization point's resources originate. This is a required field.Relationship NameDataSpaceRefers ToDataSpace |
| Description | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionText description of the personalization point. This is an optional field. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSystem or user-generated API name for the personalization point. This is a required field. |
| IsAuthenticationRequired | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the personalization point must use authenticated endpoints for real-time data capture and recommendation requests. When set to true, all interactions with Data Cloud are secured and verified.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the personalized point was referenced by another resource. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time a user viewed the personalization point. |
| MaxItemsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the maximum number of recommendations to return. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe text label that identifies the personalization point. |
| PersonalizationSchemaEnum | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPicklist value that indicates the type of personalization schema, which is related to where a personalization decision is created. The accepted values areDecisionDefinedExperienceVariationFlowPath |
| PersonalizationSchemaId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to the schema that’s related to the personalization point.Relationship NamePersonalizationSchemaRefers ToPersonalizationSchema |
| ProfileDataGraphId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the profile data graph that’s used with the personalization point.Relationship NameProfileDataGraphRefers ToDataGraph |
| RootPersonalizationPoint | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates the personalization point from where data is gathered‌. |
| Source | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates the personalization point from where data is gathered‌. |
| SourceRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to the specific record that contains the personalization point.Relationship NameSourceRecordRefers ToFlowRecordElement, ManagedContent |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionIndicates the state of the personalization point. The default value is Processing, and the accepted values are:ActiveCreateError—ErrorDeleteError—ErrorDeletingEditError—ErrorProcessing |

## Usage

Use this object to define a specific touch point in an experience where personalization decisions can be made. For example, a personalization point can be an banner on a webpage. After setting up data space, profile data graph, personalization type, and schema, you can add decisions and targeting rules to the personalization point to tailor the user experience.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonalizationPointChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[PersonalizationPointFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PersonalizationPointHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PersonalizationPointOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)

Sharing rules are available for the object.

[PersonalizationPointShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)

Sharing is available for the object.
