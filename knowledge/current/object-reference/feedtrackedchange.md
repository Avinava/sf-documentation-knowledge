---
title: "FeedTrackedChange"
domain: object-reference
topic: feedtrackedchange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.124Z
estimatedTokens: 1090
keywords: [FeedTrackedChange, individual, change, changes, child, record, feed, AccountFeed, API, version, 18.0, later, Calls, Usage, Standard]
---

# FeedTrackedChange

> Represents an individual field change or set of
    field changes. A FeedTrackedChange is a child object of a record feed, such as AccountFeed.
  This object is available in API version 18.0 and later.

# FeedTrackedChange

Represents an individual field change or set of field changes. A FeedTrackedChange is a child object of a record feed, such as AccountFeed. This object is available in API version 18.0 and later.

## Supported Calls

describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Group, Restricted picklist, SortDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO currency code for the field, if FieldName is a currency field. |
| FeedItemId | TypereferencePropertiesFilter, Group, SortDescriptionID of the parent feed that tracks the field change. |
| FieldName | TypestringPropertiesGroup, SortDescriptionThe name of the field that was changed.NoteThis field also tracks other events that are not related to an individual field for a parent feed. These events occur as the parent record advances through its pipeline. For example, a value of leadConverted indicates that a lead has been converted to an opportunity. For a full list of values, see Tracking of Special Events. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldCurrencyIsoCode | TypestringPropertiesGroup, Nillable, SortDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO currency code for the OldValue field, if FieldName is a currency field. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe last value of the field before it was changed. |

## Usage

A user can subscribe to a record or to another user. Changes to the record and updates from the users are displayed in the Chatter feed on the user's home page, which is a useful way to stay up-to-date with other users and with changes made to records in Salesforce. Feeds are available in API version 18.0 and later.

If you move a custom field to the Recycle Bin, all FeedTrackedChange records that track historical changes to the custom field are automatically deleted and are not restored if the custom-field is undeleted.

The following sections outline the difference between standard feeds and custom feeds.

## Standard Feeds

A standard feed is a record feed, such as AccountFeed. FeedTrackedChange records for standard feeds can only be queried via the parent feed object.

Note the following when working with standard feed items:

-   Feed items for standard feeds are read only in the API.
-   A FeedTrackedChange record is visible when you have read access on the record feed, and when the field is visible in the field-level security settings.

## Custom Feeds

If you want more control over the information provided in a record feed, such as AccountFeed, you can create a custom feed. A custom feed can replace or augment an existing record feed. For example, you might want to:

-   Disable the standard account record feed and use an Apex trigger to generate FeedTrackedChange records for the events that you want to track in the feed instead.
-   Augment the standard contact record feed by writing an API client that inserts feed items for events that are not tracked in the standard feed.

## Tracking of Special Events

The FieldName field also tracks other events that are not related to an individual field for a parent feed. These events occur as the parent record advances through its pipeline. For example, a value of leadConverted indicates that a lead has been converted to an opportunity.

Valid values for the FieldName field for multiple objects:

-   created
-   ownerAccepted
-   ownerAssignment

Additional valid values for the FieldName field for individual objects:

Account

-   accountCreatedFromLead
-   accountMerged
-   accountUpdatedByLead
-   personAccountUpdatedByLead

Case

-   closed
-   ownerEscalated

Contact

-   contactCreatedFromLead
-   contactMerged
-   contactUpdatedByLead

Contract

-   contractActivation
-   contractApproval
-   contractConversion
-   contractExpiration
-   contractTermination

Lead

-   leadConverted
-   leadMerged

Opportunity

-   opportunityCreatedFromLead

#### See Also

-   [Custom Object \_\_Feed \_\_Feed](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm "Represents the feed, specifically posts and feed-tracked changes, on a custom object.")

## Related Topics

- Custom Object __Feed __Feed (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm)
