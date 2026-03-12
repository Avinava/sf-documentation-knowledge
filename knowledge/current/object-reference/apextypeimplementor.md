---
title: "ApexTypeImplementor"
domain: object-reference
topic: apextypeimplementor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.604Z
estimatedTokens: 1163
namespace: RoundingStrategy
keywords: [ApexTypeImplementor, Apex, classes, directly, indirectly, implement, SOQL, query, installed, managed, packages, API, version, 54.0, later]
---

# ApexTypeImplementor

> Represents Apex classes that directly or indirectly implement an interface.
         Using a SOQL query, this object gets information about public or global classes and only
         global classes for installed managed packages. This object is available in API version
      54.0 and later.

**Namespace:** `RoundingStrategy`

# ApexTypeImplementor

Represents Apex classes that directly or indirectly implement an interface. Using a SOQL query, this object gets information about public or global classes and only global classes for installed managed packages. This object is available in API version 54.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| ApexClassId | TypereferencePropertiesFilter, Group, SortDescriptionThe foreign key to the outer class that contains the Apex class implementing the interface.This is a relationship field.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| ClassName | TypestringPropertiesFilter, Group, SortDescriptionApex class name that implements the interface. For an inner class that implements the interface, the outer class and inner name separated by a period. |
| ClassNamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix of the class that implements the interface. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique identifier for the interface and implementor. |
| InterfaceApexClassId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe foreign key to the outer class that contains the Apex class defining the interface. Null for built-in system interfaces, such as System.Batchable.This is a relationship field.Relationship NameInterfaceApexClassRelationship TypeLookupRefers ToApexClass |
| InterfaceName | TypestringPropertiesFilter, Group, SortDescriptionThe interface name for which Apex class implementation is retrieved. For an inner interface, the outer Apex class name and the inner interface name separated by a period. |
| InterfaceNamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix of the class that defines the interface. |
| IsConcrete | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the implementing class is abstract (false) or not (true). |

## Usage

ApexTypeImplementor considers access modifiers based on the context, such as the namespace from which the ApexTypeImplementor entity is queried. These are additional usage considerations.

-   In installed managed packages, you get information about all global implementors in the org, and public implementors from the managed package itself.
-   ApexTypeImplementor appropriately filters classes that are annotated with @Deprecated. For example it respects the package version dependency settings of a class when queried from that class.
-   ApexTypeImplementor returns implementors where ApexClass.IsValid is set to False (invalid classes) in addition to when it’s set to True. Classes that don’t compile or execute can be returned. An implementor class is only guaranteed to be usable if ApexClass.IsValid is set to True for the implementor.
-   If a package is installed but not yet compiled because Compile on Deploy is disabled, ApexTypeImplementor returns no values until compilation is complete. In environments like sandboxes where Compile on Deploy can be disabled, you must perform a manual compilation to get complete results.

-   To avoid cross-namespace collisions, always specify an InterfaceNamespacePrefix as a WHERE clause in SOQL queries for ApexTypeImplementor. Otherwise, the query includes all namespaces instead of only the current namespace. If a package contains an interface with the same name as an interface in a different namespace, a query without a specified InterfaceNamespacePrefix can return false implementors that can’t be assigned to the interface.

    For example, say a managed package contains a global interface named RoundingStrategy and a global class named HalfDown that implements RoundingStrategy. If a subscriber org has an interface that’s also named RoundingStrategy, then the query \[SELECT ApexClass.Id FROM ApexTypeImplementor WHERE InterfaceName = 'RoundingStrategy'\], if performed in the subscriber org, can return the ID of HalfDown instead of an implementor in the subscriber org. To avoid this issue, perform a query that specifies a InterfaceNamespacePrefix: \[SELECT ApexClass.Id FROM ApexTypeImplementor WHERE InterfaceName = 'RoundingStrategy' AND InterfaceNamespacePrefix = 'PackageNamespace'\].


## Example

This example demonstrates how an interface allows flexibility in a configuration, record, or user-driven selection of the rounding strategy to apply. The multiple implementations of the interface can be discovered using ApexTypeImplementor and the specific implementation chosen based on user requirements.

```

```

## Code Examples

```apex
// Common interface that all rounding strategies will implement
public interface RoundingStrategy {
    Decimal round(Decimal toRound);
}

public abstract class RoundingStrategies {
    public class Ceiling implements RoundingStrategy {
        public Decimal round(Decimal toRound) {
            return toRound.round(System.RoundingMode.CEILING);
        }
    }
    
    public class HalfDown implements RoundingStrategy {
        public Decimal round(Decimal toRound) {
            return toRound.round(System.RoundingMode.HALF_DOWN);
        }
    }
    
    public class TwoDecimalPlaces implements RoundingStrategy {
        public Decimal round(Decimal toRound) {
            return toRound.setScale(2, System.RoundingMode.HALF_UP);
        }
    }
}

List<ApexTypeImplementor> interfaceImpls = [
            SELECT ClassName, ClassNamespacePrefix
            FROM ApexTypeImplementor 
            WHERE InterfaceName = 'RoundingStrategy' and IsConcrete = true and InterfaceNamespacePrefix = ''
            ORDER BY ClassName ASC NULLS LAST];
        
// For example, an admin can be presented with a list of Apex classes 
// that can be applied. Simulated selection of 2 decimal places
ApexTypeImplementor selectedRoundingStrategy = interfaceImpls[2];
System.assertEquals('RoundingStrategies.TwoDecimalPlaces',
    selectedRoundingStrategy.ClassName);
        
// Create an instance of the class that implements the interface
RoundingStrategy rs = (RoundingStrategy)   Type.forName(selectedRoundingStrategy.ClassNamespacePrefix,
    selectedRoundingStrategy.ClassName).newInstance();
        
Decimal rounded = rs.round(7.1459);
System.assertEquals(7.15, rounded);
```
