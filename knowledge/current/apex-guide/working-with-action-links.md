---
title: "Working with Action Links"
domain: apex-guide
topic: working-with-action-links
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.916Z
keywords: [Working, Action, Links, Workflow, See]
---

# Working with Action Links

# Working with Action Links

An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.

## Workflow

This feed item contains one action link group with one visible action link, **Join**.

![Join action link on a feed item](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_join.png&folder=apexcode)

The workflow to create and post action links with a feed element:

1.  (Optional) Create an [action link template](atlas.en-us.apexcode.meta/apexcode/connectapi_features_action_links_overview.htm#templates).
2.  Call [ConnectApi.ActionLinks.createActionLinkGroupDefinition(communityId, actionLinkGroup)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_createActionLinkGroupDefinition_1) to define an action link group that contains at least one action link.
3.  Call [ConnectApi.ChatterFeeds.postFeedElement(communityId, feedElement)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3) to post a feed element and associate the action link with it.

Use these methods to work with action links.

| ConnectApi Method | Task |
| --- | --- |
| ActionLinks.createActionLinkGroupDefinition​(communityId, actionLinkGroup)ActionLinks.deleteActionLinkGroupDefinition(communityId, actionLinkGroupId)ActionLinks.getActionLinkGroupDefinition(communityId, actionLinkGroupId) | Create an action link group definition. To associate an action link group with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability. |
| ChatterFeeds.postFeedElement(communityId, feedElement) | Post a feed element with an associated actions capability. Associate up to 10 action link groups with a feed element. |
| ActionLinks.getActionLink(communityId, actionLinkId) | Get information about an action link, including state for the context user. |
| ActionLinks.getActionLinkGroup(communityId, actionLinkGroupId) | Get information about an action link group including state for the context user. |
| ActionLinks.getActionLinkDiagnosticInfo(communityId, actionLinkId) | Get diagnostic information returned when an action link executes. Diagnostic information is given only for users who can access the action link. |
| ChatterFeeds.getFeedElementsFromFeed() | Get the feed elements from a specified feed type. If a feed element has action links associated with it, the action links data is returned in the feed element’s associated actions capability. |

-   **[Action Links Overview, Authentication, and Security](atlas.en-us.apexcode.meta/apexcode/connectapi_features_action_links_overview.htm)**  
    Learn about Apex action links security, authentication, labels, and errors.
-   **[Action Links Use Case](atlas.en-us.apexcode.meta/apexcode/connectapi_features_action_links_use_cases.htm)**  
    Use action links to integrate Salesforce and third-party services with a feed. An action link can make an HTTP request to a Salesforce or third-party API. An action link can also download a file or open a web page. This topic contains an example use case.

#### See Also

-   [Define an Action Link and Post with a Feed Element](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_define_post_action_link.htm "Create one action link in an action link group, associate the action link group with a feed item, and post the feed item.")
    
-   [Define an Action Link in a Template and Post with a Feed Element](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_define_post_action_link_template.htm "Create an action link and action link group and instantiate the action link group from a template.")