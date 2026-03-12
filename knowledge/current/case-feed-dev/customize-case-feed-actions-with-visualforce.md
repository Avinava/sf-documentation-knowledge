---
title: "Customize Case Feed Actions with Visualforce"
domain: case-feed-dev
topic: customize-case-feed-actions-with-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.370Z
estimatedTokens: 1010
keywords: [Customize, Case, Feed, Actions, Visualforce, Salesforce-provided, components, enable, customized, Salesforce, Classic, app, custom, console, interact]
---

# Customize Case Feed Actions with Visualforce

> The Salesforce-provided Case Feed Visualforce components enable you to create a
    customized page within a Salesforce Classic app. To create custom Salesforce console components
    that interact with Case Feed actions, publish the Case Feed-related events using the publish method on the Sfdc.canvas.publisher object in the Salesforce Classic Publisher JavaScript
    API.

# Customize Case Feed Actions with Visualforce

The Salesforce-provided Case Feed Visualforce components enable you to create a customized page within a Salesforce Classic app. To create custom Salesforce console components that interact with Case Feed actions, publish the Case Feed-related events using the publish method on the Sfdc.canvas.publisher object in the Salesforce Classic Publisher JavaScript API.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=case_feed_dev)

#### Important

This section of the guides focuses on customizing the Case Feed in a Salesforce Classic console app. However, you can use the Visualforce components in Salesforce Classic apps with standard navigation that use the case object, too. You can also use the Case Feed Visualforce components in Lightning Experience. However, there are some issues with refresh for certain Visualforce components. We recommend that you use these components in Salesforce Classic only.

## Requirements

Before customizing Case Feed in the Salesforce console, make sure that:

-   Case Feed, Chatter, and feed tracking on cases are enabled in your organization.
-   Your organization has at least one Salesforce console app. For more information, see [Set Up a Salesforce Console App in Salesforce Classic](https://help.salesforce.com/articleView?id=console2_define_app.htm&language=en_US "HTML (New Window)").
-   You’re familiar with developing with Visualforce. Check out the [Visualforce Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "HTML (New Window)") for a comprehensive overview.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=case_feed_dev)

#### Note

Lookup field filters aren’t supported on any of the Case Feed Visualforce components.

## Assigning Custom Pages to Users

Generally, when you create a custom Case Feed page using Visualforce, it’s not possible to assign that page only to certain users while allowing other users to see the standard Case Feed page. However, with the support:CaseFeed component, you can create a page that replicates the standard Case Feed page, assign that page to certain users, and then create a custom page to assign to a different set of users. See [Replicating a Standard Case Feed Page](atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_case_feed_component.htm) for more information.

## Customization Overview

Here are the Case Feed Visualforce components.

| Component Name | Description |
| --- | --- |
| apex:emailPublisher | Displays and controls the appearance and functionality of the Case Feed Email action. |
| apex:logCallPublisher | Displays and controls the appearance and functionality of the Case Feed Log a Call action. |
| support:caseArticles | Displays and controls the appearance and functionality of the Articles tool for cases. |
| support:CaseFeed | Replicates the standard Case Feed page, including all standard actions, links, and buttons. |
| support:portalPublisher | Displays and controls the appearance and functionality of the Case Feed Portal action. |

In addition, the [chatter:feed](atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_general_customizations.htm) component has two attributes related to Case Feed.

-   feedItemType: Lets you specify how feed items are filtered.
-   showPublisher: Lets you display the Chatter publisher on a page.

Here are the Publisher JavaScript APIs.

| Method Name | Description |
| --- | --- |
| customActionMessage | Passes a custom event to a custom action. Supported for Visualforce-based custom actions only. |
| invokeAction | Triggers the submit function (such as sending an email or posting a portal comment) on the specified action. |
| selectAction | Selects the specified action and puts it in focus. |
| refresh | Refreshes the current record page. |
| setActionInputValues | Specifies which fields on the action should be populated with specific values, and what those values are. |

## Related Topics

- Replicating a Standard Case Feed Page (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_case_feed_component.htm)
- apex:emailPublisher (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_email_publisher.htm)
- apex:logCallPublisher (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_log_call_publisher.htm)
- support:caseArticles (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_articles_tool.htm)
- support:CaseFeed (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_case_feed_component.htm)
- support:portalPublisher (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_portal_publisher.htm)
- chatter:feed (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_general_customizations.htm)
- customActionMessage (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- invokeAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- selectAction (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
