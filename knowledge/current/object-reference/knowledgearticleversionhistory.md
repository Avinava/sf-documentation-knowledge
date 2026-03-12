---
title: "KnowledgeArticleVersionHistory"
domain: object-reference
topic: knowledgearticleversionhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.506Z
estimatedTokens: 768
keywords: [KnowledgeArticleVersionHistory, read-only, access, full, history, article, API, version, 25.0, later, Calls, Special, Rules, Usage]
---

# KnowledgeArticleVersionHistory

> Enables read-only access to
        the full history of an article.
    This object is available in API version 25.0 and
    later.

# KnowledgeArticleVersionHistory

Enables read-only access to the full history of an article. This object is available in API version 25.0 and later.

Knowledge\_\_VersionHistory is derived from this object. To access this derived object, [turn on field history tracking](https://help.salesforce.com/articleView?id=tracking_field_history_for_custom_objects.htm&type=5&language=en_US) for Knowledge objects.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

Knowledge must be enabled in your org. This object respects field, entity, and record-level security. You must have at least “Read” permission on the article type or the field to access its history. For data category security, Salesforce determines access based on the categorization of the online version of an article. If there’s no online version, then security is applied based on the archived version, followed by the security of the draft version.

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data that is tracked in the history table. This field is available in API version 50.0 and later. |
| EventType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of event that is tracked in the history table. |
| FieldName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionName of the tracked field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language that the article is written in, such as French or Chinese (Traditional). Querying or searching articles in SOSL requires that you specify the Language field in the WHERE clause. The language must be the same for all article types. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe most recent value of the field before it was changed. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the article. |
| ParentSobjectType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of object that contains the field. |
| VersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID assigned to a version of the article.This is a polymorphic relationship field. |
| VersionNumber | TypeintPropertiesFilter, Group, SortDescriptionThe number assigned to a version of an article. This field is available in API version 24.0 and later. |

## Usage

Use this object to query events in the history of an article. For example, you can retrieve the number of edits a particular user has made to an article, how many times the article has been published, and so on.
