---
title: "ManagedContentDelivery Class"
domain: apex-reference
topic: managedcontentdelivery-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.307Z
estimatedTokens: 14078
namespace: ConnectApi
keywords: [ManagedContentDelivery, Get, collection, items., managed, content, channel., content., getChannels, pageParam, pageSize, API, Version, Guest, Users, Requires, Chatter, getCollectionItemsForChannel, channelId, collectionKeyOrId]
---

# ManagedContentDelivery Class

> Get collection items. Get a managed
  content channel. Get managed content.

**Namespace:** `ConnectApi`

# ManagedContentDelivery Class

Get collection items. Get a managed content channel. Get managed content.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ManagedContentDelivery Methods

These methods are for ManagedContentDelivery. All methods are static.

-   **[getChannels(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getChannels_1)**
    Get managed content delivery channels for the context user.
-   **[getCollectionItemsForChannel(channelId, collectionKeyOrId, language)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForChannel_1)**
    Get collection items for a channel.
-   **[getCollectionItemsForChannel(channelId, collectionKeyOrId, language, pageToken, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForChannel_2)**
    Get a page of collection items for a channel.
-   **[getCollectionItemsForSite(siteId, collectionKeyOrId, language)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForSite_2)**
    Get collection items for an Experience Cloud site.
-   **[getCollectionItemsForSite(siteId, collectionKeyOrId, language, pageToken, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getCollectionItemsForSite_4)**
    Get a page of collection items for an Experience Cloud site.
-   **[getManagedContentDeliveryChannel(channelId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentDeliveryChannel_1)**
    Get a managed content delivery channel.
-   **[getManagedContentForChannel(channelId, contentKeyOrId, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForChannel_1)**
    Get a piece of published content for a channel.
-   **[getManagedContentForChannel(channelId, contentKeyOrId, language, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForChannel_2)**
    Get a piece of published content in a specified language for a channel.
-   **[getManagedContentForChannel(channelId, contentKeyOrId, language, showAbsoluteUrl, referenceDepth, expandReferences, referencesAsList)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForChannel_3)**
    Get a piece of published content in a specified language with references for a channel.
-   **[getManagedContentForSite(siteId, contentKeyOrId, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForSite_4)**
    Get a piece of published content for an Experience Cloud site.
-   **[getManagedContentForSite(siteId, contentKeyOrId, language, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForSite_5)**
    Get a piece of published content in a specified language for an Experience Cloud site.
-   **[getManagedContentForSite(siteId, contentKeyOrId, language, showAbsoluteUrl, referenceDepth, expandReferences, referencesAsList)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForSite_6)**
    Get a piece of published content in a specified language with references for an Experience Cloud site.
-   **[getManagedContentsForChannel(channelId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentsForChannel_2)**
    Get a collection of published contents for a channel.
-   **[getManagedContentsForSite(siteId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize, showAbsoluteUrl)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentsForSite_4)**
    Get a collection of published contents for an Experience Cloud site.

### getChannels(pageParam, pageSize)

Get managed content delivery channels for the context user.

#### API Version

62.0

#### Available to Guest Users

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryChannelsRepresentation getChannels(Integer pageParam, Integer pageSize)

#### Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryChannelsRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channels.htm "Collection of managed content delivery channels.")

### getCollectionItemsForChannel(channelId, collectionKeyOrId, language)

Get collection items for a channel.

#### API Version

56.0

#### Available to Guest Users

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentCollectionItems getCollectionItemsForChannel(String channelId, String collectionKeyOrId, String language)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

collectionKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Collection key or ID of the collection. A collection key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space.

#### Return Value

Type: [ConnectApi.ManagedContentCollectionItems](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm "Managed content collection Items.")

#### Example

This example gets a collection of a custom content type that includes references to images and uses the [ConnectApi.ConnectUtilities.unwrapApexWrapper()](atlas.en-us.apexref.meta/apexref/connectAPI_utilities.htm "The ConnectApi namespace contains a utility class.") utility.

```

```

### getCollectionItemsForChannel(channelId, collectionKeyOrId, language, pageToken, pageSize)

Get a page of collection items for a channel.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentCollectionItems getCollectionItemsForChannel(String channelId, String collectionKeyOrId, String language, Integer pageToken, Integer pageSize)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

collectionKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Collection key or ID of the collection. A collection key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space.

pageToken

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Integer specifying a page token of items. If you pass in null, the default value is 0, which returns the first page token.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 50.

#### Return Value

Type: [ConnectApi.ManagedContentCollectionItems](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm "Managed content collection Items.")

### getCollectionItemsForSite(siteId, collectionKeyOrId, language)

Get collection items for an Experience Cloud site.

#### API Version

56.0

#### Available to Guest Users

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentCollectionItems getCollectionItemsForSite(String siteId, String collectionKeyOrId, String language)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

collectionKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Collection key or ID of the collection. A collection key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space.

#### Return Value

Type: [ConnectApi.ManagedContentCollectionItems](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm "Managed content collection Items.")

#### Example

This example gets a collection of a custom content type that includes references to images and uses the [ConnectApi.ConnectUtilities.unwrapApexWrapper()](atlas.en-us.apexref.meta/apexref/connectAPI_utilities.htm "The ConnectApi namespace contains a utility class.") utility.

```

```

### getCollectionItemsForSite(siteId, collectionKeyOrId, language, pageToken, pageSize)

Get a page of collection items for an Experience Cloud site.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentCollectionItems getCollectionItemsForSite(String siteId, String collectionKeyOrId, String language, Integer pageToken, Integer pageSize)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

collectionKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Collection key or ID of the collection. A collection key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space.

pageToken

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Integer specifying a page token of items. If you pass in null, the default value is 0, which returns the first page token.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 50.

#### Return Value

Type: [ConnectApi.ManagedContentCollectionItems](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm "Managed content collection Items.")

### getManagedContentDeliveryChannel(channelId)

Get a managed content delivery channel.

#### API Version

62.0

#### Available to Guest Users

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryChannelRepresentation getManagedContentDeliveryChannel(String channelId)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryChannelRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channel.htm "Managed content delivery channel.")

### getManagedContentForChannel(channelId, contentKeyOrId, showAbsoluteUrl)

Get a piece of published content for a channel.

#### API Version

54.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocument getManagedContentForChannel(String channelId, String contentKeyOrId, Boolean showAbsoluteUrl)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

contentKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Content key or ID of the content. A content key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

For public channels only, specifies whether to return the absolute unauthenticatedUrl in the output class. The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm "Managed content in delivery scope.")

#### Usage

This method returns content only if it's published in the default language of the channel. If you request content that isn’t published in the default language of the channel, you get a ConnectApi.NotFoundException. To get content for a channel in another language use [getManagedContentForChannel(channelId, contentKeyOrId, language, showAbsoluteUrl)](#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForChannel_2 "Get a piece of published content in a specified language for a channel.") or [getManagedContentForChannel(channelId, contentKeyOrId, language, showAbsoluteUrl, referenceDepth, expandReferences, referencesAsList)](#apex_ConnectAPI_ManagedContentDelivery_getManagedContentForChannel_3 "Get a piece of published content in a specified language with references for a channel.").

#### Example

This example gets a custom content type with an image reference and uses the [ConnectApi.ConnectUtilities.unwrapApexWrapper()](atlas.en-us.apexref.meta/apexref/connectAPI_utilities.htm "The ConnectApi namespace contains a utility class.") utility.

```

```

### getManagedContentForChannel(channelId, contentKeyOrId, language, showAbsoluteUrl)

Get a piece of published content in a specified language for a channel.

#### API Version

54.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocument getManagedContentForChannel(String channelId, String contentKeyOrId, String language, Boolean showAbsoluteUrl)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

contentKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Content key or ID of the content. A content key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. The requested language must be added to the channel, otherwise, you get a ConnectApi.NotFoundException. If the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

For public channels only, specifies whether to return the absolute unauthenticatedUrl in the output class. The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm "Managed content in delivery scope.")

### getManagedContentForChannel(channelId, contentKeyOrId, language, showAbsoluteUrl, referenceDepth, expandReferences, referencesAsList)

Get a piece of published content in a specified language with references for a channel.

#### API Version

54.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocument getManagedContentForChannel(String channelId, String contentKeyOrId, String language, Boolean showAbsoluteUrl, Integer referenceDepth, Boolean expandReferences, Boolean referencesAsList)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

contentKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Content key or ID of the content. A content key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. The requested language must be added to the channel, otherwise, you get a ConnectApi.NotFoundException. If the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

For public channels only, specifies whether to return the absolute unauthenticatedUrl in the output class. The default value is false.

referenceDepth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

An integer 0–3 specifying the depth of references. If you specify 0, the references property of the ConnectApi.ManagedContentDeliveryDocument output class is null. If unspecified, the default value is 0.

expandReferences

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include details of references (true) or summaries of references (false) in the output class. If unspecified, the default value is false.

referencesAsList

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the references as a list in the referencesList property of the ConnectApi.ManagedContentDeliveryDocument output class (true). If you specify false, the references are returned as key value pairs in the references property. If unspecified, the default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm "Managed content in delivery scope.")

### getManagedContentForSite(siteId, contentKeyOrId, showAbsoluteUrl)

Get a piece of published content for an Experience Cloud site.

#### API Version

54.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocument getManagedContentForSite(String siteId, String contentKeyOrId, Boolean showAbsoluteUrl)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

contentKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Content key or ID of the content. A content key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

For public channels only, specifies whether to return the absolute unauthenticatedUrl in the output class. The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm "Managed content in delivery scope.")

#### Example

This example gets a custom content type with an image reference and uses the [ConnectApi.ConnectUtilities.unwrapApexWrapper()](atlas.en-us.apexref.meta/apexref/connectAPI_utilities.htm "The ConnectApi namespace contains a utility class.") utility.

```

```

### getManagedContentForSite(siteId, contentKeyOrId, language, showAbsoluteUrl)

Get a piece of published content in a specified language for an Experience Cloud site.

#### API Version

54.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocument getManagedContentForSite(String siteId, String contentKeyOrId, String language, Boolean showAbsoluteUrl)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

contentKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Content key or ID of the content. A content key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

For public channels only, specifies whether to return the absolute unauthenticatedUrl in the output class. The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm "Managed content in delivery scope.")

### getManagedContentForSite(siteId, contentKeyOrId, language, showAbsoluteUrl, referenceDepth, expandReferences, referencesAsList)

Get a piece of published content in a specified language with references for an Experience Cloud site.

#### API Version

54.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocument getManagedContentForSite(String siteId, String contentKeyOrId, String language, Boolean showAbsoluteUrl, Integer referenceDepth, Boolean expandReferences, Boolean referencesAsList)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

contentKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Content key or ID of the content. A content key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

For public channels only, specifies whether to return the absolute unauthenticatedUrl in the output class. The default value is false.

referenceDepth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

An integer 0–3 specifying the depth of references. If you specify 0, the references property of the ConnectApi.ManagedContentDeliveryDocument output class is null. If unspecified, the default value is 0.

expandReferences

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include details of references (true) or summaries of references (false) in the output class. If unspecified, the default value is false.

referencesAsList

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the references as a list in the referencesList property of the ConnectApi.ManagedContentDeliveryDocument output class (true). If you specify false, the references are returned as key value pairs in the references property. If unspecified, the default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document.htm "Managed content in delivery scope.")

### getManagedContentsForChannel(channelId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize, showAbsoluteUrl)

Get a collection of published contents for a channel.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocumentCollection getManagedContentsForChannel(String channelId, List<String\> managedContentIds, List<String\> contentKeys, String contentTypeFQN, String language, String publishStartDate, String publishEndDate, Boolean includeContentBody, Integer referenceDepth, Boolean expandReferences, Boolean referencesAsList, Integer pageParam, Integer pageSize, Boolean showAbsoluteUrl)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 100 managed content IDs. Specify either managed content IDs or content keys.

contentKeys

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 50 content keys. Specify either managed content IDs or content keys.

contentTypeFQN

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified name of the managed content type.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the configured fallback language or the channel’s default language. If the content isn’t available in the fallback language and the channel’s default language, we return an error.

publishStartDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO 8601 formatted publish start date.

publishEndDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO 8601 formatted publish end date.

includeContentBody

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the content body (true) or the content summary (false). If unspecified, the default value is false.

referenceDepth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

An integer 0–3 specifying the depth of references. If you specify 0, the references property of the ConnectApi.ManagedContentDeliveryDocumentCollection output class is null. If unspecified, the default value is 0.

expandReferences

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include details of references (true) or summaries of references (false) in the output class. If unspecified, the default value is false.

referencesAsList

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the references as a list in the referencesList property of the ConnectApi.ManagedContentDeliveryDocumentCollection output class (true). If you specify false, the references are returned as key value pairs in the references property. If unspecified, the default value is false.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25. If you specify true for expandReferences or includeContentBody, the maximum page size you can specify is 25.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocumentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")

#### Example

This example gets Event custom content type records and uses the [ConnectApi.ConnectUtilities.unwrapApexWrapper()](atlas.en-us.apexref.meta/apexref/connectAPI_utilities.htm "The ConnectApi namespace contains a utility class.") utility.

```

```

### getManagedContentsForSite(siteId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize, showAbsoluteUrl)

Get a collection of published contents for an Experience Cloud site.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocumentCollection getManagedContentsForSite(String siteId, List<String\> managedContentIds, List<String\> contentKeys, String contentTypeFQN, String language, String publishStartDate, String publishEndDate, Boolean includeContentBody, Integer referenceDepth, Boolean expandReferences, Boolean referencesAsList, Integer pageParam, Integer pageSize, Boolean showAbsoluteUrl)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 100 managed content IDs. Specify either managed content IDs or content keys.

contentKeys

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 50 content keys. Specify either managed content IDs or content keys.

contentTypeFQN

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified name of the managed content type.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the configured fallback language or the channel’s default language. If the content isn’t available in the fallback language and the channel’s default language, we return an error.

publishStartDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO 8601 formatted publish start date.

publishEndDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO 8601 formatted publish end date.

includeContentBody

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the content body (true) or the content summary (false). If unspecified, the default value is false.

referenceDepth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

An integer 0–3 specifying the depth of references. If you specify 0, the references property of the ConnectApi.ManagedContentDeliveryDocumentCollection output class is null. If unspecified, the default value is 0.

expandReferences

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include details of references (true) or summaries of references (false) in the output class. If unspecified, the default value is false.

referencesAsList

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the references as a list in the referencesList property of the ConnectApi.ManagedContentDeliveryDocumentCollection output class (true). If you specify false, the references are returned as key value pairs in the references property. If unspecified, the default value is false.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25. If you specify true for expandReferences or includeContentBody, the maximum page size you can specify is 25.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocumentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")

#### Example

This example gets custom content type Event records and uses the [ConnectApi.ConnectUtilities.unwrapApexWrapper()](atlas.en-us.apexref.meta/apexref/connectAPI_utilities.htm "The ConnectApi namespace contains a utility class.") utility.

```

```

## Retired ManagedContentDelivery Methods

These methods for ManagedContentDelivery are retired.

-   **[getManagedContentChannel(channelId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentChannel_1)**
    Get a managed content delivery channel.
-   **[getManagedContentsForChannel(channelId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentsForChannel_1)**
    Get a collection of published contents for a channel.
-   **[getManagedContentsForSite(siteId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentsForSite_2)**
    Get a collection of published contents for an Experience Cloud site.

### getManagedContentChannel(channelId)

Get a managed content delivery channel.

#### API Version

54.0–61.0

In version 62.0 and later, use [getManagedContentDeliveryChannel(channelId)](#apex_ConnectAPI_ManagedContentDelivery_getManagedContentDeliveryChannel_1 "Get a managed content delivery channel.") to get a managed content delivery channel.

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentChannelDetail getManagedContentChannel(String channelId)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

#### Return Value

Type: [ConnectApi.ManagedContentChannelDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_detail.htm "Managed content channel detail.")

### getManagedContentsForChannel(channelId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize)

Get a collection of published contents for a channel.

#### API Version

55.0—57.0

In version 58.0 and later, use [getManagedContentsForChannel(channelId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize, showAbsoluteUrl)](#apex_ConnectAPI_ManagedContentDelivery_getManagedContentsForChannel_2 "Get a collection of published contents for a channel.").

#### Available to Guest Users

55.0—57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocumentCollection getManagedContentsForChannel(String channelId, List<String\> managedContentIds, List<String\> contentKeys, String contentTypeFQN, String language, String publishStartDate, String publishEndDate, Boolean includeContentBody, Integer referenceDepth, Boolean expandReferences, Boolean referencesAsList, Integer pageParam, Integer pageSize)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 100 managed content IDs. Specify either managed content IDs or content keys.

contentKeys

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 50 content keys. Specify either managed content IDs or content keys.

contentTypeFQN

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified name of the managed content type.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the configured fallback language or the channel’s default language. If the content isn’t available in the fallback language and the channel’s default language, we return an error.

publishStartDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO 8601 formatted publish start date.

publishEndDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO 8601 formatted publish end date.

includeContentBody

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the content body (true) or the content summary (false). If unspecified, the default value is false.

referenceDepth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

An integer 0–3 specifying the depth of references. If you specify 0, the references property of the ConnectApi.ManagedContentDeliveryDocumentCollection output class is null. If unspecified, the default value is 0.

expandReferences

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include details of references (true) or summaries of references (false) in the output class. If unspecified, the default value is false.

referencesAsList

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the references as a list in the referencesList property of the ConnectApi.ManagedContentDeliveryDocumentCollection output class (true). If you specify false, the references are returned as key value pairs in the references property. If unspecified, the default value is false.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25. If you specify true for expandReferences or includeContentBody, the maximum page size you can specify is 25.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocumentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")

### getManagedContentsForSite(siteId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize)

Get a collection of published contents for an Experience Cloud site.

#### API Version

55.0—57.0

In version 58.0 and later, use [getManagedContentsForSite(siteId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize, showAbsoluteUrl)](#apex_ConnectAPI_ManagedContentDelivery_getManagedContentsForSite_4 "Get a collection of published contents for an Experience Cloud site.").

#### Available to Guest Users

55.0—57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryDocumentCollection getManagedContentsForSite(String siteId, List<String\> managedContentIds, List<String\> contentKeys, String contentTypeFQN, String language, String publishStartDate, String publishEndDate, Boolean includeContentBody, Integer referenceDepth, Boolean expandReferences, Boolean referencesAsList, Integer pageParam, Integer pageSize)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

managedContentIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 100 managed content IDs. Specify either managed content IDs or content keys.

contentKeys

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 50 content keys. Specify either managed content IDs or content keys.

contentTypeFQN

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified name of the managed content type.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the configured fallback language or the channel’s default language. If the content isn’t available in the fallback language and the channel’s default language, we return an error.

publishStartDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO 8601 formatted publish start date.

publishEndDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO 8601 formatted publish end date.

includeContentBody

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the content body (true) or the content summary (false). If unspecified, the default value is false.

referenceDepth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

An integer 0–3 specifying the depth of references. If you specify 0, the references property of the ConnectApi.ManagedContentDeliveryDocumentCollection output class is null. If unspecified, the default value is 0.

expandReferences

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include details of references (true) or summaries of references (false) in the output class. If unspecified, the default value is false.

referencesAsList

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the references as a list in the referencesList property of the ConnectApi.ManagedContentDeliveryDocumentCollection output class (true). If you specify false, the references are returned as key value pairs in the references property. If unspecified, the default value is false.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25. If you specify true for expandReferences or includeContentBody, the maximum page size you can specify is 25.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryDocumentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_document_collection.htm "Managed content delivery document collection.")

## Code Examples

```apex
ConnectApi.ManagedContentCollectionItems collection = 									 
    ConnectApi.ManagedContentDelivery.getCollectionItemsForChannel('0apXXXXXXXXXXXXXXX','MCVXXXXXXXXXXXXXXXXXXXXXXXXX','en_US');

System.debug(collection.items); //before ApexWrapper is unwrapped

for(ConnectApi.ManagedContentCollectionItem item : collection.items)
{
	//unwrap ApexWrapper
	Map<String,Object> unwrappedItem = (Map<String,Object>)ConnectApi.ConnectUtilities.unwrapApexWrapper(item.body.get('contentBody'));
	
	//replace the wrapped object with the unwrapped object
	item.body.put('contentBody', unwrappedItem);
}

System.debug(collection.items); //after ApexWrapper is unwrapped
```

```apex
ConnectApi.ManagedContentCollectionItems collection = 			 
    ConnectApi.ManagedContentDelivery.getCollectionItemsForSite('0DMXXXXXXXXXXXXXXX','MCVXXXXXXXXXXXXXXXXXXXXXXXXX','en_US');

System.debug(collection.items); //before ApexWrapper is unwrapped

for(ConnectApi.ManagedContentCollectionItem item : collection.items)
{
	//unwrap ApexWrapper
	Map<String,Object> unwrappedItem = (Map<String,Object>)ConnectApi.ConnectUtilities.unwrapApexWrapper(item.body.get('contentBody'));
	
	//replace the wrapped object with the unwrapped object
	item.body.put('contentBody', unwrappedItem);
}

System.debug(collection.items); //after ApexWrapper is unwrapped
```

```apex
ConnectApi.ManagedContentDeliveryDocument res = 
    ConnectApi.ManagedContentDelivery.getManagedContentForChannel ('0apXXXXXXXXXXXXXXX','MCLXXXXXXXXXXXXXXXXXXXXXXXXX',true);

//before contentBody field ApexWrapper is unwrapped 
system.debug(res.contentBody); 

//unwrap contentBody field in res
Map<String,Object> contentBody = (Map<String,Object>)ConnectApi.ConnectUtilities.unwrapApexWrapper(res.contentBody);

//after contentBody field ApexWrapper is unwrapped, but image field still wrapped
system.debug(contentBody);

//before image field ApexWrapper is unwrapped 
system.debug(contentBody.get('Image')); 

//unwrap Image field in contentBody
Map<String,Object> Image = (Map<String,Object>)ConnectApi.ConnectUtilities.unwrapApexWrapper(contentBody.get('Image'));

//after image field ApexWrapper is unwrapped 
system.debug(Image); 

//replace wrapped primary_image in contentBody with unwrapped version
contentBody.put('Image', Image);

//after contentBody field ApexWrapper is unwrapped, with image field also unwrapped
system.debug(contentBody);
```

```apex
ConnectApi.ManagedContentDeliveryDocument res = 
    ConnectApi.ManagedContentDelivery.getManagedContentForSite ('0DMXXXXXXXXXXXXXXX','MCLXXXXXXXXXXXXXXXXXXXXXXXXX',true);

//before contentBody field ApexWrapper is unwrapped 
system.debug(res.contentBody); 

//unwrap contentBody field in res
Map<String,Object> contentBody = (Map<String,Object>)ConnectApi.ConnectUtilities.unwrapApexWrapper(res.contentBody);

//after contentBody field ApexWrapper is unwrapped, but image field still wrapped
system.debug(contentBody);

//before image field ApexWrapper is unwrapped 
system.debug(contentBody.get('Image')); 

//unwrap Image field in contentBody
Map<String,Object> Image = (Map<String,Object>)ConnectApi.ConnectUtilities.unwrapApexWrapper(contentBody.get('Image'));

//after image field ApexWrapper is unwrapped 
system.debug(Image); 

//replace wrapped primary_image in contentBody with unwrapped version
contentBody.put('Image', Image);

//after contentBody field ApexWrapper is unwrapped, with image field also unwrapped
system.debug(contentBody);
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getChannels(pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
- getCollectionItemsForChannel(channelId, collectionKeyOrId, language) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
- getCollectionItemsForChannel(channelId, collectionKeyOrId, language, pageToken, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
- getCollectionItemsForSite(siteId, collectionKeyOrId, language) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
- getCollectionItemsForSite(siteId, collectionKeyOrId, language, pageToken, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
- getManagedContentDeliveryChannel(channelId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
- getManagedContentForChannel(channelId, contentKeyOrId, showAbsoluteUrl) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
- getManagedContentForChannel(channelId, contentKeyOrId, language, showAbsoluteUrl) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
- getManagedContentForChannel(channelId, contentKeyOrId, language, showAbsoluteUrl, referenceDepth, expandReferences, referencesAsList) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
