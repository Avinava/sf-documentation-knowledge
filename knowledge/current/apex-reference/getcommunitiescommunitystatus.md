---
title: "getCommunities(communityStatus)"
domain: apex-reference
topic: getcommunitiescommunitystatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.852Z
keywords: [getCommunities, communityStatus, Get, list, Experience, Cloud, sites, specified, status, context, user, access, to., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# getCommunities(communityStatus)

> Get a list of Experience Cloud sites with the specified status that the context user has
  access to.

### getCommunities(communityStatus)

Get a list of Experience Cloud sites with the specified status that the context user has access to.

#### API Version

28.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommunityPage getCommunities(ConnectApi.CommunityStatus communityStatus)

#### Parameters

communityStatus

Type: ConnectApi.​CommunityStatus

communityStatus—Status of the Experience Cloud site. Values are:

-   Live
-   Inactive
-   UnderConstruction

#### Return Value

Type: [ConnectApi.CommunityPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_communityPage.htm "Page of Experience Cloud sites.")