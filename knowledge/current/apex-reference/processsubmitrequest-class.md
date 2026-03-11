---
title: "ProcessSubmitRequest Class"
domain: apex-reference
topic: processsubmitrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.987Z
keywords: [ProcessSubmitRequest, Class, Sets, user, submitter, requesting, approval, record., must, allowed, submitters, process, definition, setup., don’t, set, uses, current, submitter., setSubmitterId]
---

# ProcessSubmitRequest Class

> Sets the user ID of the submitter requesting the approval record. The
      user must be one of the allowed submitters in the process definition setup. If you don’t set a
      submitter ID, the process uses the current user as the submitter.

### setSubmitterId(userID)

Sets the user ID of the submitter requesting the approval record. The user must be one of the allowed submitters in the process definition setup. If you don’t set a submitter ID, the process uses the current user as the submitter.

#### Signature

public Void setSubmitterId(String userID)

#### Parameters

userID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user ID on behalf of which the record is submitted. If set to null, the current user is the submitter. If the submitter is not set with this method, the default submitter is null (the current user).

#### Return Value

Type: Void