---
title: "submitForm(siteId, formId,
    formSubmissionInput)"
domain: apex-reference
topic: submitformsiteid-formid-formsubmissioninput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.334Z
keywords: [submitForm, siteId, formId, formSubmissionInput, Submit, marketing, integration, form, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# submitForm(siteId, formId,
    formSubmissionInput)

> Submit a marketing integration form for an Experience Cloud
    site.

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