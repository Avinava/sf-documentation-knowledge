---
title: "Run Apex on Package Install/Upgrade"
domain: pkg1-dev
topic: run-apex-on-package-installupgrade
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.650Z
estimatedTokens: 712
keywords: [Run, Apex, Package, Install, Upgrade, App, developers, specify, script, automatically, subscriber, installs, upgrades, managed, possible]
---

# Run Apex on Package Install/Upgrade

> App developers can specify an Apex script to run automatically
  after a subscriber installs or upgrades a managed package. This script makes it possible to customize the package
   install or upgrade, based on details of the subscriber’s organization. For instance, you can use
   the script to populate custom settings, create sample data, send an email to the installer,
   notify an external system, or kick off a batch operation to populate a new field across a large
   set of data. For simplicity, you can only specify one post install script. It must be an
  Apex class that is a member of the package.

# Run Apex on Package Install/Upgrade

App developers can specify an Apex script to run automatically after a subscriber installs or upgrades a managed package. This script makes it possible to customize the package install or upgrade, based on details of the subscriber’s organization. For instance, you can use the script to populate custom settings, create sample data, send an email to the installer, notify an external system, or kick off a batch operation to populate a new field across a large set of data. For simplicity, you can only specify one post install script. It must be an Apex class that is a member of the package.

The post install script is invoked after tests have been run, and is subject to default governor limits. It runs as a special system user that represents your package, so all operations performed by the script appear to be done by your package. You can access this user by using UserInfo. You can only see this user at runtime, not while running tests.

If the script fails, the install/upgrade is aborted. Any errors in the script are emailed to the user specified in the **Notify on Apex Error** field of the package. If no user is specified, the install/upgrade details are unavailable.

The post install script has the following additional properties.

-   It can initiate batch, scheduled, and future jobs.
-   It can’t access Session IDs.
-   It can only perform callouts using an async operation. The callout occurs after the script is run and the install is complete and committed.
-   It can’t call another Apex class in the package if that Apex class uses the with sharing or inherit sharing keyword. These keywords can prevent the package from successfully installing. To learn more, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

You can’t run a post install script in a new trial organization provisioned using Trialforce. The script only runs when a subscriber installs your package in an existing organization.

-   **[How Does a Post Install Script Work?](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script_intro.htm)**
    A post install script is an Apex class that implements the InstallHandler interface.
-   **[Example of a Post Install Script](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script_create.htm)**

-   **[Specifying a Post Install Script](atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script_specify.htm)**
    After you’ve created and tested the post install script, you can specify it in the **Post Install Script** lookup field on the Package Detail page. In subsequent patch releases, you can change the contents of the script but not the Apex class.

## Related Topics

- How Does a Post Install Script Work? (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script_intro.htm)
- Example of a Post Install Script (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script_create.htm)
- Specifying a Post Install Script (atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_post_install_script_specify.htm)
