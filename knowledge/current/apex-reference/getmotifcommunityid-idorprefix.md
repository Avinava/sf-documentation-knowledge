---
title: "getMotif(communityId, idOrPrefix)"
domain: apex-reference
topic: getmotifcommunityid-idorprefix
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.716Z
keywords: [getMotif, communityId, idOrPrefix, Get, motif, contains, URLs, set, small, medium, large, icons, record., contain, base, color, API, Version, Requires, Chatter]
---

# getMotif(communityId, idOrPrefix)

> Get a motif that contains the URLs for a set of small, medium, and large motif icons for
  a record. It can also contain a base color for the record.

### getMotif(communityId, idOrPrefix)

Get a motif that contains the URLs for a set of small, medium, and large motif icons for a record. It can also contain a base color for the record.

#### API Version

28.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Motif getMotif(String communityId, String idOrPrefix)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

idOrPrefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An ID or key prefix.

#### Return Value

Type: [ConnectApi.​Motif](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm "The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color.")

#### Usage

Each Salesforce record type has its own set of motif icons.