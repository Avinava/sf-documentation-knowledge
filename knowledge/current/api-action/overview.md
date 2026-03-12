---
title: "Overview"
domain: api-action
topic: overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:57.936Z
estimatedTokens: 639
keywords: [Actions, allow, build, custom, development, tools, Lightning, Platform, applications]
---

# Overview

> Actions allow you to build custom development
      tools for Lightning Platform applications.

# Overview

Actions allow you to build custom development tools for Lightning Platform applications.

Actions are about “getting things done” in Salesforce. They encapsulate a piece of logic that allows a user to perform some work, such as sending email. When an action runs, it saves changes in your organization by updating the database.

Actions are easy to discover and use, and also easy to understand and implement. Every button and link in Salesforce can be considered an action. A consistent Actions API and framework support the creation and distributed use of actions throughout Salesforce. Actions are available in the REST API.

The types of actions are:

| Type | Description |
| --- | --- |
| InvocableAction | Invocable actions can be invoked from a common endpoint in the REST API. They provide “describe” support – a programmatic mechanism to learn about all invocable actions on the platform.There are two types of invocable actions.Standard actionA standard action is ready to use right away. The work it performs is predefined, along with its inputs and outputs, and they’re available in every organization.Custom actionYou create custom actions because these actions require a definition. For example, to use an Apex action, create the Apex class method for the action. |
| QuickAction | Quick Actions, formerly known as Publisher Actions, use page layouts to make it easy for administrators to configure an action to create or update a record. The API always works with an sObject. |
| StandardButton | Standard buttons are URLs allowing users to either go to another page (for example, the Edit page) or accomplish some task (for example, lead conversion). |
| CustomButton | Custom buttons are URLs that an administrator can specify and when included on a page and clicked, will redirect a user to that URL. |

To call an action from a flow, use FlowActionCall, as described in the [Metadata API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "HTML (New Window)").

The If-Modified-Since header can be used with actions, with a date format of EEE, dd MMM yyyy HH:mm:ss z. When this header is used, if the action metadata has not changed since the provided date, a 304 Not Modified status code is returned, with no response body.

#### See Also

-   [*REST API Developer Guide* : Invocable Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable.htm " REST API Developer Guide : Invocable Actions  - HTML (New Window)")
