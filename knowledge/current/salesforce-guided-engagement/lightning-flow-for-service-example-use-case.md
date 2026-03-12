---
title: "Lightning Flow for Service Example Use Case"
domain: salesforce-guided-engagement
topic: lightning-flow-for-service-example-use-case
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.885Z
estimatedTokens: 1520
keywords: [Lightning, Flow, Service, Case, help, agents, follow, consistent, procedures, customer, calls, support, issue, comes, associate]
---

# Lightning Flow for Service Example Use Case

> Lightning Flow for Service can help your agents follow consistent procedures when a
    customer calls or a support issue comes in. You can associate actions with a new record, such as
    a case or contact record, and show agents a to-do list for the record page.

# Lightning Flow for Service Example Use Case

Lightning Flow for Service can help your agents follow consistent procedures when a customer calls or a support issue comes in. You can associate actions with a new record, such as a case or contact record, and show agents a to-do list for the record page.

Let’s look at a fictional Service Cloud customer. Awesome Bank employs 20 agents who handle loan applications. Typically, agents get calls from potential customers applying for a new loan. Agents also take calls from customers that have started the application process online on the bank’s Experience Cloud site.

When a customer’s call is routed to the appropriate agent based on the loan type, the agent completes the loan application in the following way.

1.  The agent verifies the loan type and gathers basic information, such as the customer’s name and phone number.
2.  The agent requests information that’s needed to obtain the customer’s credit score. Obtaining the credit score is a required step.
3.  The agent follows a series of other steps to process the loan application.
4.  When the application is processed successfully, the agent submits it for approval.
5.  When the loan application is approved, the loan is sent for disbursement.
6.  The agent wraps up the loan application process, and logs the call.

Meet Cyrus, the service team leader. He’s in charge of the customer service department and is looking at ways to improve agent efficiency. He wants to streamline the following.

-   Common steps that are applicable to all loan types
-   Unique steps specific to the loan type
-   A standardized way for agents to complete steps that have been started before, such as when a customer starts an application online and later calls to complete it

In addition, Cyrus wants agents to suggest extra products and services to qualified customers. He approaches Maria, the service admin in charge of Salesforce applications for Awesome Bank. With Lightning Flow for Service, Maria can provide Awesome Bank agents:

-   A method of presenting agents with recommendations, such as a next step or customized offer
-   A dynamic set of flows and quick actions associated with the record so that agents can see which steps to complete
-   A simple way for agents to resume paused flows for a record, such as flows that customers have started on an Experience Cloud site page and then paused
-   An easy way for agents to find another step based on customer needs
-   A means of seeing which actions have been started and completed on a record
-   A reminder for agents to complete screen flows that are required, like the credit score check

After Maria creates flows and quick actions, she can choose from several methods to set up Lightning Flow for Service. All the methods create RecordActions so that Maria can present a list of steps to agents.

-   [Associate Actions to Records with a Deployment](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_associate_deployment.htm "Use an Actions & Recommendations deployment to show default actions when records open from phone screen popups, chats, list views, or related records. A deployment also lets you show recommendations from Next Best Action strategies. After you create a deployment, select it in the Actions & Recommendations component on your Lightning record pages.")
-   [Associate Actions to Records with Process Builder](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_builder.htm "Process Builder is a point-and-click automation tool that you can use to design processes that kick off when a new or updated record meets specific criteria. After you create flows and quick actions, you can associate them with a record by building a process. Use Process Builder to create a process that, when triggered, creates a RecordAction. The RecordAction represents an association between an action and the record that kicked off the process.")
-   [Associate Actions to Records with SOAP](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_soap.htm "If your business maintains code outside the Salesforce platform, you can use SOAP API to create, retrieve, update, or delete a RecordAction.")
-   [Associate Actions to Records with Apex](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_apex.htm "If you want to control how you trigger the creation of a RecordAction, you can use Apex to associate actions to records. The RecordAction object is exposed as a standard object in Apex. You can trigger it before a DML operation or on delete or undelete. You can also provide custom error handling.")

Maria decides to configure an Actions & Recommendations deployment in Setup. A deployment lets her set up the component from the user interface rather than using code. She can specify which channel-specific actions appear on which record pages, and give her agents step-by-step guidance. Best of all, she can display special offers that result from applying Next Best Action strategies to a set of recommendations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

To show recommendations from Next Best Action strategies, use a deployment or API. Process Builder lets you show flows and quick actions on record pages when there’s a trigger condition.

#### See Also

-   [Implementing the Example Use Case](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_sample_implementation.htm "You can configure the Actions & Recommendations component in several ways. Creating a deployment in Setup is an easy way to create RecordActions that appear in the list.")

-   [Trailhead module: Lightning Flow for Service](https://trailhead.salesforce.com/en/content/learn/modules/service_lightning_flow_for_service "Trailhead module: Lightning Flow for Service - HTML (New Window)")

## Related Topics

- Associate Actions to Records with a Deployment (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_associate_deployment.htm)
- Associate Actions to Records with Process Builder (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_builder.htm)
- Associate Actions to Records with SOAP (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_soap.htm)
- Associate Actions to Records with Apex (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_process_apex.htm)
- Implementing the Example Use Case (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_sample_implementation.htm)
