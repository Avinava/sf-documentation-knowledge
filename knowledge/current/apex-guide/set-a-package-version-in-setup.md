---
title: "Set a Package Version in Setup"
domain: apex-guide
topic: set-a-package-version-in-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:47.347Z
keywords: [Set, Package, Version, Setup, Associate, Apex, class, trigger, specific, package, version, Setup., Note]
---

# Set a Package Version in Setup

> Associate an Apex class or trigger with a specific package version in Setup.

## Set a Package Version in Setup

Associate an Apex class or trigger with a specific package version in Setup.

To configure the package version settings for an Apex class or trigger:

1.  From Setup, enter Apex Classes or Apex Triggers in the Quick Find box, and then select **Apex Classes** or **Apex Triggers**.
2.  From the list, click **Edit** for the Apex class or trigger that you want to configure.
3.  Click the **Version Settings** tab.
4.  From the Version dropdown for the managed package, select the desired version referenced by the class or trigger.
    
    The class or trigger continues to use this version even if your install later versions of the managed package, unless you manually update the version setting.
    
5.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If the package is referenced in the class or trigger, you can’t remove a class or trigger’s version setting for a managed package. To find where the class or trigger references a managed package, on the class or trigger’s Detail page, click **Show Dependencies**.