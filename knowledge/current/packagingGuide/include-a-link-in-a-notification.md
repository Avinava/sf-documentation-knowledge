---
title: "Include a Link in a Notification"
domain: packagingGuide
topic: include-a-link-in-a-notification
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.588Z
estimatedTokens: 375
keywords: [Include, Link, Notification, customer, installs, offering, often, want, provide, doesn’t, fit, setup, documentation, point, customers]
---

# Include a Link in a Notification

> When a customer installs your offering, you often want to provide information that
        doesn’t fit in the notification, such as setup documentation. You can point customers to
        this information by including links in a Checkout Management App (CMA)
        notification.

# Include a Link in a Notification

When a customer installs your offering, you often want to provide information that doesn’t fit in the notification, such as setup documentation. You can point customers to this information by including links in a Checkout Management App (CMA) notification.


| User Permissions Needed |
| --- |
| To enable, disable, or customize notifications: | CMA Admin User |
| To create or change Visualforce email templates: | Customize Application |

Suppose that you sell a product that requires configuration after it’s installed. To help customers get off on the right foot, direct them to a page on your website that offers configuration tips. Let’s step through how to add a link to the Free Trial Signup template.

1.  Log in to the org where the CMA is installed.
2.  Open the App Launcher, and then click **Checkout Management App**.
3.  Click **Checkout Notification Settings**.
4.  Find the template that you want to use, and then click **Edit**. For this example, choose the Free Trial Signup template.
5.  Click **Edit Template**.
6.  Modify the email template to include the <apex:outputLink\> component, which lets you point to an external URL. For this example, add this component after the last sentence in the message body.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

    #### Note

    The target attribute is set to blank, which opens the URL in a new page.

7.  Click **Save**.

## Code Examples

```
<apex:outputLink value="https://example.com/getstarted" target="_blank">Check out our website for configuration tips.</apex:outputLink>
```
