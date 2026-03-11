---
title: "getZones(communityId)"
domain: apex-reference
topic: getzonescommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.937Z
keywords: [getZones, communityId, Get, list, zones., Note, API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getZones(communityId)

> Get a list of zones.

### getZones(communityId)

Get a list of zones.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more information, see [End of Support for Chatter Answers in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18 "HTML (New Window)").

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ZonePage getZones(String communityId)

#### Parameters

communityId

Type: String

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.ZonePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_zonePage.htm "Page of zones.")