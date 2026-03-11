---
title: "getAllManagedContent(communityId, pageParam, pageSize,
      language, managedContentType, showAbsoluteUrl)"
domain: apex-reference
topic: getallmanagedcontentcommunityid-pageparam-pagesize-language-managedcontenttype-s
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [getAllManagedContent, communityId, pageParam, pageSize, language, managedContentType, showAbsoluteUrl, Get, managed, content, versions, Experience, Cloud, site, absolute, URLs., API, Version, Available, Guest]
---

# getAllManagedContent(communityId, pageParam, pageSize,
      language, managedContentType, showAbsoluteUrl)

> Get all managed content versions for an Experience Cloud site with absolute
    URLs.

### getAllManagedContent(communityId, pageParam, pageSize, language, managedContentType, showAbsoluteUrl)

Get all managed content versions for an Experience Cloud site with absolute URLs.

#### API Version

50.0

#### Available to Guest Users

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVersionCollection getAllManagedContent(String communityId, Integer pageParam, Integer pageSize, String language, String managedContentType, Boolean showAbsoluteUrl)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

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