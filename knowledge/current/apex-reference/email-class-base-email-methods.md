---
title: "Email Class (Base Email Methods)"
domain: apex-reference
topic: email-class-base-email-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.218Z
keywords: [Email, Class, Base, Methods, Indicates, whether, email, includes, signature, user, configured., default, true, meaning, included, unless, specify, false., setUseSignature, useSignature]
---

# Email Class (Base Email Methods)

> Indicates whether the email includes an email signature
if the user has one configured. The default is true, meaning if the user has a signature
it is included in the email unless you specify false.

### setUseSignature(useSignature)

Indicates whether the email includes an email signature if the user has one configured. The default is true, meaning if the user has a signature it is included in the email unless you specify false.

#### Signature

public Void setUseSignature(Boolean useSignature)

#### Parameters

useSignature

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void