---
title: "Link a Namespace to a Dev Hub Org"
domain: sfdx-dev
topic: link-a-namespace-to-a-dev-hub-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.348Z
estimatedTokens: 670
keywords: [Link, Dev, Hub, Org, scratch, Developer, Edition, registered]
---

# Link a Namespace to a Dev Hub Org

> To use a namespace with a scratch org, you must link the Developer Edition org where the
  namespace is registered to a Dev Hub org.

# Link a Namespace to a Dev Hub Org

To use a namespace with a scratch org, you must link the Developer Edition org where the namespace is registered to a Dev Hub org.

Complete these tasks before you link a namespace.

-   If you don’t have an org with a registered namespace, create a Developer Edition org that is separate from the Dev Hub or scratch orgs. If you already have an org with a registered namespace, you’re good to go.
-   In the Developer Edition org, create and register the namespace.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

    #### Important

    Choose namespaces carefully. If you’re trying out this feature or need a namespace for testing purposes, choose a disposable namespace. Don’t choose a namespace that you want to use in the future for a production org or some other real use case. After you associate a namespace with an org, you can't change it or reuse it.


1.  Log in to your Dev Hub org as the System Administrator or as a user with the Salesforce DX Namespace Registry permissions.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

    #### Tip

    Make sure your browser allows pop-ups from your Dev Hub org.

    1.  From the App Launcher menu, select **Namespace Registries**.
    2.  Click **Link Namespace**.
2.  In the window that pops up, log in to the Developer Edition org in which your namespace is registered using the org's System Administrator's credentials.

    You can’t link orgs without a namespace: sandboxes, scratch orgs, patch orgs, and branch orgs require a namespace to be linked to the Namespace Registry.


To view all the namespaces linked to the Namespace Registry, select the **All Namespace Registries** list view.

#### See Also

-   [Get a Trial Development Environment for Free](https://developer.salesforce.com/free-trials "Get a Trial Development Environment for Free - HTML (New Window)")

-   [*Lightning Aura Components Developer Guide*: Create a Namespace in Your Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/namespaces_creating.htm "Lightning Aura Components Developer Guide: Create a
    Namespace in Your Org - HTML (New Window)")

-   [Add Salesforce DX Users](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users.htm "System administrators can access the Dev Hub org by default. You can enable more users to access the Dev Hub org so that they can create scratch orgs and use other developer-specific features.")

-   [Salesforce Help: My Domain](https://help.salesforce.com/articleView?id=domain_name_overview.htm&type=5&language=en_US)

## Related Topics

- Add Salesforce DX Users (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users.htm)
