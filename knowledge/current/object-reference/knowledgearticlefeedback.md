---
title: "KnowledgeArticleFeedback"
domain: object-reference
topic: knowledgearticlefeedback
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.469Z
estimatedTokens: 1268
keywords: [KnowledgeArticleFeedback, feedback, users, Knowledge, articles, assignment, article, owner, team, take, action, API, version, 64.0, later]
---

# KnowledgeArticleFeedback

> Represents information about feedback from users on Knowledge articles
			and details about assignment of feedback to the article owner or team to take
			action. This object is available in API version 64.0 and later.

# KnowledgeArticleFeedback

Represents information about feedback from users on Knowledge articles and details about assignment of feedback to the article owner or team to take action. This object is available in API version 64.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), query(), retrieve(), delete(), update()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

A KnowledgeArticleFeedback record is created only when a user submits ‌feedback.

## Special Access Rules

Knowledge must be enabled in your org. A user must have the View Articles permission enabled. Salesforce Knowledge users, unlike customer and partner users, must also be granted the Knowledge User feature license. Knowledge Article Feedback Org Preference should also be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AssignedToId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe queue name or user ID of the feedback assignee, who reviews and takes action on the feedback.This field is a polymorphic relationship field.Relationship NameAssignedToRefers ToQueue, User |
| FeedbackResponseId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the feedback response associated with the feedback record.This field is a relationship field.Relationship NameFeedbackResponseRefers ToSurveyResponse |
| FeedbackSource | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe source of feedback. Possible values are:InternalCommunity |
| FeedbackSubmitterId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who submitted feedback.This field is a relationship field.Relationship NameFeedbackSubmitterRefers ToUser |
| IsLiked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThe answer to the Article Liked question in the feedback form.The default value is false |
| KnowledgeArticle | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the article associated with the feedback response. |
| KnowledgeArticleUrl | TypeurlPropertiesFilter, SortDescriptionThe URL of the article version associated with the feedback response. |
| KnowledgeArticleVersion | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe version of the article associated with the feedback response. |
| KnowledgeArticleVersionTitle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe title of the article version associated with the feedback response. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the feedback record was last accessed or referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the feedback record was last viewed. |
| LinkedArticleEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionInternal entity that links a Knowledge article version and survey invitation.This field is a relationship field.Relationship NameLinkedArticleEntityRefers ToLinkedArticle |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA unique name automatically assigned to the Knowledge article feedback when it's created. You can't change the format or value of this field. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe user ID of the article feedback owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReviewActionTaken | TypepicklistPropertiesFilter, Group, Sort, Nillable, UpdateDescriptionThe review action taken to address the feedback. You can configure the possible values for this picklist field. |
| ReviewComment | TypetextAreaPropertiesFilter, Nillable, Sort, UpdateDescriptionThe review comment provided by the feedback assignee. This is optional. The maximum length is 1,212 characters. |
| ReviewCompletionDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe date when the review was completed. |
| ReviewDueDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe due date for completing the feedback review. |
| ReviewStatus | TypepicklistPropertiesFilter, Group, Sort, Nillable, UpdateDescriptionThe review status of the feedback. You can configure the possible values for this picklist field. |

## Usage

Use this object to query, retrieve, or search for article feedback based on your access level to the articles. You can filter feedback records by Knowledge article, article version, or other criteria.

## SOQL Samples

The SOQL clause queries KnowledgeArticleFeedback records which aren't reviewed.

```

```

The SOQL clause queries KnowledgeArticleFeedback records for a specific article version.

```

```

## Code Examples

```
SELECT FeedbackResponseId, IsLiked, KnowledgeArticleVersion
FROM KnowledgeArticleFeedback
WHERE ReviewCompletionDate = NULL
```

```
SELECT FeedbackResponseId, IsLiked, KnowledgeArticleVersion, AssignedToId, ReviewStatus
FROM KnowledgeArticleFeedback
WHERE KnowledgeArticleVersion = 'ka0SG00000KSjjRYAT'
```
