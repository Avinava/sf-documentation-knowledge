---
title: "Static and Instance Methods, Variables, and Initialization
        Code"
domain: apex-guide
topic: static-and-instance-methods-variables-and-initialization-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.755Z
estimatedTokens: 1919
keywords: [Instance, Variables, Initialization, Code, Apex, However, classes, can't, member, modifiers, local, Characteristics, Versioned, Behavior, Changes]
---

# Static and Instance Methods, Variables, and Initialization
        Code

> In Apex, you can have static methods, variables, and initialization
        code. However, Apex classes can't be static. You can also have instance
        methods, member variables, and initialization code, which have no modifiers, and
            local variables.

# Static and Instance Methods, Variables, and Initialization Code

In Apex, you can have static methods, variables, and initialization code. However, Apex classes can't be static. You can also have instance methods, member variables, and initialization code, which have no modifiers, and local variables.

## Characteristics

Static methods, variables, and initialization code have these characteristics.

-   They’re associated with a class.
-   They’re allowed only in outer classes.
-   They’re initialized only when a class is loaded.
-   They aren’t transmitted as part of the view state for a Visualforce page.

Instance methods, member variables, and initialization code have these characteristics.

-   They’re associated with a particular object.
-   They have no definition modifier.
-   They’re created with every object instantiated from the class in which they’re declared.

Local variables have these characteristics.

-   They’re associated with the block of code in which they’re declared.
-   They must be initialized before they’re used.

The following example shows a local variable whose scope is the duration of the if code block.

```

```

## Using Static Methods and Variables

You can use static methods and variables only with outer classes. Inner classes have no static methods or variables. A static method or variable doesn’t require an instance of the class in order to run.

Before an object of a class is created, all static member variables in a class are initialized, and all static initialization code blocks are executed. These items are handled in the order in which they appear in the class.

A static method is used as a utility method, and it never depends on the value of an instance member variable. Because a static method is only associated with a class, it can’t access the instance member variable values of its class.

A static variable is static only within the scope of the Apex transaction. It’s not static across the server or the entire organization. The value of a static variable persists within the context of a single transaction and is reset across transaction boundaries. For example, if an Apex DML request causes a trigger to fire multiple times, the static variables persist across these trigger invocations.

To store information that is shared across instances of a class, use a static variable. All instances of the same class share a single copy of the static variable. For example, all triggers that a single transaction spawns can communicate with each other by viewing and updating static variables in a related class. A recursive trigger can use the value of a class variable to determine when to exit the recursion.

Suppose that you had the following class.

```

```

A trigger that uses this class could then selectively fail the first run of the trigger.

```

```

A static variable defined in a trigger doesn't retain its value between different trigger contexts within the same transaction, such as between before insert and after insert invocations. Instead, define the static variables in a class so that the trigger can access these class member variables and check their static values.

A class static variable can’t be accessed through an instance of that class. If class MyClass has a static variable myStaticVariable, and myClassInstance is an instance of MyClass, myClassInstance.myStaticVariable isn’t a legal expression.

The same is true for instance methods. If myStaticMethod() is a static method, myClassInstance.myStaticMethod() isn’t legal. Instead, refer to those static identifiers using the class: MyClass.myStaticVariable and MyClass.myStaticMethod().

Local variable names are evaluated before class names. If a local variable has the same name as a class, the local variable hides methods and variables on the class of the same name. For example, this method works if you comment out the String line. But if the String line is included the method doesn’t compile, because Salesforce reports that the method doesn’t exist or has an incorrect signature.

```

```

An inner class behaves like a static Java inner class, but doesn’t require the static keyword. An inner class can have instance member variables like an outer class, but there’s no implicit pointer to an instance of the outer class (using the this keyword).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

In API version 20.0 and earlier, if a Bulk API request causes a trigger to fire, each chunk of 200 records for the trigger to process is split into chunks of 100 records. In Salesforce API version 21.0 and later, no further splits of API chunks occur. If a Bulk API request causes a trigger to fire multiple times for chunks of 200 records, governor limits are reset between these trigger invocations for the same HTTP request. Static variables aren’t reset within the multiple trigger invocations for the same Bulk API request.

## Using Instance Methods and Variables

Instance methods and member variables are used by an instance of a class, that is, by an object. An instance member variable is declared inside a class, but not within a method. Instance methods usually use instance member variables to affect the behavior of the method.

Suppose that you want to have a class that collects two-dimensional points and plots them on a graph. The following skeleton class uses member variables to hold the list of points and an inner class to manage the two-dimensional list of points.

```

```

## Using Initialization Code

Instance initialization code is a block of code in the following form that is defined in a class.

```

```

The instance initialization code in a class is executed each time an object is instantiated from that class. These code blocks run before the constructor.

If you don’t want to write your own constructor for a class, you can use an instance initialization code block to initialize instance variables. In simple situations, use an ordinary initializer. Reserve initialization code for complex situations, such as initializing a static map. A static initialization block runs only one time, regardless of how many times you access the class that contains it.

Static initialization code is a block of code preceded with the keyword static.

```

```

Similar to other static code, a static initialization code block is only initialized one time on the first use of the class.

A class can have any number of either static or instance initialization code blocks. They can appear anywhere in the code body. The code blocks are executed in the order in which they appear in the file, just as they are in Java.

You can use static initialization code to initialize static final variables and to declare information that’s static, such as a map of values. For example:

```

```

## Versioned Behavior Changes

In API version 50.0 and later, scope and accessibility rules are enforced on Apex variables, methods, inner classes, and interfaces that are annotated with @namespaceAccessible. For accessibility considerations, see [NamespaceAccessible Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm). For more information on namespace-based visibility, see [Namespace-Based Visibility for Apex Classes in Second-Generation Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm "HTML (New Window)").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm "Access Modifiers")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_properties.htm "Apex Properties")

## Code Examples

```
Boolean myCondition = true;
if (myCondition) {
    integer localVariable = 10;
}
```

```apex
public class P { 
   public static boolean firstRun = true; 
}
```

```
trigger T1 on Account (before delete, after delete, after undelete) { 
       if(Trigger.isBefore){
          if(Trigger.isDelete){
             if(p.firstRun){
                 Trigger.old[0].addError('Before Account Delete Error');
                  p.firstRun=false;
              } 
           }
        }
}
```

```apex
public static void method() {
String Database = '';
Database.insert(new Account());
}
```

```apex
public class Plotter {

    // This inner class manages the points
    class Point {
        Double x;
        Double y;

        Point(Double x, Double y) {
             this.x = x;
             this.y = y;
        }
        Double getXCoordinate() {
             return x;
        }

        Double getYCoordinate() {
             return y;
        }
    }

    List<Point> points = new List<Point>();

    public void plot(Double x, Double y) {
        points.add(new Point(x, y));
    }
    
    // The following method takes the list of points and does something with them
    public void render() {
    }
}
```

## Related Topics

- NamespaceAccessible
                    Annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_properties.htm)
