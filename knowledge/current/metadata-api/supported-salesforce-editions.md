---
title: "Supported Salesforce Editions"
domain: metadata-api
topic: supported-salesforce-editions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.120Z
keywords: [Supported, Salesforce, Editions, Note, Metadata, API, Access, Professional, Edition]
---

# Supported Salesforce Editions

# Supported Salesforce Editions

To use Metadata API, your organization must use **Enterprise Edition**, **Unlimited Edition**, **Performance Edition**, or **Developer Edition**. If you’re an existing Salesforce customer and want to upgrade to Enterprise, Unlimited, or Performance Edition, contact your account representative.

We strongly recommend that you use a sandbox, which is an exact replica of your production organization. Enterprise, Unlimited, and Performance Editions come with free developer sandboxes. For more information, see [http://www.salesforce.com/platform/cloud-infrastructure/sandbox.jsp](http://www.salesforce.com/platform/cloud-infrastructure/sandbox.jsp).

Alternatively, you can use a Developer Edition (DE) org. A DE org provides access to all features that are available with Enterprise Edition, but is limited by the number of users and the amount of storage space. A DE org isn’t a copy of your production org/ It provides an environment where you can build and test your solutions without affecting your organization’s data. Developer Edition accounts are available for free at [https://developer.salesforce.com/signup](https://developer.salesforce.com/signup).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

A metadata component must be visible in the org for Metadata API to act on it. Also, a user must have the API Enabled permission to have access to metadata components.

## Metadata API Access for Professional Edition

ISV partners can request Metadata API access to Professional Edition orgs for apps that have passed AppExchange Security Review. Access is granted through an API token (client ID). This special key enables the app to make Metadata API calls to customers’ Professional Edition orgs.

As an ISV partner, you can request Metadata API access by following these steps.

1.  Submit your app for security review. See [Steps in the Security Review](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review.htm "HTML (New Window)") in the [ISVForce Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/ "HTML (New Window)").
2.  After your app is approved, log a case in the [Partner Community](https://partners.salesforce.com/ "HTML (New Window)") in **AppExchange and Feature Requests** | **API Token Request**, and specify SOAP for the type of token.

To make calls to the Metadata API, append the API token to the [CallOptions](atlas.en-us.api_meta.meta/api_meta/meta_calloptions.htm "Specifies the API client identifier.") SOAP header in your calls.