---
title: "AttribModel"
domain: object-reference
topic: attribmodel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.222Z
estimatedTokens: 1779
keywords: [AttribModel, attribution, model, Personalization, Campaign, Influence, including, weights, touch, API, version, 62.0, later, Calls, Usage]
---

# AttribModel

> Represents an attribution model used with Personalization,
         Attribution, and Campaign Influence, including model weights and touch type. This
      object is available in API version 62.0 and later.

# AttribModel

Represents an attribution model used with Personalization, Attribution, and Campaign Influence, including model weights and touch type. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AttribModelStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates a model’s current status. The default value is Draft, and accepted values areActiveDraftInactive |
| AttributionModelType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the type of attribution model, which determines which touchpoints to evaluate. The default value is LastTouch, and accepted values areFirst touchLastTouch |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThree letter ISO currency codes for supported currencies. The default value is USD. This is an optional field. |
| DataSpaceId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the data space where a model's resources originate. This is a required field.Relationship NameDataSpaceRefers ToDataSpace |
| Description | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionText description of the attribution model. Optional. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAuto-generated or user-generated API name for the attribution model. This is a required field. |
| Error Code | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the issue that’s causing an error. The default value is None, and accepted values areConfigurationMissingError indicates that a required configuration setting is missing.DpcJobError indicates a problem during processing.InternalError indicates an internal error during processing.ModelValidationError indicates that the model is invalid.None |
| GlobalAttributionWindowDays | TypeintPropertiesFilter, Group, Nillable, SortDescriptionDefines a timeframe for tracking attribution-related engagement. This is a required field. |
| IdentityResolutionMode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionDefines which identity resolution method to use when tracking engagement activities. Default value is Individual, and acceptable values areIndividualUnified |
| IsZeroDayLoadRequired | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDefines whether to sync data before the attribution window begins. The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the model was referenced by another resource. |
| LastRefresh | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp that indicates the last time engagement data was refreshed and evaluated by the model. |
| LastSuccessfulRefresh | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp that indicates the last time the model was successfully refreshed. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time a user viewed the model. |
| LatestRefreshedStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionPicklist value that indicates the status of last refresh process. The default value is None, and accepted values areCanceledCompleteFailureNoneProcessing |
| ModelContext | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the app or feature in which the attribution model is used. The default value is Personalization, and accepted values areAttribution: indicates the use with Attribution in Salesforce Personalization.CampaignInfluence: indicates the use with Campaign Influence in Unified Marketing Analytics.Personalization: indicates the use with Personalization in Salesforce Personalization. |
| ModelRevision | TypeintPropertiesFilter, Group, Nillable, SortDescriptionA version number that indicates the latest save of the model. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionText label that identifies the attribution model. This is a required field. |
| Partner | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates who's using the model. This field is required if the value of ModelContext is Attribution. |
| ProfileDataGraphId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to the profile data graph that’s used with the model.Relationship NameProfileDataGraphRefers ToDataGraph |
| ScheduledFrequencyMins | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe scheduled frequency (in minutes) at which the attribution model is processed. |
| SyncStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionIndicates the current status of the attribution model while an action is being performed. The default value is Processing, and acceptable values are:ActiveCreateErrorDeleteErrorDeletingEditErrorProcessing |
| Tags | TypestringPropertiesFilter, Nillable, SortDescriptionUser-generated strings that can be used to organize attribution models. |

## Usage

Use this object to get information about attribution models that are in use with personalization and influence features. For example, you can:

-   Retrieve status and error details.
-   Identify model settings such as type (first-touch, last-touch).
-   Find out when the model was last used, refreshed, or synced.

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AttribModelChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AttribModelFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AttribModelHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AttribModelOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)

Sharing rules are available for the object.

[AttribModelShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)

Sharing is available for the object.
