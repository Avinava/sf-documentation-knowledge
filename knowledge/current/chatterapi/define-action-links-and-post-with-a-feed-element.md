---
title: "Define Action Links and Post with a Feed Element"
domain: chatterapi
topic: define-action-links-and-post-with-a-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:24.156Z
estimatedTokens: 1873
keywords: [Define, Action, Links, Post, actions, Step, Link, Group, Associate, Item]
---

> Define actions links and post with a feed element.

# Define Action Links and Post with a Feed Element

Define actions links and post with a feed element.

## Step 1: Define the Action Link Group

Just like radio buttons, action links must be nested in a group. Action links within a group share the properties of the group and are mutually exclusive (you can click only one action link within a group). Even if you define only one action link, it must be part of an action link group.

Think of an action link as a button on a feed item. Like a button, an action link includes a label (labelKey). An action link definition also includes other properties like a URL (actionUrl), an HTTP method (method), and an optional request body (requestBody) and HTTP headers (headers).

When a user clicks this action link, an HTTP POST request is made to a Connect REST API resource, which posts a feed item to Chatter. The requestBody property holds the request body for the actionUrl resource, including the text of the new feed item. In this example, the new feed item includes only text, but it could include other capabilities such as a file attachment, a poll, or even action links.

Resource

[/connect/action-link-group-definitions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm "Create an action link group definition. To associate an action link with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.")

HTTP method

POST

Request body

[Action Link Group Definition Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_group_definition_input.htm#connect_requests_action_link_group_definition_input "The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.")

This request body includes an actionLinks property that holds a collection of [Action Link Definition Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_definition_input.htm#connect_requests_action_link_definition_input "The definition of an action link. An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.") request bodies. This example has one action link.

Request body example

```

```

Request example using cURL

To use [cURL](http://curl.haxx.se/ "HTML (New Window)") to make the request, enter the following and substitute your Developer Edition instance name, and OAuth information.

```

```

Response body

[Action Link Group Definition](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group_definition.htm "The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.")

## Step 2: Associate the Action Link Group with a Feed Item and Post It

You can associate up to 10 action link groups with a feed element.

Resource

[/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.")

HTTP method

POST

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body.

This Feed Item Input request body also includes a capabilities property that is a [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.") request body. In this example, the Feed Element Capabilities Input includes an associatedActions property that is a [Associated Actions Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_associated_actions_capability_input.htm "Describes action links that can be created or updated on a feed element. To associate an action link group with a feed element, the client must be the same client app that created the action link group definition and the user must either be the user who created the definition or have View all Data permission.") request body.

Request body example

Grab the action link group ID from the id property of the Action Link Group Definition response from step 1.

```

```

Request example using cURL

To use [cURL](http://curl.haxx.se/ "HTML (New Window)") to make the request, enter the following and substitute the action link group ID returned in step 1, your Developer Edition instance name, and your OAuth information.

```

```

Response body

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

#### See Also

-   [*Salesforce Help*: Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template.htm&type=5&language=en_US "Salesforce Help: Action Link Templates - HTML (New Window)")

-   [Action Links](atlas.en-us.chatterapi.meta/chatterapi/features_action_links.htm "An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.")

-   [Action Link Group Definitions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm "Create an action link group definition. To associate an action link with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.")

-   [Feed Elements, Post and Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.")

-   [Define Action Links in a Template and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link_template.htm "Define action links in a template and post with a feed element.")

## Code Examples

```
POST /services/data/v66.0/connect/action-link-group-definitions
{
   "executionsAllowed":"OncePerUser",
   "expirationDate":"2015-05-20T19:32:10+0000",
   "category":"Primary",
   "actionLinks":[
      {
         "actionType":"Api",
         "actionUrl":"/services/data/v66.0/chatter/feed-elements",
         "labelKey":"Post",
         "method":"HttpPost",
         "requiresConfirmation":"false",
         "requestBody":"{"subjectId": "me","feedElementType": "FeedItem","body": 
{"messageSegments": [{"type": "Text","text": "This post was created via an API action link."}]}}",
         "headers":[
            {
               "name":"Content-Type",
               "value":"application/json"
            },
            {
               "name":"Authorization",
               "value":"OAuth <SALESFORCE_ACCESS_TOKEN>"
            }
         ]
      }
   ]
}
```

```
curl -H "X-PrettyPrint: 1" -H "Content-Type: application/json" 
-d '{ "executionsAllowed":"OncePerUser", "expirationDate":"2015-09-20T19:32:10+0000", "category":"Primary", 
"actionLinks":[ { "actionType":"Api", "actionUrl":"/services/data/v66.0/chatter/feed-elements", 
"groupDefault":"true", "labelKey":"Post", "method":"HttpPost", "requiresConfirmation":"true", 
"requestBody":"{"subjectId": "me","feedElementType": "FeedItem","body": 
{"messageSegments": [{"type": "Text","text": "This is a test post created via an API action link."}]}}", 
"headers":[ { "name":"Content-Type", "value":"application/json" }, { "name":"Authorization", "value":"OAuth <SALESFORCE_ACCESS_TOKEN>" }] }] }' 
-X POST "https://instance_name/services/data/v66.0/connect/action-link-group-definitions" 
-H 'Authorization: OAuth <SALESFORCE_ACCESS_TOKEN>' --insecure
```

```
POST /services/data/v66.0/chatter/feed-elements

{
  "body": {
    "messageSegments": [
      {
        "type": "Text",
        "text": "Click to post a feed item."
       }
    ]
    },
  "subjectId": "me",
  "feedElementType": "feedItem",
  "capabilities": {
    "associatedActions": {
      "actionLinkGroupIds": ["0AgRR0000004CTr0AM"]
    }
  }
}
```

```
curl -H "X-PrettyPrint: 1" -H "Content-Type: application/json" -d '{ "body": { "messageSegments": 
[ { "type": "Text", "text": "Click to post a feed item." } ] }, "subjectId": "me", "feedElementType": "feedItem", "capabilities": 
{ "associatedActions": { "actionLinkGroupIds": ["0AgRR0000004CTr0AM"] } } }' 
-X POST "https://instance_name/services/data/v66.0/chatter/feed-elements" 
-H 'Authorization: OAuth OOARoAQETAKEIddnMWXh462dprYAgRWaPj94O6yOD' --insecure
```

## Related Topics

- /connect/action-link-group-definitions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm)
- Action Link Group Definition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_group_definition_input.htm)
- Action Link Definition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_definition_input.htm)
- Action Link Group Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group_definition.htm)
- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
- Associated Actions Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_associated_actions_capability_input.htm)
