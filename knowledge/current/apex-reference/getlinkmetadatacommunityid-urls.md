---
title: "getLinkMetadata(communityId, urls)"
domain: apex-reference
topic: getlinkmetadatacommunityid-urls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getLinkMetadata, communityId, urls, Get, link, metadata, URLs., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getLinkMetadata(communityId, urls)

> Get link metadata for URLs.

### getLinkMetadata(communityId, urls)

Get link metadata for URLs.

#### API Version

42.0

#### Available to Guest Users

42.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.LinkMetadataCollection getLinkMetadata(String communityId, String urls)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

urls

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of URL-encoded URLs.

#### Return Value

Type: [ConnectApi.LinkMetadataCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_link_metadata_collection.htm#apex_connectapi_output_link_metadata_collection "Collection of link metadata.")