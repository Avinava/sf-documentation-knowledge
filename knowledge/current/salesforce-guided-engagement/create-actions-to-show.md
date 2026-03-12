---
title: "Create Actions to Show"
domain: salesforce-guided-engagement
topic: create-actions-to-show
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.921Z
estimatedTokens: 1106
keywords: [Actions, Show, recommendations, want, users, start, component, flows, quick, result, Best, Action, strategies]
---

# Create Actions to Show

> Create the actions and recommendations that you want to users to start from the
        Actions & Recommendations component. You can show flows, quick actions, and
        recommendations that result from Next Best Action strategies.

# Create Actions to Show

Create the actions and recommendations that you want to users to start from the Actions & Recommendations component. You can show flows, quick actions, and recommendations that result from Next Best Action strategies.

1.  [Create a flow](https://help.salesforce.com/articleView?id=flow_build.htm&language=en_US "HTML (New Window)").
    1.  To create flows that interactively guide your users, use Flow Builder, a point-and-click tool that lets you automate business processes.

        The component can show screen flows, field service mobile flows, and autolaunched flows. You can also define the flow to include stages so that users can see where they are in a series of steps.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

        #### Note

        If you want to pass the parent record ID into a flow when it’s launched from the component, create a flow text input variable named recordId. The name is case-sensitive. When an agent launches the flow from the component, the parent record ID is passed into the flow variable. Your flow can then use the parent record ID to update a field in the record, for example.

    2.  [Test your flow](https://help.salesforce.com/articleView?id=flow_test.htm&language=en_US "HTML (New Window)")

        Before you activate your flow, test it and make sure that it’s working as expected.

    3.  [Activate your flow.](https://help.salesforce.com/articleView?id=flow_distribute_activate.htm&language=en_US "HTML (New Window)")

        To appear in the Actions & Recommendations component, your flow must be active.

2.  Create a quick action.

    You can create a global or object-specific quick action and show it in the component. For the quick action to appear in the component, [add it to the record page layout](https://help.salesforce.com/articleView?id=adding_actions_using_ple.htm&language=en_US "HTML (New Window)").

3.  Create offers or actions to recommend to users using Next Best Action strategies.
    1.  [Create recommendations.](https://help.salesforce.com/articleView?id=nba_recommendations_app.htm&language=en_US "HTML (New Window)")

        Recommendations are customized actions and offers that you want to present to users. When you create a recommendation, specify a screen flow that starts when the user accepts the recommendation.

    2.  [Create an action strategy.](https://help.salesforce.com/articleView?id=nba_strategy_builder_creating.htm&language=en_US "HTML (New Window)")

        To determine which recommendations show in the component, create an action strategy. Action strategies use business rules, predictive models, and other data sources to filter recommendations.


#### See Also

-   [Associate Actions with Records](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_associate.htm "To associate actions to records declaratively, configure channel-specific defaults in an Actions & Recommendations deployment or use Process Builder. To associate flows to records programmatically, use SOAP or Apex. After you add the Actions & Recommendations component to your Lightning pages, you can display RecordActions that you’ve configured.")

-   [*Aura Components Developer Guide*: Use Aura Components with Flows](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_using_flow.htm "Aura Components Developer Guide: Use Aura Components with Flows - HTML (New Window)")

-   [*Salesforce Help*: Show Users Progress Through a Flow with Stages](https://help.salesforce.com/articleView?id=flow_build_stages.htm&language=en_US "Salesforce Help: Show Users Progress Through a Flow with Stages - HTML (New Window)")

-   [*Salesforce Help*: Create Global Quick Actions](https://help.salesforce.com/articleView?id=creating_global_actions.htm&language=en_US "Salesforce Help: Create Global Quick Actions - HTML (New Window)")

-   [*Salesforce Help*: Create Object-Specific Quick Actions](https://help.salesforce.com/articleView?id=creating_object_specific_actions.htm&language=en_US "Salesforce Help: Create Object-Specific Quick Actions - HTML (New Window)")

-   [*Salesforce Help*: Einstein Next Best Action](https://help.salesforce.com/articleView?id=einstein_next_best_action.htm&language=en_US "Salesforce Help: Einstein Next Best Action - HTML (New Window)")

## Related Topics

- Associate Actions with Records (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_associate.htm)
