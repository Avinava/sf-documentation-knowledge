---
title: "SDK for Enterprise Sales Management"
domain: esm-developer-guide
topic: sdk-for-enterprise-sales-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:26.982Z
estimatedTokens: 593
keywords: [SDK, Enterprise, Sales, Management, Software, Development, Toolkit, JavaScript, library, abstracts, simplifies, Cart-Based, Digital, Commerce, APIs]
---

# SDK for Enterprise Sales Management

> The Enterprise Sales Management Software Development Toolkit (SDK) is a JavaScript library that abstracts and simplifies the use of Enterprise Sales Management, Cart-Based, and Digital Commerce APIs.

# SDK for Enterprise Sales Management

The Enterprise Sales Management Software Development Toolkit (SDK) is a JavaScript library that abstracts and simplifies the use of Enterprise Sales Management, Cart-Based, and Digital Commerce APIs.

The SDK improves usability and reduces the effort to develop compelling user interfaces by hiding complex API semantics inside the SDK interface. In some cases, the SDK invokes more than one API call (as required by some APIs) to complete a request. The SDK ensures that errors are detected before API calls are made so that data structure rules are followed. The SDK consolidates common application and business front-end logic that is used by Enterprise Sales Management Lightning Web Components.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=esm_developer_guide)

#### Tip

Salesforce recommends that you do not call the Enterprise Sales Management APIs directly and instead use the Enterprise Sales Management SDK. Enterprise Sales Management API documentation is available for your reference so that you can understand the data that is included in various calls.

The SDK supports Node.js module delivery. Each module has its own context, cannot interfere with other modules, or interfere with global scope.

## Enterprise Sales Management UI Components

The UI Components diagram shows the relationship of the SDK to the UI components, APIs, and Integration Procedures.

UI Components![Diagram of user interface components, SDK application logic, APIs, and Salesforce](/docs/resources/img/en-us/260.0?doc_id=images%2Fb2b__sdk__lwc__architecture__diagram.png&folder=esm_developer_guide)

## ViewObject Model

The ViewObject model translates the JSON response from APIs for use with Enterprise Sales Management Lightning Web Components. It describes how the SDK will retrieve data from the API, translate it, and then update data for viewing in the UI. It helps to render the UI by using variables that represent ViewObjects for use in HTML templates.

Enterprise Sales Management ViewObject Model![ViewObject ERD Diagram](/docs/resources/img/en-us/260.0?doc_id=images%2Fb2b_sdk_viewobject_model.png&folder=esm_developer_guide)

## Related Information

-   [Class B2BExpress](https://sfdo-docs.s3.us-west-2.amazonaws.com/VlocityDevDoc/sdk/classes/_b2bexpress_b2bexpress_sdk_.b2bexpress.html)
