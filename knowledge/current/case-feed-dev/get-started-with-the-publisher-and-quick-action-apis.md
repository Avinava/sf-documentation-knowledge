---
title: "Get Started with the Publisher and Quick Action APIs"
domain: case-feed-dev
topic: get-started-with-the-publisher-and-quick-action-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.342Z
estimatedTokens: 970
keywords: [Started, Publisher, Quick, Action, APIs, custom, components, interact, actions, pages, Salesforce, Classic, Lightning, Experience, apps]
---

# Get Started with the Publisher and Quick Action APIs

> Create custom components to interact with the actions on pages in Salesforce Classic and
  Lightning Experience apps. Using Aura components, Visualforce, and Apex, you can customize your
  app’s experience, including the case feed. For example, you can use a custom component to let
  users send an email with a Knowledge article.

# Get Started with the Publisher and Quick Action APIs

Create custom components to interact with the actions on pages in Salesforce Classic and Lightning Experience apps. Using Aura components, Visualforce, and Apex, you can customize your app’s experience, including the case feed. For example, you can use a custom component to let users send an email with a Knowledge article.

| Available in: Salesforce Classic and Lightning Experience |
| --- |
| Available in: Group, Professional, Enterprise, Performance, Unlimited, and Developer Editions |


The Salesforce Classic Publisher JavaScript APIs, also known as the Case Feed Publisher APIs, and the Lightning Quick Action JavaScript APIs both interact with page actions. The Publisher APIs work with Visualforce components and pages to interact with publisher actions. The Quick Action APIs are called by the lightning:quickActionAPI component to interact with quick actions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=case_feed_dev)

#### Note

Starting with API version 43.0 of the Publisher API, the methods used in Visualforce components work in Lightning Experience. Just point to the latest version of the Publisher API script in your Visualforce pages.

To use this guide, it helps if you have a basic familiarity with JavaScript, Visualforce, Apex, Aura components, and the Salesforce user interface.

#### See Also

-   [How Are the Publisher and Quick Action APIs Different?](atlas.en-us.case_feed_dev.meta/case_feed_dev/publisher_quickaction_why_ui_matters.htm "The user interface in your org can dictate which development tools you can use to interact with actions. In Salesforce Classic, you use the Salesforce Classic Publisher JavaScript APIs with Visualforce components to interact with actions. In Lightning Experience, you use the lightning:quickActionAPI component to call the Lightning Quick Action JavaScript APIs to interact with actions.")

-   [Method Parity Between the Publisher API and the Quick Action API](atlas.en-us.case_feed_dev.meta/case_feed_dev/publisher_quickaction_method_parity.htm "The Lightning Quick Action JavaScript API allows you to interact with actions within Aura components similar to how the Salesforce Classic Publisher JavaScript API allows you to interact with publisher actions within Visualforce pages.")

-   [Quick Action APIs in Lightning Experience](atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api.htm "A lightning:quickActionAPI component allows you to access methods for programmatically controlling quick actions on record pages. This component is supported in Lightning Experience and supports utility pop-out. This component requires API version 43.0 and later.")

-   [Publisher APIs in Salesforce Classic](atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm "The Salesforce Classic Publisher JavaScript API lets your Visualforce pages and components interact with actions you’ve added to a record page in a Salesforce Classic app for objects that are feed-enabled. The Publisher API works in Salesforce Classic apps with standard navigation and console navigation. For example, you could develop a component that generates customized, pre-written text, adds that text to a new post in the Case Feed portal action, and submits the post to the portal, all with one click.")

-   [Customize Case Feed Actions with Visualforce](atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_visualforce.htm "The Salesforce-provided Case Feed Visualforce components enable you to create a customized page within a Salesforce Classic app. To create custom Salesforce console components that interact with Case Feed actions, publish the Case Feed-related events using the publish method on the Sfdc.canvas.publisher object in the Salesforce Classic Publisher JavaScript API.")

## Related Topics

- How Are the Publisher and Quick Action APIs Different? (atlas.en-us.case_feed_dev.meta/case_feed_dev/publisher_quickaction_why_ui_matters.htm)
- Method Parity Between the Publisher API and the Quick Action API (atlas.en-us.case_feed_dev.meta/case_feed_dev/publisher_quickaction_method_parity.htm)
- Quick Action APIs in Lightning Experience (atlas.en-us.case_feed_dev.meta/case_feed_dev/quickaction_api.htm)
- Publisher APIs in Salesforce Classic (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_component_interactions.htm)
- Customize Case Feed Actions with Visualforce (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_visualforce.htm)
