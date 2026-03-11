---
title: "getManagedContentByTopicsAndContentKeys(communityId,
      contentKeys, topics, pageParam, pageSize, language, managedContentType,
      showAbsoluteUrl)"
domain: apex-reference
topic: getmanagedcontentbytopicsandcontentkeyscommunityid-contentkeys-topics-pageparam-
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [getManagedContentByTopicsAndContentKeys, communityId, contentKeys, topics, pageParam, pageSize, language, managedContentType, showAbsoluteUrl, Get, managed, content, versions, list, keys, topic, names., API, Version, Available]
---

# getManagedContentByTopicsAndContentKeys(communityId,
      contentKeys, topics, pageParam, pageSize, language, managedContentType,
      showAbsoluteUrl)

> Get managed content versions using a list of content keys and content topic
    names.

### getManagedContentByTopicsAndContentKeys(communityId, contentKeys, topics, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)

Get managed content versions using a list of content keys and content topic names.

#### API Version

51.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getManagedContentByTopicsAndContentKeys(String communityId, List<String\> contentKeys, List<String\> topics, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean showAbsoluteUrl)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

contentKeys

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 50 content keys for the managed content. A content key is a universally unique identifier (UUID) such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

topics

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of up to 15 content topic names.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. For performance reasons, we recommend 25 or fewer items per page. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the context user’s language. If the context user’s language isn’t available, the language defaults to the content type’s original language.

managedContentType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the content type, such as cms\_document or cms\_image.

showAbsoluteUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show absolute URLs in the output class (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ManagedContentVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_version_collection.htm "Collection of managed content versions.")