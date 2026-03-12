---
title: "MarketingLink"
domain: object-reference
topic: marketinglink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.735Z
estimatedTokens: 817
keywords: [MarketingLink, Account, Engagement, marketing, link, record, either, custom, redirect, file, synced, Salesforce, API, version, 42.0]
---

# MarketingLink

> Represents an Account Engagement marketing link record, either a
			custom redirect or a file, that has been synced to Salesforce. This object is
		available in API version 42.0 and later.

# MarketingLink

Represents an Account Engagement marketing link record, either a custom redirect or a file, that has been synced to Salesforce. This object is available in API version 42.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

To access this object, your org must use Account Engagement and users need the CRM User or Sales User permission set.

## Fields

| Field Name | Details |
| --- | --- |
| CampaignId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related campaign. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp that indicates when the current user last viewed a record that is related to this marketing link. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed this record. If this value is null, this record might only have been referenced (see LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionThe name of the marketing link. |
| TargetUrl | TypeurlPropertiesFilter, Group, SortDescriptionThe target URL of the marketing link. |
| TotalTrackedLinkClicks | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe total number of clicks for the redirect. Includes clicks from visitors and identified prospects. When a person clicks the link multiple times, each click is counted in this number. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the type of marketing link record, either a custom redirect or file. |
| UniqueTrackedLinkClicks | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of unique clicks for the redirect. Includes clicks from visitors and identified prospects. Only the first click is counted in this number. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MarketingFormEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[MarketingLinkFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- MarketingFormEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- MarketingLinkFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
