---
title: "ManagedContent"
domain: object-reference
topic: managedcontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.697Z
estimatedTokens: 989
keywords: [ManagedContent, managed, content, Salesforce, CMS, workspace, Experience, Cloud, site, channel, instance, record, consistent, identifier, variants]
---

# ManagedContent

> Represents managed content in a Salesforce CMS workspace for use in an
         Experience Cloud site or a channel. The ManagedContent object represents the complete
         instance of a managed content record. It provides a consistent identifier for the managed
         content so that variants of the content item can be created over time. This object is
      available in API version 56.0 and later.

# ManagedContent

Represents managed content in a Salesforce CMS workspace for use in an Experience Cloud site or a channel. The ManagedContent object represents the complete instance of a managed content record. It provides a consistent identifier for the managed content so that variants of the content item can be created over time. This object is available in API version 56.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

ManagedContent is available when the Digital Experiences app is enabled.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique API name of the Salesforce CMS content. Name requirements:must be 80 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan't include spacescan't end with an underscorecan't contain two consecutive underscoresThis field is available in API version 62.0 and later. |
| AuthoredManagedContentSpaceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce CMS workspace ID where the content resides.This field is a relationship field.Relationship NameAuthoredManagedContentSpaceRelationship TypeLookupRefers ToManagedContentSpace |
| ContentKey | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionUnique identifier of the content. |
| ContentTypeFullyQualifiedName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe fully qualified name of the content type of this CMS content. In an enhanced CMS workspace, the ContentTypeFullyQualifiedName for each standard content type is:News: sfdc_cms__newsImage: sfdc_cms__imageDocument: sfdc_cms__documentIn a CMS workspace, the ContentTypeFullyQualifiedName for each standard content type is:News: newsImage: cms_imageDocument: cms_documentIn both CMS workspaces and enhanced CMS workspaces, the ContentTypeFullyQualifiedName for a custom content type is the same as the developer name of the custom content type.This field is available in API version 62.0 and later. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the Salesforce CMS content. When you view this content in a CMS workspace, Name is the title of the latest content version. In an enhanced CMS workspace, Name is the title of the content in the workspace’s default language.This field is available in API version 58.0 and later. |
| PrimaryLanguage | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe default language of the Salesforce CMS workspace where the content resides. |

## Usage

When you create or add content in a Salesforce CMS workspace, the content is uniquely identified by the Salesforce CMS workspace, a content key, and a default language. ManagedContent can be queried through the public sObject API. Use this object to create and retrieve information for a specific managed content.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ManagedContentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- ManagedContentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
