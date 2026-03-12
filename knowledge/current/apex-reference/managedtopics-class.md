---
title: "ManagedTopics Class"
domain: apex-reference
topic: managedtopics-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.079Z
estimatedTokens: 7511
namespace: ConnectApi
keywords: [ManagedTopics, managed, topic, specific, Experience, Cloud, site, createManagedTopic, communityId, recordId, managedTopicType, API, Version, Requires, Chatter]
---

# ManagedTopics Class

> Create a managed topic of a specific type for an Experience Cloud
      site.

**Namespace:** `ConnectApi`

# ManagedTopics Class

Get managed topics in an Experience Cloud site. Create, delete, and reorder managed topics.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ManagedTopics Methods

These methods are for ManagedTopics. All methods are static.

-   **[createManagedTopic(communityId, recordId, managedTopicType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_createManagedTopic)**
    Create a managed topic of a specific type for an Experience Cloud site.
-   **[createManagedTopic(communityId, recordId, managedTopicType, parentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_createManagedTopic_1)**
    Create a child managed topic for an Experience Cloud site.
-   **[createManagedTopicByName(communityId, name, managedTopicType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_createManagedTopicByName)**
    Create a managed topic of a specific type by name for an Experience Cloud site.
-   **[createManagedTopicByName(communityId, name, managedTopicType, parentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_createManagedTopicByName_1)**
    Create a child managed topic by name for an Experience Cloud site.
-   **[deleteManagedTopic(communityId, managedTopicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_deleteManagedTopic)**
    Delete a managed topic from an Experience Cloud site.
-   **[getManagedTopic(communityId, managedTopicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopic)**
    Get a managed topic in an Experience Cloud site.
-   **[getManagedTopic(communityId, managedTopicId, depth)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopic_1)**
    Get a managed topic, including its parent and children managed topics, in an Experience Cloud site.
-   **[getManagedTopics(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_1)**
    Get the featured and navigational managed topics for an Experience Cloud site.
-   **[getManagedTopics(communityId, managedTopicType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_2)**
    Get managed topics of the specified type for an Experience Cloud site.
-   **[getManagedTopics(communityId, managedTopicType, depth)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_3)**
    Get managed topics of the specified type, including their parent and children managed topics, in an Experience Cloud site.
-   **[getManagedTopics(communityId, managedTopicType, recordIds, depth)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_5)**
    Get managed topics of the specified type, including their parent and children managed topics, that are associated with topics in an Experience Cloud site.
-   **[getManagedTopics(communityId, managedTopicType, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_6)**
    Get a page of managed topics.
-   **[reorderManagedTopics(communityId, managedTopicPositionCollection)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_reorderManagedTopics)**
    Reorder the relative positions of managed topics in an Experience Cloud site.

### createManagedTopic(communityId, recordId, managedTopicType)

Create a managed topic of a specific type for an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic createManagedTopic(String communityId, String recordId, ConnectApi.ManagedTopicType managedTopicType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the topic.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Specify the type of managed topic.

-   Content—Topics that are associated with native content.
-   Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   Navigational—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.

You can create up to 25 Featured and 5,000 Content topics. You can create up to eight levels of Navigational managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 Navigational topics.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

### createManagedTopic(communityId, recordId, managedTopicType, parentId)

Create a child managed topic for an Experience Cloud site.

#### API Version

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic createManagedTopic(String communityId, String recordId, ConnectApi.ManagedTopicType managedTopicType, String parentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the topic.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Specify Navigational for the type of managed topic to create a child managed topic.

You can create up to 25 Featured and 5,000 Content topics. You can create up to eight levels of Navigational managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 Navigational topics.

parentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the parent managed topic.

You can create up to eight levels (parent, direct children, their children, etc.) of managed topics and up to 10 children managed topics per managed topic.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

### createManagedTopicByName(communityId, name, managedTopicType)

Create a managed topic of a specific type by name for an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic createManagedTopicByName(String communityId, String name, ConnectApi.ManagedTopicType managedTopicType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the topic.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Specify the type of managed topic.

-   Content—Topics that are associated with native content.
-   Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   Navigational—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.

You can create up to 25 Featured and 5,000 Content topics. You can create up to eight levels of Navigational managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 Navigational topics.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

### createManagedTopicByName(communityId, name, managedTopicType, parentId)

Create a child managed topic by name for an Experience Cloud site.

#### API Version

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic createManagedTopicByName(String communityId, String name, ConnectApi.ManagedTopicType managedTopicType, String parentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the topic.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Specify Navigational for the type of managed topic to create a child managed topic.

You can create up to 25 Featured and 5,000 Content topics. You can create up to eight levels of Navigational managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 Navigational topics.

parentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the parent managed topic.

You can create up to eight levels (parent, direct children, their children, etc.) of managed topics and up to 10 children managed topics per managed topic.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.

### deleteManagedTopic(communityId, managedTopicId)

Delete a managed topic from an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static deleteManagedTopic(String communityId, String managedTopicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of managed topic.

#### Return Value

Type: Void

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can delete managed topics.

### getManagedTopic(communityId, managedTopicId)

Get a managed topic in an Experience Cloud site.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic getManagedTopic(String communityId, String managedTopicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of managed topic.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")

### getManagedTopic(communityId, managedTopicId, depth)

Get a managed topic, including its parent and children managed topics, in an Experience Cloud site.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic getManagedTopic(String communityId, String managedTopicId, Integer depth)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of managed topic.

depth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specify an integer 1–8. If you specify 1, the children property of the ConnectApi.ManagedTopic output class is null. If you specify 2, the children property of the ConnectApi.ManagedTopic output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")

### getManagedTopics(communityId)

Get the featured and navigational managed topics for an Experience Cloud site.

To get the content topics for an Experience Cloud site, use [getManagedTopics(communityId, managedTopicType)](#apex_ConnectAPI_ManagedTopics_getManagedTopics_2 "Get managed topics of the specified type for an Experience Cloud site.").

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")

### getManagedTopics(communityId, managedTopicType)

Get managed topics of the specified type for an Experience Cloud site.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Type of managed topic.

-   Content—Topics that are associated with native content.
-   Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   Navigational—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.

If you specify Content, up to 50 topics are returned. If you want more than 50 Content topics, use [getManagedTopics(communityId, managedTopicType, pageParam, pageSize)](#apex_ConnectAPI_ManagedTopics_getManagedTopics_6 "Get a page of managed topics.").

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")

### getManagedTopics(communityId, managedTopicType, depth)

Get managed topics of the specified type, including their parent and children managed topics, in an Experience Cloud site.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, Integer depth)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Type of managed topic.

-   Content—Topics that are associated with native content.
-   Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   Navigational—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.

depth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specify an integer 1–8. If you specify 1, the children property of the ConnectApi.ManagedTopic output class is null. If you specify 2, the children property of the ConnectApi.ManagedTopic output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")

### getManagedTopics(communityId, managedTopicType, recordIds, depth)

Get managed topics of the specified type, including their parent and children managed topics, that are associated with topics in an Experience Cloud site.

#### API Version

38.0

#### Available to Guest Users

38.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, List<String\> recordIds, Integer depth)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Type of managed topic.

-   Content—Topics that are associated with native content.
-   Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   Navigational—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.

recordIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to 100 topic IDs associated with the managed topics.

If you list more than 10 topic IDs, you can’t specify 2–8 for depth.

depth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specify an integer 1–8. If you specify 1, the children property of the ConnectApi.ManagedTopic output class is null. If you specify 2, the children property of the ConnectApi.ManagedTopic output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")

### getManagedTopics(communityId, managedTopicType, pageParam, pageSize)

Get a page of managed topics.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Type of managed topic.

-   Content—Topics that are associated with native content.
-   Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   Navigational—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 50.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")

### reorderManagedTopics(communityId, managedTopicPositionCollection)

Reorder the relative positions of managed topics in an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection reorderManagedTopics(String communityId, ConnectApi.ManagedTopicPositionCollectionInput managedTopicPositionCollection)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicPositionCollection

Type: [ConnectApi.ManagedTopicPositionCollectionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_topic_position_collection.htm "A collection of relative positions of managed topics.")

A collection of relative positions of managed topics. This collection can include only Featured and Navigational topics and doesn’t have to include all managed topics.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can reorder managed topics.

You can reorder parent managed topics or children managed topics with the same parent. If you don’t include all managed topics in the ConnectApi.ManagedTopicPositionCollectionInput, the managed topics are reordered by respecting the positions indicated in the ConnectApi.ManagedTopicPositionCollectionInput and then by pushing down any managed topics that aren’t included in the ConnectApi.ManagedTopicPositionCollectionInput to the next available position.

#### Example

If you have these managed topics:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicA | 0 |
| ManagedTopicB | 1 |
| ManagedTopicC | 2 |
| ManagedTopicD | 3 |
| ManagedTopicE | 4 |

And you reorder managed topics by including this information in ConnectApi.ManagedTopicPositionCollectionInput:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicE | 2 |

The result is:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicA | 1 |
| ManagedTopicE | 2 |
| ManagedTopicB | 3 |
| ManagedTopicC | 4 |

## Retired ManagedTopics Methods

These methods for ManagedTopics are retired.

-   **[getManagedTopics(communityId, managedTopicType, recordId, depth)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm#apex_ConnectAPI_ManagedTopics_getManagedTopics_4)**
    Get managed topics of the specified type, including their parent and children managed topics, that are associated with a given topic in an Experience Cloud site.

### getManagedTopics(communityId, managedTopicType, recordId, depth)

Get managed topics of the specified type, including their parent and children managed topics, that are associated with a given topic in an Experience Cloud site.

#### API Version

35.0–37.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 38.0 and later, use [getManagedTopics(communityId, managedTopicType, recordIds, depth)](#apex_ConnectAPI_ManagedTopics_getManagedTopics_5 "Get managed topics of the specified type, including their parent and children managed topics, that are associated with topics in an Experience Cloud site.").

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, String recordId, Integer depth)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Type of managed topic.

-   Content—Topics that are associated with native content.
-   Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   Navigational—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the topic associated with the managed topics.

depth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specify an integer 1–8. If you specify 1, the children property of the ConnectApi.ManagedTopic output class is null. If you specify 2, the children property of the ConnectApi.ManagedTopic output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createManagedTopic(communityId, recordId, managedTopicType) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
- createManagedTopic(communityId, recordId, managedTopicType, parentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
- createManagedTopicByName(communityId, name, managedTopicType) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
- createManagedTopicByName(communityId, name, managedTopicType, parentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
- deleteManagedTopic(communityId, managedTopicId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
- getManagedTopic(communityId, managedTopicId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
- getManagedTopic(communityId, managedTopicId, depth) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
- getManagedTopics(communityId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
- getManagedTopics(communityId, managedTopicType) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
