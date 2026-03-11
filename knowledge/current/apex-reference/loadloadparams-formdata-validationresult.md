---
title: "load(loadParams, formData, validationResult)"
domain: apex-reference
topic: loadloadparams-formdata-validationresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.819Z
keywords: [load, loadParams, formData, validationResult, Retrieve, record, IDs, initial, values, preference, form, before, edited, submitted., Signature, Parameters, Return, Value]
---

# load(loadParams, formData, validationResult)

> Retrieve the record IDs and initial values from a preference form
      before it is edited and submitted.

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