---
title: "Use LMO-to-Subscriber Feature Parameters to Enable and Disable
   Features"
domain: pkg1-dev
topic: use-lmo-to-subscriber-feature-parameters-to-enable-and-disable-features
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.358Z
estimatedTokens: 273
keywords: [LMO-to-Subscriber, Feature, Enable, Disable, Features, data, flow, direction, LMO, Subscriber, writable, end, read-only, subscriber’s, org]
---

# Use LMO-to-Subscriber Feature Parameters to Enable and Disable
   Features

> Feature parameters with a data flow direction value of LMO
   to Subscriber are writable at your end and read-only in your subscriber’s org. These
  feature parameters serve as permissions or limits. Use LMO-to-subscriber feature parameters to
  enable or disable new features or to control how many of a given resource your subscriber can use.
  Or, enable features for a limited trial period. Assign values to LMO-to-subscriber feature
  parameters by updating junction object records in your LMO, and then check those values in your
  code.

# Use LMO-to-Subscriber Feature Parameters to Enable and Disable Features

Feature parameters with a data flow direction value of LMO to Subscriber are writable at your end and read-only in your subscriber’s org. These feature parameters serve as permissions or limits. Use LMO-to-subscriber feature parameters to enable or disable new features or to control how many of a given resource your subscriber can use. Or, enable features for a limited trial period. Assign values to LMO-to-subscriber feature parameters by updating junction object records in your LMO, and then check those values in your code.

-   **[Assign Override Values in Your LMO](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_assign_override_values.htm)**
    To override the default value of a feature parameter in a subscriber’s org, update the appropriate junction object record in your LMO.
-   **[Check LMO-to-Subscriber Values in Your Code](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_check_lmo-to-subscriber_values.htm)**
    You can reference feature parameters in your code, just like you’d reference any other custom object.

## Related Topics

- Assign Override Values in Your LMO (atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_assign_override_values.htm)
- Check LMO-to-Subscriber Values in Your Code (atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_check_lmo-to-subscriber_values.htm)
