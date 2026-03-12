---
title: "Tooling API Usage"
domain: tooling-api
topic: tooling-api-usage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:45.204Z
estimatedTokens: 924
namespace: ClassA
keywords: [Tooling, API, Usage, SOQL, queries, relationships, metadata, components, org, query, results, include, row, relationship, directional]
---

# Tooling API Usage

> Use SOQL queries to list the relationships between the metadata components in your org.
  The query results include one row for each relationship. Each relationship is a directional
  dependency between two metadata components.

**Namespace:** `ClassA`

# Tooling API Usage

Use SOQL queries to list the relationships between the metadata components in your org. The query results include one row for each relationship. Each relationship is a directional dependency between two metadata components.

This Apex class (YourClass) references a custom field (yourField\_\_c) on the Account object.

```

```

In the output of a MetadataComponentDependency query, the Apex class is represented as a metadata component (the component doing the referencing, represented by MetadataComponent\* field values). The custom field is represented as a referenced metadata component (represented by RefMetadataComponent\* field values). Each row in the output shows a directional dependency from one metadata component (such as YourClass) to one of the metadata components that it references (such as yourField).

Each of the two components is represented using four fields.

Id

The ID of this component.

Name

The name of this component (for example, YourClass).

Namespace

The namespace this component belongs to (or, if the component isn’t in a package, null).

Type

The type of the component (for example, ApexClass).

In the example of the Apex class referencing a custom field, a row in the output would include something like these values.

-   MetadataComponentId: "01p000000000SOMEID"
-   MetadataComponentName: "YourClass"
-   MetadataComponentNamespace: null
-   MetadataComponentType: "ApexClass"

-   RefMetadataComponentId: "00N000000000SOMEID"
-   RefMetadataComponentName: "yourField"
-   RefMetadataComponentNamespace: null
-   RefMetadataComponentType: "CustomField"

All the MetadataComponent\* field values represent the Apex class, and the RefMetadataComponent\* field values represent the custom field that the Apex class references.

Each row is a directional dependency, where the metadata component references the referenced metadata component. If two components reference each other, the circular relationship is described as two separate rows. For example, two Apex classes can reference each other.

```

```

```

```

The output for a MetadataComponentDependency query that includes these two classes, each directional relationship (ClassA -> ClassB, and ClassB -> ClassA) are represented as a separate row.

Row 1 (ClassA -> ClassB):

-   MetadataComponentId: "01p00000000SOMEIDA"
-   MetadataComponentName: "ClassA"
-   MetadataComponentNamespace: null
-   MetadataComponentType: "ApexClass"

-   RefMetadataComponentId: "00N00000000SOMEIDB"
-   RefMetadataComponentName: "ClassB"
-   RefMetadataComponentNamespace: null
-   RefMetadataComponentType: "ApexClass"

Row 2 (ClassB -> ClassA):

-   MetadataComponentId: "01p00000000SOMEIDB"
-   MetadataComponentName: "ClassB"
-   MetadataComponentNamespace: null
-   MetadataComponentType: "ApexClass"

-   RefMetadataComponentId: "00N00000000SOMEIDA"
-   RefMetadataComponentName: "ClassA"
-   RefMetadataComponentNamespace: null
-   RefMetadataComponentType: "ApexClass"

In all but the simplest orgs, MetadataComponentDependency queries return a huge number of rows. It can be useful to limit the scope of your requests by type, name, or ID, to help isolate dependencies on specific components.

This SOQL query shows all references to the Apex class YourClass. For example, it shows pages, components, flows, and other classes that YourClass depends on.

```

```

This example shows all references to a field, including references from layouts, Apex code, flows, and so on. In this example, the code determines the field ID by querying the FieldDefinition object. The query’s output shows all the metadata components that depend on the field with the ID yourFieldId.

```

```

## Code Examples

```apex
public class YourClass {
    public void updateAccount(Account acc, String value) {
        acc.yourField__c = value;
        update(acc);
    }
}
```

```apex
public class ClassA {
    public ClassB newB() {
        return new ClassB();
    }
}
```

```apex
public class ClassB {
    public ClassA newA() {
        return new ClassA();
    }
}
```

```
SELECT MetadataComponentName, MetadataComponentType
    FROM MetadataComponentDependency
    WHERE RefMetadataComponentType = 'ApexClass'
```

```
SELECT MetadataComponentName, MetadataComponentType
    FROM MetadataComponentDependency
    WHERE RefMetadataComponentId = yourFieldId
```
