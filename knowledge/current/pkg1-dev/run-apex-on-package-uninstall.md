---
title: "Run Apex on Package Uninstall"
domain: pkg1-dev
topic: run-apex-on-package-uninstall
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.664Z
estimatedTokens: 489
keywords: [Run, Apex, Package, Uninstall, App, developers, specify, script, automatically, subscriber, uninstalls, managed, possible, perform, cleanup]
---

# Run Apex on Package Uninstall

> App developers can specify an Apex script to run automatically after a subscriber
  uninstalls a managed package. This script makes it possible to perform cleanup and notification
  tasks based on details of the subscriber’s organization. For simplicity, you can only specify one
  uninstall script. It must be an Apex class that is a member of the package.

# Run Apex on Package Uninstall

App developers can specify an Apex script to run automatically after a subscriber uninstalls a managed package. This script makes it possible to perform cleanup and notification tasks based on details of the subscriber’s organization. For simplicity, you can only specify one uninstall script. It must be an Apex class that is a member of the package.

The uninstall script is subject to default governor limits. It runs as a special system user that represents your package, so all operations performed by the script appear to be done by your package. You can access this user by using UserInfo. You can only see this user at runtime, not while running tests.

If the script fails, the uninstall continues but none of the changes performed by the script are committed. Any errors in the script are emailed to the user specified in the **Notify on Apex Error** field of the package. If no user is specified, the uninstall details are unavailable.

The uninstall script has the following restrictions. You can’t use it to initiate batch, scheduled, and future jobs, to access Session IDs, or to perform callouts.

-   **[How Does an Uninstall Script Work?](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script_intro.htm)**
    An uninstall script is an Apex class that implements the UninstallHandler interface. This interface has a single method called onUninstall that specifies the actions to be performed on uninstall.
-   **[Example of an Uninstall Script](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script_create.htm)**
    This sample uninstall script performs the following actions on package uninstall.
-   **[Specifying an Uninstall Script](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script_specify.htm)**
    After you’ve created and tested the uninstall script and included it as a member of your package, you can specify it in the **Uninstall Script** lookup field on the Package Detail page.

## Related Topics

- How Does an Uninstall Script Work? (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script_intro.htm)
- Example of an Uninstall Script (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script_create.htm)
- Specifying an Uninstall Script (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script_specify.htm)
