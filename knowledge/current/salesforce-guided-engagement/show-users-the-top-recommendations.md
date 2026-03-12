---
title: "Show Users the Top Recommendations"
domain: salesforce-guided-engagement
topic: show-users-the-top-recommendations
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.895Z
estimatedTokens: 426
keywords: [Show, Users, Top, Recommendations, Einstein, Best, Action, strategies, Actions, component, display, configure, deployment, Setup, programmatically]
---

# Show Users the Top Recommendations

> You can show the top recommendations from your Einstein Next Best Action strategies in
    the Actions & Recommendations component. To display recommendations, configure a deployment
    in Setup or programmatically with the metadata type RecordActionDeployment.

# Show Users the Top Recommendations

You can show the top recommendations from your Einstein Next Best Action strategies in the Actions & Recommendations component. To display recommendations, configure a deployment in Setup or programmatically with the metadata type RecordActionDeployment.

For example, Awesome Bank wants to present credit card offers to customers that have good credit scores. First, Maria creates flows that can walk agents or customers through the card application process. Maria configures those flows as Next Best Action recommendations. To filter the right offers and present them to the right customers, Maria sets up an action strategy.

In an Actions & Recommendations deployment, Maria configures the component to show recommendations. She selects strategies that the deployment uses, and configures how the recommendations appear. ![When recommendations exist, the agent can click Recommendations to see the offers.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_action_nba.png&folder=salesforce_guided_engagement)

When a customer qualifies, the agent clicks **Recommendations** to see the offers. When a recommendation is accepted, the associated flow opens.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=salesforce_guided_engagement)

#### Tip

In your recommendation, keep the labels for the accept and reject buttons to fewer than 10 characters. Otherwise, the buttons don’t appear side by side.

#### See Also

-   [*Salesforce Help*: Einstein Next Best Action](https://help.salesforce.com/articleView?id=einstein_next_best_action.htm&language=en_US "Salesforce Help: Einstein Next Best Action - HTML (New Window)")
