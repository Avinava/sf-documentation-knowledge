---
title: "AsyncOpSyndicationFeedFile"
domain: object-reference
topic: asyncopsyndicationfeedfile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.141Z
estimatedTokens: 631
keywords: [AsyncOpSyndicationFeedFile, sync, status, file-related, shared, external, channels, Facebook, Instagram, API, version, 64.0, later, Calls, Special]
---

# AsyncOpSyndicationFeedFile

> Represents the sync status of file-related information shared with external
         channels such as Facebook and Instagram. This object is available in API version  64.0
      and later.

# AsyncOpSyndicationFeedFile

Represents the sync status of file-related information shared with external channels such as Facebook and Instagram. This object is available in API version 64.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AsyncOpSyndicationFeedFileNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID assigned to each syndication feed file record, and used for tracking and reference purposes. |
| AsyncOperationTrackerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID assigned to the Async Operation Tracker record, which monitors and manages the lifecycle of the syndication process.This field is a relationship field.Relationship NameAsyncOperationTrackerRefers ToAsyncOperationTracker |
| FeedContentBody | Typebase64PropertiesNillableDescriptionThe content of the feed file that is syndicated to the external platform. |
| FeedContentContentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the format of the feed file to ensure proper processing. For example, CSV, JSON, or XML files. |
| FeedContentLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe size of the feed file in bytes, which is used for validation and processing requirements. |
| FeedContentName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the feed file, which includes identifiers like timestamp or sequence number. |
| FeedScope | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionDefines the scope or category of the feed. For example, if the feed applies to main, country-specific, or language-specific catalog segments.Possible values are:CountryFeedLanguageFeedMainFeed |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionFor internal use only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionFor internal use only. |
| PlatformConnections | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe external channel or destination for syndication.Possible values are:Meta |
| SyncMode | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the type of sync being performed.Possible values are:FullSync |
