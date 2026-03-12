---
title: "Register a Namespace for a First-Generation Managed Package"
domain: pkg1-dev
topic: register-a-namespace-for-a-first-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.678Z
estimatedTokens: 708
keywords: [Register, First-Generation, Managed, Package, 15-character, alphanumeric, identifier, distinguishes, contents, packages, developers, AppExchange, prefixes, case-insensitive, ABC]
---

# Register a Namespace for a First-Generation Managed Package

> A namespace is a one to 15-character alphanumeric identifier that distinguishes
            your package and its contents from packages of other developers on AppExchange.
            Namespace prefixes are case-insensitive. For example, ABC and abc aren’t recognized as
            unique. Your namespace must be globally unique across all Salesforce orgs.

# Register a Namespace for a First-Generation Managed Package

A namespace is a one to 15-character alphanumeric identifier that distinguishes your package and its contents from packages of other developers on AppExchange. Namespace prefixes are case-insensitive. For example, ABC and abc aren’t recognized as unique. Your namespace must be globally unique across all Salesforce orgs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pkg1_dev)

#### Warning

When creating a namespace, use something that’s useful and informative to users. However, don’t name a namespace after a person (for example, by using a person's name, nickname, or private information.)

Salesforce automatically prepends your namespace, followed by two underscores (”\_\_”), to all unique component names in your Salesforce org. A unique package component is one that requires a name that no other component has within Salesforce, such as custom objects, custom fields, custom links, and validation rules. For example, if your namespace is abc and your managed package contains a custom object with the API name, Expense\_\_c, use the API name abc\_\_Expense\_\_c to access this object using the API. The namespace is displayed on all component detail pages.

Your namespace must:

-   Begin with a letter
-   Contain one to 15 alphanumeric characters
-   Not contain two consecutive underscores

For example, myNp123 and my\_np are valid namespaces, but 123Company and my\_\_np aren’t.

To register a namespace:

1.  From Setup, enter Package Manager in the Quick Find box and select **Package Manager**.
2.  In the Namespace Settings panel, click **Edit**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    After you’ve configured your namespace settings, this button is hidden.

3.  Enter the namespace you want to register.
4.  To determine if the namespace is already in use, click **Check Availability**.
5.  If the namespace prefix that you entered isn’t available, repeat the previous two steps.
6.  Click **Review**.
7.  Click **Save**.
