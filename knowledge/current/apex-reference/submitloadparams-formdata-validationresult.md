---
title: "submit(loadParams, formData,
    validationResult)"
domain: apex-reference
topic: submitloadparams-formdata-validationresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.819Z
keywords: [submit, loadParams, formData, validationResult, Updates, changed, values, fields, preference, form, submitted., Signature, Parameters, Return, Value]
---

# submit(loadParams, formData,
    validationResult)

> Updates the changed values of fields when the preference form is
      submitted.

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