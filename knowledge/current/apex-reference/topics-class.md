---
title: "Topics Class"
domain: apex-reference
topic: topics-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.717Z
estimatedTokens: 19259
namespace: ConnectApi
keywords: [Topics, topic, assignTopic, communityId, recordId, topicId, API, Version, Requires, Chatter, Usage, assignTopicByName, topicName, createTopic, createTopicDataCategoryRules]
---

# Topics Class

> Create a topic.

**Namespace:** `ConnectApi`

# Topics Class

Access information about topics, such as their descriptions, the number of people talking about them, related topics, and information about groups contributing to the topic. Update a topic’s name or description, merge topics, and add and remove topics from records and feed items.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Topics Methods

These methods are for Topics. All methods are static.

These methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

-   [getGroupsRecentlyTalkingAboutTopic(communityId, topicId)](#apex_ConnectAPI_Topics_getGroupsRecentlyTalkingAboutTopic "Get information about the five groups that most recently contributed to a topic.")
-   [getRecentlyTalkingAboutTopicsForGroup(communityId, groupId)](#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForGroup "Get up to five topics most recently used in a group.")
-   [getRecentlyTalkingAboutTopicsForUser(communityId, userId)](#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForUser "Get up to five topics most recently used by a user.")

All other methods in this class count toward the [Salesforce Platform total API request allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm), which are per org and span a 24-hour period.

-   **[assignTopic(communityId, recordId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_assignTopic)**
    Assign a topic to a record or feed item.
-   **[assignTopicByName(communityId, recordId, topicName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_assignTopicByName)**
    Assign a topic to a record or feed item.
-   **[createTopic(communityId, name, description)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_createTopic_10)**
    Create a topic.
-   **[createTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory, topicNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_createTopicDataCategoryRules_3)**
    Create topic and article assignment rules by data category.
-   **[deleteTopic(communityId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_deleteTopic)**
    Delete a topic.
-   **[getGroupsRecentlyTalkingAboutTopic(communityId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getGroupsRecentlyTalkingAboutTopic)**
    Get information about the five groups that most recently contributed to a topic.
-   **[getRecentlyTalkingAboutTopicsForGroup(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForGroup)**
    Get up to five topics most recently used in a group.
-   **[getRecentlyTalkingAboutTopicsForUser(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForUser)**
    Get up to five topics most recently used by a user.
-   **[getRelatedTopics(communityId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRelatedTopics)**
    Get up to five topics most closely related to a topic.
-   **[getTopic(communityId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopic)**
    Get a topic.
-   **[getTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicDataCategoryRules_2)**
    Get topic and article assignment rules by data category.
-   **[getTopics(communityId, recordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics)**
    Get the first page of topics assigned to a record or feed item.
-   **[getTopics(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics_2)**
    Get the first page of topics for the org or Experience Cloud site.
-   **[getTopics(communityId, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics_3)**
    Get the first page of sorted topics for the org or community.
-   **[getTopics(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics_4)**
    Get a page of topics.
-   **[getTopics(communityId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics_5)**
    Get a page of sorted topics.
-   **[getTopics(communityId, q, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics_6)**
    Get the sorted topics that match the search criteria.
-   **[getTopics(communityId, q, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics_7)**
    Get a page of topics that match the search criteria.
-   **[getTopics(communityId, q, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics_8)**
    Get a page of sorted topics that match the search criteria.
-   **[getTopics(communityId, q, exactMatch)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics_9)**
    Get the topic that matches the exact, case-insensitive name.
-   **[getTopicsOrFallBackToRenamedTopics(communityId, q, exactMatch, fallBackToRenamedTopics)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopics_10)**
    Get the most recent renamed topic match, if there isn’t an exact match.
-   **[getTopicSuggestions(communityId, recordId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestions)**
    Get up to a specified number of suggested topics for a record or feed item.
-   **[getTopicSuggestions(communityId, recordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestions_2)**
    Get suggested topics for a record or feed item.
-   **[getTopicSuggestionsForText(communityId, text, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestionsForText)**
    Get up to a specified number of suggested topics for a string of text.
-   **[getTopicSuggestionsForText(communityId, text)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestionsForText_2)**
    Get suggested topics for a string of text.
-   **[getTrendingTopics(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTrendingTopics)**
    Get trending topics for the org or Experience Cloud site.
-   **[getTrendingTopics(communityId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTrendingTopics_2)**
    Get up to a specified number of trending topics for the org or Experience Cloud site.
-   **[mergeTopics(communityId, topicId, idsToMerge)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_mergeTopics)**
    Merge up to five secondary topics with a primary topic.
-   **[reassignTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory, topicNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_reassignTopicDataCategoryRules_4)**
    Reassign topic and article assignment rules by data category by deleting the existing rules and creating new rules.
-   **[reassignTopicsByName(communityId, recordId, topicNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_reassignTopicsByName)**
    Reassign all the topics on a record or feed item, that is, remove all the assigned topics on a record or feed item and add topics. Optionally, provide a list of suggested topics to assign to a record or feed item to improve future topic suggestions.
-   **[unassignTopic(communityId, recordId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_unassignTopic)**
    Remove a topic from a record or feed item.
-   **[updateTopic(communityId, topicId, topic)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_updateTopic)**
    Update the description or name of a topic or merge up to five secondary topics with a primary topic.
-   **[updateTopicsForArticlesInDataCategory(communityId, dataCategoryGroup, dataCategory, articleTopicAssignmentJob)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_updateTopicsForArticlesInDataCategory_1)**
    Assign topics to articles and unassign topics from articles in a data category.

### assignTopic(communityId, recordId, topicId)

Assign a topic to a record or feed item.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic assignTopic(String communityId, String recordId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Assign Topics permission can add existing topics to records or feed items. Administrators must enable topics for objects before users can add topics to records of that object type.

### assignTopicByName(communityId, recordId, topicName)

Assign a topic to a record or feed item.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic assignTopicByName(String communityId, String recordId, String topicName)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the record or feed item to which to assign the topic.

topicName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of a new or existing topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Assign Topics permission can add existing topics to records or feed items. Only users with the Create Topics permission can add new topics to records or feed items. Administrators must enable topics for objects before users can add topics to records of that object type.

### createTopic(communityId, name, description)

Create a topic.

#### API Version

36.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic createTopic(String communityId, String name, String description)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the topic.

description

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The description of the topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Create Topics permission can create a topic.

### createTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory, topicNames)

Create topic and article assignment rules by data category.

#### API Version

40.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage createTopicDataCategoryRules(String communityId, String dataCategoryGroup, String dataCategory, ConnectApi.TopicNamesInput topicNames)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

dataCategoryGroup

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category group used by articles.

dataCategory

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category used by articles.

topicNames

Type: [ConnectApi.TopicNamesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_topic_name_collection.htm "A list of topic names to replace currently assigned topics. Also a list of suggested topics to assign.")

A ConnectApi.TopicNamesInput object with the names of topics to assign to articles in a data category.

#### Return Value

Type: [ConnectApi.TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm#apex_connectapi_output_topicPage "Page of topics.")

### deleteTopic(communityId, topicId)

Delete a topic.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static Void deleteTopic(String communityId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: Void

#### Usage

Only users with the Delete Topics or Modify All Data permission can delete topics.

Topic deletion is asynchronous. If a topic is requested before the deletion completes, the response is successful and the isBeingDeleted property of ConnectApi.Topic is true in version 33.0 and later. If a topic is requested after the deletion completes, the response is ConnectApi.NotFoundException.

### getGroupsRecentlyTalkingAboutTopic(communityId, topicId)

Get information about the five groups that most recently contributed to a topic.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupSummaryPage getGroupsRecentlyTalkingAboutTopic(String communityId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: [ConnectApi.​Chatter​Group​SummaryPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupSummaryPage.htm "Page of group summaries.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetGroupsRecentlyTalkingAboutTopic(communityId, topicId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetGroupsRecentlyTalkingAboutTopic "Register a ConnectApi.ChatterGroupSummaryPage object to be returned when the matching ConnectApi.getGroupsRecentlyTalkingAboutTopic method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getRecentlyTalkingAboutTopicsForGroup(communityId, groupId)

Get up to five topics most recently used in a group.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.TopicPage getRecentlyTalkingAboutTopicsForGroup(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRecentlyTalkingAboutTopicsForGroup(communityId, groupId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetRecentlyTalkingAboutTopicsForGroup "Register a ConnectApi.​TopicPage object to be returned when the matching ConnectApi.getRecentlyTalkingAboutTopicsForGroup method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getRecentlyTalkingAboutTopicsForUser(communityId, userId)

Get up to five topics most recently used by a user.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.TopicPage getRecentlyTalkingAboutTopicsForUser(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRecentlyTalkingAboutTopicsForUser(communityId, userId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetRecentlyTalkingAboutTopicsForUser "Register a ConnectApi.​TopicPage object to be returned when the matching ConnectApi.getRecentlyTalkingAboutTopicsForUser method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getRelatedTopics(communityId, topicId)

Get up to five topics most closely related to a topic.

Two topics that are assigned to the same feed item at least three times are related.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getRelatedTopics(String communityId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRelatedTopics(communityId, topicId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetRelatedTopics "Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getRelatedTopics method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getTopic(communityId, topicId)

Get a topic.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic getTopic(String communityId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

### getTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory)

Get topic and article assignment rules by data category.

#### API Version

40.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopicDataCategoryRules(String communityId, String dataCategoryGroup, String dataCategory)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

dataCategoryGroup

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category group used by articles.

dataCategory

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category used by articles.

#### Return Value

Type: [ConnectApi.TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm#apex_connectapi_output_topicPage "Page of topics.")

### getTopics(communityId, recordId)

Get the first page of topics assigned to a record or feed item.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, String recordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

Administrators must enable topics for objects before users can add topics to records of that object type.

### getTopics(communityId)

Get the first page of topics for the org or Experience Cloud site.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

### getTopics(communityId, sortParam)

Get the first page of sorted topics for the org or community.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, ConnectApi.TopicSort sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

sortParam

Type: ConnectApi.​TopicSort

Values are:

-   popularDesc—Sorts topics by popularity with the most popular first. This value is the default.
-   alphaAsc—Sorts topics alphabetically.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

### getTopics(communityId, pageParam, pageSize)

Get a page of topics.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

### getTopics(communityId, pageParam, pageSize, sortParam)

Get a page of sorted topics.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, Integer pageParam, Integer pageSize, ConnectApi.TopicSort sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: ConnectApi.​TopicSort

Values are:

-   popularDesc—Sorts topics by popularity with the most popular first. This value is the default.
-   alphaAsc—Sorts topics alphabetically.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

### getTopics(communityId, q, sortParam)

Get the sorted topics that match the search criteria.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, String q, ConnectApi.TopicSort sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The string must contain at least two characters, not including wildcards.

sortParam

Type: ConnectApi.​TopicSort

Values are:

-   popularDesc—Sorts topics by popularity with the most popular first. This value is the default.
-   alphaAsc—Sorts topics alphabetically.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

### getTopics(communityId, q, pageParam, pageSize)

Get a page of topics that match the search criteria.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, String q, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The string must contain at least two characters, not including wildcards.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

### getTopics(communityId, q, pageParam, pageSize, sortParam)

Get a page of sorted topics that match the search criteria.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, String q, Integer pageParam, Integer pageSize, ConnectApi.TopicSort sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The string must contain at least two characters, not including wildcards.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: ConnectApi.​TopicSort

Values are:

-   popularDesc—Sorts topics by popularity with the most popular first. This value is the default.
-   alphaAsc—Sorts topics alphabetically.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

### getTopics(communityId, q, exactMatch)

Get the topic that matches the exact, case-insensitive name.

#### API Version

33.0

#### Available to Guest Users

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, String q, Boolean exactMatch)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The string must contain at least two characters, not including wildcards.

exactMatch

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify true to find a topic by its exact, case-insensitive name.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

### getTopicsOrFallBackToRenamedTopics(communityId, q, exactMatch, fallBackToRenamedTopics)

Get the most recent renamed topic match, if there isn’t an exact match.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopicsOrFallBackToRenamedTopics(String communityId, String q, Boolean exactMatch, Boolean fallBackToRenamedTopics)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The string must contain at least two characters, not including wildcards.

exactMatch

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify true to find a topic by its exact, case-insensitive name or to find the most recent renamed topic match if there isn’t an exact match.

fallBackToRenamedTopics

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify true and if there isn’t an exact match, the most recent renamed topic match is returned. If there are multiple renamed topic matches, only the most recent is returned. If there are no renamed topic matches, an empty collection is returned.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

### getTopicSuggestions(communityId, recordId, maxResults)

Get up to a specified number of suggested topics for a record or feed item.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicSuggestionPage getTopicSuggestions(String communityId, String recordId, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

#### Return Value

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

#### Usage

Administrators must enable topics for objects before users can see suggested topics for records of that object type.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTopicSuggestions(communityId, recordId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetTopicSuggestions "Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestions method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getTopicSuggestions(communityId, recordId)

Get suggested topics for a record or feed item.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicSuggestionPage getTopicSuggestions(String communityId, String recordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

#### Return Value

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

#### Usage

Administrators must enable topics for objects before users can see suggested topics for records of that object type.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTopicSuggestions(communityId, recordId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetTopicSuggestions_2 "Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestions method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getTopicSuggestionsForText(communityId, text, maxResults)

Get up to a specified number of suggested topics for a string of text.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicSuggestionPage getTopicSuggestionsForText(String communityId, String text, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String of text.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

#### Return Value

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTopicSuggestionsForText(communityId, text, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetTopicSuggestionsForText "Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestionsForText method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getTopicSuggestionsForText(communityId, text)

Get suggested topics for a string of text.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicSuggestionPage getTopicSuggestionsForText(String communityId, String text)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String of text.

#### Return Value

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTopicSuggestionsForText(communityId, text, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetTopicSuggestionsForText_2 "Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestionsForText method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getTrendingTopics(communityId)

Get trending topics for the org or Experience Cloud site.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTrendingTopics(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

The more frequently people add a specific topic to their posts and comments and comment on or like posts with the same topic over a short period, the more likely it is to become a trending topic. For example, if your coworkers are attending the upcoming Dreamforce conference and have started discussing it in Chatter, you might see a trending topic for Dreamforce. A trending topic is not solely based on popularity and usually relates to a one-time or infrequent event that has a spike in activity, such as a conference or a project deadline.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTrendingTopics(communityId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetTrendingTopics "Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getTrendingTopics method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### getTrendingTopics(communityId, maxResults)

Get up to a specified number of trending topics for the org or Experience Cloud site.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTrendingTopics(String communityId, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

The more frequently people add a specific topic to their posts and comments and comment on or like posts with the same topic over a short period, the more likely it is to become a trending topic. For example, if your coworkers are attending the upcoming Dreamforce conference and have started discussing it in Chatter, you might see a trending topic for Dreamforce. A trending topic is not solely based on popularity and usually relates to a one-time or infrequent event that has a spike in activity, such as a conference or a project deadline.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTrendingTopics(communityId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetTrendingTopics_2 "Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getTrendingTopics method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### mergeTopics(communityId, topicId, idsToMerge)

Merge up to five secondary topics with a primary topic.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic mergeTopics(String communityId, String topicId, List<String\> idsToMerge)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID for the primary topic for the merge. If this topic is a managed topic, it retains its topic type, topic images, and children topics.

idsToMerge

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to five comma-separated secondary topic IDs to merge with the primary topic. If any of the secondary topics are navigational or featured topics, they lose their topic type, topic images, and children topics. Their feed items are reassigned to the primary topic. If you merge a topic with a content topic, the content associations are preserved. If you merge a topic with an inactive endorsee, the endorsement isn’t mapped to the primary topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Delete Topics or Modify All Data permission can merge topics.

### reassignTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory, topicNames)

Reassign topic and article assignment rules by data category by deleting the existing rules and creating new rules.

#### API Version

40.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage reassignTopicDataCategoryRules(String communityId, String dataCategoryGroup, String dataCategory, ConnectApi.TopicNamesInput topicNames)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

dataCategoryGroup

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category group used by articles.

dataCategory

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category used by articles.

topicNames

Type: [ConnectApi.TopicNamesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_topic_name_collection.htm "A list of topic names to replace currently assigned topics. Also a list of suggested topics to assign.")

A ConnectApi.TopicNamesInput object with the names of topics to reassign to articles in a data category.

#### Return Value

Type: [ConnectApi.TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm#apex_connectapi_output_topicPage "Page of topics.")

### reassignTopicsByName(communityId, recordId, topicNames)

Reassign all the topics on a record or feed item, that is, remove all the assigned topics on a record or feed item and add topics. Optionally, provide a list of suggested topics to assign to a record or feed item to improve future topic suggestions.

#### API Version

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage reassignTopicsByName(String communityId, String recordId, ConnectApi.TopicNamesInput topicNames)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the record or feed item to which to assign the topic.

topicNames

Type: [ConnectApi.TopicNamesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_topic_name_collection.htm "A list of topic names to replace currently assigned topics. Also a list of suggested topics to assign.")

A list of topics to replace the currently assigned topics. Optionally, a list of suggested topics to assign to improve future topic suggestions.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

Only users with the Assign Topics permission can remove topics from records or feed items and add existing topics to records or feed items. Only users with the Create Topics permission can add new topics to records or feed items. Administrators must enable topics for objects before users can add topics to records of that object type.

### unassignTopic(communityId, recordId, topicId)

Remove a topic from a record or feed item.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static Void unassignTopic(String communityId, String recordId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: Void

#### Usage

Only users with the Assign Topics permission can remove topics from feed items or records. Administrators must enable topics for objects before users can add topics to records of that object type.

### updateTopic(communityId, topicId, topic)

Update the description or name of a topic or merge up to five secondary topics with a primary topic.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic updateTopic(String communityId, String topicId, ConnectApi.TopicInput topic)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

topic

Type: [ConnectApi.TopicInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_Topic.htm "Update a topic’s name or description or merge topics.")

A ConnectApi.TopicInput object containing the name and description of the topic or up to five comma-separated secondary topic IDs to merge with the primary topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Edit Topics or Modify All Data permission can update topic names and descriptions. Only users with the Delete Topics or Modify All Data permission can merge topics.

### updateTopicsForArticlesInDataCategory(communityId, dataCategoryGroup, dataCategory, articleTopicAssignmentJob)

Assign topics to articles and unassign topics from articles in a data category.

#### API Version

40.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage updateTopicsForArticlesInDataCategory(String communityId, String dataCategoryGroup, String dataCategory, ConnectApi.ArticleTopicAssignmentJobInput articleTopicAssignmentJob)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

dataCategoryGroup

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category group used by articles.

dataCategory

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category used by articles.

articleTopicAssignmentJob

Type: [ConnectApi.ArticleTopicAssignmentJobInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_article_topic_assignment_job.htm#apex_connectapi_input_article_topic_assignment_job "An article and topic assignment job.")

A ConnectApi.ArticleTopicAssignmentJobInput object that indicates the operation to take on which topics.

#### Return Value

Type: [ConnectApi.TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm#apex_connectapi_output_topicPage "Page of topics.")

## Topics Test Methods

These test methods are for Topics. All methods are static.

For information about using these methods to test your ConnectApi code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

### setTestGetGroupsRecentlyTalkingAboutTopic(communityId, topicId, result)

Register a ConnectApi.ChatterGroupSummaryPage object to be returned when the matching ConnectApi.getGroupsRecentlyTalkingAboutTopic method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetGroupsRecentlyTalkingAboutTopic(String communityId, String topicId, ConnectApi.ChatterGroupSummaryPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

result

Type: [ConnectApi.​Chatter​Group​SummaryPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupSummaryPage.htm "Page of group summaries.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getGroupsRecentlyTalkingAboutTopic(communityId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getGroupsRecentlyTalkingAboutTopic "Get information about the five groups that most recently contributed to a topic.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetRecentlyTalkingAboutTopicsForGroup(communityId, groupId, result)

Register a ConnectApi.​TopicPage object to be returned when the matching ConnectApi.getRecentlyTalkingAboutTopicsForGroup method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetRecentlyTalkingAboutTopicsForGroup(String communityId, String groupId, ConnectApi.​TopicPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

result

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRecentlyTalkingAboutTopicsForGroup(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForGroup "Get up to five topics most recently used in a group.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetRecentlyTalkingAboutTopicsForUser(communityId, userId, result)

Register a ConnectApi.​TopicPage object to be returned when the matching ConnectApi.getRecentlyTalkingAboutTopicsForUser method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetRecentlyTalkingAboutTopicsForUser(String communityId, String userId, ConnectApi.TopicPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

result

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

Specify the test topics page.

#### Return Value

Type: Void

#### See Also

-   [getRecentlyTalkingAboutTopicsForUser(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForUser "Get up to five topics most recently used by a user.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetRelatedTopics(communityId, topicId, result)

Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getRelatedTopics method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetRelatedTopics(String communityId, String topicId, ConnectApi.TopicPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

result

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRelatedTopics(communityId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRelatedTopics "Get up to five topics most closely related to a topic.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetTopicSuggestions(communityId, recordId, maxResults, result)

Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestions method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTopicSuggestions(String communityId, String recordId, Integer maxResults, ConnectApi.TopicSuggestionPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

result

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

Specify the test topic suggestions page.

#### Return Value

Type: Void

#### See Also

-   [getTopicSuggestions(communityId, recordId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestions "Get up to a specified number of suggested topics for a record or feed item.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetTopicSuggestions(communityId, recordId, result)

Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestions method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTopicSuggestions(String communityId, String recordId, ConnectApi.​TopicSuggestionPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

result

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTopicSuggestions(communityId, recordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestions_2 "Get suggested topics for a record or feed item.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetTopicSuggestionsForText(communityId, text, maxResults, result)

Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestionsForText method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTopicSuggestionsForText(String communityId, String text, Integer maxResults, ConnectApi.TopicSuggestionPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String of text.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

result

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTopicSuggestionsForText(communityId, text, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestionsForText "Get up to a specified number of suggested topics for a string of text.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetTopicSuggestionsForText(communityId, text, result)

Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestionsForText method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTopicSuggestionsForText(String communityId, String text, ConnectApi.TopicSuggestionPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String of text.

result

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTopicSuggestionsForText(communityId, text)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestionsForText_2 "Get suggested topics for a string of text.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetTrendingTopics(communityId, result)

Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getTrendingTopics method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTrendingTopics(String communityId, ConnectApi.TopicPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

result

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTrendingTopics(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTrendingTopics "Get trending topics for the org or Experience Cloud site.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestGetTrendingTopics(communityId, maxResults, result)

Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getTrendingTopics method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTrendingTopics(String communityId, Integer maxResults, ConnectApi.TopicPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

result

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTrendingTopics(communityId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTrendingTopics_2 "Get up to a specified number of trending topics for the org or Experience Cloud site.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- assignTopic(communityId, recordId, topicId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- assignTopicByName(communityId, recordId, topicName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- createTopic(communityId, name, description) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- createTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory, topicNames) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- deleteTopic(communityId, topicId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- getGroupsRecentlyTalkingAboutTopic(communityId, topicId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- getRecentlyTalkingAboutTopicsForGroup(communityId, groupId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- getRecentlyTalkingAboutTopicsForUser(communityId, userId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- getRelatedTopics(communityId, topicId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
