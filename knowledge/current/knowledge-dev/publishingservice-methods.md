---
title: "PublishingService Methods"
domain: knowledge-dev
topic: publishingservice-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.418Z
estimatedTokens: 1230
keywords: [PublishingService]
---

# PublishingService Methods

> The following are methods for PublishingService. All methods are static.

# PublishingService Methods

The following are methods for PublishingService. All methods are static.

-   **[archiveOnlineArticle(articleId, scheduledDate)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_archiveOnlineArticle.htm)**
    Archives an online version of an article. If the specified scheduledDate is null, the article is archived immediately. Otherwise, it archives the article on the scheduled date.
-   **[assignDraftArticleTask(articleId, assigneeId, instructions, dueDate, sendEmailNotification)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_assignDraftArticleTask.htm)**
    Assigns a review task related to a draft article.
-   **[assignDraftTranslationTask(articleVersionId, assigneeId, instructions, dueDate, sendEmailNotification)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_assignDraftTranslationTask.htm)**
    Assigns a review task related to a draft translation.
-   **[cancelScheduledArchivingOfArticle(articleId)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_cancelScheduledArchivingOfArticle.htm)**
    Cancels the scheduled archiving of an online article.
-   **[cancelScheduledPublicationOfArticle(articleId)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_cancelScheduledPublicationOfArticle.htm)**
    Cancels the scheduled publication of a draft article.
-   **[completeTranslation(articleVersionId)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_completeTranslation.htm)**
    Puts a translation in a completed state that is ready to publish.
-   **[deleteArchivedArticle(articleId)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_deleteArchivedArticle.htm)**
    Deletes an archived article.
-   **[deleteArchivedArticleVersion(articleId, versionNumber)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_deleteArchivedArticleVersion.htm)**
    Deletes a specific archived version of a published article.
-   **[deleteDraftArticle(articleId)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_deleteDraftArticle.htm)**
    Deletes a draft article.
-   **[deleteDraftTranslation(articleVersionId)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_deleteDraftTranslation.htm)**
    Deletes a draft translation.
-   **[editArchivedArticle(articleId)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_editArchivedArticle.htm)**
    Creates a draft article from the archived primary version and returns the new draft primary version ID of the article.
-   **[editOnlineArticle(articleId, unpublish)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_editOnlineArticle.htm)**
    Creates a draft article from the online version and returns the new draft primary version ID of the article. Also, unpublishes the online article, if unpublish is set to true.
-   **[editPublishedTranslation(articleId, language, unpublish)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_editPublishedTranslation.htm)**
    Creates a draft version of the online translation for a specific language and returns the new draft primary version ID of the article. Also, unpublishes the article, if set to true.
-   **[publishArticle(articleId, flagAsNew)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_publishArticle.htm)**
    Publishes an article. If flagAsNew is set to true, the article is published as a major version.
-   **[restoreOldVersion(articleId, versionNumber)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_restoreOldVersion.htm)**
    Creates a draft article from an existing online article based on the specified archived version of the article and returns the article version ID.
-   **[scheduleForPublication(articleId, scheduledDate)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_scheduleForPublication.htm)**
    Schedules the article for publication as a major version. If the specified date is null, the article is published immediately.
-   **[setTranslationToIncomplete(articleVersionId)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_setTranslationToIncomplete.htm)**
    Sets a draft translation that is ready for publication back to “in progress” status.
-   **[submitForTranslation(articleId, language, assigneeId, dueDate)](atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_submitForTranslation.htm)**
    Submits an article for translation to the specified language. Also assigns the specified user and due date to the submittal and returns new ID of the draft translation.

## Related Topics

- archiveOnlineArticle(articleId, scheduledDate) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_archiveOnlineArticle.htm)
- assignDraftArticleTask(articleId, assigneeId, instructions, dueDate, sendEmailNotification) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_assignDraftArticleTask.htm)
- assignDraftTranslationTask(articleVersionId, assigneeId, instructions, dueDate, sendEmailNotification) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_assignDraftTranslationTask.htm)
- cancelScheduledArchivingOfArticle(articleId) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_cancelScheduledArchivingOfArticle.htm)
- cancelScheduledPublicationOfArticle(articleId) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_cancelScheduledPublicationOfArticle.htm)
- completeTranslation(articleVersionId) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_completeTranslation.htm)
- deleteArchivedArticle(articleId) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_deleteArchivedArticle.htm)
- deleteArchivedArticleVersion(articleId, versionNumber) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_deleteArchivedArticleVersion.htm)
- deleteDraftArticle(articleId) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_deleteDraftArticle.htm)
- deleteDraftTranslation(articleVersionId) (atlas.en-us.knowledge_dev.meta/knowledge_dev/apex_KbManagement_PublishingService_deleteDraftTranslation.htm)
