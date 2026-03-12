---
title: "Manage Knowledge with REST APIs"
domain: knowledge-dev
topic: manage-knowledge-with-rest-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.523Z
estimatedTokens: 1905
keywords: [Manage, Knowledge, REST, APIs, provide, programmatic, access, actions, perform, base, article, translations]
---

# Manage Knowledge with REST APIs

> REST APIs provide programmatic access to many actions you can perform on your Knowledge
  base, an article, and its translations.

# Manage Knowledge with REST APIs

REST APIs provide programmatic access to many actions you can perform on your Knowledge base, an article, and its translations.

-   **[Archive the Primary Version of an Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_archive_master_version.htm)**
    Archives the primary version of an article. The actions are defined by the field change you request on the resource. To archive the primary version, use "publishStatus":"Archived". To schedule a date for archiving, use "archiveScheduleDate" : <date>.
-   **[Assign a Task Related to a Primary Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_assign_article_master.htm)**
    Assigns a task to a user for a primary article, including due date and instructions. The actions are defined by the field change you request on the resource.
-   **[Assign a Task Related to a Translation](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_assign_article_translation.htm)**
    Assigns a task to a user for a translated article, including due date and instructions. The actions are defined by the field change you request on the resource.
-   **[Delete a Primary Version of an Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_delete_article_version.htm)**
    Deletes the primary version of an article.
-   **[Delete a Translated Version of an Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_delete_translated_version.htm)**
    Deletes a translated version of an article.
-   **[Edit an Online Version of a Primary Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_edit_online_master.htm)**
    Creates a draft copy of the online version of a primary article. This does not unpublish the online version.
-   **[Get a List of Salesforce Site and Experience Cloud Site URLs for an Online Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_site_community_list.htm)**
    Returns a list of article URLs in Salesforce Sites, Experience Cloud sites, or both. Article URLs from Salesforce Sites are returned if the article is visible in a public knowledge base. Article URLs from Experience Cloud sites are returned if the article is visible to partners or customers. This API creates the URLs for the **Insert URL into Email** Lightning action.
-   **[Publish the Primary Version of an Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_publish_master_version.htm)**
    Publishes the primary version of an article.
-   **[Restore an Archived Version of an Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_restore_archived_version.htm)**
    Restores an archived version of the article. If versionNumber isn’t specified, restores the latest version of the archived article.
-   **[Retrieve Article Metadata](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_retrieve_article_metadata.htm)**
    Retrieves the metadata of an article.
-   **[Get Knowledge Language Settings](atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_knowledge_retrieve_language.htm)**
    Gets the existing Knowledge language settings, including the default knowledge language and a list of supported Knowledge language information. This resource can be used in API version 31.0 and later.
-   **[Retrieve a Version of an Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_retrieve_article_version.htm)**
    Retrieves the version ID of an article.
-   **[Search for Metadata Elements of a Primary Version](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_retrieve_master_version_metadata.htm)**
    Searches for metadata elements of the online primary version of an article.
-   **[Search for Metadata Elements of a Translated Version](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_retrieve_translated_version_metadata.htm)**
    Searches for metadata elements of a translated version of an article.
-   **[Set a Translated Article Version to Complete](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_set_translation_complete.htm)**
    Sets a translated article version to complete.
-   **[Set a Translated Article Version to Incomplete](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_set_translation_incomplete.htm)**
    Sets a translated article version to incomplete.
-   **[Submit an Article for Translation](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_submit_for_translation.htm)**
    Submits an article for translation for multiple languages and blocks translations for inactive languages.
-   **[Unpublish the Primary Version of an Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_unpublish_master_version.htm)**
    Unpublishes the online primary version of an article when there isn’t an existing draft article.
-   **[Unpublish the Online Version of a Translated Article](atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_edit_online_translation.htm)**
    Unpublishes the online version of a translated article.
-   **[Parameterized Search](atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_search_parameterized.htm)**
    Executes a simple REST search using parameters instead of a SOSL clause. Indicate parameters in the URI with the GET method. Or, use the POST method to create complex searches in a request body.
-   **[Search](atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_search.htm)**
    Executes the specified SOSL search. The search string must be URL-encoded.
-   **[Search Scope and Order](atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_search_scope_order.htm)**
    Returns an ordered list of objects in the default global search scope of a logged-in user. Global search keeps track of which objects the user interacts with and how often, and arranges the search results accordingly. Objects used most frequently appear at the top of the list.
-   **[Search Result Layouts](atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_search_layouts.htm)**
    Returns search result layout information for the objects in the query string. For each object, this call returns the list of fields displayed on the search results page as columns, the number of rows displayed on the first page, and the label used on the search results page.
-   **[Search for Records Suggested by Autocomplete and Instant Results](atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_search_suggest_records.htm)**
    Returns a list of suggested records whose names match the user’s search string. The suggestions resource provides autocomplete results and instant results for users to navigate directly to likely relevant records, before performing a full search. This resource is available in REST API version 32.0 and later.
-   **[Search Suggested Article Title Matches](atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_search_suggest_title_matches.htm)**
    Returns a list of Salesforce Knowledge article titles that match the user’s search query string. Provides a shortcut to navigate directly to likely relevant articles before the user performs a search. This resource is available in REST API version 30.0 and later.
-   **[Search Suggested Queries](atlas.en-us.knowledge_dev.meta/knowledge_dev/resources_search_suggest_queries.htm)**
    Returns a list of suggested searches based on the user’s query string text matching searches that other users have performed in Salesforce Knowledge. Provides a way to improve search effectiveness, before the user performs a search. This resource is available in REST API version 30.0 and later.

## Related Topics

- Archive the Primary Version of an Article (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_archive_master_version.htm)
- Assign a Task Related to a Primary Article (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_assign_article_master.htm)
- Assign a Task Related to a Translation (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_assign_article_translation.htm)
- Delete a Primary Version of an Article (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_delete_article_version.htm)
- Delete a Translated Version of an Article (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_delete_translated_version.htm)
- Edit an Online Version of a Primary Article (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_edit_online_master.htm)
- Get a List of Salesforce Site and Experience Cloud Site URLs for an Online Article (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_site_community_list.htm)
- Publish the Primary Version of an Article (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_publish_master_version.htm)
- Restore an Archived Version of an Article (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_restore_archived_version.htm)
- Retrieve Article Metadata (atlas.en-us.knowledge_dev.meta/knowledge_dev/knowledge_REST_retrieve_article_metadata.htm)
