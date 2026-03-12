---
title: "Class Methods"
domain: apex-guide
topic: class-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.544Z
estimatedTokens: 1887
keywords: [how, define, Apex, methods., Understand, differences, between, passing, arguments, reference., Note, Passing, Arguments, Versioned, Behavior, Changes]
---

# Class Methods

> Learn how to define Apex methods. Understand the differences between passing method
        arguments by value and passing method arguments by reference.

# Class Methods

Learn how to define Apex methods. Understand the differences between passing method arguments by value and passing method arguments by reference.

Apex methods are comprised of these elements.

-   Optional: Modifiers, such as public or protected.
-   Required: The data type of the value returned by the method, such as String or Integer. Use void if the method doesn’t return a value.
-   Required: A list of input parameters for the method, separated by commas, each preceded by its data type, and enclosed in parentheses (). If there are no parameters, use a set of empty parentheses. A method can only have 32 input parameters.
-   Required: The body of the method, enclosed in braces {}. All the code for the method, including any local variable declarations, is contained here.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

All Apex types implement the Object class methods.

To define a method, use this syntax.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You can use override to override methods only in classes that have been defined as virtual or abstract.

This method has the correct syntax.:

```

```

As in Java, methods that return values can also be run as a statement if their results aren’t assigned to another variable.

User-defined methods:

-   Can be used anywhere that system methods are used.
-   Can be recursive.
-   Can have side effects, such as DML insert statements that initialize sObject record IDs. See [Apex DML Statements](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_dml_section.htm#apex_dml).
-   Can refer to themselves or to methods defined later in the same class or anonymous block. Apex parses methods in two phases, so forward declarations aren’t needed.
-   Can be overloaded. For example, a method named example can be implemented in two ways, one with a single Integer parameter and one with two Integer parameters. Depending on whether the method is called with one or two Integers, the Apex parser selects the appropriate implementation to execute. If the parser can’t find an exact match, it then seeks an approximate match using type coercion rules. For more information on data conversion, see [Rules of Conversion](atlas.en-us.apexcode.meta/apexcode/langCon_apex_rules_of_conversion.htm "In general, Apex requires you to explicitly convert one data type to another. For example, a variable of the Integer data type cannot be implicitly converted to a String. You must use the string.format method. However, a few data types can be implicitly converted, without using a method.").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    If the parser finds multiple approximate matches, a parse-time exception is generated.

-   Methods with a void return type are typically invoked as a standalone statement in Apex code. For example:

    ```

    ```

-   Can have statements where the return values are run as a statement if their results aren’t assigned to another variable. This rule is the same in Java.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

All user-defined types support the clone method. The clone() method in Apex is based on the [clone method in Java](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--).

## Passing Method Arguments by Value

In Apex, primitive data type arguments, such as Integer or String, are passed into methods by value. This fact means that any changes to the arguments exist only within the scope of the method. When the method returns, the changes to the arguments are lost.

Non-primitive data type arguments, such as sObjects, are passed into methods by reference. Therefore, when the method returns, the passed-in argument still references the same object as before the method call. Within the method, the reference can't be changed to point to another object but the values of the object's fields can be changed.

These examples demonstrate the differences between passing primitive and non-primitive data type arguments into methods.

**Example: Passing Primitive Data Type Arguments**

This example shows how a primitive argument of type String is passed by value into another method. The debugStatusMessage method in this example creates a String variable, msg, and assigns it a value. It then passes this variable as an argument to another method, which modifies the value of this String. However, because String is a primitive type, it’s passed by value, and when the method returns, the value of the original variable, msg, is unchanged. An assert statement verifies that the value of msg is still the old value.

```

```

**Example: Passing Non-Primitive Data Type Arguments**

This example shows how a List argument is passed by reference into the reference() method and is modified. It then shows, in the referenceNew() method, that the List argument can't be changed to point to another List object.

First, the createTemperatureHistory method creates a variable, fillMe, that is a List of Integers and passes it to a method. The called method fills this list with Integer values representing rounded temperature values. When the method returns, an assert statement verifies that the contents of the original List variable has changed and now contains five values. Next, the example creates a second List variable, createMe, and passes it to another method. The called method assigns the passed-in argument to a newly created List that contains new Integer values. When the method returns, the original createMe variable doesn't point to the new List but still points to the original List, which is empty. An assert statement verifies that createMe contains no values.

```

```

## Versioned Behavior Changes

In API version 65.0 and later, an abstract or override method requires a protected, public, or global access modifier. If one of these access modifiers isn’t explicitly included in the method declaration, then method access defaults to private. Private access is invalid for these method types because the implementing class can’t access the abstract method. Therefore, if you attempt to declare an abstract or override method without an allowed access modifier, you get the compilation error Abstract methods require at least one of the following: global, public, protected.

In API version 50.0 and later, scope and accessibility rules are enforced on Apex variables, methods, inner classes, and interfaces that are annotated with @namespaceAccessible. For accessibility considerations, see [NamespaceAccessible Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm). For more information on namespace-based visibility, see [Namespace-Based Visibility for Apex Classes in Second-Generation Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm "HTML (New Window)").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_declaring_variables.htm "Class Variables")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_constructors.htm "Using Constructors")

#### See Also

-   [Primitive Data Types](atlas.en-us.apexcode.meta/apexcode/langCon_apex_primitives.htm "Apex uses the same primitive data types as SOAP API, except for higher-precision Decimal type in certain cases.")

## Code Examples

```apex
[public | private | protected | global] [override] [static] data_type method_name (input parameters) { 
    // The body of the method
}
```

```apex
public static Integer getInt() { 
    return MY_INT; 
}
```

```apex
System.debug('Here is a note for the log.');
```

```apex
public class PassPrimitiveTypeExample {
    public static void debugStatusMessage() {
        String msg = 'Original value';
        processString(msg);
        // The value of the msg variable didn't
        // change; it is still the old value.
        System.assertEquals(msg, 'Original value');
    }
    
    public static void processString(String s) {
        s = 'Modified value';
    }
}
```

```apex
public class PassNonPrimitiveTypeExample {
    
    public static void createTemperatureHistory() {
        List<Integer> fillMe = new List<Integer>();        
        reference(fillMe);
        // The list is modified and contains five items
        // as expected.
        System.assertEquals(fillMe.size(),5);        
        
        List<Integer> createMe = new List<Integer>();
        referenceNew(createMe);
        // The list is not modified because it still points
        // to the original list, not the new list 
        // that the method created.
        System.assertEquals(createMe.size(),0);     
    }
            
    public static void reference(List<Integer> m) {
        // Add rounded temperatures for the last five days.
        m.add(70);
        m.add(68);
        m.add(75);
        m.add(80);
        m.add(82);
    }    
        
    public static void referenceNew(List<Integer> m) {
        // Assign argument to a new List of
        // five temperature values.
        m = new List<Integer>{55, 59, 62, 60, 63};
    }    
}
```

## Related Topics

- Rules of
                    Conversion (atlas.en-us.apexcode.meta/apexcode/langCon_apex_rules_of_conversion.htm)
- NamespaceAccessible
                    Annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_declaring_variables.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_constructors.htm)
- Primitive Data Types (atlas.en-us.apexcode.meta/apexcode/langCon_apex_primitives.htm)
