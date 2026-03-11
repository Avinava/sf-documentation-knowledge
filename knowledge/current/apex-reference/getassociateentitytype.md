---
title: "getAssociateEntityType()"
domain: apex-reference
topic: getassociateentitytype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.710Z
keywords: [getAssociateEntityType, Returns, additional, metadata, associated, object, specified, parent, only, it's, specific, type., Used, combination, getAssociateParentEntity, method, get, object., example, invoking]
---

# getAssociateEntityType()

> Returns additional metadata for an associated object of a specified
      parent but only if it's a specific associated object type. Used in combination with the
        getAssociateParentEntity() method to get the parent
      object. For example, invoking the method on AccountHistory returns the parent object as
        Account and the type of associated object as History.

### getAssociateEntityType()

Returns additional metadata for an associated object of a specified parent but only if it's a specific associated object type. Used in combination with the getAssociateParentEntity() method to get the parent object. For example, invoking the method on AccountHistory returns the parent object as Account and the type of associated object as History.

#### Signature

public String associateentitytype {get; set;}

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### See Also

-   [DescribeSObjectResult Properties](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Scheme_DescribeSObjectResult_properties)