---
title: "Comparable Interface"
domain: apex-reference
topic: comparable-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.157Z
estimatedTokens: 655
namespace: System
keywords: [Comparable, Adds, sorting, support, Lists, contain, non-primitive, types, user-defined, types., implementation, must, explicitly, handle, null, inputs, compareTo, avoid, pointer, exception.]
---

# Comparable Interface

> Adds sorting support for Lists that contain non-primitive
            types, that is, Lists of user-defined types. Your implementation must explicitly handle
            null inputs in the compareTo() method to avoid a
            null pointer exception.

**Namespace:** `System`

# Comparable Interface

Adds sorting support for Lists that contain non-primitive types, that is, Lists of user-defined types. Your implementation must explicitly handle null inputs in the compareTo() method to avoid a null pointer exception.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

To add List sorting support for your Apex class, you must implement the Comparable interface with its compareTo method in your class.

To implement the Comparable interface, you must first declare a class with the implements keyword as follows:

```

```

Next, your class must provide an implementation for the following method:

```

```

The implemented method must be declared as global or public.

-   **[Comparable Methods](atlas.en-us.apexref.meta/apexref/apex_comparable.htm#apex_System_Comparable_methods)**

-   **[Comparable Example Implementation](atlas.en-us.apexref.meta/apexref/apex_comparable.htm#apex_comparable_example)**


#### See Also

-   [List Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")


## Comparable Methods

The following are methods for Comparable.

-   **[compareTo(objectToCompareTo)](atlas.en-us.apexref.meta/apexref/apex_comparable.htm#apex_System_Comparable_compareTo)**
    Returns an Integer value that is the result of the comparison.

### compareTo(objectToCompareTo)

Returns an Integer value that is the result of the comparison.

#### Signature

public Integer compareTo(Object objectToCompareTo)

#### Parameters

objectToCompareTo

Type: Object

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The implementation of this method returns the following values:

-   0 if this instance and objectToCompareTo are equal
-   \> 0 if this instance is greater than objectToCompareTo
-   < 0 if this instance is less than objectToCompareTo

If this object instance and objectToCompareTo are incompatible, a System.TypeException is thrown.

## Comparable Example Implementation

This example implements the Comparable interface. The compareTo method in this example compares the employee of this class instance with the employee passed in the argument. The method returns an Integer value based on the comparison of the employee IDs.

```

```

This example tests the sort order of a list of Employee objects.

```

```

## Code Examples

```apex
public class Employee implements Comparable {
```

```apex
public Integer compareTo(Object compareTo) {
    // Your code here
}
```

```apex
public class Employee implements Comparable {

    public Long id;
    public String name;
    public String phone;
    
    // Constructor
    public Employee(Long i, String n, String p) {
        id = i;
        name = n;
        phone = p;
    }
    
    // Implement the compareTo() method
    public Integer compareTo(Object compareTo) {
        Employee compareToEmp = (Employee)compareTo;
        if (id == compareToEmp.id) return 0;
        if (id > compareToEmp.id) return 1;
        return -1;        
    }
}
```

```apex
@isTest
private class EmployeeSortingTest {
    @isTest
    static void test1() {
        List<Employee> empList = new List<Employee>();
        empList.add(new Employee(101,'Joe Smith', '4155551212'));
        empList.add(new Employee(101,'J. Smith', '4155551212'));
        empList.add(new Employee(25,'Caragh Smith', '4155551000'));
        empList.add(new Employee(105,'Mario Ruiz', '4155551099'));
        
        // Sort using the custom compareTo() method
        empList.sort();
        
        // Write list contents to the debug log
        System.debug(empList);
        
        // Verify list sort order.
        Assert.areEqual('Caragh Smith', empList[0].Name);
        Assert.areEqual('Joe Smith', empList[1].Name); 
        Assert.areEqual('J. Smith', empList[2].Name);
        Assert.areEqual('Mario Ruiz', empList[3].Name);
    }
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Comparable Methods (atlas.en-us.apexref.meta/apexref/apex_comparable.htm)
- Comparable Example Implementation (atlas.en-us.apexref.meta/apexref/apex_comparable.htm)
- List Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- compareTo(objectToCompareTo) (atlas.en-us.apexref.meta/apexref/apex_comparable.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
