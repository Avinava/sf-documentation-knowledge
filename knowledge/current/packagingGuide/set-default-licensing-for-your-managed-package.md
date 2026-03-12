---
title: "Set Default Licensing for Your Managed Package"
domain: packagingGuide
topic: set-default-licensing-for-your-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.529Z
estimatedTokens: 892
keywords: [Licensing, Managed, Package, License, Management, App, LMA, register, receive, record, time, customer, installs, AppExchange, solution]
---

# Set Default Licensing for Your Managed Package

> If you set up the License Management App (LMA) and register your managed package, you
    receive a license record each time a customer installs your AppExchange solution. You can use
    licenses to track who's using your solution and for how long.

# Set Default Licensing for Your Managed Package

If you set up the License Management App (LMA) and register your managed package, you receive a license record each time a customer installs your AppExchange solution. You can use licenses to track who's using your solution and for how long.

Before you register a package version, make sure that:

-   Your solution is in a managed package.
-   You installed the LMA. In most cases, the LMA is installed in your Partner Business Org.
-   You connected the org that has the LMA to the AppExchange Partner Console.

1.  Go to the Partner Console.

    See [Access the AppExchange Partner Console](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm "The Partner Console is the complete business management site for ISV partners and consultants with AppExchange listings. It’s where partners create listings, manage security reviews, and monitor solution performance metrics.").

2.  Click **Technologies** | **Solutions**.
3.  Click a solution name to show the related versions.
4.  Locate the package version that you want to register.
5.  Confirm that you see Unregistered Package (1) in the Licenses column (2).

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

    #### Tip

    If you don’t see a Licenses column, it most likely means that the solution isn’t a managed package. You can register only managed packages.

6.  Click **Register Package** (3).

    If the Register Package link is missing and you instead see Edit Licenses (4), the package is already registered and you’re done.

    ![A list of solutions on the Partner Console's Solutions tab with numbered callouts on the Licenses column ](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fappexchange_register_licenses.png&folder=packagingGuide)

7.  Follow the prompts to log in to the org where the LMA is installed. Provide a username and a password with a security token appended. For example, if the password is ABC and the token is 123, enter ABC123. Don’t remember your token? [Reset your security token](https://help.salesforce.com/articleView?id=user_security_token.htm&type=5&language=en_US "HTML (New Window)").
8.  Edit the default license settings.
    1.  Select whether your default license is **Free Trial** or **Active**. For a Free Trial license, enter a number up to 90 for the number of trial days.
    2.  Select whether your license is applied **Per seat** or **Site-wide**. For a per-seat license, enter the number of seats to assign to the license.
    3.  Save your changes.

#### See Also

-   [*Second-Generation Managed Packaging Developer Guide:* Manage Licenses for Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_intro.htm "Second-Generation Managed Packaging Developer Guide:
    Manage Licenses for Managed Packages - HTML (New Window)")

-   [*Salesforce Help:* Reset Your Security Token](https://help.salesforce.com/articleView?id=user_security_token.htm&type=5&language=en_US "Salesforce Help: Reset Your Security Token - HTML (New Window)")

-   [Connect Your Partner Business Org to the AppExchange Partner Console](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_organizations.htm "A Partner Business Org (PBO) is an org preinstalled with the tools that you use to run your AppExchange business. Connect your PBO to the Partner Console so that you’re ready to set up licensing for your managed packages and create listings for your solutions.")

## Related Topics

- Access the AppExchange Partner Console (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm)
- Connect Your Partner Business Org to the AppExchange Partner Console (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_organizations.htm)
