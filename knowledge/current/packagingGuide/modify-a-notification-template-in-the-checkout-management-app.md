---
title: "Modify a Notification Template in the Checkout Management App"
domain: packagingGuide
topic: modify-a-notification-template-in-the-checkout-management-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.583Z
estimatedTokens: 537
keywords: [Modify, Notification, Template, Checkout, Management, App, CMA, send, email, notifications, trial, installations, purchases, subscription, changes]
---

# Modify a Notification Template in the Checkout Management App

> The Checkout Management App (CMA) can send email notifications in response to trial
        installations, purchases, and other subscription changes. We created default notifications
        to get you started, but you can tailor templates to your company’s needs.

# Modify a Notification Template in the Checkout Management App

The Checkout Management App (CMA) can send email notifications in response to trial installations, purchases, and other subscription changes. We created default notifications to get you started, but you can tailor templates to your company’s needs.


| User Permissions Needed |
| --- |
| To enable, disable, or customize notifications: | CMA Admin User |
| To create or change Visualforce email templates: | Customize Application |

Notification templates in the CMA are based on Visualforce email templates. The templates support advanced customizations, like merge fields and formulas.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Notification templates in the CMA also include custom components that affect email styling. You can’t modify these components, but you can remove them.

1.  Log in to the org where the CMA is installed.
2.  Open the App Launcher, and then click **Checkout Management App**.
3.  Click **Checkout Notification Settings**.
4.  Find the template that you want to customize, and then select **Edit**.
5.  Click **Edit Template** and modify as needed, and then click **Save**.

#### See Also

-   [Use an Organization-Wide Address on a Notification](atlas.en-us.packagingGuide.meta/packagingGuide/cma_customize_email_org_wide_address.htm "By default, notifications sent by the Checkout Management App (CMA) include a generic email address in the From field. But what if you want to include contact information for a specific team at your company, like support or billing? You can specify an organization-wide address on a notification so that customer replies are directed to the right people at your company.")

-   [Include a Link in a Notification](atlas.en-us.packagingGuide.meta/packagingGuide/cma_customize_email_add_link.htm "When a customer installs your offering, you often want to provide information that doesn’t fit in the notification, such as setup documentation. You can point customers to this information by including links in a Checkout Management App (CMA) notification.")

## Related Topics

- Use an Organization-Wide Address on a Notification (atlas.en-us.packagingGuide.meta/packagingGuide/cma_customize_email_org_wide_address.htm)
- Include a Link in a Notification (atlas.en-us.packagingGuide.meta/packagingGuide/cma_customize_email_add_link.htm)
