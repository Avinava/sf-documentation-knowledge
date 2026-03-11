---
title: "getFeedDirectory(String)"
domain: apex-reference
topic: getfeeddirectorystring
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeedDirectory, String, Get, list, feeds, available, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFeedDirectory(String)

> Get a list of all feeds available to the context
            user.

### getFeedDirectory(String)

Get a list of all feeds available to the context user.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedDirectory getFeedDirectory(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.FeedDirectory](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_directory.htm "Directory of feeds and favorites.")