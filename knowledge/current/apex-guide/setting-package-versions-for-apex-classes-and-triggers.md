---
title: "Setting Package Versions for Apex Classes and Triggers"
domain: apex-guide
topic: setting-package-versions-for-apex-classes-and-triggers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.672Z
keywords: [Setting, Package, Versions, Apex, Classes, Triggers, Note, Tip, See]
---

# Setting Package Versions for Apex Classes and Triggers

# Setting Package Versions for Apex Classes and Triggers

As a managed package subscriber, you can specify which package version that your managed Apex classes and triggers use.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

In Summer ’25 and later, package subscribers can use version settings to specify the version of a migrated second-generation managed package (2GP) that an Apex class or trigger depends on. This functionality is already available to first-generation managed packages (1GP), but isn’t yet supported in 2GP packages that weren’t converted from a 1GP package. See [Apex Version Settings in Migrated Second-Generation Managed Packages (2GP)](https://help.salesforce.com/s/articleView?id=005101483&type=1&language=en_US).

To configure the package version settings for a class or trigger:

1.  From Setup, enter Apex Classes or Apex Triggers in the Quick Find box, and then select **Apex Classes** or **Apex Triggers**.
2.  From the list, click **Edit** for the Apex class or trigger that you want to configure.
3.  Click the **Version Settings** tab.
4.  From the Version dropdown for the managed package, select the desired version referenced by the class or trigger.
    
    The class or trigger continues to use this version even if you install later versions of the managed package, unless you manually update the version setting.
    
5.  Click **Save**.

When working with package version settings, keep these considerations in mind.

-   By default, an Apex class or trigger that references a managed package is associated with the version of the package installed when that class or trigger was last saved or deployed.
-   If a class or trigger references a managed package, you can’t remove the package’s version settings for that class or trigger. To find where the class or trigger references a managed package, on the class or trigger’s Detail page, click **Show Dependencies**.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

You can also set the package version for an Apex class or trigger through metadata deployments or with API requests. See [Set Package Versions for Apex Classes and Triggers](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_subscriber_version.htm#apex_manpkgs_subscriber_version "As a managed package subscriber, you can specify which package version that your managed Apex classes and triggers use. Set the package version in Setup, through metadata deployments, or with API requests.").

#### See Also

-   [Use Apex Referenced by Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_subscriber_intro.htm "Learn how to use managed Apex effectively as a managed package subscriber.")