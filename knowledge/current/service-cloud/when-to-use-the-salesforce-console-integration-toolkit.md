---
title: "When to Use the Salesforce Console Integration Toolkit"
domain: service-cloud
topic: when-to-use-the-salesforce-console-integration-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:50.738Z
keywords: [Salesforce, Console, Integration, Toolkit]
---

# When to Use the Salesforce Console Integration Toolkit

# When to Use the Salesforce Console Integration Toolkit

The Salesforce Console Integration Toolkit helps advanced administrators and developers implement custom functionality for the Salesforce console. For example, you can use the Salesforce Console Integration Toolkit to display Visualforce pages or third-party content as tabs in the Salesforce console. The Salesforce Console Integration Toolkit is an API that uses browsers as clients to display pages in the console.

Your organization may have complex business processes that are unsupported by Salesforce Console Integration Toolkit functionality. Not to worry. When this is the case, the Lightning Platform offers advanced administrators and developers several ways to implement custom functionality.

The following table lists additional features that developers can use to implement custom functionality for Salesforce organizations.

| Feature | Description |
| --- | --- |
| SOAP API | Use standard SOAP API calls when you want to add functionality to a composite application that processes only one type of record at a time and does not require any transactional control (such as setting a Savepoint or rolling back changes).For more information, see the SOAP API Developer Guide. |
| Visualforce | Visualforce consists of a tag-based markup language that gives developers a more powerful way of building applications and customizing the Salesforce user interface. With Visualforce you can:Build wizards and other multistep processes.Create your own custom flow control through an application.Define navigation patterns and data-specific rules for optimal, efficient application interaction.For more information, see the Visualforce Developer's Guide.Due to third-party cookie restrictions in modern web browsers, Visualforce pages can’t load in Salesforce Classic console apps when third-party cookies are disabled. See Visualforce Limitations in Salesforce Classic When Third-Party Cookies are Blocked. |
| Apex | Use Apex if you want to:Create Web services.Create email services.Perform complex validation over multiple objects.Create complex business processes that aren’t supported by Flow Builder.Create custom transactional logic (logic that occurs over the entire transaction, not just with a single record or object).Attach custom logic to another operation, such as saving a record, so that it occurs whenever the operation is executed, regardless of whether it originates in the user interface, a Visualforce page, or from SOAP API.For more information, see the Apex Developer Guide. |