---
title: "Implement Quote Creation Functionality for Insurance Representatives"
domain: insurance-developer-guide
topic: implement-quote-creation-functionality-for-insurance-representatives
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.066Z
estimatedTokens: 405
keywords: [Implement, Quote, Creation, Functionality, Insurance, Representatives, user, journey, policyholder, contacts, company, representative, guides, identifying, coverage]
---

# Implement Quote Creation Functionality for Insurance Representatives

> This user journey applies when a policyholder contacts an insurance company and an
    insurance representative guides them through identifying coverage needs, configuring and pricing
    a quote, and sharing it for review.

# Implement Quote Creation Functionality for Insurance Representatives

This user journey applies when a policyholder contacts an insurance company and an insurance representative guides them through identifying coverage needs, configuring and pricing a quote, and sharing it for review.

**Assumption**

It’s assumed that a valid quote ID is available to update the existing quote.

The insurance representative collects the policyholder's requirements and adds any other additional rules during the API call to create a quote.

1.  **Create Quote**—Create a quote either by:

    -   Making a POST request on the [Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm "HTML (New Window)") Connect API, or
    -   Using the [Create Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm "HTML (New Window)") invocable action.

    This request returns a quote ID in the response.

2.  **(Optional)Invoke Underwriting Review**—To invoke an underwriting review after the initial quote is created, make a POST request on the [Insurance Invoke Underwriting Rule](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_underwriting_rules_invoke.htm "HTML (New Window)") Connect API with the necessary inputs.
3.  Use the quote ID that’s generated during the quote creation process for further processing, such as policy issuance.
