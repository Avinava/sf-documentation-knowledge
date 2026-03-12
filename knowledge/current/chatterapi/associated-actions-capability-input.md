---
title: "Associated Actions Capability Input"
domain: chatterapi
topic: associated-actions-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.980Z
estimatedTokens: 402
keywords: [Associated, Actions, Capability, Input, action, links, created, updated, feed, element, associate, link, group, client, app]
---

# Associated Actions Capability Input

> Describes
            action links that can be created or updated on a feed element. To associate an action
            link group with a feed element, the client must be the same client app that created the
            action link group definition and the user must either be the user who created the
            definition or have View all Data permission.

# Associated Actions Capability Input

Describes action links that can be created or updated on a feed element. To associate an action link group with a feed element, the client must be the same client app that created the action link group definition and the user must either be the user who created the definition or have View all Data permission.

An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.

Root XML tag

<associatedActions>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionLink​GroupIds | String[] | The action link group IDs to associate with the feed element. Associate one Primary and up to 10 total action link groups to a feed item. Action link groups are returned in the order specified in this property.Get an action link group ID in the response from a request to /connect/action-link-group-definitions. | Required | 33.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
"associatedActions": {
    "actionLinkGroupIds":["0Agxx00000000d1CAA", "0Agxx00000000d2DFY"]
}
```

## Related Topics

- /connect/action-link-group-definitions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
