---
title: "EmailTemplateSelector Interface"
domain: apex-reference
topic: emailtemplateselector-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.300Z
keywords: [EmailTemplateSelector, Interface, Returns, email, template, preload, case, currently, being, viewed, feed, specified, ID., getDefaultTemplateId, caseId, Signature, Parameters, Return, Value]
---

# EmailTemplateSelector Interface

> Returns the ID of the email template to preload for the
case currently being viewed in the case feed using the specified case
ID.

### getDefaultTemplateId(caseId)

Returns the ID of the email template to preload for the case currently being viewed in the case feed using the specified case ID.

#### Signature

public ID getDefaultTemplateId(ID caseId)

#### Parameters

caseId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")