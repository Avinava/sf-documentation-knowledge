---
title: "Action Links Overview, Authentication, and Security"
domain: apex-guide
topic: action-links-overview-authentication-and-security
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.482Z
estimatedTokens: 3084
keywords: [Action, Links, Overview, Authentication, Security, Apex, action, links, security, authentication, labels, errors., Workflow, Link, Templates, Context, Variables, Versioning, Errors, Localized]
---

# Action Links Overview, Authentication, and Security

> Learn about Apex action links security, authentication, labels, and errors.

# Action Links Overview, Authentication, and Security

Learn about Apex action links security, authentication, labels, and errors.

## Workflow

This feed item contains one action link group with one visible action link, **Join**.

![Join action link on a feed item](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_join.png&folder=apexcode)

The workflow to create and post action links with a feed element:

1.  (Optional) Create an [action link template](#templates).
2.  Call [ConnectApi.ActionLinks.createActionLinkGroupDefinition(communityId, actionLinkGroup)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_createActionLinkGroupDefinition_1) to define an action link group that contains at least one action link.
3.  Call [ConnectApi.ChatterFeeds.postFeedElement(communityId, feedElement)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3) to post a feed element and associate the action link with it.

## Action Link Templates

Create action link templates in Setup to instantiate action link groups with common properties. You can package templates and distribute them to other Salesforce orgs.

Specify binding variables in the template and set the values of the variables when you instantiate the action link group. For example, use a binding variable for the API version number, a user ID, or an OAuth token.

You can also specify context variables in the templates. When a user executes the action link, Salesforce provides values for these variables, such as who executed the link and in which organization.

To instantiate the action link group, call the [ConnectApi.ActionLinks.createActionLinkGroupDefinition(communityId, actionLinkGroup)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_createActionLinkGroupDefinition_1) method. Specify the template ID and the values for any binding variables defined in the template.

See [Design Action Link Templates](https://help.salesforce.com/articleView?id=action_link_group_template_design.htm&type=5&language=en_US).

## Type of Action Links

Specify the action link type in the actionType property when you define an action link.

There are four types of action links:

-   Api—The action link calls a synchronous API at the action URL. Salesforce sets the status to SuccessfulStatus or FailedStatus based on the HTTP status code returned by your server.
-   ApiAsync—The action link calls an asynchronous API at the action URL. The action remains in a PendingStatus state until a third party makes a request to /connect/action-links/actionLinkId to set the status to SuccessfulStatus or FailedStatus when the asynchronous operation is complete.
-   Download—The action link downloads a file from the action URL.
-   Ui—The action link takes the user to a web page at the action URL.

## Authentication

When you define an action link, specify a URL (actionUrl) and the HTTP headers (headers) required to make a request to that URL.

If an external resource requires authentication, include the information wherever the resource requires.

If a Salesforce resource requires authentication, you can include OAuth information in the HTTP headers or you can include a bearer token in the URL.

Salesforce automatically authenticates these resources.

-   Relative URLs in templates
-   Relative URLs beginning with /services/apexrest when the action link group is instantiated from Apex

Don’t use these resources for sensitive operations.

## Security

HTTPS

The action URL in an action link must begin with https:// or be a relative URL that matches one of the rules in the previous Authentication section.

Encryption

API details are stored with encryption, and obfuscated for clients.

The actionURL, headers, and requestBody data for action links that are not instantiated from a template are encrypted with the organization’s encryption key. The Action URL, HTTP Headers, and HTTP Request Body for an action link template are not encrypted. The binding values used when instantiating an action link group from a template are encrypted with the organization’s encryption key.

Action Link Templates

Only users with Customize Application user permission can create, edit, delete, and package action link templates in Setup.

Don’t store sensitive information in templates. Use binding variables to add sensitive information when you instantiate the action link group. After the action link group is instantiated, the values are stored in an encrypted format. See Define Binding Variables in [Design Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template_design.htm&type=5&language=en_US "HTML (New Window)").

Client Apps

When creating action links via a client app, it's a good idea to use a client app with a consumer key that never leaves your control. The client app is used for server-to-server communication and is not compiled into mobile apps that could be decompiled.

Expiration Date

When you define an action link group, specify an expiration date (expirationDate). After that date, the action links in the group can’t be executed and disappear from the feed. If your action link group definition includes an OAuth token, set the group’s expiration date to the same value as the expiration date of the OAuth token.

Action link templates use a slightly different mechanism for excluding a user. See Set the Action Link Group Expiration Time in [Design Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template_design.htm&type=5&language=en_US "HTML (New Window)").

Exclude a User or Specify a User

Use the excludeUserId property of the action link definition input to exclude a single user from executing an action.

Use the userId property of the action link definition input to specify the ID of a user who alone can execute the action. If you don’t specify a userId property or if you pass null, any user can execute the action. You can’t specify both excludeUserId and userId for an action link

Action link templates use a slightly different mechanism for excluding a user. See Set Who Can See the Action Link in [Design Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template_design.htm&type=5&language=en_US "HTML (New Window)").

Read, Modify, or Delete an Action Link Group Definition

There are two views of an action link and an action link group: the definition, and the context user’s view. The definition includes potentially sensitive information, such as authentication information. The context user’s view is filtered by visibility options and the values reflect the state of the context user.

Action link group definitions can contain sensitive information (such as OAuth tokens). For this reason, to read, modify, or delete a definition, the user must have created the definition or have View All Data permission. In addition, in Connect REST API, the request must be made via the same client app that created the definition. In Apex, the call must be made from the same namespace that created the definition.

## Context Variables

Use context variables to pass information about the user who executed the action link and the context in which it was invoked into the HTTP request made by invoking an action link. You can use context variables in the actionUrl, headers, and requestBody properties of the Action Link Definition Input request body or ConnectApi.ActionLinkDefinitionInput object. You can also use context variables in the Action URL, HTTP Request Body, and HTTP Headers fields of action link templates. You can edit these fields, including adding and removing context variables, after a template is published.

The context variables are:

| Context Variable | Description |
| --- | --- |
| {!actionLinkId} | The ID of the action link the user executed. |
| {!actionLinkGroupId} | The ID of the action link group containing the action link the user executed. |
| {!communityId} | The ID of the site in which the user executed the action link. The value for your internal org is the empty key "000000000000000000". |
| {!communityUrl} | The URL of the site in which the user executed the action link. The value for your internal org is empty string "". |
| {!orgId} | The ID of the org in which the user executed the action link. |
| {!userId} | The ID of the user that executed the action link. |

## Versioning

To avoid issues due to upgrades or changing functionality in your API, we recommend using versioning when defining action links. For example, the actionUrl property in the [ConnectApi.ActionLinkDefinitionInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_action_link_definition.htm)looks like https://www.example.com/api/v1/exampleResource.

You can use templates to change the values of the actionUrl, headers, or requestBody properties, even after a template is distributed in a package. Let’s say you release a new API version that requires new inputs. An admin can change the inputs in the action link template in Setup and even action links already associated with a feed element use the new inputs. However, you can’t add new binding variables to a published action link template.

If your API isn’t versioned, you can use the expirationDate property of the [ConnectApi.ActionLinkGroupDefinitionInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_action_link_group_definition.htm) to avoid issues due to upgrades or changing functionality in your API. See Set the Action Link Group Expiration Time in [Design Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template_design.htm&type=5&language=en_US "HTML (New Window)").

## Errors

Use the Action Link Diagnostic Information method ([ConnectApi.ActionLinks.getActionLinkDiagnosticInfo(communityId, actionLinkId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_getActionLinkDiagnosticInfo_1)) to return status codes and errors from executing Api action links. Diagnostic info is given only for users who can access the action link.

## Localized Labels

Action links use a predefined set of localized labels specified in the labelKey property of the [ConnectApi.ActionLinkDefinitionInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_action_link_definition.htm) request body and the Label field of an action link template.

For a list of labels, see [Actions Links Labels](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_appendices_action_links_labels.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If none of the label key values make sense for your action link, specify a custom label in the Label field of an action link template and set Label Key to None. However, custom labels aren’t localized.

#### See Also

-   [Action Links Use Case](atlas.en-us.apexcode.meta/apexcode/connectapi_features_action_links_use_cases.htm "Use action links to integrate Salesforce and third-party services with a feed. An action link can make an HTTP request to a Salesforce or third-party API. An action link can also download a file or open a web page. This topic contains an example use case.")

-   [Define an Action Link and Post with a Feed Element](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_define_post_action_link.htm "Create one action link in an action link group, associate the action link group with a feed item, and post the feed item.")

-   [Define an Action Link in a Template and Post with a Feed Element](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_define_post_action_link_template.htm "Create an action link and action link group and instantiate the action link group from a template.")

## Related Topics

- Action Links Use Case (atlas.en-us.apexcode.meta/apexcode/connectapi_features_action_links_use_cases.htm)
- Define an Action Link and Post with a Feed Element (atlas.en-us.apexcode.meta/apexcode/connectapi_examples_define_post_action_link.htm)
- Define an Action Link in a Template and Post with a Feed Element (atlas.en-us.apexcode.meta/apexcode/connectapi_examples_define_post_action_link_template.htm)
