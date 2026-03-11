---
title: "EmailTemplateSelector Methods"
domain: apex-reference
topic: emailtemplateselector-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.300Z
keywords: [EmailTemplateSelector, Methods, Returns, email, template, preload, case, currently, being, viewed, feed, specified, ID., getDefaultTemplateId, caseId, Signature, Parameters, Return, Value]
---

# EmailTemplateSelector Methods

> Returns the ID of the email template to preload for the
case currently being viewed in the case feed using the specified case
ID.

## EmailTemplateSelector Methods

The following are methods for EmailTemplateSelector.

-   **[getDefaultTemplateId(caseId)](atlas.en-us.apexref.meta/apexref/apex_email_template_selector.htm#apex_Support_EmailTemplateSelector_getDefaultTemplateId)**  
    Returns the ID of the email template to preload for the case currently being viewed in the case feed using the specified case ID.

### getDefaultTemplateId(caseId)

Returns the ID of the email template to preload for the case currently being viewed in the case feed using the specified case ID.

#### Signature

public ID getDefaultTemplateId(ID caseId)

#### Parameters

caseId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")