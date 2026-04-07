---
title: "Define Action Links in a Template and Post with a Feed Element"
domain: chatterapi
topic: define-action-links-in-a-template-and-post-with-a-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.120Z
estimatedTokens: 2127
keywords: [Define, Action, Links, Template, Post, Feed, Element, Step, Link, Templates, Group, Instantiate, Associate]
---

# Define Action Links in a Template and Post with a Feed Element

> Define action links in a template and post with a feed element.

# Define Action Links in a Template and Post with a Feed Element

Define action links in a template and post with a feed element.

## Step 1: Create the Action Link Templates

Just like radio buttons, action links must be nested in a group. Action links within a group share the properties of the group and are mutually exclusive (you can click only one action link within a group). Even if you define only one action link, it must be part of an action link group. The same is true for action link templates and action link group templates.

This example uses one action link in an action link group. When a user clicks the action link, an HTTP POST request is made to a Connect REST API resource, which posts a feed item to Chatter. The HTTP Request Body field holds the request body for the Action URL resource, including the text of the new feed item. In this example, the new feed item includes only text, but it could include other capabilities such as a file attachment, a poll, or even action links.

1.  From Setup, enter Action Link Templates in the Quick Find box, then select **Action Link Templates**.
2.  Use these values in a new Action Link Group Template:

    | Field | Value |
    | --- | --- |
    | Name | Doc Example |
    | Developer Name | Doc_Example |
    | Category | Primary action |
    | Executions Allowed | Once per User |

3.  Use these values in a new Action Link Template:

    | Field | Value |
    | --- | --- |
    | Action Link Group Template | Doc Example |
    | Action Type | Api |
    | Action URL | /services/data/{!Bindings.ApiVersion}/chatter/feed-elements |
    | User Visibility | Everyone can see |
    | HTTP Request Body | {"subjectId": "{!Bindings.SubjectId}","feedElementType": "FeedItem","body": {"messageSegments": [{"type": "Text","text": "{!Bindings.Text}"}]}} |
    | HTTP Headers | Content-Type: application/json |
    | Position | 0 |
    | Label Key | Post |
    | HTTP Method | POST |

4.  Go back to the Action Link Group Template and select Published. Click **Save**.

    Make a note of the Action Link Group Template ID and skip to Step 3.


## Step 2: Get the Action Link Group Template ID

If you have access to the action link group template in Setup, you can get the Action Link Group Template ID and skip to Step 3.

Resource

```

```

HTTP method

GET

Request parameters

q—A SOQL query string.

Request parameters example

```

```

cURL example

```

```

Response body

An array of query result records.

```

```

## Step 3: Instantiate the Action Link Group

Resource

[/connect/action-link-group-definitions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm "Create an action link group definition. To associate an action link with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.")

HTTP method

POST

Request body

[Action Link Group Definition Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_group_definition_input.htm#connect_requests_action_link_group_definition_input "The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.")

This Action Link Group Definition Input request body includes a templateBindings property that is a collection of [Action Link Template Binding Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_template_binding_input.htm "A key-value pair to fill in a binding variable value from an action link template.") request bodies. In this example, the Action Link Template Binding Input request body includes three template bindings.

Request body example

```

```

Request example using cURL

To use [cURL](http://curl.haxx.se/ "HTML (New Window)") to make the request, enter the following and substitute your Developer Edition instance name, and OAuth information.

```

```

Response body

[Action Link Group Definition](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group_definition.htm "The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.")

## Step 4: Associate the Action Link Group with a Feed Element and Post It

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

Grab the action link group ID from the id property of the Action Link Group Definition response from step 3.

```

```

Request example using cURL

To use [cURL](http://curl.haxx.se/ "HTML (New Window)") to make the request, enter the following and substitute the action link group ID returned in step 2, your Developer Edition instance name, and your OAuth information.

```

```

Response body

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

#### See Also

-   [Action Link Group Definitions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm "Create an action link group definition. To associate an action link with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.")

-   [Feed Elements, Post and Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.")

-   [*Salesforce Help*: Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template.htm&type=5&language=en_US "Salesforce Help: Action Link Templates - HTML (New Window)")

-   [Action Links](atlas.en-us.chatterapi.meta/chatterapi/features_action_links.htm "An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.")

-   [Define Action Links and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm "Define actions links and post with a feed element.")

## Code Examples

```
/services/data/v33.0/query
```

```
GET /services/data/v66.0/query?q=SELECT+id+FROM+ActionLinkGroupTemplate+WHERE+DeveloperName='Doc_Example'
```

```
curl https://instance_name/services/data/v66.0/query?q=SELECT+id+FROM+ActionLinkGroupTemplate+
WHERE+DeveloperName='Doc_Example' -H "Authorization: Bearer token"
```

```
{
   "totalSize":1,
   "done":true,
   "records":[
      {
         "attributes":{
            "type":"ActionLinkGroupTemplate",
            "url":"/services/data/v66.0/sobjects/ActionLinkGroupTemplate/07gD00000004CEhIAM"
         },
         "Id":"07gD00000004CEhIAM"
      }
   ]
}
```

```
POST /services/data/v66.0/connect/action-link-group-definitions
{
     "templateId":"07gD00000004CEhIAM",
     "templateBindings" : [
        {
           "key":"ApiVersion",
           "value":"v33.0"
        },
        {
           "key":"Text",
           "value":"This post was created by an API Action Link!"
        },
        {
           "key":"SubjectId",
           "value":"me"
        }
     ]
}
```

## Related Topics

- /connect/action-link-group-definitions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_group_definitions.htm)
- Action Link Group Definition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_group_definition_input.htm)
- Action Link Template Binding Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_template_binding_input.htm)
- Action Link Group Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group_definition.htm)
- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
- Associated Actions Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_associated_actions_capability_input.htm)
