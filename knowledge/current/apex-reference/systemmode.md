---
title: "SYSTEM_MODE"
domain: apex-reference
topic: systemmode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:34.304Z
keywords: [SYSTEM_MODE, Execution, mode, which, object, field-level, permissions, current, user, ignored, record, sharing, rules, controlled, class, keywords., SYSTEM, _MODE, Signature, Property]
---

# SYSTEM_MODE

> Execution mode in which the the object and field-level permissions
      of the current user are ignored, and the record sharing rules are controlled by the class sharing keywords.

### SYSTEM\_MODE

Execution mode in which the the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm).

#### Signature

public System.AccessLevel SYSTEM\_MODE {get;}

#### Property Value

Type: System.AccessLevel