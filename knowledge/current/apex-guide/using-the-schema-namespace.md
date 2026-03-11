---
title: "Using the Schema Namespace"
domain: apex-guide
topic: using-the-schema-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.656Z
keywords: [Schema, Namespace, Disambiguation, See]
---

# Using the Schema Namespace

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