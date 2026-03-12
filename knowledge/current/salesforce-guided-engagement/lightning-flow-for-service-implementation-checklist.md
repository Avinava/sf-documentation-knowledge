---
title: "Lightning Flow for Service Implementation Checklist"
domain: salesforce-guided-engagement
topic: lightning-flow-for-service-implementation-checklist
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.866Z
estimatedTokens: 1102
keywords: [Lightning, Flow, Service, Implementation, Checklist, Review, roll]
---

# Lightning Flow for Service Implementation Checklist

> Review the Lightning Flow for Service checklist before you roll out your
    implementation.

# Lightning Flow for Service Implementation Checklist

Review the Lightning Flow for Service checklist before you roll out your implementation.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=salesforce_guided_engagement)

#### Tip

If you’re new to process automation, we recommend completing [Automate Your Business Processes with Salesforce Flow](https://trailhead.salesforce.com/trails/automate_business_processes "HTML (New Window)") in Trailhead. The [Lightning Flow for Service module in Trailhead](https://trailhead.salesforce.com/en/content/learn/modules/service_lightning_flow_for_service "html (New Window)") can also help you prepare.

We recommend that you have a working knowledge of the following features and user interfaces.

-   Process automation tools, like Process Builder and Flow Builder
-   Einstein Next Best Action, if you plan to show recommendations from action strategies to your users
-   Lightning App Builder
-   Lightning console or standard navigation apps

You need the following permissions to complete an end-to-end implementation.

| User Permissions Needed |
| --- |
| To create flows in Flow Builder: | Manage Flow |
| To create quick actions: | Customize Application |
| To manage deployments in Setup that include flows and quick actions: |
| To manage deployments in Setup that include recommendations: | Modify All DataORManage Next Best Action Strategies |
| To view Actions & Recommendations deployments in component properties: | View Setup and Configuration |
| To create a process in Process Builder: | Manage Flow AND View All Data |
| To create and save pages in the Lightning App Builder: | Customize Application |
| To create or manage Lightning apps: |
| To set up and configure Chat: |
| To set up and configure Open CTI: | Manage Call Centers |

To let your users run flows from an Actions & Recommendations component, make sure that they have the correct flow permissions. For flows that change data, users need permission to create, read, edit, and delete the relevant records and fields.

| User Permission Needed |
| --- |
| To run flows: | Flow UserORFlow User field enabled on the user detail pageORManage FlowORIf Override default behavior and restrict access to enabled profiles or permission sets is selected for an individual flow, access to that flow is given to users by profile or permission set |

To set up recommendations, you need these permissions.

| User Permission Needed |
| --- |
| Display Recommendations as a tab: | Default On for Tab Setting for Recommendations object |
| Create and manage recommendations: | Modify all dataORManage Next Best Action Recommendations |

To manage or run action strategies, you need these permissions.

| User Permission Needed |
| --- |
| To create or manage action strategies: | Modify All DataORManage Next Best Action Strategies |
| To run an action strategy: | Run FlowsORFlow User field enabled on the user detail page |

Use the following individual setup tasks when implementing Lightning Flow for Service.

| Task | Complete If... |
| --- | --- |
| Create Actions to Show | You want to create a flow, quick action, or recommendation that shows in the component. |
| Associate Actions to Records with a Deployment | You want to define component settings: what type of guidance to show, channel defaults, and additional actions that users can start at run time. You can also create deployments programmatically using the Metadata API. |
| Associate Actions to Records with Process Builder | You want to create a process for actions declaratively using Process Builder. With Process Builder, you can automatically associate actions with a record when the record meets criteria that you define. |
| Associate Actions to Records with SOAP | You want to associate actions to records programmatically using SOAP API. |
| Associate Actions to Records with Apex | You want to associate actions to records programmatically using Apex. |
| Customize Your Lightning Pages with the Actions & Recommendations Component | You want to add the component to record pages in your app. |
| Integrate Chat with Lightning Flow for Service | You want to integrate Lightning Flow for Service with Chat. |
| Integrate Open CTI with Lightning Flow for Service | You want to integrate Lightning Flow for Service with Open CTI and configure your softphone screen pop settings. |

## Related Topics

- Create Actions to Show (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_flow.htm)
- Associate Actions to Records with a Deployment (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_associate_deployment.htm)
- Associate Actions to Records with Process Builder (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_builder.htm)
- Associate Actions to Records with SOAP (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_soap.htm)
- Associate Actions to Records with Apex (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_apex.htm)
- Customize Your Lightning Pages with the Actions & Recommendations Component (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_component.htm)
- Integrate Chat with Lightning Flow for Service (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_integrate_live_agent.htm)
- Integrate Open CTI with Lightning Flow for Service (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_integrate_cti.htm)
