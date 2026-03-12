---
title: "Package Your Work.com Solution"
domain: workdotcom-dev-guide
topic: package-your-workcom-solution
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.324Z
estimatedTokens: 803
keywords: [Package, Work.com, Solution, Choose, appropriate, design, resulting, dependencies, Base, Hard, Extension]
---

# Package Your Work.com Solution

> Choose the most appropriate type of package based on your solution design and resulting
  dependencies.

# Package Your Work.com Solution

Choose the most appropriate type of package based on your solution design and resulting dependencies.

Work.com:

-   Requires an Enterprise Edition org or higher.
-   Has a standalone data model with objects, such as Location and Employee, that are gated behind the provisionable Workplace Command Center Permission Set License (PSL). The Location object is available in orgs that have the Work.com PSL. To access the Employee object, the PSL must be assigned to a user.
-   Includes the Command Center managed package which has a dependency on the Work.com data model.
-   Uses Lightning Message Service (LMS). The Work.com LMS channel is available to all users. The channel isn’t gated behind the Work.com PSL.

The following options illustrate how your packaging strategy can introduce or avoid Work.com hard dependencies for your end users.

## Base Package with Work.com Hard Dependencies

Directly accessing the Work.com data model introduces Work.com hard dependencies. The same is true if you use declarative features, such as flows, reports, and triggers in your base package. To avoid these dependencies, choose another packaging strategy, such as an extension package.

## Base Package with No Work.com Hard Dependencies

If you use only [dynamic Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic.htm) and custom Lightning Components to access the Work.com data model, there are no Work.com hard dependencies in your base package.

Use dynamic Apex with [InvocableMethod annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm), Salesforce Object Query Language (SOQL), Salesforce Object Search Language (SOSL), and Lightning Components in a new or existing package. Lightning Components can use the object query and search classes to dynamically access the data model.

Your package can also listen for messages on the Work.com LMS channel without introducing Work.com hard dependencies.

However, using declarative features, such as flows, reports, and triggers, without using Apex InvocableMethod annotation, introduces Work.com hard dependencies. To avoid these dependencies in your base package, create an extension package that uses the declarative features.

## Extension Package with Work.com Hard Dependencies

Use an extension package to avoid Work.com hard dependencies in your base package. The extension package can directly access the Work.com data model, and use declarative features such as Lightning App Builder components and flows.

Your base or extension package can also listen for messages on the Work.com LMS channel without introducing Work.com hard dependencies.

Another reason to use an extension package is to preserve existing licensing requirements for your base package users. If you introduce Work.com dependencies in your base package, you also introduce a Workplace Command Center add-on license requirement for your base package users. Instead, abstract the dependencies to your extension package. A Workplace Command Center add-on license is required only for users who install your extension package.
