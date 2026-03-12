---
title: "Configure Tax Integrations in Salesforce Billing"
domain: blng-dev
topic: configure-tax-integrations-in-salesforce-billing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.976Z
estimatedTokens: 428
keywords: [Configure, Tax, Integrations, Salesforce, Billing, Add, custom, settings, remote, site, engine]
---

# Configure Tax Integrations in Salesforce Billing

> Add custom settings and remote site settings for your tax engine in Salesforce
  Billing.

# Configure Tax Integrations in Salesforce Billing

Add custom settings and remote site settings for your tax engine in Salesforce Billing.

| Available in: All Salesforce Billing Editions |
| --- |


1.  Create a custom setting for the class that Salesforce Billing calls and sends to your tax package.
    1.  From Setup, in the Quick Find box, enter Custom Settings, and then select **Custom Settings**.
    2.  Select **Tax Config**.
    3.  Select **Manage**, and then select **New**.
    4.  Enter the name of your tax engine.
    5.  Enter the tax package class name that your tax engine will call for tax calculations. The class name should have the format {prefix.classname}.
2.  Create a custom setting for the tax engine that Salesforce Billing calls and sends to your tax package.
    1.  From Setup, in the Quick Find box, enter Custom Settings, and then select **Custom Settings**.
    2.  Select **Billing Config**.
    3.  Select **Manage**, and then select **New**.
    4.  Enter the name of your tax engine.
    5.  In the Category field, enter Tax.
    6.  In the String Value field, enter the name of your tax engine. This value must match the Tax Engine field on the tax integration record for the tax integration that you’re configuring. For example, if your tax integration has a value of Avalara Avatax, your String Value field must have the same value.
3.  Configure remote site settings.
    1.  From Setup, in the Quick Find box, enter Remote Site Settings, and then select **Remote Site Settings**.
    2.  Select **New Remote Site**.
    3.  Add the domain production URL for your tax engine.
    4.  If needed, create another remote site for your tax engine’s domain sandbox URL.
