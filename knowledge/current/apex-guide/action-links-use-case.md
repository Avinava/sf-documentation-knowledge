---
title: "Action Links Use Case"
domain: apex-guide
topic: action-links-use-case
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:47.931Z
keywords: [Action, Links, Case, Start, Video, Chat, Feed, See]
---

# Action Links Use Case

# Action Links Use Case

Use action links to integrate Salesforce and third-party services with a feed. An action link can make an HTTP request to a Salesforce or third-party API. An action link can also download a file or open a web page. This topic contains an example use case.

## Start a Video Chat from the Feed

Suppose that you work as a Salesforce developer for a company that has a Salesforce org and an account with a fictional company called “VideoChat.” Users have been saying they want to do more from their mobile devices. You’re asked to create an app that lets users create and join video chats directly from their mobile device.

When a user opens the VideoChat app in Salesforce, they’re asked to name the video chat room and invite either a group or individual users to the video chat room. When the user clicks **OK**, the VideoChat app launches the video chat room and posts a feed item to the selected group or users asking them to **Please join the video chat** by clicking an action link labeled **Join**. When an invitee clicks **Join**, the action link opens a web page containing the video chat room.

![Approve and Reject action links](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_join.png&folder=apexcode)

As a developer thinking about how to create the action link URL, you come up with these requirements:

1.  When a user clicks **Join**, the action link URL has to open the video chat room they were invited to.
2.  The action link URL has to tell the video chat room who’s joining.

To dynamically create the action link URLs, you create an action link template in Setup.

For the first requirement, you create a {!Bindings.roomId} binding variable in the Action URL template field. When the user clicks **OK** to create the video chat room, your Apex code generates a unique room ID. The Apex code uses that unique room ID as the binding variable value when it instantiates the action link group, associates it with the feed item, and posts the feed item.

For the second requirement, the action link must include the user ID. Action links support a predefined set of context variables. When an action link is invoked, Salesforce substitutes the variables with values. Context variables include information about who clicked the action link and in what context it was invoked. You decide to include a {!userId} context variable in the Action URL so that when a user clicks the action link in the feed, Salesforce substitutes the user’s ID and the video chat room knows who’s entering.

This is the action link template for the **Join** action link.

![Context variable and binding variables in Action URL field in Setup. ](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_join_template.png&folder=apexcode)

Every action link must be associated with an action link group. The group defines properties shared by all the action links associated with it. Even if you’re using a single action link (as in this example) it must be associated with a group. The first field of the action link template is Action Link Group Template, which in this case is **Video Chat**, which is the action link group template the action link template is associated with.

![action link group template](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_join_group_template.png&folder=apexcode)

.

#### See Also

-   [Action Links Overview, Authentication, and Security](atlas.en-us.apexcode.meta/apexcode/connectapi_features_action_links_overview.htm "Learn about Apex action links security, authentication, labels, and errors.")