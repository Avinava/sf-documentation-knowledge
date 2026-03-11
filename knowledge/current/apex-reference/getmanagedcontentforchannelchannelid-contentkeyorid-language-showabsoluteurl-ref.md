---
title: "getManagedContentForChannel(channelId, contentKeyOrId,
      language, showAbsoluteUrl, referenceDepth, expandReferences,
    referencesAsList)"
domain: apex-reference
topic: getmanagedcontentforchannelchannelid-contentkeyorid-language-showabsoluteurl-ref
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.219Z
keywords: [getManagedContentForChannel, channelId, contentKeyOrId, language, showAbsoluteUrl, referenceDepth, expandReferences, referencesAsList, Get, piece, published, content, specified, references, channel., API, Version, Available, Guest, Users]
---

# getManagedContentForChannel(channelId, contentKeyOrId,
      language, showAbsoluteUrl, referenceDepth, expandReferences,
    referencesAsList)

> Get a piece of published content in a specified language with references for a
    channel.

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