---
title: "Use an Organization-Wide Address on a Notification"
domain: packagingGuide
topic: use-an-organization-wide-address-on-a-notification
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.592Z
estimatedTokens: 489
keywords: [Organization-Wide, Address, Notification, notifications, sent, Checkout, Management, App, CMA, include, generic, email, want, contact, specific]
---

# Use an Organization-Wide Address on a Notification

> By default, notifications sent by the Checkout Management App (CMA) include a generic
        email address in the From field. But what if you want to include contact information for a
        specific team at your company, like support or billing? You can specify an organization-wide
        address on a notification so that customer replies are directed to the right people at your
        company.

# Use an Organization-Wide Address on a Notification

By default, notifications sent by the Checkout Management App (CMA) include a generic email address in the From field. But what if you want to include contact information for a specific team at your company, like support or billing? You can specify an organization-wide address on a notification so that customer replies are directed to the right people at your company.


| User Permissions Needed |
| --- |
| To enable, disable, or customize notifications: | CMA Admin User |
| To configure organization-wide addresses: | Modify All Data |

Suppose that your company’s refund inquiries are fielded by a billing specialist whose email address is billing@example.com. Let’s step through how to add this email address to the Refund Notification template so that customers know who to contact if they have questions.

1.  Log in to the org where the CMA is installed.
2.  Create an organization-wide email address.
    1.  From Setup, enter Organization-Wide Addresses in the Quick Find box, and then click **Organization-Wide Addresses**.
    2.  Click **Add**.
    3.  For the display name, enter a word or phrase that users who receive the email see as the sender. For this example, enter Billing Support.
    4.  Enter an email address. For this example, enter billing@example.com.
    5.  Choose which profiles can use the address. For this example, enable the address for all profiles.
    6.  Click **Save**.
3.  Add the organization-wide email address to the notification template.
    1.  From Setup, enter Email Alerts in the Quick Find box, and then click **Email Alerts**.
    2.  Find the notification template that you want to update, and then click **Edit**. For this example, choose the Refund Customer Notification template.
    3.  For From Email Address, choose an organization-wide email address. For this example, choose "Billing Support" <billing@example.com>.
4.  Click **Save**.
