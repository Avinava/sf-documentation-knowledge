---
title: "RenderEmailTemplateBodyResult Methods"
domain: apex-reference
topic: renderemailtemplatebodyresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.810Z
keywords: [RenderEmailTemplateBodyResult, Methods, error, occurred, during, renderEmailTemplate, method, RenderEmailTemplateError, object, returned., getErrors, Signature, Return, Value, getMergedBody, getSuccess]
---

# RenderEmailTemplateBodyResult Methods

> If an error occurred during the renderEmailTemplate method, a RenderEmailTemplateError object is returned.

## RenderEmailTemplateBodyResult Methods

The following are methods for RenderEmailTemplateBodyResult.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm#apex_Messaging_RenderEmailTemplateBodyResult_getErrors)**  
    If an error occurred during the renderEmailTemplate method, a RenderEmailTemplateError object is returned.
-   **[getMergedBody()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm#apex_Messaging_RenderEmailTemplateBodyResult_getMergedBody)**  
    Returns the rendered body text with merge field references replaced with the corresponding record data.
-   **[getSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm#apex_Messaging_RenderEmailTemplateBodyResult_getSuccess)**  
    Indicates whether the operation was successful.

### getErrors()

If an error occurred during the renderEmailTemplate method, a RenderEmailTemplateError object is returned.

#### Signature

public List<Messaging.RenderEmailTemplateError> getErrors()

#### Return Value

Type: List<Messaging.RenderEmailTemplateError>

### getMergedBody()

Returns the rendered body text with merge field references replaced with the corresponding record data.

#### Signature

public String getMergedBody()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSuccess()

Indicates whether the operation was successful.

#### Signature

public Boolean getSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")