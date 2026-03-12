---
title: "Object Functions"
domain: ajax
topic: object-functions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.635Z
estimatedTokens: 227
keywords: [Functions, accessed, directly, generic, Examples]
---

# Object Functions

> Property values can be accessed directly or by using a generic set or get
  method.

# Object Functions

Property values can be accessed directly or by using a generic set or get method.

-   A get function for each field in the object. For example, an Account object has a get("Name") function. This can be used instead of object.Field (for example, account.Name).
-   A set function for each field in the object. For example, an Account object has a set("Name) function. This can be used instead of object.Field = value.

## Examples

For example, you can get the value of the Name field from an Account using either of these methods:

-   account.get("Name")
-   account.Name
-   account\["Name"\]

You can set the value of the Name field from an Account using either of these methods:

-   account.set("Name", "MyAccount");
-   account.Name = "MyAccount";
-   account\["Name"\]="MyAccount";

#### See Also

-   [Processing Results](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_results.htm)

## Related Topics

- Processing Results (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_results.htm)
