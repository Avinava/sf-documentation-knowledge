---
title: "Build a Self-service Quote and Policy Creation Functionality for Community Portal
    Users"
domain: insurance-developer-guide
topic: build-a-self-service-quote-and-policy-creation-functionality-for-community-porta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.114Z
estimatedTokens: 686
keywords: [Build, Self-service, Quote, Policy, Creation, Functionality, Community, Portal, Users, user, journey, policyholder, partner, logs, customer]
---

# Build a Self-service Quote and Policy Creation Functionality for Community Portal
    Users

> This user journey applies when a user, such as a policyholder or partner, logs into a
    customer community portal to select a product, view its price, and configure its attributes. The
    user then creates a quote, and proceeds to issue a policy.

# Build a Self-service Quote and Policy Creation Functionality for Community Portal Users

This user journey applies when a user, such as a policyholder or partner, logs into a customer community portal to select a product, view its price, and configure its attributes. The user then creates a quote, and proceeds to issue a policy.

**Assumption**

It’s assumed that the user logs into the community portal, selects a product to generate a quote, and then gets the policy issued.

Use these steps to build the user journey.

1.  **Generate Priced Context**—Make a POST request on the [Insurance Product Rating](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_product_rating.htm "HTML (New Window)") Connect API with the required inputs to generate the price adjusted context.

    This request returns the context ID in the response.

2.  **Create Quote**—Use the context ID to create a quote either by:

    -   Making a POST request on the [Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm "HTML (New Window)") Connect API, or
    -   Using the [Create Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm "HTML (New Window)") invocable action.

    This request returns a quote ID in the response.

3.  **Get Quote Context**—Use the quote ID to retrieve the quote details either by:

    -   Making a GET request on the [Insurance Quote Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm "HTML (New Window)") Connect API, or
    -   Using the [Get Insurance Quote Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_quote_details.htm "HTML (New Window)") invocable action.

    This request returns the context ID in the response that contains the context of the quote.

4.  **Issue Policy**—Use the retrieved quote context to create a policy record either by:
    -   Making a POST request on the [Issue Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_issue_policy.htm "HTML (New Window)") Connect API, or
    -   Using the [Issue Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_issue_insurance_policy.htm "HTML (New Window)") invocable action.
