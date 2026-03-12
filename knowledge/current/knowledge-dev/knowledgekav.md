---
title: "Knowledge__kav"
domain: knowledge-dev
topic: knowledgekav
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.872Z
estimatedTokens: 2754
keywords: [Knowledge__kav, access, concrete, Knowledge, article, version, API, 39.0, later, _kav, Calls, Special, Rules]
---

# Knowledge__kav

> Provides access to the concrete object that represents a Knowledge article
      version. This object is available in API version 39.0 and later.

# Knowledge\_\_kav

Provides access to the concrete object that represents a Knowledge article version. This object is available in API version 39.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=knowledge_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=knowledge_dev)

#### Note

By default, the prefix for this object name is Knowledge and that is the value shown in this reference. However, this prefix can be modified by changing the **Object Name** for the Knowledge\_\_kav object in Object Manager.

This object is derived from [KnowledgeArticleVersion](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversion.htm "Provides a global view of standard article fields across all types of articles depending on their version. This object is available in API version 18.0 and later.").

## Supported Calls

create(), describeLayout(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

This object doesn’t retrieve <ActionOverrides>.

## Special Access Rules

Lightning Knowledge must be enabled in your org. A user must have the View Articles permission enabled. Salesforce Knowledge users, unlike customer and partner users, must also be granted the Knowledge User feature license.

## Fields

| Field | Details |
| --- | --- |
| ArchivedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who archived the article. |
| ArchivedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the article version was archived. |
| ArticleArchivedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who archived the article. |
| ArticleArchivedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the article was archived. |
| ArticleCaseAttachCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of cases where this article is attached. |
| ArticleCreatedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who created the article. |
| ArticleCreatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the article was created. |
| ArticleMasterLanguage | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe article's original language. Only accessible if your knowledge base supports multiple languages. |
| ArticleNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe unique number automatically assigned to the article when it's created. You can't change the format or value for this field. |
| ArticleTotalViewCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of views for the article. |
| AssignedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who assigned the article. |
| AssignedToId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user assigned to the article. |
| AssignmentDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the article was assigned to a user. |
| AssignmentDueDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe due date when an article is assigned. |
| AssignmentNote | TypetextareaPropertiesFilter, Nillable, SortDescriptionNotes to the assignee from the user who assigned the article. |
| ExternalRef | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the item being referenced on the external system. For example, the ID of a document on a Google Drive or a page on Confluence. |
| ExternalSourceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionReference to the external Knowledge data source object. |
| ExternalUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionThe URL of the knowledge content referenced in an external system. For example, the ID of a document in Google Drive or a page in Confluence. |
| FirstPublishedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was first published. |
| IsExternalData | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the data is external to the customer’s knowledge base (true) or not (false). |
| IsLatestVersion | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the article is the most current version. (true) or not (false). This field can be true on the online or published version, a draft version in the primary language, a draft version in a translation, and the latest archived version. However, you can’t filter by (PublishState=’Online’) and (IsLatestVersion=false) because the online version is also the latest version. This field is available in API version 24.0 and later. |
| IsMasterLanguage | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the article has one or more translations associated with it (true) or not (false). |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the source article has been updated since this translated version was created (true) or not (false). |
| IsVisibleInApp | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the article is visible in the Articles tab (true) or not (false). |
| IsVisibleInCsp | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the article is visible in the Customer Portal (true) or not (false). |
| IsVisibleInPkb | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the article is visible in the public knowledge base (true) or not (false). |
| IsVisibleInPrm | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the article is visible in the partner portal (true) or not (false). |
| KnowledgeArticleId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the article independent from its version. The value for this field is retrieved from the Id field of the KnowledgeArticle object. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language that the article is written in, such as French or Chinese (Traditional).Querying or searching articles in SOSL require that you specify the Language field in the WHERE clause. The language must be the same for all article types.Before API version 47.0, you must include the Language field to filter queries on Knowledge article versions. In API version 47.0 and later, you can filter queries on Knowledge article versions with or without Language depending on what you are querying. |
| LastPublishedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was last published. |
| MasterVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the source article, if the article is the translation of a source article. Only accessible if your knowledge base supports multiple languages. |
| MigratedToFromArticleVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID for the corresponding pre- or post-migration article version. Contains values only in orgs that migrate from Classic to Lightning Knowledge. Available in API version 43.0 and later. |
| NextReviewDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article must next be reviewed for accuracy. Available in API version 58.0 and later. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the article's owner. |
| PublishStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe publication status for the article:Draft: any draft articles.Online: articles published in Salesforce Knowledge.Archived: archived articles.A user must have the “Manage Articles” permission enabled to use Online.Article queries and searches in SOQL or SOSL require that you specify either the PublishStatus or the Id field in the WHERE clause. You can search for only one publication status per article type in a single SOSL query. When searching for articles with a PublishStatus of Archived, also check that IsLatestVersion equals false in your WHERE clause. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the API Name that describes the type of article. Use the record type to determine the article structure and other settings for different types of content. |
| SourceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the source from which the article was created (Case or Reply). This field is only accessible from the API and isn’t visible in the Salesforce UI. |
| Summary | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSummary of the article. Maximum size is 1000 characters. |
| Title | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Article's title. Maximum size is 255 characters. |
| TranslationCompletedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the article was last translated. Only accessible if your knowledge base supports multiple languages. |
| TranslationExportedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the article was last exported for translation. Only accessible if your knowledge base supports multiple languages. |
| TranslationImportedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the article was last imported for translation. Only accessible if your knowledge base supports multiple languages. |
| UrlName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Represents the article's URL. Can contain alphanumeric characters and hyphens but can't begin or end with a hyphen. Use a unique value regardless of context. (For example, a unique value allows you to get expected results when running an Apex test with SeeAllData set to false.) UrlName is case-sensitive and its maximum size is 255 characters. |
| ValidationStatus | TypepicklistPropertiesDefaulted on create, Filter, GroupDescriptionShows whether the content of the article has been validated. Possible values are Validated and Not Validated. The default value is Not Validated. This field is available in API version 24.0 or later. |
| VersionNumber | TypeintPropertiesGroup, SortDescriptionThe number assigned to a version of an article. This field is available in API version 24.0 and later. |

## Related Topics

- KnowledgeArticleVersion (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversion.htm)
