---
title: "Customize Open CTI Functionality"
domain: api-cti
topic: customize-open-cti-functionality
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.778Z
estimatedTokens: 517
keywords: [Customize, Open, CTI, Functionality, organization, may, complex, business, processes, unsupported, worry, case, Lightning, platform, offers]
---

# Customize Open CTI Functionality

> Your organization may have complex business processes that are unsupported by Open CTI
  functionality. Not to worry. When this is the case, the Lightning platform offers advanced
  administrators and developers several ways to implement custom functionality.

# Customize Open CTI Functionality

Your organization may have complex business processes that are unsupported by Open CTI functionality. Not to worry. When this is the case, the Lightning platform offers advanced administrators and developers several ways to implement custom functionality.

| Feature | Description |
| --- | --- |
| SOAP API | Use standard SOAP API calls when you want to add functionality to a composite application that processes only one type of record at a time and does not require any transactional control (such as setting a Savepoint or rolling back changes).For more information, see the SOAP API Developer Guide. |
| Visualforce | Visualforce consists of a tag-based markup language that gives developers a more powerful way of building applications and customizing the Salesforce user interface. With Visualforce you can:Build wizards and other multistep processes.Create your own custom flow control through an application.Define navigation patterns and data-specific rules for optimal, efficient application interaction.For more information, see the Visualforce Developer's Guide. |
| Console API | The Salesforce Console Integration Toolkit and the Lightning Console JavaScript APIs let you implement custom functionality for the Salesforce console. For example, you can use the Console API to display Visualforce pages or third-party content as tabs in the Salesforce console.For more information, see the Salesforce Console Developer Guide. |
| Apex | Use Apex if you want to:Create Web services.Create email services.Perform complex validation over multiple objects.Create complex business processes that aren’t supported by Flow Builder.Create custom transactional logic (logic that occurs over the entire transaction, not just with a single record or object).Attach custom logic to another operation, such as saving a record, so that it occurs whenever the operation is executed, regardless of whether it originates in the user interface, a Visualforce page, or from SOAP API.For more information, see the Apex Developer Guide. |
