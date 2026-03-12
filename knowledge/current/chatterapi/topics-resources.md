---
title: "Topics Resources"
domain: chatterapi
topic: topics-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:16.717Z
estimatedTokens: 390
keywords: [Topics, Resources, merge, Assign, unassign, articles, reassign, topic, article, assignment, rules, suggested, text, feed, item, endorsements, endorse, someone, groups, recently]
---

# Topics Resources

> Get, update, merge, and delete topics. Assign and unassign
            topics from articles. Get, create, and reassign topic and article assignment rules. Get
            suggested topics for a string of text, feed item, or record. Get trending topics. Get
            the files posted recently to a topic. Get topics related to another topic. Get top
            viewed articles for a topic.

# Topics Resources

Get, update, merge, and delete topics. Assign and unassign topics from articles. Get, create, and reassign topic and article assignment rules. Get suggested topics for a string of text, feed item, or record. Get trending topics. Get the files posted recently to a topic. Get topics related to another topic. Get top viewed articles for a topic.

Available resources:

| Resource | Description |
| --- | --- |
| /connect/topics | Get information about topics in the organization or create a topic. |
| /connect/topics/topicId | Information about the specified topic. Get information about a topic, update a topic’s name or description, merge topics, and delete a topic. |
| /connect/topics/data-category-groups/dataCategoryGroup/​data-categories/dataCategory/articles | Assign topics to articles and unassign topics from articles in a data category. |
| /connect/topics/data-category-rules/data-category-groups/​dataCategoryGroup/data-categories/dataCategory | Get, create, and reassign topic and article assignment rules by data category. |
| /connect/topics/suggestions | Get a list of topic suggestions for a string of text, feed item, or record. |
| /connect/topics/trending | Get the top five trending topics for the org. |
| /connect/topics/topicId/files | Returns information about the five files most recently posted to the specified topic. |
| /connect/topics/topicId/related-topics | Get up to five topics most closely related to a topic. |
| /connect/topics/topicId/top-viewed-articles | Get the top viewed articles for a topic. |

## Related Topics

- /connect/topics (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_list.htm)
- /connect/topics/topicId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_specific.htm)
- /connect/topics/data-category-groups/dataCategoryGroup/​data-categories/dataCategory/articles (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_article_assignments.htm)
- /connect/topics/data-category-rules/data-category-groups/​dataCategoryGroup/data-categories/dataCategory (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_article_assignment_rules.htm)
- /connect/topics/suggestions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_suggestions.htm)
- /connect/topics/trending (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_trending.htm)
- /connect/topics/topicId/files (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_recent_files.htm)
- /connect/topics/topicId/related-topics (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_related.htm)
- /connect/topics/topicId/top-viewed-articles (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_knowledge_topic_top_viewed_articles.htm)
- /connect/topics/topicId/endorsements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_endorsements.htm)
