---
title: "getManagedContentsForChannel(channelId, managedContentIds,
      contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody,
      referenceDepth, expandReferences, referencesAsList, pageParam, pageSize)"
domain: apex-reference
topic: getmanagedcontentsforchannelchannelid-managedcontentids-contentkeys-contenttypef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.219Z
keywords: [getManagedContentsForChannel, channelId, managedContentIds, contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody, referenceDepth, expandReferences, referencesAsList, pageParam, pageSize, Get, collection, published, contents, channel., API]
---

# getManagedContentsForChannel(channelId, managedContentIds,
      contentKeys, contentTypeFQN, language, publishStartDate, publishEndDate, includeContentBody,
      referenceDepth, expandReferences, referencesAsList, pageParam, pageSize)

> Get a collection of published contents for a channel.

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