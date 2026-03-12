---
title: "Creating a Namespace in Your Organization"
domain: lightning
topic: creating-a-namespace-in-your-organization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.323Z
estimatedTokens: 286
keywords: [Creating, Organization, registering, prefix]
---

# Creating a Namespace in Your Organization

> Create a namespace for your organization by registering a namespace prefix.

# Creating a Namespace in Your Organization

Create a namespace for your organization by registering a namespace prefix.

If you’re not creating managed packages for distribution then registering a namespace prefix isn’t required, but it’s a best practice for all but the smallest organizations.

Your namespace must:

-   Begin with a letter
-   Contain one to 15 alphanumeric characters
-   Not contain two consecutive underscores

For example, myNp123 and my\_np are valid namespaces, but 123Company and my\_\_np aren’t.

To register a namespace:

1.  From Setup, enter Package Manager in the Quick Find box and select **Package Manager**.
2.  In the Namespace Settings panel, click **Edit**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

    #### Note

    After you’ve configured your namespace settings, this button is hidden.

3.  Enter the namespace you want to register.
4.  Click **Check Availability** to determine if the namespace is already in use.
5.  If the namespace prefix that you entered isn’t available, repeat the previous two steps.
6.  Click **Review**.
7.  Click **Save**.
