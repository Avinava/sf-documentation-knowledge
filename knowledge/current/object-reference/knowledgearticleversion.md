---
title: "KnowledgeArticleVersion"
domain: object-reference
topic: knowledgearticleversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.498Z
estimatedTokens: 4060
keywords: [KnowledgeArticleVersion, view, standard, article, across, articles, depending, their, version, API, 18.0, later, Calls, Special, Access]
---

# KnowledgeArticleVersion

> Provides a global view of standard article fields across all types
			of articles depending on their version. This object is available in API version
		18.0 and later.

# KnowledgeArticleVersion

Provides a global view of standard article fields across all types of articles depending on their version. This object is available in API version 18.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Use this object to:

-   Query or search generically across multiple types of articles.
-   Filter on a specific version.
-   Update standard fields in draft versions.

When you query on the archived article, the results include both the article and the article’s archived versions.

[Knowledge\_\_kav](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledge__kav.htm "Provides access to the concrete object that represents a Knowledge article version. This object is available in API version 39.0 and later.") is derived from this object.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve(), search()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

-   You can only update draft versions.
-   You can't update draft translations with the knowledgeManagement REST API.
-   For Lightning Knowledge, to create, update, or delete a Knowledge article version, use the call on Knowledge\_\_kav. For example, to delete, use Knowledge\_\_kav.delete().
-   For Knowledge in Salesforce Classic, to create, update, or delete a Knowledge article version, use the call on ArticleType\_\_kav, where ArticleType is the name of the article’s type. For example, to delete, use ArticleType\_\_kav.delete().

## Special Access Rules

Knowledge must be enabled in your org. A user must have the View Articles permission enabled. Salesforce Knowledge users, unlike customer and partner users, must also be granted the Knowledge User feature license.

## Fields

| Field Name | Details |
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
| ArticleType | TypestringPropertiesDefaulted on createFilterDescriptionIndicates the API Name of the article type. The ArticleType is assigned to the article when it's created. You can't change the value of this field. This field is available in orgs using Knowledge in Salesforce Classic in API version 26.0 and later. |
| AssignedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who assigned the article. |
| AssignedToId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user assigned to the article. |
| AssignmentDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the article was assigned to a user. |
| AssignmentDueDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe due date when an article is assigned. |
| AssignmentNote | TypetextareaPropertiesFilter, Nillable, SortDescriptionNotes to the assignee from the user who assigned the article. |
| FirstPublishedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was first published. |
| IsLatestVersion | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the article is the most current version. (true) or not (false). This field can be true on the online or published version, a draft version in the primary language, a draft version in a translation, and the latest archived version. However, you can’t filter by (PublishState=’Online’) and (IsLatestVersion=false) because the online version is also the latest version. This field is available in API version 24.0 and later. |
| IsMasterLanguage | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the article has one or more translations associated with it (true) or not (false). Only accessible if your knowledge base supports multiple languages. |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the source article has been updated since this translated version was created (true) or not (false). Only accessible if your knowledge base supports multiple languages. |
| IsVisibleInApp | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the article is visible in the Articles tab (true) or not (false). |
| IsVisibleInCsp | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the article is visible in the Customer Portal (true) or not (false). |
| IsVisibleInPkb | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the article is visible in the public knowledge base (true) or not (false). |
| IsVisibleInPrm | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the article is visible in the partner portal (true) or not (false). |
| KnowledgeArticleId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the article independent from its version. The value for this field is retrieved from the Id field of the KnowledgeArticle object. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language that the article is written in, such as French or Chinese (Traditional).Querying or searching articles in SOSL require that you specify the Language field in the WHERE clause. The language must be the same for all article types.Before API version 47.0, you must include the Language field to filter queries on Knowledge article versions. In API version 47.0 and later, you can filter queries on Knowledge article versions with or without Language depending on what you are querying. |
| LargeLanguageModel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionShows the LLM used to create an article version. This object is available in API version 59.0 and later. |
| LastPublishedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article was last published. |
| MasterVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the source article, if the article is the translation of a source article. Only accessible if your knowledge base supports multiple languages. |
| MigratedToFromArticleVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID for the corresponding pre- or post-migration article version. Contains values only in orgs that migrate from Classic to Lightning Knowledge. Available in API version 43.0 and later. |
| NextReviewDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the article must next be reviewed for accuracy. Available in API version 58.0 and later. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the article's owner. |
| PublishStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe publication status for the article:Draft: any draft articles.Online: articles published in Salesforce Knowledge.Archived: archived articles.A user must have the “Manage Articles” permission enabled to use Online.Article queries and searches in SOQL or SOSL require that you specify either the PublishStatus or the Id field in the WHERE clause. You can search for only one publication status per article type in a single SOSL query. When searching for articles with a PublishStatus of Archived, also check that IsLatestVersion equals false in your WHERE clause. |
| SourceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the source from which the article was created (Case or Reply). |
| Summary | TypetextareaPropertiesFilter, Nillable, SortDescriptionSummary of the article. Maximum size is 1000 characters. |
| Title | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. Article's title. Maximum size is 255 characters. |
| TranslationCompletedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the article was last translated. Only accessible if your knowledge base supports multiple languages. |
| TranslationExportedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the article was last exported for translation. Only accessible if your knowledge base supports multiple languages. |
| TranslationImportedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the article was last imported for translation. Only accessible if your knowledge base supports multiple languages. |
| UrlName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. Represents the article's URL. Can contain alphanumeric characters and hyphens but can't begin or end with a hyphen. This value must be unique regardless of context. (For example, a unique value allows you to get expected results when running an Apex test with SeeAllData set to false.) UrlName is case-sensitive and its maximum size is 255 characters. |
| ValidationStatus | TypepicklistPropertiesDefaulted on create, Filter, GroupDescriptionShows whether the content of the article has been validated. Possible values are Validated and Not Validated. The default value is Not Validated. This field is available in API version 24.0 or later. |
| VersionNumber | TypeintPropertiesGroup, SortDescriptionThe number assigned to a version of an article. This field is available in API version 24.0 and later. |

## Usage

Use this object to query, retrieve, or search for articles across all types of articles depending on their version. You can update draft primary articles. Also, you can delete articles that aren’t drafts. Client applications can use KnowledgeArticleVersion with describeDataCategoryGroups() and describeDataCategoryGroupStructures() to return the category groups and the category structure associated with Salesforce Knowledge.

To access an article independent of its version, use the KnowledgeArticle object.

In Lightning Knowledge, the type of article is determined by the RecordType field on the concrete derived object (for example, [Knowledge\_\_kav](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledge__kav.htm "Provides access to the concrete object that represents a Knowledge article version. This object is available in API version 39.0 and later.")). For Knowledge in Salesforce Classic, the type of article is determined by the ArticleType field and the concrete derived object uses the prefix of the article type name (for example, FAQ\_\_kav for the FAQ article type).

## SOQL Samples

The following SOQL clause uses KnowledgeArticleVersion to query all published articles from all articles complying with the classification specified in the WITH DATA CATEGORY clause:

```

```

The following SOQL clause for Lightning Knowledge uses the Offer record type to limit the query to all draft articles:

```

```

The following SOQL clause for Salesforce Classic uses the Offer article type to limit the query to all draft articles:

```

```

The following SOQL clause uses KnowledgeArticleVersion to query the IDs of all archived versions of a particular article:

```

```

## SOQL and SOSL with KnowledgeArticleVersion

-   Filter on a single value of PublishStatus for best results. To find all versions of each article, omit the PublishStatus filter, but do filter on one or more master key IDs. To retrieve all archived versions for a given article, specify a SOQL filter where IsLatestVersion is false.
-   In API version 46.0 and earlier, queries without a filter on PublishStatus return published articles by default. In API version 47.0 and later, draft, published, and archived articles are returned when Lightning Knowledge is enabled.
-   To support security, only users with the “View Draft Articles” permission see articles whose PublishStatus value is Draft. Similarly, only users with the “View Archived Articles” permission see articles whose PublishStatus value is Archived
-   Archived article versions are stored in the Knowledge\_\_kav object. To query archived article versions, specify the article Id and set IsLatestVersion='0'.
-   You can’t use binding variables in Apex SOQL statements with KnowledgeArticleVersion objects. For example, the following SOQL statement causes a compilation error.

    ```

    ```

    Instead, use dynamic SOQL as follows. See [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm "HTML (New Window)") in Apex Developer Guide.

    ```

    ```


## Other Usage for SOQL and SOSL with KnowledgeArticleVersion

To expose the *migrated\_to\_from\_id* on **KnowledgeArticle** and **KnowledgeArticleVersion** to the sObject API: expose **MigratedToFromArticleVersion** in **KnowledgeArticleVersion**.

-   For SOQL:
    -   To filter by **MigratedToFromArticleVersion**, remove any other filters.
    -   When filtering by **MigratedToFromArticleVersion**, use the '=' or 'IN' operator.
    -   When filtering by **MigratedToFromArticleVersion**, the value can't be null or empty.
-   SOSL doesn’t support **MigratedToFromArticleVersion**.

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[KnowledgeArticleVersionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversionhistory.htm "Enables read-only access to the full history of an article. This object is available in API version 25.0 and later.")

History is available for tracked fields of the object.

#### See Also

-   [KnowledgeArticle](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticle.htm "Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.")

-   [KnowledgeArticleViewStat](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleviewstat.htm#sforce_api_objects_knowledgearticleviewstat "Provides certain statistics related to the number of views for the specified article across all article types. The view count statistics are for published and archived articles only. View counts for draft articles aren’t tracked. This object is read-only and available in API version 20.0 and later.")

-   [KnowledgeArticleVoteStat](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticlevotestat.htm#sforce_api_objects_knowledgearticlevotestat "Provides the weighted rating for the specified article on a scale of 1 to 5 across all article types. This object is read-only and available in API version 20.0 and later.")

## Code Examples

```
SELECT Title, Summary
FROM KnowledgeArticleVersion
WHERE PublishStatus='Online'
AND Language = 'en_US'
WITH DATA CATEGORY Geography__c ABOVE_OR_BELOW europe__c AND Product__c BELOW All__c
```

```
SELECT Id, Title
FROM Knowledge__kav
WHERE PublishStatus='Draft'
AND Language = 'en_US'
AND RecordTypeId = '<specify RecordTypeId for Offer here>'
WITH DATA CATEGORY Geography__c AT (france__c,usa__c) AND Product__c ABOVE dsl__c
```

```
SELECT Id, Title
FROM Offer__kav
WHERE PublishStatus='Draft'
AND Language = 'en_US'
WITH DATA CATEGORY Geography__c AT (france__c,usa__c) AND Product__c ABOVE dsl__c
```

```
SELECT Id
FROM KnowledgeArticleVersion
WHERE PublishStatus='Archived'
AND IsLatestVersion=false
AND KnowledgeArticleId='kA1D00000001PQ6KAM'
```

```apex
final String PUBLISH_STATUS_ONLINE = 'Online';
List<Knowledge__kav> articles = [ 
SELECT Id FROM Knowledge__kav 
WHERE PublishStatus = :PUBLISH_STATUS_ONLINE 
];
```

## Related Topics

- Knowledge__kav (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledge__kav.htm)
- KnowledgeArticleVersionHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversionhistory.htm)
- KnowledgeArticle (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticle.htm)
- KnowledgeArticleViewStat (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleviewstat.htm)
- KnowledgeArticleVoteStat (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticlevotestat.htm)
