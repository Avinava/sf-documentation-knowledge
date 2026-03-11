---
title: "DMLOptions.DuplicateRuleHeader Class"
domain: apex-reference
topic: dmloptionsduplicateruleheader-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.686Z
keywords: [DMLOptions.DuplicateRuleHeader, Class, sure, sharing, rules, current, user, enforced, duplicate, run, setting, property, true., specified, class, request, false., Apex, code, runs]
---

# DMLOptions.DuplicateRuleHeader Class

> Make sure that sharing rules for the current user are enforced when
      duplicate rules run by setting this property to true.
      Use the sharing rules specified in the class for the request by setting this property to
        false. If no sharing rules are specified, Apex code
      runs in system context and sharing rules for the current user are not
    enforced.

### runAsCurrentUser

Make sure that sharing rules for the current user are enforced when duplicate rules run by setting this property to true. Use the sharing rules specified in the class for the request by setting this property to false. If no sharing rules are specified, Apex code runs in system context and sharing rules for the current user are not enforced.

#### Signature

public Boolean runAsCurrentUser {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If specified as true, duplicate rules run for the current user, which ensures users can’t view duplicate records that aren’t available to them.

Use runAsCurrentUser = true to detect duplicates when converting leads to contacts. Typically, lead conversion Apex code runs in a system context and does not enforce sharing rules for the current user.

#### Example

This example shows how to set options so that duplicate rules run for the current user when saving a new account.

```

```