---
title: "getZone(communityId, zoneId)"
domain: apex-reference
topic: getzonecommunityid-zoneid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.937Z
keywords: [getZone, communityId, zoneId, Get, zone., Note, API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getZone(communityId, zoneId)

> Get a zone.

### getZone(communityId, zoneId)

Get a zone.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more information, see [End of Support for Chatter Answers in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18 "HTML (New Window)").

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Zone getZone(String communityId, String zoneId)

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, internal, or null.

zoneId

Type: String

The ID of a zone.

#### Return Value

Type: [ConnectApi.Zone](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_zone.htm "Information about a Chatter Answers zone.")