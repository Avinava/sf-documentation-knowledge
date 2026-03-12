---
title: "Enable Org Shape for Scratch Orgs"
domain: sfdx-dev
topic: enable-org-shape-for-scratch-orgs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.589Z
estimatedTokens: 504
keywords: [Enable, Org, Shape, Scratch, Orgs, whose, want, capture, source]
---

# Enable Org Shape for Scratch Orgs

> Enable Org Shape for Scratch Orgs in the org whose shape you want to capture (source
  org).

# Enable Org Shape for Scratch Orgs

Enable Org Shape for Scratch Orgs in the org whose shape you want to capture (source org).

Available in: Developer, Group, Professional, Unlimited, and Enterprise editions

Not available in: Scratch orgs and sandboxes

Be sure to:

-   Enable Org Shape for Scratch Orgs in both the source org and the Dev Hub org, if you want to capture the shape of an org that isn’t also your Dev Hub org.
-   When entering the org ID, use only the first 15 characters rather than the full 18-character org ID.

You can find the org ID in **Setup > Company Information**.

1.  Enable Org Shape for Scratch Orgs in the Dev Hub org that you use to create scratch orgs. Contact a Salesforce admin if you require assistance.
    1.  From Setup, enter Scratch Orgs in the Quick Find box, then select **Scratch Orgs**.
    2.  Click the toggle for **Enable Org Shape for Scratch Orgs**.
    3.  In the text box, enter the 15-character org ID for the Dev Hub, then click **Save**.
2.  (Optional) If the source org is different from the Dev Hub org, enable Org Shape for Scratch Orgs in the source org.
    1.  Log in to the source org.
    2.  From Setup, enter Scratch Orgs in the Quick Find box, then select **Scratch Orgs**.
    3.  Click the toggle for **Enable Org Shape for Scratch Orgs**.
    4.  Enter the 15-character Dev Hub org ID that you’re using to create scratch orgs.

You can specify up to 50 Dev Hub org IDs to address these common use cases:

-   You have multiple production orgs but your development team has access to only one. For the customization they're building, they require the shape of another production org.
-   Your developers use their own Dev Hub orgs and don't have access to the production org. However, they want to create scratch orgs based on the shape of the production org.
-   You're an ISV who uses your production org to create scratch orgs. You want to capture the shape of your first-generation packaging org so you can build second-generation packages.
