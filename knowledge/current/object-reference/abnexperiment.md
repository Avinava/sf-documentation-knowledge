---
title: "AbnExperiment"
domain: object-reference
topic: abnexperiment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.445Z
estimatedTokens: 1671
keywords: [AbnExperiment, experiment, that's, Marketing, Cloud, content, Experience, websites, platform, automations, API, version, 63.0, later, Calls]
---

# AbnExperiment

> Represents an A/B/n experiment that's used with Marketing Cloud Next content,
         Experience Cloud websites, and platform automations. This object is available in API
      version 63.0 and later.

# AbnExperiment

Represents an A/B/n experiment that's used with Marketing Cloud Next content, Experience Cloud websites, and platform automations. This object is available in API version 63.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| DataSpaceId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the data space where an experiment's resources originate. Required.This field is a relationship field.Relationship NameDataSpaceRefers ToDataSpace |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionText description of the experiment. Optional. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSystem or user-generated API name for the experiment. Required. |
| LastAnalyzed | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime and date of last analysis. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time an experiment was referenced by another resource. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time a user viewed the experiment. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionText label that identifies the experiment. Required. |
| PersonalizationSchemaEnum | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPicklist value that indicates the type of personalization schema, which is related to where a personalization decision is created.Possible values are:DecisionDefinedExperienceVariationFlowPath |
| PersonalizationSchemaId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to the schema that’s related to the experiment.This field is a relationship field.Relationship NamePersonalizationSchemaRefers ToPersonalizationSchema |
| PrimaryMetricId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to engagement signal metrics, which are used to measure an experiment.This field is a polymorphic relationship field.Relationship NamePrimaryMetricRefers ToEngagementSignalCmpndMetric, EngagementSignalMetric |
| ProfileDataGraphId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to the profile data graph that’s used.This field is a relationship field.Relationship NameProfileDataGraphRefers ToDataGraph |
| ScheduleFrequencyInMinutes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of minutes that defines when personalized content can be made available. |
| Source | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates where the experiment was created.Possible values are:BlockBuilder—CMS content editorsExperienceBuilder—Experience Site BuilderFlowBuilderPersonalizationApp |
| SourceRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier that refers to the specific record that contains the experiment.This field is a polymorphic relationship field.Relationship NameSourceRecordRefers ToFlowRecordElement, ManagedContent |
| StartedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates when the experiment began or is scheduled to begin. |
| State | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionPicklist value that indicates the current state of the experiment.Possible values are:ArchivedCreatedStartedStoppedThe default value is Created. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionPicklist value that indicates the current status of the experiment while an action is being performed.Possible values are:ActiveCreateErrorDeleteErrorDeletingEditErrorProcessingThe default value is Processing. |
| StoppedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates when the experiment ended or is scheduled to end. |
| WinnerSelectionMode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionPossible values are:AutomaticManualThe default value is Manual. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AbnExperimentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AbnExperimentFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AbnExperimentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AbnExperimentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AbnExperimentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AbnExperimentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AbnExperimentFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- AbnExperimentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- AbnExperimentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AbnExperimentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
