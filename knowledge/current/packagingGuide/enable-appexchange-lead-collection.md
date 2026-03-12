---
title: "Enable AppExchange Lead Collection"
domain: packagingGuide
topic: enable-appexchange-lead-collection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.425Z
estimatedTokens: 539
keywords: [Enable, AppExchange, Lead, Collection, Collect, leads, customers, interact, listings]
---

# Enable AppExchange Lead Collection

> Collect leads when customers interact with your AppExchange listings.

# Enable AppExchange Lead Collection

Collect leads when customers interact with your AppExchange listings.

Before you enable lead collection, verify that the Salesforce org that receives leads is ready.

-   You must receive leads in a standard Salesforce org, not a Developer Edition org.
-   The org where you receive leads must have Web-to-Lead enabled.
-   Require reCAPTCHA Verification must be disabled in your Web-to-Lead settings.


| User Permissions Needed |
| --- |
| To edit AppExchange listings: | Manage Listings |

1.  Go to the Partner Console.

    See [Access the AppExchange Partner Console](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm "The Partner Console is the complete business management site for ISV partners and consultants with AppExchange listings. It’s where partners create listings, manage security reviews, and monitor solution performance metrics.").

2.  On the Listings tab, click a listing tile.
3.  Click **Grow Your Business**.
4.  Specify the Salesforce org where you want to receive the leads. We recommend using your partner business org so that you can manage leads and licenses from a single, convenient location.
5.  Enable lead collection for one or more activities, and complete any required setup. If customers must contact you for installation instructions, select **Install the solution**. To check the installation method for this listing, go to the Link Your Solution step (1).

    ![A screenshot of the Installation Method section of the Link Your Solution Listing Builder step](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fappexchange_installation_method.png&folder=packagingGuide)

6.  Save your changes.

#### See Also

-   [Installation Methods for AppExchange Solutions](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_install_apps.htm "The easier it is for prospects to install your AppExchange solution, the more likely it is that they become paying customers. When you create your listing in the Partner Console, you’re prompted to select an installation method. Offer the method that gives prospects the best experience.")

## Related Topics

- Access the AppExchange Partner Console (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm)
- Installation Methods for AppExchange Solutions (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_install_apps.htm)
