---
title: "Required Fields"
domain: object-reference
topic: required-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.230Z
estimatedTokens: 250
keywords: [non-null, rule, affects, calls]
---

# Required Fields

> Required fields must have a non-null value. This rule
   affects the create and update calls:

# Required Fields

Required fields must have a non-null value. This rule affects the create and update calls:

-   In a create call, the system automatically populates the data for certain required fields (such as system fields and the object ID fields). Similarly, if a required field has a default value (its defaultedOnCreate attribute is set to true, then the system implicitly assigns a value for this field when the object is created, even if a value for this field is not explicitly passed in on the create call. For all other required fields, such as ID fields that are analogous to foreign keys in SQL, a client application must explicitly assign a value when the object is created (it cannot be null).
-   In updates, a required field cannot be set to null, and many required fields can’t be changed.

Any field not specified as required in the object description is optional, that is, it can be null when updated or created.

Some required fields for some objects require special handling.
