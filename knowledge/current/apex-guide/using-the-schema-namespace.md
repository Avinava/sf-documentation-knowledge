---
title: "Using the Schema Namespace"
domain: apex-guide
topic: using-the-schema-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.744Z
estimatedTokens: 328
namespace: Schema
keywords: [Schema, classes, working, metadata, implicitly, import, Schema.*, fully, qualify, uses, elements, they, naming, conflicts, items]
---

# Using the Schema Namespace

> The Schema namespace provides classes and
      methods for working with schema metadata information. We implicitly import Schema.*, but you must fully qualify your uses of Schema namespace elements when they have naming conflicts
      with items in your unmanaged code. If your org contains an Apex class that has the same name
      as an sObject, add the Schema namespace prefix to the
      sObject name in your code.

**Namespace:** `Schema`

# Using the Schema Namespace

The Schema namespace provides classes and methods for working with schema metadata information. We implicitly import Schema.\*, but you must fully qualify your uses of Schema namespace elements when they have naming conflicts with items in your unmanaged code. If your org contains an Apex class that has the same name as an sObject, add the Schema namespace prefix to the sObject name in your code.

You can omit the namespace when creating an instance of a schema class or when calling a schema method. For example, because the DescribeSObjectResult and FieldSet classes are in the Schema namespace, these code segments are equivalent.

```

```

And:

```

```

## Using the Schema Namespace for Disambiguation

Use Schema.object\_name to refer to an sObject that has the same name as a custom class. This disambiguation instructs the Apex runtime to use the sObject.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespaces_and_invoking_methods.htm "Using the System Namespace")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_precedence.htm "Namespace, Class, and Variable Name Precedence")

#### See Also

-   [Using the System Namespace](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespaces_and_invoking_methods.htm)

## Code Examples

```apex
Schema.DescribeSObjectResult d = Account.sObjectType.getDescribe();
Map<String, Schema.FieldSet> FSMap = d.fieldSets.getMap();
```

```apex
DescribeSObjectResult d = Account.sObjectType.getDescribe();
Map<String, FieldSet> FSMap = d.fieldSets.getMap();
```

```apex
public class Account {
   public Integer myInteger;
}

// ...

// Create a standard Account object myAccountSObject
Schema.Account myAccountSObject = new Schema.Account();
// Create accountClassInstance, a custom class in your org
Account accountClassInstance = new Account();
myAccountSObject.Name = 'Snazzy Account';
accountClassInstance.myInteger = 1;
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_namespaces_and_invoking_methods.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_precedence.htm)
- Using the System Namespace (atlas.en-us.apexcode.meta/apexcode/apex_classes_namespaces_and_invoking_methods.htm)
