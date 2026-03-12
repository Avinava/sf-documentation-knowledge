---
title: "Associate a Package with the License Management App"
domain: pkg1-dev
topic: associate-a-package-with-the-license-management-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.385Z
estimatedTokens: 668
keywords: [Associate, Package, License, Management, App, receive, lead, records, connect, Org, LMO, Salesforce, Partner, Console, LMA]
---

# Associate a Package with the License Management App

> To receive lead and license records for your package, you connect your License
        Management Org (LMO), your package, and the Salesforce Partner Console. Your LMO is the
        Salesforce org where the License Management App (LMA) is installed.

# Associate a Package with the License Management App

To receive lead and license records for your package, you connect your License Management Org (LMO), your package, and the Salesforce Partner Console. Your LMO is the Salesforce org where the License Management App (LMA) is installed.


| User Permissions Needed |
| --- |
| To manage licenses in the Partner Community: | Manage Listings |

A single LMO can manage multiple 1GP and 2GP packages, but a package can be associated with only one LMO.

1.  Connect your packaging org (for 1GP) or your Dev Hub org (for 2GP) to the Partner Console.
    1.  Log in to the [Partner Community](https://partners.salesforce.com/), and select the **Publishing** tab.
    2.  Click **Technologies** | **Orgs**.
    3.  Click **Connect Technology**, and then click **Org**.
    4.  Click **Connect Org**.
    5.  Log in to the org. Provide a username and a password with a security token appended. For example, if the password is ABC and the token is 123, enter ABC123. Don’t remember your token? [Reset your security token](https://help.salesforce.com/articleView?id=user_security_token.htm&type=5&language=en_US "HTML (New Window)").

        For 1GP packages, enter the login credentials for the packaging org. Repeat this step for all your 1GP packages.

        For 2GP packages, enter the login credentials for the Dev Hub org. When you connect the Dev Hub org, all the 2GP packages owned by the Dev Hub org are linked to the Partner Console.

2.  Select the **Solutions** tab.
3.  Locate the package you want to register with the LMO. To register each package you own, repeat this step.
    1.  Click the down arrow to expand the list of versions for your package.
    2.  Click **Register Package** for the package version you want to register.

        Package versions created after linking to your LMO inherit the association.

    3.  To register the package, log in to your LMO.
4.  Set the default behavior you want for your package license, and then click **Save**.

After the package is registered, a license is created when customers install it. You can view which packages are registered in the LMA.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Beta package versions don’t display in the LMA. Only managed-released package versions (1GP) and promoted package versions (2GP) are visible in the LMA. Unlocked packages aren’t supported.

#### See Also

-   [*Salesforce Help:* Reset Your Security Token](https://help.salesforce.com/articleView?id=user_security_token.htm&type=5&language=en_US "Salesforce Help:  Reset Your Security Token - HTML (New Window)")
