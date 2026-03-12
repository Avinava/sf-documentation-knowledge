---
title: "Namespace Prefix"
domain: apex-guide
topic: namespace-prefix
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.641Z
estimatedTokens: 831
namespace: Schema
keywords: [Prefix, Salesforce, application, supports, prefixes., prefixes, used, managed, AppExchange, packages, differentiate, custom, field, names, organizations., Important, Tip, Namespaces, Invoking, Package]
---

# Namespace Prefix

> The Salesforce application supports the use of namespace prefixes. Namespace prefixes are used in managed AppExchange packages to
            differentiate custom object and field names from names used by other
        organizations.

**Namespace:** `Schema`

# Namespace Prefix

The Salesforce application supports the use of namespace prefixes. Namespace prefixes are used in managed AppExchange packages to differentiate custom object and field names from names used by other organizations.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

When creating a namespace, use something that’s useful and informative to users. However, don’t name a namespace after a person (for example, by using a person's name, nickname, or private information). Once namespaces are assigned, they cannot be changed.

After a developer registers a globally unique namespace prefix and registers it with AppExchange registry, external references to custom object and field names in the developer's managed packages take on the following long format:

```

```

These fully qualified names can be onerous to update in working SOQL or SOSL statements, and Apex once a class is marked as “managed”. Therefore, Apex supports a default namespace for schema names. When looking at identifiers, the parser assumes that the namespace of the current object is the namespace of all other objects and fields unless otherwise specified. Therefore, a stored class must refer to custom object and field names directly (using obj\_or\_field\_name\_\_c) for those objects that are defined within its same application namespace.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

Only use namespace prefixes when referring to custom objects and fields in managed packages that have been installed to your organization from the AppExchange.

## Using Namespaces When Invoking Package Methods

To invoke a method that is defined in a managed package, Apex allows fully qualified identifiers of the form:

```

```

## Versioned Behavior Changes

In API version 34.0 and later, Schema.DescribeSObjectResult on a custom SObjectType includes map keys prefixed with the namespace, even if the namespace is that of currently executing code. If you work with multiple namespaces and generate runtime describe data, make sure that your code accesses keys correctly using the namespace prefix.

1.  [Using the System Namespace](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespaces_and_invoking_methods.htm)

2.  [Using the Schema Namespace](atlas.en-us.apexcode.meta/apexcode/apex_classes_schema_namespace_using.htm)
    The Schema namespace provides classes and methods for working with schema metadata information. We implicitly import Schema.\*, but you must fully qualify your uses of Schema namespace elements when they have naming conflicts with items in your unmanaged code. If your org contains an Apex class that has the same name as an sObject, add the Schema namespace prefix to the sObject name in your code.
3.  [Namespace, Class, and Variable Name Precedence](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_precedence.htm)

4.  [Type Resolution and System Namespace for Types](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_type_resolution.htm)


-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_creating.htm "Class Definition Creation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_intro.htm "Apex Code Versions")

## Code Examples

```
namespace_prefix__obj_or_field_name__c
```

```
namespace_prefix.class.method(args)
```

## Related Topics

- Using the System Namespace (atlas.en-us.apexcode.meta/apexcode/apex_classes_namespaces_and_invoking_methods.htm)
- Using the Schema Namespace (atlas.en-us.apexcode.meta/apexcode/apex_classes_schema_namespace_using.htm)
- Namespace, Class, and Variable Name Precedence (atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_precedence.htm)
- Type Resolution and System Namespace for Types (atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_type_resolution.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_creating.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_intro.htm)
