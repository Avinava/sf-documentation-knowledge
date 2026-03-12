---
title: "Adding Custom Automation to License Management App Objects"
domain: pkg1-dev
topic: adding-custom-automation-to-license-management-app-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.398Z
estimatedTokens: 326
keywords: [Adding, Custom, Automation, License, Management, App, Objects, examples, how, LMA, grow, business, retain, customers, Alert]
---

# Adding Custom Automation to License Management App Objects

> Here are some examples of how you can use the License Management App (LMA) to grow your
    business and retain customers.

# Adding Custom Automation to License Management App Objects

Here are some examples of how you can use the License Management App (LMA) to grow your business and retain customers.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions |


## Alert Sales Reps Before a License Expires

If you’re managing licenses for several packages, it can be difficult to track the various expirations. If a license expires accidentally, you could even lose a customer. To help your customers with renewals, set up an Apex trigger or create a flow to email a sales rep on your team before the license expires.

## Notify Customer-Retention Specialists When an Offering Is Uninstalled

If a customer uninstalls your offering, find out why. By speaking to the customer, you have an opportunity to restore the business relationship or receive feedback that helps you improve your offering.

To notify a customer-retention specialist on your team, follow these high-level steps.

1.  Create an email template for the notification.
2.  Create a workflow rule with a filter that specifies that the License Status equals Uninstalled.
3.  Associate the workflow rule with a workflow alert that sends an email to the retention specialist.
