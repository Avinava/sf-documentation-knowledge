---
title: "Action Links Resources"
domain: chatterapi
topic: action-links-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.520Z
estimatedTokens: 758
keywords: [Action, Links, Resources, link, button, feed, element, Clicking, take, user, Web, initiate, file, download, invoke]
---

# Action Links Resources

> An action link is a button on a feed element. Clicking an action link can take a user
      to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external
      server. An action link includes a URL and an HTTP method, and can include a request body and
      header information, such as an OAuth token for authentication. Use action links to integrate
      Salesforce and third-party services into the feed so that users can drive productivity and
      accelerate innovation.

# Action Links Resources

An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.

There are two views of an action link and an action link group: the definition, and the context user’s view. The definition includes potentially sensitive information, such as authentication information. The context user’s view is filtered by visibility options and the values reflect the state of the context user.

Available resources:

| Resource | Description |
| --- | --- |
| /connect/action-link-group-definitions | Create an action link group definition. To associate an action link with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability. |
| /connect/action-link-group-definitions​/actionLinkGroupId | Get information about or delete an action link group definition. Deleting an action link group definition removes all references to it from feed elements. To get or delete the action link group definition, the client must be the same client app that created the definition and the user must either be the user who created the definition or have View all Data permission. |
| /connect/action-link-groups/actionLinkGroupId | Get information about an action link group including state for the context user. |
| /connect/action-links/actionLinkId | Get information about or update the status of an action link. The status of the action link in combination with the labelKey property of the Action Link Definition Input determines the text that displays in the UI. To trigger the API request for Api and ApiAsync action links, set the status to PendingStatus. |
| /connect/action-links/actionLinkId​/diagnostic-info | Get diagnostic information returned when an action link executes. Diagnostic information is given only for users who can access the action link. |

#### See Also

-   [Action Links](atlas.en-us.chatterapi.meta/chatterapi/features_action_links.htm "An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.")

-   [Define Action Links and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm "Define actions links and post with a feed element.")

## Related Topics

- /connect/action-link-group-definitions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm)
- /connect/action-link-group-definitions​/actionLinkGroupId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definition.htm)
- /connect/action-link-groups/actionLinkGroupId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_groups.htm)
- /connect/action-links/actionLinkId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_specific.htm)
- /connect/action-links/actionLinkId​/diagnostic-info (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_diagnostic.htm)
- Action Links (atlas.en-us.chatterapi.meta/chatterapi/features_action_links.htm)
- Define Action Links and Post with a Feed Element (atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm)
