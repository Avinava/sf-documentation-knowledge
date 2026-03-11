---
title: "setComments(comments)"
domain: apex-reference
topic: setcommentscomments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.014Z
keywords: [setComments, comments, Sets, notes, added, user, card, payment., Signature, Parameters, Return, Value]
---

# setComments(comments)

> Sets the notes added by a user for card payment.

### setComments(comments)

Sets the notes added by a user for card payment.

#### Signature

public void setComments(String comments)

#### Parameters

comments

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Details about a record added by a user, maximum is 1000 characters.

#### Return Value

Type: void