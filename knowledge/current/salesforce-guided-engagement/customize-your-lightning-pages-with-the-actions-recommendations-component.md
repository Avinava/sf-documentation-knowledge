---
title: "Customize Your Lightning Pages with the Actions & Recommendations Component"
domain: salesforce-guided-engagement
topic: customize-your-lightning-pages-with-the-actions-recommendations-component
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.916Z
estimatedTokens: 677
keywords: [Customize, Lightning, Pages, Actions, Recommendations, Component, displays, RecordActions, associated, parent, record, Add, users, they, take]
---

# Customize Your Lightning Pages with the Actions & Recommendations Component

> The Actions & Recommendations component displays RecordActions associated to the
        parent record. Add the component to your Lightning pages so that users can see the actions
        that they can take.

# Customize Your Lightning Pages with the Actions & Recommendations Component

The Actions & Recommendations component displays RecordActions associated to the parent record. Add the component to your Lightning pages so that users can see the actions that they can take.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

You can add the Actions & Recommendations component to Lightning console and standard navigation pages for most objects. To learn about supported objects, see [Supported Apps, Channels, and Objects](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_support.htm "Lightning Flow for Service is supported in Lightning console and standard navigation apps. You can set it up to work with Open CTI for phone integration, including support for unknown callers, and Chat in Lightning Experience for chat integration.").

First, plan out your user’s experience. When do you want users to see the component? What records will your users be on? What other information do you want your users to see on the page?

After you identify a record page to edit, create a custom Lightning page for it using one of the pinned region templates available in the Lightning App Builder. The pinned region page allows you to display the Actions & Recommendations component while flows open in subtabs for console apps.

1.  Before you add the component to your record pages, [create an Actions & Recommendations deployment](https://help.salesforce.com/articleView?id=console_lex_guided_action_deployment.htm&language=en_US "HTML (New Window)").
2.  Add the component to your pages.

    In the Lightning App Builder, drag the Actions & Recommendations component to a pinned region on a page. For the Service Console app, we recommend adding the component to the left pinned sidebar.

3.  Select the deployment in component properties.![Add the component to your page and select the deployment in component properties.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_action_deployment_lab.png&folder=salesforce_guided_engagement)

    If you don’t select a deployment, no actions appear when the user clicks Add. In addition, the component is empty unless other RecordActions exist for the record.

4.  Save your Lightning page.

    If needed, activate the page and assign it to your app.


#### See Also

-   [*Salesforce Help*: Create and Configure Lightning Experience Record Pages](https://help.salesforce.com/articleView?id=lightning_app_builder_customize_lex_pages.htm&language=en_US "Salesforce Help: Create and Configure Lightning Experience Record Pages - HTML (New Window)")

## Related Topics

- Supported Apps, Channels, and
                Objects (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_support.htm)
