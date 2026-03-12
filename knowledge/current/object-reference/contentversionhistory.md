---
title: "ContentVersionHistory"
domain: object-reference
topic: contentversionhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.230Z
estimatedTokens: 804
keywords: [ContentVersionHistory, history, specific, version, document, 17.0, later, Calls, Special, Access, Rules, Usage]
---

# ContentVersionHistory

> Represents the history of a specific version of a document. This
    object is available in version 17.0 and later.

# ContentVersionHistory

Represents the history of a specific version of a document. This object is available in version 17.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

-   Customer and Partner Portal users must have the “View Content in Portal” permission to query content in libraries where they have access.
-   A user can query all versions of a document from their personal library and any version that is part of or shared with a library where they are a member, regardless of library permissions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To record an event in contentVersionViewed, make sure:

-   All files are published to a Content Library.
-   The details page is viewed in Salesforce Classic.

## Fields

| Field | Details |
| --- | --- |
| ContentVersionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the version.This is a relationship field.Relationship NameContentVersionRelationship TypeLookupRefers ToContentVersion |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Division | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionA logical segment of your organization's data. For example, if your company is organized into different business units, you could create a division for each business unit, such as “North America,” “Healthcare,” or “Consulting.” Available only if the organization has the Division permission enabled. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field that was changed. Possible values include:contentVersionCreated—A new version is created.contentVersionUpdated—The title, description, or any custom field on the version is changed.contentVersionDownloaded—A version is downloaded.contentVersionViewed—The version details are viewed.contentVersionRated—The version is rated.contentVersionCommented—The version receives a comment.contentVersionDataReplaced—The new version replaces the previous version, which can happen only when the new version is uploaded immediately after the previous version. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe latest value of the field before it was changed. |

## Usage

Use this read-only object to query the history of a document version.

#### See Also

-   [ContentVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm "Represents a specific version of a document in Salesforce CRM content or Salesforce Files. This object is available in versions 17.0 and later for Salesforce CRM content documents. This object is available in versions 20.0 and later for Salesforce Files.")

## Related Topics

- ContentVersion (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm)
