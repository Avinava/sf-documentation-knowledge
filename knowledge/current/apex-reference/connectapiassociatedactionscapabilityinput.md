---
title: "ConnectApi.AssociatedActionsCapabilityInput"
domain: apex-reference
topic: connectapiassociatedactionscapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.774Z
keywords: [ConnectApi.AssociatedActionsCapabilityInput, See]
---

# ConnectApi.AssociatedActionsCapabilityInput

# ConnectApi.AssociatedActionsCapabilityInput

A list of action link groups to associate with a feed element. To associate an action link group with a feed element, the call must be made from the Apex namespace that created the action link definition. In addition, the user making the call must have created the definition or have View All Data permission.

An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionLink​GroupIds | List<String> | The action link group IDs to associate with the feed element. Associate one Primary and up to 10 total action link groups to a feed item. Action link groups are returned in the order specified in this property.An action link group ID is returned from a call to ConnectApi.ActionLinks.​createActionLinkGroupDefinition​(communityId, actionLinkGroup). | Required | 33.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")