---
title: "KnowledgeArticle"
domain: object-reference
topic: knowledgearticle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.448Z
estimatedTokens: 1114
keywords: [KnowledgeArticle, read-only, access, article, ability, primary, API, version, 19.0, later, Calls, Special, Rules, Usage, SOQL]
---

# KnowledgeArticle

> Provides read-only access to an article and the ability to delete the
			primary article. This object is available in API version 19.0 and
		later.

# KnowledgeArticle

Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Unlike KnowledgeArticleVersion, the ID of a KnowledgeArticle record is identical irrespective of the article's version (status).

[Knowledge\_\_ka](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledge__ka.htm "Provides access to the concrete object that represents a Knowledge article, the parent object for article versions. This object is available in API version 39.0 and later.") is derived from this object.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Knowledge must be enabled in your org. A user must have the View Articles permission enabled. Salesforce Knowledge users, unlike customer and partner users, must also be granted the Knowledge User feature license.

## Fields

| Field Name | Details |
| --- | --- |
| ArchivedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who archived the article. |
| ArchivedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was archived. |
| ArticleNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number automatically assigned to the article when it's created. You can't change the format or value for this field. |
| CaseAssociationCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of cases attached to the article. |
| FirstPublishedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was first published. |
| IsGeneratedByLlm | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionTrue if the first version of an article was created with an LLM. This object is available in API version 59.0 and later. |
| LastPublishedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was last published. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user has not viewed this record or list view, though they might have accessed it (LastReferencedDate) |
| MasterLanguage | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe article's original language. Only accessible if your knowledge base supports multiple languages. |
| MigratedToFromArticle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID for the corresponding pre- or post-migration article. Contains values only in orgs that migrate from Knowledge in Salesforce Classic to Lightning Knowledge. This field is available in API version 45.0 and later. |
| TotalViewCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of views for this article. This field is available in API version 39.0 and later. |

## Usage

Use this object to query or retrieve articles. KnowledgeArticle can be used in a SOQL clause, but doesn’t provide access to the fields from the article. Provides read-only access to an article and the ability to delete the primary article.

## Usage for SOQL with KnowledgeArticle

To expose the migrated\_to\_from\_id column on KnowledgeArticle and KnowledgeArticleVersion to the sObject API: expose MigratedToFromArticle in KnowledgeArticle.

For SOQL:

-   To filter by MigratedToFromArticle, remove any other filters.
-   When filtering by MigratedToFromArticle, use the '=' or 'IN' operator.
-   When filtering by MigratedToFromArticle, the value can't be null or empty.

#### See Also

-   [KnowledgeArticleVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm "Provides a global view of standard article fields across all types of articles depending on their version. This object is available in API version 18.0 and later.")

## Related Topics

- Knowledge__ka (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledge__ka.htm)
- KnowledgeArticleVersion (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm)
