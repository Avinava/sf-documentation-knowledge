---
title: "When Should I Use Apex?"
domain: apex-guide
topic: when-should-i-use-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.241Z
keywords: [Should, Apex?, Apex, Lightning, Components, Visualforce, SOAP, API]
---

# When Should I Use Apex?

# When Should I Use Apex?

Salesforce provides the ability to customize prebuilt apps to fit your organization. For complex business processes, you can implement custom functionality and user interfaces with a variety of tools, including Apex and Lightning Components.

## Apex

Use Apex if you want to:

-   Create Web services.
-   Create email services.
-   Perform complex validation over multiple objects.
-   Create complex business processes that aren’t supported by Flow Builder.
-   Create custom transactional logic (logic that occurs over the entire transaction, not just with a single record or object).
-   Attach custom logic to another operation, such as saving a record, so that it occurs whenever the operation is executed, regardless of whether it originates in the user interface, a Visualforce page, or from SOAP API.

## Lightning Components

Develop Lightning components to customize Lightning Experience, the Salesforce mobile app, or to build your own standalone apps. You can also use out-of-the-box components to speed up development.

As of Spring ’19 (API version 45.0), you can build Lightning components using two programming models: the Lightning Web Components model, and the original Aura Components model. Lightning web components are custom HTML elements built using HTML and modern JavaScript. Lightning web components and Aura components can coexist and interoperate on a page. Configure Lightning web components and Aura components to work in Lightning App Builder and Experience Builder. Admins and end users don’t know which programming model was used to develop the components. To them, they’re simply Lightning components.

We recommend using the Lightning Web Components (LWC) model to create custom user interfaces. LWC follows W3C web standards, and you can build and package components using standard JavaScript syntax. With LWC, you can work easily with Salesforce data using Apex and Lightning Data Service.

For more information, see the [LWC Dev Guide](https://developer.salesforce.com/docs/platform/lwc "HTML (New Window)").

## Visualforce

Visualforce consists of a tag-based markup language that gives developers a more powerful way of building applications and customizing the Salesforce user interface. With Visualforce you can:

-   Build wizards and other multistep processes.
-   Create your own custom flow control through an application.
-   Define navigation patterns and data-specific rules for optimal, efficient application interaction.

For more information, see the [Visualforce Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "HTML (New Window)").

## SOAP API

Use standard SOAP API calls when you want to add functionality to a composite application that processes only one type of record at a time and does not require any transactional control (such as setting a Savepoint or rolling back changes).

For more information, see the [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "HTML (New Window)").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_qs_core_concepts.htm "Understanding Apex Core Concepts")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_intro_how_does_apex_work.htm "How Does Apex Work?")