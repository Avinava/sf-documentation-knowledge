---
title: "PreferenceCenterApexHandler Interface"
domain: apex-reference
topic: preferencecenterapexhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.130Z
estimatedTokens: 1005
keywords: [PreferenceCenterApexHandler, Pass, data, between, organization, form, Preference, Manager., load, loadParams, formData, validationResult, submit]
---

# PreferenceCenterApexHandler Interface

> Pass data between your organization and a form in Preference
      Manager.

# PreferenceCenterApexHandler Interface

Pass data between your organization and a form in Preference Manager.

## Namespace

[Pref\_center](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm "The Pref_center namespace provides an interface, classes, and methods to create and retrieve data in forms in Preference Manager. Preference Manager, previously called Preference Center, is a feature within the Privacy Center app.")

-   **[PreferenceCenterApexHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_pref_center_PreferenceCenterApexHandler.htm#apex_pref_center_PreferenceCenterApexHandler_methods)**


## PreferenceCenterApexHandler Methods

The following are methods for PreferenceCenterApexHandler.

-   **[load(loadParams, formData, validationResult)](atlas.en-us.apexref.meta/apexref/apex_interface_pref_center_PreferenceCenterApexHandler.htm#apex_pref_center_PreferenceCenterApexHandler_load)**
    Retrieve the record IDs and initial values from a preference form before it is edited and submitted.
-   **[submit(loadParams, formData, validationResult)](atlas.en-us.apexref.meta/apexref/apex_interface_pref_center_PreferenceCenterApexHandler.htm#apex_pref_center_PreferenceCenterApexHandler_submit)**
    Updates the changed values of fields when the preference form is submitted.

### load(loadParams, formData, validationResult)

Retrieve the record IDs and initial values from a preference form before it is edited and submitted.

#### Signature

public pref\_center.LoadFormData load(pref\_center.LoadParameters loadParams, pref\_center.LoadFormData formData, pref\_center.ValidationResult validationResult)

#### Parameters

loadParams

Type: [pref\_center.LoadParameters](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadParameters.htm#apex_class_pref_center_LoadParameters "Contains methods to retrieve record Id information for parameters passed into the load-form handler.")

Retrieve the tokenized record ID.

formData

Type: [pref\_center.LoadFormData](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_class_pref_center_LoadFormData "Retrieve records related to the tokenized record id, and populate the values of a preference form.")

Set the initial values of fields in a form before they are edited.

validationResult

Type: [pref\_center.ValidationResult](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_ValidationResult.htm#apex_class_pref_center_ValidationResult "This class is reserved for future use with Preference Manager.")

Reserved for future use.

#### Return Value

Type: [pref\_center.LoadFormData](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_class_pref_center_LoadFormData "Retrieve records related to the tokenized record id, and populate the values of a preference form.")

### submit(loadParams, formData, validationResult)

Updates the changed values of fields when the preference form is submitted.

#### Signature

public void submit(pref\_center.SubmitParameters submitParams, pref\_center.SubmitFormData formData, pref\_center.ValidationResult validationResult)

#### Parameters

submitParams

Type: [pref\_center.SubmitParameters](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitParameters.htm#apex_class_pref_center_SubmitParameters "Retrieve record ID information to use with your submit-form handler.")

Retrieve the tokenized record Id.

formData

Type: [pref\_center.SubmitFormData](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm#apex_class_pref_center_SubmitFormData "Contains methods to retrieve information on buttons and options selected in a preference form.")

Retrieve the values of fields in a submitted form.

validationResult

Type: [pref\_center.ValidationResult](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_ValidationResult.htm#apex_class_pref_center_ValidationResult "This class is reserved for future use with Preference Manager.")

Reserved for future use.

#### Return Value

Type: void

## Related Topics

- Pref_center (atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm)
- PreferenceCenterApexHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_pref_center_PreferenceCenterApexHandler.htm)
- load(loadParams, formData, validationResult) (atlas.en-us.apexref.meta/apexref/apex_interface_pref_center_PreferenceCenterApexHandler.htm)
- submit(loadParams, formData, validationResult) (atlas.en-us.apexref.meta/apexref/apex_interface_pref_center_PreferenceCenterApexHandler.htm)
- pref_center.LoadParameters (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadParameters.htm)
- pref_center.LoadFormData (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm)
- pref_center.ValidationResult (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_ValidationResult.htm)
- pref_center.SubmitParameters (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitParameters.htm)
- pref_center.SubmitFormData (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm)
