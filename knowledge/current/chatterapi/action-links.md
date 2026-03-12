---
title: "Action Links"
domain: chatterapi
topic: action-links
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.690Z
estimatedTokens: 1256
keywords: [Action, Links, link, button, feed, element, Clicking, take, user, Web, initiate, file, download, invoke, API]
---

# Action Links

> An action link is a button on a feed element. Clicking an action link can take a user
    to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external
    server. An action link includes a URL and an HTTP method, and can include a request body and
    header information, such as an OAuth token for authentication. Use action links to integrate
    Salesforce and third-party services into the feed so that users can drive productivity and
    accelerate innovation.

# Action Links

An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.

## Workflow

This feed item contains one action link group with two action links: **Approve** and **Reject**.

![Approve and Reject action links on a feed item.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_approve.png&folder=chatterapi)

The workflow to create and post action links with a feed element:

1.  (Optional) Create an [action link template](atlas.en-us.chatterapi.meta/chatterapi/features_action_links_overview.htm#templates).
2.  Make a request to [/connect/action-link-group-definitions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm#connect_resources_action_links_group_definitions "Create an action link group definition. To associate an action link with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.") to define an action link group or to instantiate an action link group from a template. An action link group contains at least one action link.
3.  Make a request to [/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm#connect_resources_feed_element "Post feed elements and search all feed elements in an organization.") to post a feed element and associate the action link with it.

## Action Links Resources

Use these resources to work with action links.

| Resource | HTTP Method | Task |
| --- | --- | --- |
| /connect/action-link-group-definitions | POST | Create an action link group definition. To associate an action link with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability. |
| /chatter/feed-elements | POST | Post a feed element with an associated actions capability. Associate up to 10 action link groups with a feed element. |
| /connect/action-links/actionLinkId | GET, PATCH | Get information about or update the status of an action link. The status of the action link in combination with the labelKey property of the Action Link Definition Input determines the text that displays in the UI. To trigger the API request for Api and ApiAsync action links, set the status to PendingStatus. |
| /connect/action-link-group-definitions​/actionLinkGroupId | GET, DELETE | Get information about or delete an action link group definition. Deleting an action link group definition removes all references to it from feed elements. To get or delete the action link group definition, the client must be the same client app that created the definition and the user must either be the user who created the definition or have View all Data permission. |
| /connect/action-link-groups​/actionLinkGroupId | GET | Get information about an action link group including state for the context user. |
| /connect/action-links/actionLinkId​/diagnostic-info | GET | Get diagnostic information returned when an action link executes. Diagnostic information is given only for users who can access the action link. |
| /chatter/feed-elements/feedElementId​/capabilities/associated-actions | GET | Get all the platform actions associated with a feed element. Action links are a type of platform action. |
| Feeds Resources/chatter/feeds/feedType/userId/feed-elements/chatter/feeds/feedType/feed-elements | GET | Get the feed elements of a specified feed type. If a feed element has action links associated with it, the action links data is returned in the associated actions capability. |

-   **[Action Links Use Cases](atlas.en-us.chatterapi.meta/chatterapi/features_action_links_use_cases.htm)**
    Use action links to integrate Salesforce and third-party services with a feed. An action link can make an HTTP request to a Salesforce or third-party API. An action link can also download a file or open a web page. This topic contains two use case examples.
-   **[Action Links Overview, Authentication, and Security](atlas.en-us.chatterapi.meta/chatterapi/features_action_links_overview.htm)**
    Learn about Connect REST API action links security, authentication, labels, and errors.

#### See Also

-   [Define Action Links and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm "Define actions links and post with a feed element.")

-   [Define Action Links in a Template and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link_template.htm "Define action links in a template and post with a feed element.")

## Related Topics

- action link template (atlas.en-us.chatterapi.meta/chatterapi/features_action_links_overview.htm)
- /connect/action-link-group-definitions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm)
- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- /connect/action-links/actionLinkId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_specific.htm)
- /connect/action-link-group-definitions​/actionLinkGroupId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definition.htm)
- /connect/action-link-groups​/actionLinkGroupId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_groups.htm)
- /connect/action-links/actionLinkId​/diagnostic-info (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_diagnostic.htm)
- /chatter/feed-elements/feedElementId​/capabilities/associated-actions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_associated_actions.htm)
- Feeds Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feeds.htm)
- Action Links Use Cases (atlas.en-us.chatterapi.meta/chatterapi/features_action_links_use_cases.htm)
