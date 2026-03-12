---
title: "LinkedArticle"
domain: knowledge-dev
topic: linkedarticle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.933Z
estimatedTokens: 856
keywords: [LinkedArticle, knowledge, article, attached, work, order, line, item, API, version, 37.0, later, Calls, Special, Access]
---

# LinkedArticle

> Represents a knowledge article that is attached to a work order,
			work order line item, or work type. This object is available in API version 37.0
		and later.

# LinkedArticle

Represents a knowledge article that is attached to a work order, work order line item, or work type. This object is available in API version 37.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Knowledge must be enabled in your org. Field Service must be enabled. Only users that have access to the Knowledge article and the parent record linked to it can access this object.

In Knowledge in Salesforce Classic, only Field Service objects such as Work Order, Work Type, and Work Order Line Item are supported for linked articles. In Lightning Knowledge, other social objects such as Chat, Messaging, Voice Call, and Social Post are supported for linked articles.

To call update() to attach or detach articles, enable the Read user permission on the Knowledge object and the Edit user permission on the object whose article you update. Available in API version 58.0 and later.

## Fields

| Field Name | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| KnowledgeArticleId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the Knowledge article attached to the record. The label in the user interface is Knowledge Article ID. |
| KnowledgeArticleVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe version of the Knowledge article attached to the record. This field lists the title of the attached version and links to the version. The label in the user interface is Article Version.When you attach an article to a work order, that version of the article stays associated with the work order, even if later versions are published. If needed, you can detach and reattach an article to a work order to link the latest version. |
| LinkedEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the record that the Knowledge article is attached to. The label in the user interface is Linked Record ID. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe title of the article. The label in the user interface is Article Title. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the article’s record type, if used. This field is only available for Lightning Knowledge. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescription(Read only) The type of record that the Knowledge article is attached to. For example, work order. The label in the user interface is Linked Object Type. |

## Usage

Admins can customize linked articles’ page layouts, fields, validation rules, and more from the Linked Articles page in Setup.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

LinkedArticleChangeEvent (API version 62.0)

Change events are available for the object.

LinkedArticleFeed

Feed tracking is available for the object.

LinkedArticleHistory

History is available for tracked fields of the object.
