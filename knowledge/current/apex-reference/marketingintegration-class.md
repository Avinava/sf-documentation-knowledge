---
title: "MarketingIntegration Class"
domain: apex-reference
topic: marketingintegration-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.086Z
estimatedTokens: 1164
namespace: ConnectApi
keywords: [MarketingIntegration, marketing, integration, form, Experience, Cloud, site, getForm, siteId, formId, API, Version, Requires, Chatter, saveForm]
---

# MarketingIntegration Class

> Get a marketing integration form for an Experience Cloud
    site.

**Namespace:** `ConnectApi`

# MarketingIntegration Class

Get, save, and submit a microsites marketing integration form for an Experience Cloud site.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## MarketingIntegration Methods

The following are methods for MarketingIntegration. All methods are static.

MarketingIntegration methods make calls to Marketing Cloud Engagement REST APIs to create, query, and insert data to the data extension object. If the API returns errors, ConnectinApex error messages include the [error code and message](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/error-handling.htm) from Marketing Cloud Engagement.

-   **[getForm(siteId, formId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_MarketingIntegration_static_methods.htm#apex_ConnectAPI_MarketingIntegration_getForm_1)**
    Get a marketing integration form for an Experience Cloud site.
-   **[saveForm(siteId, formInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_MarketingIntegration_static_methods.htm#apex_ConnectAPI_MarketingIntegration_saveForm_1)**
    Save a marketing integration form for an Experience Cloud site.
-   **[submitForm(siteId, formId, formSubmissionInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_MarketingIntegration_static_methods.htm#apex_ConnectAPI_MarketingIntegration_submitForm_1)**
    Submit a marketing integration form for an Experience Cloud site.

### getForm(siteId, formId)

Get a marketing integration form for an Experience Cloud site.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Form getForm(String siteId, String formId)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

formId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the form.

#### Return Value

Type: [ConnectApi.Form](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_form.htm "Marketing integration form.")

### saveForm(siteId, formInput)

Save a marketing integration form for an Experience Cloud site.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Form saveForm(String siteId, ConnectApi.FormInput formInput)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

formInput

Type: [ConnectApi.FormInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_form.htm "Marketing integration form.")

A ConnectApi.FormInput object to save.

#### Return Value

Type: [ConnectApi.Form](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_form.htm "Marketing integration form.")

#### Usage

This method attempts to create a read-only data extension in Marketing Cloud Engagement. A Marketing Cloud Engagement admin can change the read-only setting. We recommend keeping the data extension as read-only to maintain schema consistency with the form.

### submitForm(siteId, formId, formSubmissionInput)

Submit a marketing integration form for an Experience Cloud site.

#### API Version

53.0

#### Available to Guest Users

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FormSubmission submitForm(String siteId, String formId, ConnectApi.FormSubmissionInput formSubmissionInput)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

formId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the form.

formSubmissionInput

Type: [ConnectApi.FormSubmissionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_form_submission.htm "Marketing integration form submission.")

A ConnectApi.FormSubmissionInput object to submit.

#### Return Value

Type: [ConnectApi.FormSubmission](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_form_submission.htm "Marketing integration form submission.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getForm(siteId, formId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_MarketingIntegration_static_methods.htm)
- saveForm(siteId, formInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_MarketingIntegration_static_methods.htm)
- submitForm(siteId, formId, formSubmissionInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_MarketingIntegration_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.Form (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_form.htm)
- ConnectApi.FormInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_form.htm)
- ConnectApi.FormSubmissionInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_form_submission.htm)
- ConnectApi.FormSubmission (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_form_submission.htm)
