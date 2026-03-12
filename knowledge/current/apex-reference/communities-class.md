---
title: "Communities Class"
domain: apex-reference
topic: communities-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.566Z
estimatedTokens: 713
namespace: ConnectApi
keywords: [Communities, Experience, Cloud, sites, org, getCommunities, API, Version, Requires, Chatter, communityStatus, getCommunity, communityId, Guest, Users]
---

# Communities Class

> Get information about Experience Cloud sites in your org.

**Namespace:** `ConnectApi`

# Communities Class

Get information about Experience Cloud sites in your org.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Communities Methods

These methods are for Communities. All methods are static.

-   **[getCommunities()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm#apex_ConnectAPI_Communities_getCommunities)**
    Get a list of Experience Cloud sites that the context user has access to.
-   **[getCommunities(communityStatus)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm#apex_ConnectAPI_Communities_getCommunities_2)**
    Get a list of Experience Cloud sites with the specified status that the context user has access to.
-   **[getCommunity(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm#apex_ConnectAPI_Communities_getCommunity)**
    Get information about an Experience Cloud site.

### getCommunities()

Get a list of Experience Cloud sites that the context user has access to.

#### API Version

28.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommunityPage getCommunities()

#### Return Value

Type: [ConnectApi.CommunityPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_communityPage.htm "Page of Experience Cloud sites.")

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

### getCommunity(communityId)

Get information about an Experience Cloud site.

#### API Version

28.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Community getCommunity(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an Experience Cloud site. You can’t specify null or internal.

#### Return Value

Type: [ConnectApi.​Community](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_community.htm "Experience Cloud site.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getCommunities() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm)
- getCommunities(communityStatus) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm)
- getCommunity(communityId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Communities_static_methods.htm)
- ConnectApi.CommunityPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_communityPage.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​Community (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_community.htm)
