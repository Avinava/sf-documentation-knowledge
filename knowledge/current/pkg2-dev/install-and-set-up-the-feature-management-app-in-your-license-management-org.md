---
title: "Install and Set Up the Feature Management App in Your License
            Management Org"
domain: pkg2-dev
topic: install-and-set-up-the-feature-management-app-in-your-license-management-org
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:26.145Z
estimatedTokens: 356
keywords: [Install, Feature, Management, App, License, Org, FMA, LMO, add, tab, view, adjust, layout, licenses, display]
---

# Install and Set Up the Feature Management App in Your License
            Management Org

> Install the FMA in your LMO. Then add the Feature Parameters tab to your default
        view, and adjust your page layout for licenses to display related lists for your feature
        parameters.

# Install and Set Up the Feature Management App in Your License Management Org

Install the FMA in your LMO. Then add the Feature Parameters tab to your default view, and adjust your page layout for licenses to display related lists for your feature parameters.

1.  To request access to the FMA, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com "HTML (New Window)"). For product, specify **Partner Programs & Benefits**. For topic, specify **ISV Technology Request**. The FMA extends the License Management App, so be sure to install the LMA before requesting access to the FMA.
2.  To install the FMA, follow the instructions in your welcome email.
3.  Add the Feature Parameters tab to your default view. For details, see [Customize My Tabs](https://help.salesforce.com/articleView?id=user_userdisplay_tabs.htm&language=en_US "HTML (New Window)") in Salesforce Help.
4.  Update your page layout for licenses.
    1.  Navigate to a license record’s detail page.
    2.  Click **Edit Layout**.
    3.  In the Related Lists section of the License Page Layout Editor, add these lists.

        -   Feature Parameter Booleans
        -   Feature Parameter Dates
        -   Feature Parameter Integers

    4.  For each related list, add these columns.

        -   Data Flow Direction
        -   Feature Parameter Name
        -   Full Name
        -   Master Label
        -   Value
