---
title: "Lightning Flow for Service Considerations"
domain: salesforce-guided-engagement
topic: lightning-flow-for-service-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:41.858Z
estimatedTokens: 773
keywords: [Lightning, Flow, Service, Considerations, how, packaging, change, sharing, model, impact, implementation]
---

# Lightning Flow for Service Considerations

> Learn about how packaging, change sets, and the sharing model can impact your Lightning
  Flow for Service implementation.

# Lightning Flow for Service Considerations

Learn about how packaging, change sets, and the sharing model can impact your Lightning Flow for Service implementation.

Packaging

When you package up your implementation, the package includes your Actions & Recommendations deployment settings. Any processes and flows that reference flows through RecordActions are also included in the package. For example, if Flow A creates a RecordAction that references Flow B, adding Flow A to a package also adds Flow B to the package.

When you add your app to the package, here’s what’s included:

-   All the objects in the app
-   For each object, the associated page layouts, Lightning pages (including the page with the component), active processes, and quick actions. The package includes the Actions & Recommendations deployment and settings defined in the deployment.
-   If a deployment references flow actions, those flows are included.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

    #### Note

    Make sure that flows in your deployment are active before you create a package. Otherwise, inactive flows in a deployment can cause the package not to install successfully.

-   If a process includes flow actions, those flows are included.
-   If an object includes flow quick actions, those flows are included

Change Sets

You can add the RecordAction Deployment component to your change sets.

An option in Process Automation Settings determines whether flows are deployed as active or inactive (see [Deploy Processes and Flows as Active](https://help.salesforce.com/articleView?id=flow_distribute_deploy_active.htm&language=en_US "HTML (New Window)")). Unless the **Deploy processes and flows as active** option is set, your flows are deployed as inactive. After using a change set to move a deployment from a sandbox to production, check to make sure that your flows are active.

Sharing Model

Access to the RecordAction object is determined by a user’s access to the associated parent record. This sharing model applies to access in the user interface, API, Bulk API, and Bulk API 2.0.

-   If the user has read access on the record that the action is associated with, the user can perform all operations (create, read, update, and delete) on the corresponding RecordAction.
-   If the user doesn’t have read access on the record that the flow is associated with, then the user doesn’t have access to the associated RecordAction.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

When using RecordAction and Salesforce Object Query Language (SOQL), make sure that your queries filter by the parent record. To filter by the parent record, use a where clause for users without Modify All Data permission. Otherwise, the query doesn’t work. If the user has Modify All Data permission, a where clause isn't necessary to filter correctly.

Here’s an example of a where clause for RecordAction.

SELECT fields FROM RecordAction WHERE RecordId=ENTITY\_ID
