---
title: "getManagedContentForSite(siteId, contentKeyOrId, language,
      showAbsoluteUrl)"
domain: apex-reference
topic: getmanagedcontentforsitesiteid-contentkeyorid-language-showabsoluteurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.219Z
keywords: [getManagedContentForSite, siteId, contentKeyOrId, language, showAbsoluteUrl, Get, piece, published, content, specified, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter]
---

# getManagedContentForSite(siteId, contentKeyOrId, language,
      showAbsoluteUrl)

> Get a piece of published content in a specified language for an Experience Cloud
    site.

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