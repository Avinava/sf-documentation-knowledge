---
title: "AbnExperimentCohort"
domain: object-reference
topic: abnexperimentcohort
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.453Z
estimatedTokens: 1134
keywords: [AbnExperimentCohort, audience, that's, participating, experiment, API, version, 63.0, later, Calls, Usage, Associated, Objects]
---

# AbnExperimentCohort

> Represents the specified audience that's participating in an A/B/n
         experiment. This object is available in API version 63.0 and later.

# AbnExperimentCohort

Represents the specified audience that's participating in an A/B/n experiment. This object is available in API version 63.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AbnExperimentId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to a related experiment.This field is a relationship field.Relationship NameAbnExperimentRelationship TypeParent-detailRefers ToAbnExperiment (the parent object) |
| AllocationWeight | TypeintPropertiesFilter, Group, Nillable, SortDescriptionPercentage of an audience to experience the selected part of the experiment. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThree letter ISO currency codes for supported currencies. Optional.Possible values are:USD—U.S. Dollar |
| DataSpaceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to the data space where an experiment cohort's resources originate. Required.This field is a relationship field.Relationship NameDataSpaceRefers ToDataSpace |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionText description of the experiment. Optional. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSystem or user-generated API name for the experiment. Required. |
| IsControl | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the cohort is used as the control group that performance is checked against.The default value is false. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionText label that identifies the experiment cohort. Required. |
| PersonalizerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to the personalizer that’s related to the experiment cohort.This field is a relationship field.Relationship NamePersonalizerRefers ToPersonalizationRecommender |

## Usage

Use this object to describe experiment cohorts or to change allocation weights.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AbnExperimentCohortChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AbnExperimentCohortFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AbnExperimentCohortHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AbnExperimentCohortOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AbnExperimentCohortShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AbnExperimentCohortChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AbnExperimentCohortFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- AbnExperimentCohortHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- AbnExperimentCohortOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AbnExperimentCohortShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
