---
title: "Knowledge__kav"
domain: sfFieldRef
topic: knowledgekav
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.129Z
estimatedTokens: 997
keywords: [Knowledge__kav, access, concrete, Knowledge, article, version, API, 39.0, later, _kav]
---

# Knowledge__kav

> Provides access to the concrete object that represents a Knowledge article
      version. This object is available in API version 39.0 and later.

# Knowledge\_\_kav

Provides access to the concrete object that represents a Knowledge article version. This object is available in API version 39.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Knowledge\_\_kav](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledge__kav.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Knowledge Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Answer__c | Answer | textarea |  | 131072 |  |  |
| ArchivedById | User ID | reference |  | 18 |  |  |
| ArchivedDate | Archived Date | datetime |  |  |  |  |
| ArticleArchivedById | User ID | reference |  | 18 |  |  |
| ArticleArchivedDate | Article Archived Date | datetime |  |  |  |  |
| ArticleCaseAttachCount | Article Case Association Count | int | 9 |  |  |  |
| ArticleCreatedById | User ID | reference |  | 18 |  |  |
| ArticleCreatedDate | Article Created Date | datetime |  |  |  |  |
| ArticleMasterLanguage | Article Primary Language | picklist |  | 40 |  |  |
| ArticleNumber | Article Number | string |  | 30 |  |  |
| ArticleTotalViewCount | Article Total View Count | int | 9 |  |  |  |
| ArticleType | Article Type | picklist |  | 40 |  |  |
| AssignedById | User ID | reference |  | 18 |  |  |
| AssignedToId | Assigned To | reference |  | 18 |  |  |
| AssignmentDate | Assignment Date | datetime |  |  |  |  |
| AssignmentDueDate | Assignment Due Date | datetime |  |  |  |  |
| AssignmentNote | Assignment Note | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FirstPublishedDate | First Published Date | datetime |  |  |  |  |
| Id | Knowledge Article Version ID | id |  | 18 |  |  |
| IsDeleted | Is Deleted | boolean |  |  |  |  |
| IsLatestVersion | Is Latest Version | boolean |  |  |  |  |
| IsMasterLanguage | Is Primary Language | boolean |  |  |  |  |
| IsOutOfDate | Out of Date | boolean |  |  |  |  |
| IsVisibleInApp | Visible In Internal App | boolean |  |  |  |  |
| IsVisibleInCsp | Visible to Customer | boolean |  |  |  |  |
| IsVisibleInPkb | Visible In Public Knowledge Base | boolean |  |  |  |  |
| IsVisibleInPrm | Visible to Partner | boolean |  |  |  |  |
| KnowledgeArticleId | Knowledge Article ID | reference |  | 18 |  |  |
| KnowledgeGenerationSrc | Knowledge Generation Source | picklist |  | 40 |  |  |
| Language | Language | picklist |  | 40 |  |  |
| LargeLanguageModel | Large Language Model | string |  | 100 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastPublishedDate | Last Published Date | datetime |  |  |  |  |
| MasterVersionId | Knowledge Article Version ID | reference |  | 18 |  |  |
| MigratedToFromArticleVersion | Mapping info between old Article Version and migrated Article Version | string |  | 15 |  |  |
| NextReviewDate | Next Review Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PublishStatus | Publication Status | picklist |  | 40 |  |  |
| Question__c | Question | textarea |  | 255 |  |  |
| SourceId | Source | reference |  | 18 |  |  |
| Summary | Summary | textarea |  | 1000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 255 |  |  |
| TranslationCompletedDate | Translation Completed Date | datetime |  |  |  |  |
| TranslationExportedDate | Translation Exported Date | datetime |  |  |  |  |
| TranslationImportedDate | Translation Imported Date | datetime |  |  |  |  |
| UrlName | URL Name | string |  | 255 |  |  |
| VersionNumber | Version Number | int | 6 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
