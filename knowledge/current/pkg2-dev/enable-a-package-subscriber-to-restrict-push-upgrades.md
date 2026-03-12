---
title: "Enable a Package Subscriber to Restrict Push Upgrades"
domain: pkg2-dev
topic: enable-a-package-subscriber-to-restrict-push-upgrades
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.920Z
estimatedTokens: 913
keywords: [Enable, Package, Subscriber, Restrict, Push, Upgrades, certain, scenarios, Salesforce, customer, may, require, ability, block, managed]
---

# Enable a Package Subscriber to Restrict Push Upgrades

> In certain scenarios, a Salesforce customer may require the ability to block push
    upgrades of managed packages that they have installed in their org. Customized push upgrades let
    Salesforce Partners give customers the ability to restrict push upgrades to a specific customer
    org for a specific package.

# Enable a Package Subscriber to Restrict Push Upgrades

In certain scenarios, a Salesforce customer may require the ability to block push upgrades of managed packages that they have installed in their org. Customized push upgrades let Salesforce Partners give customers the ability to restrict push upgrades to a specific customer org for a specific package.

Setting up customized push upgrades requires both the Salesforce Partner and Salesforce Customer to complete specific enablement steps.

1.  The Salesforce Partner enables customized push upgrades for a package installed in the customer org.

    1.  As the Salesforce Partner, log in to either your 1GP packaging org, or your Dev Hub org (for managed 2GP packages) using the system administrator account.
    2.  Click the gear icon and select **Developer Console**.
    3.  In the Developer Console, select **Debug**, and then select **Open Execute Anonymous Window**.
    4.  Enter the following code, but remember to replace the packageID (starts with 033) and subscriberOrgID (starts with 00D) text for the package ID and customer org you’re enabling.

        ```

        ```

        If the customer wants to block push upgrades to multiple production orgs, you must specify each org ID. Here’s an example of how to enable customized push upgrades for more than one org.

        ```

        ```

    5.  Click **Open Log** and then click **Execute**.
    6.  Click the **Debug Only** checkbox and verify that the push upgrade customization record was created.

        The record looks something like: 11:09:15:814 USER\_DEBUG \[2\]|DEBUG|pucId1 =12COK000000000B

    7.  Contact the Salesforce Customer and let them know that customized push upgrades is enabled on your end.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

    #### Note

    Sandbox orgs automatically get the ability to block push upgrades if the parent production org has been granted the ability to block push upgrades by the Salesforce Partner.

2.  After the Salesforce Partner enables customized push upgrades, the Salesforce Customer blocks push upgrades from Setup in the customer org.
    1.  As the Salesforce Customer, log in to your org.
    2.  From Setup, enter Installed Packages in the Quick Find box, and then select **Installed Packages**.
    3.  Select the package you’ve requested to block push upgrades, and then select **Block Push Upgrades**.
    4.  Verify that the **Push upgrades are now blocked** checkbox is selected.

Salesforce Customers can resume push upgrades at any time by selecting the **Allow Push Upgrades** button. While the block is enabled, package upgrades can only be installed manually.

Salesforce Partners can view and manage existing customized push upgrades by using the PushUpgradeCustomizationRepository Apex Class.

Note these considerations for customized push upgrades.

-   If your package is a managed 2GP and has customized push upgrades enabled, and you then [transfer the ownership of the managed 2GP](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_package_transfer.htm) from one Dev Hub to another, the new Dev Hub won’t retain the required permissions. In addition, the PushUpgradeCustomizationRepository records for blocking push upgrades won’t be retained. To continue using customized push upgrades with the new Dev Hub org, repeat Steps 1 and 2.
-   It’s not possible to block push upgrades on a patch version of a package. If the customer has a patch version installed, they must upgrade to a non-patch version of the package before they can block push upgrades.

## Code Examples

```apex
String pucId1 = PushUpgradeCustomizationRepository.create('packageID', 'subscriberOrgID', true);
System.debug('pucId1 =' + pucId1);
```

```apex
String pucId1 = PushUpgradeCustomizationRepository.create('packageID', 'subscriberOrgID', true);
System.debug('pucId1 =' + pucId1);
                
String pucId2 = PushUpgradeCustomizationRepository.create('packageID', 'subscriberOrgID', true);
System.debug('pucId2 =' + pucId2);
```
