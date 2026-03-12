---
title: "Salesforce Knowledge Metadata API"
domain: knowledge-dev
topic: salesforce-knowledge-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.502Z
estimatedTokens: 576
keywords: [Salesforce, Knowledge, Metadata, API, manage, articles, layouts, data, categories]
---

# Salesforce Knowledge Metadata API

> You can manage articles, page layouts, and data categories with the Metadata
  API.

# Salesforce Knowledge Metadata API

You can manage articles, page layouts, and data categories with the Metadata API.

The main purpose of Metadata API is to move metadata between Salesforce orgs during the development process. Use Metadata API to deploy, retrieve, create, update, or delete customization information, such as custom object definitions and page layouts. Metadata API doesn’t work directly with business data.

For generic Metadata API information see the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "HTML (New Window)").

-   **[ArticleType](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_articletype.htm)**
    Represents the metadata associated with an article type.
-   **[KnowledgeSettings](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_knowledgesettings.htm)**
    Represents the metadata used to manage settings for Salesforce Knowledge.
-   **[DataCategoryGroup](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_datacategorygroup.htm)**
    Represents a data category group.
-   **[SearchSettings](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_searchsettings.htm)**
    Represents an org's search settings.
-   **[SearchLayouts](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_searchlayouts.htm)**
    Represents the metadata associated with the search layouts for an object. You can customize which fields to display for users in search results, search filter fields, lookup dialogs, and recent record lists on tab home pages. You can access SearchLayouts only by accessing its encompassing CustomObject.
-   **[SynonymDictionary](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_synonymdictionary.htm)**
    Represents a set of synonym groups, which are groups of words or phrases that are treated as equivalent in users’ searches. You can define synonym groups to optimize search results for acronyms, variations of product names, and other terminology unique to your organization.
-   **[ExternalDataSource](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_externaldatasource.htm)**
    Represents the metadata associated with an external data source. Create external data sources to manage connection details for integration with data and content that are stored outside your Salesforce org.

## Related Topics

- ArticleType (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_articletype.htm)
- KnowledgeSettings (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_knowledgesettings.htm)
- DataCategoryGroup (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_datacategorygroup.htm)
- SearchSettings (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_searchsettings.htm)
- SearchLayouts (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_searchlayouts.htm)
- SynonymDictionary (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_synonymdictionary.htm)
- ExternalDataSource (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_externaldatasource.htm)
