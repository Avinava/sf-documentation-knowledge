---
title: "ContentDocumentHistory"
domain: object-reference
topic: contentdocumenthistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.075Z
estimatedTokens: 707
keywords: [ContentDocumentHistory, history, document, versions, 17.0, later, Calls, Special, Access, Rules, Usage]
---

# ContentDocumentHistory

> Represents the history of a document. This object is available in
  versions 17.0 and later.

# ContentDocumentHistory

Represents the history of a document. This object is available in versions 17.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

-   Customer and Partner Portal users must have the “View Content in Portal” permission to query content in libraries where they have access.
-   A user can query all versions of a document from their personal library and any version that is part of or shared with a library where they are a member, regardless of library permissions.

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the document.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Division | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionA logical segment of your organization's data. For example, if your company is organized into different business units, you could create a division for each business unit, such as “North America,” “Healthcare,” or “Consulting.” Available only if the organization has the Division permission enabled. |
| Field | TypepicklistPropertiesFilter, Group, Sort, Restricted picklistDescriptionThe name of the field that was changed. Possible values include:contentDocPublished—The document is published into a library.contentDocUnpublished—The document is archived or removed from a library, either directly or when the owning library is changed.contentDocRepublished—The document is removed from the archive.contentDocFeatured—The document is featured.contentDocSubscribed—The document is subscribed to.contentDocUnsubscribed—The document is no longer subscribed to. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe latest value of the field before it was changed. |

## Usage

Use this read-only object to query the history of a document.

#### See Also

-   [ContentDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm "Represents a document that was uploaded to a library in Salesforce Files or Salesforce CRM content. This object is available in versions 17.0 and later for Salesforce CRM.This object is available in API version 21.0 and later for Salesforce Files.")

## Related Topics

- ContentDocument (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm)
