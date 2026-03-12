---
title: "Knowledge__ka"
domain: knowledge-dev
topic: knowledgeka
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.850Z
estimatedTokens: 796
keywords: [Knowledge__ka, access, concrete, Knowledge, article, parent, versions, API, version, 39.0, later, _ka, Calls, Special, Rules]
---

# Knowledge__ka

> Provides access to the concrete object that represents a Knowledge article,
			the parent object for article versions. This object is available in API version
		39.0 and later.

# Knowledge\_\_ka

Provides access to the concrete object that represents a Knowledge article, the parent object for article versions. This object is available in API version 39.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=knowledge_dev)

#### Note

By default, the prefix for this object name is Knowledge and that is the value shown in this reference. However, this prefix can be modified by changing the **Object Name** for the Knowledge\_\_kav object in Object Manager.

This object is derived from [KnowledgeArticle](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticle.htm "Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.").

## Supported Calls

delete(), describeLayout(), describeSObjects(), query(), retrieve(), undelete()

## Special Access Rules

Lightning Knowledge must be enabled in your org. A user must have the View Articles permission enabled. Salesforce Knowledge users, unlike customer and partner users, must also be granted the Knowledge User feature license.

## Fields

| Field | Details |
| --- | --- |
| ArchivedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who archived the article. |
| ArchivedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was archived. |
| ArticleNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number automatically assigned to the article when it's created. You can't change the format or value for this field. |
| CaseAssociationCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of cases attached to the article. |
| FirstPublishedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was first published. |
| LastPublishedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was last published. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MasterLanguage | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe article's original language. Only accessible if your knowledge base supports multiple languages. |
| MigratedToFromArticle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID for the corresponding pre- or post-migration article. Contains values only in orgs that migrate from Knowledge in Salesforce Classic to Lightning Knowledge. This field is available in API version 45.0 and later. |
| TotalViewCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of views for this article. This field is available in API version 39.0 and later. |

## Related Topics

- KnowledgeArticle (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticle.htm)
