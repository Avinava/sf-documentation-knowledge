---
title: "Create Feature Parameters in Your Packaging Org"
domain: pkg1-dev
topic: create-feature-parameters-in-your-packaging-org
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.348Z
estimatedTokens: 377
keywords: [Feature, Packaging, Org, data, flow, direction]
---

# Create Feature Parameters in Your Packaging Org

> Create a feature parameter in your packaging org, and set its type, default value,
        and data flow direction.

# Create Feature Parameters in Your Packaging Org

Create a feature parameter in your packaging org, and set its type, default value, and data flow direction.

1.  From Setup, enter Package Manager in the Quick Find box, then select **Package Manager**.
2.  In the Packages section, in the Package Name column, select your managed package.
3.  On the Feature Parameters tab, click **New Boolean**, **New Integer**, or **New Date**.

    If the Feature Parameters tab isn’t visible, log a case with Salesforce Partner Support.

4.  Give your feature parameter a developer name that meets the standard criteria for developer names. The name must be unique in your org. It can contain only alphanumeric characters and underscores, and must begin with a letter. It can’t include spaces, end with an underscore, nor contain two consecutive underscores.
5.  Give the feature parameter a label.
6.  Set a default value for the feature parameter. If you’re creating a Feature Parameter Boolean, you see only a checkbox for Default Value. If you want your default value to be true, select this checkbox. Integer values can’t exceed nine digits.
7.  Set a data flow direction. To use this feature parameter to control behavior in your subscriber’s org, select **LMO to Subscriber**. To collect activation metrics from your subscriber, select **Subscriber to LMO**. Note: After the feature parameter is included in a promoted and released package version, the data flow direction can't be changed.
8.  Click **Save**.
