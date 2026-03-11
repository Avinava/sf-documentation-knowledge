---
title: "getAssociateParentEntity()"
domain: apex-reference
topic: getassociateparententity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.710Z
keywords: [getAssociateParentEntity, Returns, additional, metadata, associated, object, only, it's, specific, parent, object., Used, combination, getAssociateEntityType, method, get, type, example, invoking, AccountHistory]
---

# getAssociateParentEntity()

> Returns additional metadata for an associated object but only if
      it's associated to a specific parent object. Used in combination with the getAssociateEntityType() method to get the type of associated
      object. For example, invoking the method on AccountHistory returns the parent object as
        Account and the type of associated object as History.

### getAssociateParentEntity()

Returns additional metadata for an associated object but only if it's associated to a specific parent object. Used in combination with the getAssociateEntityType() method to get the type of associated object. For example, invoking the method on AccountHistory returns the parent object as Account and the type of associated object as History.

#### Signature

public String getAssociateParentEntity()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### See Also

-   [DescribeSObjectResult Properties](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_Scheme_DescribeSObjectResult_properties)