---
title: "RenderEmailTemplateBodyResult Class"
domain: apex-reference
topic: renderemailtemplatebodyresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.770Z
estimatedTokens: 573
namespace: Messaging
keywords: [RenderEmailTemplateBodyResult, results, rendering, email, templates, getErrors, getMergedBody, getSuccess]
---

# RenderEmailTemplateBodyResult Class

> Contains the results for rendering email templates.

**Namespace:** `Messaging`

# RenderEmailTemplateBodyResult Class

Contains the results for rendering email templates.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce outbound and inbound email functionality.")

-   **[RenderEmailTemplateBodyResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm#apex_Messaging_RenderEmailTemplateBodyResult_methods)**


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

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- RenderEmailTemplateBodyResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm)
- getErrors() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm)
- getMergedBody() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm)
- getSuccess() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
