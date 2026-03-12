---
title: "Configure a Payment Gateway in Salesforce Billing"
domain: blng-dev
topic: configure-a-payment-gateway-in-salesforce-billing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.972Z
estimatedTokens: 416
keywords: [Configure, Payment, Gateway, Salesforce, Billing, send, data, chosen]
---

# Configure a Payment Gateway in Salesforce Billing

> Configure Salesforce Billing to send data to your chosen payment gateway.

# Configure a Payment Gateway in Salesforce Billing

Configure Salesforce Billing to send data to your chosen payment gateway.

| Available in: Salesforce Billing 7.0 and later |
| --- |


1.  Set up remote site settings.
    1.  From Setup, enter Remote Site Settings, and then select **Remote Site Settings**.
    2.  Click **New Remote Site**.
    3.  Add the domain production URL and domain sandbox URL for your gateway.

        We provide a list of URLs for our default-supported gateways, but you can add others based on your custom gateway's requirements.

        | Gateway | Production URL | Sandbox URL |
        | --- | --- | --- |
        | Authorize.net | https://api.authorize.net | https://apitest.authorize.net |
        | CyberSource | https://ics2wsa.ic3.com | https://icswstesta.ic3.com |
        | Payeezy | https://api.payeezy.com | https://api-cert.payeezy.com |

2.  Set up custom settings.
    1.  From Setup, enter Custom Settings, and then select **Custom Settings**.
    2.  Click **Payment Gateway Config**, then click **Manage**.
    3.  Click **New**.
    4.  Enter a name for your payment gateway.

        Match this value to the name on your payment gateway record's Gateway Type field.

    5.  Enter your gateway class name.

        This value takes the form of PackagePrefix.APIClassName. We provide a list of class names for our default gateways, but you can add others based on your custom gateway's requirements.

        | Name | Gateway Class Name |
        | --- | --- |
        | AuthorizeDotNet | AuthorizeDotNetAPI |
        | CyberSource | CyberSourceAPI |
        | Payeezy | PayeezyAPI |

3.  Save your changes.
