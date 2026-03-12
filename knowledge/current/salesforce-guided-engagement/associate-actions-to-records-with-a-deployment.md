---
title: "Associate Actions to Records with a Deployment"
domain: salesforce-guided-engagement
topic: associate-actions-to-records-with-a-deployment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.913Z
estimatedTokens: 2299
keywords: [Associate, Actions, Records, Deployment, Recommendations, show, open, phone, screen, popups, chats, views, lets, Best, Action]
---

# Associate Actions to Records with a Deployment

> Use an Actions & Recommendations deployment to show default actions when records
    open from phone screen popups, chats, list views, or related records. A deployment also lets you
    show recommendations from Next Best Action strategies. After you create a deployment, select it
    in the Actions & Recommendations component on your Lightning record pages.

# Associate Actions to Records with a Deployment

Use an Actions & Recommendations deployment to show default actions when records open from phone screen popups, chats, list views, or related records. A deployment also lets you show recommendations from Next Best Action strategies. After you create a deployment, select it in the Actions & Recommendations component on your Lightning record pages.

When you configure an Actions & Recommendations deployment, you define these settings.

-   Type of guidance to show—Select at least one option, **Flows and quick actions** or **Recommendations**.
-   Context objects—Specify which objects to use for object-specific quick actions and action strategies.
-   Channel defaults—For each channel, define the default actions that appear when a record is opened in that channel and no other RecordAction associations exist.
-   Additional actions—Define which actions users can launch at run time, as needed. When a user clicks Add and selects an action, it starts. We create a RecordAction that associates the action with the current record page.
-   Recommendation settings—Specify how Next Best Action recommendations appear, how many to show, and which action strategies to use.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

You can use Process Builder to create RecordActions that appear in the component, but to show recommendations, create a deployment or use API.

Before you configure a deployment, first set up the flows and quick actions that you want to show in the component. If you want to include recommendations from Next Best Action strategies, configure them first as well.

You can define a deployment in Setup, or programmatically using the metadata type [RecordActionDeployment](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_recordactiondeployment.htm).

1.  From Setup, in the Quick Find box, enter Actions & Recommendations, and select **Actions & Recommendations**.
2.  Click **New Deployment**.
    1.  Name your deployment.
    2.  Select at least one type of guidance to show, for example, **Flows and quick actions**. To display actions and offers that result from filtering recommendations with your Next Best Action strategies, select **Recommendations**.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

        #### Note

        If you edit a deployment and deselect a type of guidance, we delete the related settings.

3.  Select up to 10 objects that provide context for object-specific quick actions and Next Best Action strategies.

    You can associate quick actions and strategies with specific object types, giving them an object-specific, rather than global, context. When a page for a selected object opens, the component lists the global and object-specific actions and recommendations. On other pages, it displays only the global items.

    For example, you define an object-specific quick action for the Contact object. To show this quick action in the component on Contact pages, add Contact as a context object. Or, to filter recommendations with a strategy that uses case fields, add the Case object as a context object. Then, in strategy settings, select a strategy that filters recommendations for cases.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

    #### Note

    To use object-specific quick actions in a deployment, add them to record page layouts for those objects. The component shows quick actions that are available in the page layout.

4.  If you selected the option to show flows and quick actions, configure a default list for each channel.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_guided_engagement)

    #### Important

    -   The component shows channel defaults only when no other RecordActions exist and the record page is opened in that channel. For example, if you set up a process in Process Builder that creates RecordActions for a record page, the component shows the RecordActions from your process instead of the channel defaults that you configure here.
    -   If a default action is added to an existing deployment, users see the action in the Actions & Recommendations component on new records only.

    1.  Click a tab to configure settings for that channel.

        -   Chat

            This channel works with Chat in Lightning Experience. Use this channel to specify default actions for when agents chat with customers. To use this channel, add the component to the chat transcript record page.

        -   Phone

            This channel works with Open CTI. Use this channel to specify default steps for when customers call and records are shown to the agent. To use this channel, update your softphone screen pop settings for no matching records and single-matching records.

        -   Default

            Use this channel to specify default actions for when records open from list views or related records.


        The Chat and Phone channels display even if you don’t have these features in your org.

        ![Configure channel defaults.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_console%2Fimages%2Fguided_action_deployment_channel.png&folder=salesforce_guided_engagement)

        You can configure multiple channels. For example, if you use Open CTI, you can configure actions for the Phone and Default channels. That way, agents can select actions from the list when a caller’s contact record is popped. Agents can also navigate to a contact record manually, such as when they open a record from a list view. Then they see the actions that you set up in the Default channel.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

        #### Note

        For information about Chat and Open CTI integration, see [Integrate Chat with Lightning Flow for Service](https://developer.salesforce.com/docs/atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_integrate_live_agent.htm "HTML (New Window)") and [Integrate Open CTI with Lightning Flow for Service](https://developer.salesforce.com/docs/atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_integrate_cti.htm "HTML (New Window)").

    2.  On each channel, drag actions from **All Actions** to the preview area.

        The preview area has three regions: Top Pinned, Unpinned, or Bottom Pinned. Use the pinned regions to specify actions that you want your users to complete first and last. The Unpinned region is for actions that you want your users to complete during the record’s life cycle.

    3.  Select actions that are important, and click **Mark Mandatory**.

        When a user tries to close a flow that’s marked as mandatory without completing it, a reminder appears.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

        #### Note

        You don’t see a reminder for quick actions or autolaunched flows that are marked as mandatory.

    4.  Select actions that you don’t want users to remove at run time, and click **Unmark Removable**. By default, all actions are removable.
    5.  Specify whether to auto-launch the first action when the record page opens.
    6.  Click **Save**.
5.  If you selected the option to show flows and quick actions, narrow the list of actions that users can launch at run time. When the user clicks Add, the component shows the subset of actions that you configure here.
6.  If you selected the option to show recommendations, configure display settings and Next Best Action strategies.
    1.  On the General Settings tab, set up how recommendations display, and select a default strategy.

        Set the maximum number of recommendations to a value from 1 to 4.

    2.  On the Strategy Settings tab, you can select object-specific strategies that override the default strategy on those pages.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

        #### Note

        For the component to display recommendations, select a default or an object-specific strategy. A strategy loads and filters recommendations so that your users can see the best next steps.

        ![You can select object-specific strategies that override the default strategy.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_console%2Fimages%2Fguided_action_deployment_strategy.png&folder=salesforce_guided_engagement)

    3.  Click **Save**.
7.  In Lightning App Builder, [add the Actions & Recommendations component to a page](https://help.salesforce.com/articleView?id=console_lex_guided_action_use_deployment.htm&language=en_US), and select the deployment.

If you don’t select a deployment in component properties, no actions appear when the user clicks Add. In addition, the component is empty unless other RecordActions exist for the record page.
