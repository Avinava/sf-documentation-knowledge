---
title: "Create Custom Exceptions"
domain: apex-guide
topic: create-custom-exceptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.349Z
estimatedTokens: 1262
keywords: [Create, Custom, Exceptions, exceptions, enable, specify, detailed, error, messages, custom, handling, catch, blocks., Rethrowing, Inner, Exception, Example]
---

# Create Custom Exceptions

> Custom exceptions enable you to specify detailed error messages and have more custom
            error handling in your catch blocks.

# Create Custom Exceptions

Custom exceptions enable you to specify detailed error messages and have more custom error handling in your catch blocks.

Exceptions can be top-level classes, that is, they can have member variables, methods and constructors, they can implement interfaces, and so on.

To create your custom exception class, extend the built-in Exception class and make sure your class name ends with the word Exception, such as “MyException” or “PurchaseException”. All exception classes extend the system-defined base class Exception, and therefore, inherits all common Exception methods.

This example defines a custom exception called MyException.

```

```

Like Java classes, user-defined exception types can form an inheritance tree, and catch blocks can catch any object in this inheritance tree. For example:

```

```

Here are some ways you can create your exceptions objects, which you can then throw.

You can construct exceptions:

-   With no arguments:

    ```

    ```

-   With a single String argument that specifies the error message:

    ```

    ```

-   With a single Exception argument that specifies the cause and that displays in any stack trace:

    ```

    ```

-   With both a String error message and a chained exception cause that displays in any stack trace:

    ```

    ```


## Rethrowing Exceptions and Inner Exceptions

After catching an exception in a catch block, you have the option to rethrow the caught exception variable. This is useful if your method is called by another method and you want to delegate the handling of the exception to the caller method. You can rethrow the caught exception as an inner exception in your custom exception and have the main method catch your custom exception type.

The following example shows how to rethrow an exception as an inner exception. The example defines two custom exceptions, My1Exception and My2Exception, and generates a stack trace with information about both.

```

```

This is how the stack trace looks like resulting from running the code above:

15:52:21:073 EXCEPTION\_THROWN \[7\]|My1Exception: First exception

15:52:21:077 EXCEPTION\_THROWN \[11\]|My2Exception: Throw with inner exception

15:52:21:000 FATAL\_ERROR AnonymousBlock: line 11, column 1

15:52:21:000 FATAL\_ERROR Caused by

15:52:21:000 FATAL\_ERROR AnonymousBlock: line 7, column 1

The example in the next section shows how to handle an exception with an inner exception by calling the getCause method.

## Inner Exception Example

Now that you’ve seen how to create a custom exception class and how to construct your exception objects, let’s create and run an example that demonstrates the usefulness of custom exceptions.

1.  In the Developer Console, create a class named MerchandiseException and confirm that it has this content.

    ```

    ```

    You’ll use this exception class in the second class that you create. The curly braces at the end enclose the body of your exception class, which we left empty because we get some free code—our class inherits all the constructors and common exception methods, such as getMessage, from the built-in Exception class.

2.  Next, create a second class named MerchandiseUtility.

    ```

    ```

    This class contains the mainProcessing method, which calls insertMerchandise. The latter causes an exception by inserting a Merchandise without required fields. The catch block catches this exception and throws a new exception, the custom MerchandiseException you created earlier. Notice that we called a constructor for the exception that takes two arguments: the error message, and the original exception object. You might wonder why we are passing the original exception? Because it is useful information—when the MerchandiseException gets caught in the first method, mainProcessing, the original exception (referred to as an inner exception) is really the cause of this exception because it occurred before the MerchandiseException.

3.  Now let’s see all this in action to understand better. Execute the following:

    ```

    ```

4.  Check the debug log output. You should see something similar to the following:

    18:12:34:928 USER\_DEBUG \[6\]|DEBUG|Message: Merchandise item could not be inserted.

    18:12:34:929 USER\_DEBUG \[7\]|DEBUG|Cause: System.DmlException: Insert failed. First exception on row 0; first error: REQUIRED\_FIELD\_MISSING, Required fields are missing: \[Description, Price, Total Inventory\]: \[Description, Price, Total Inventory\]

    18:12:34:929 USER\_DEBUG \[8\]|DEBUG|Line number: 22

    18:12:34:930 USER\_DEBUG \[9\]|DEBUG|Stack trace: Class.EmployeeUtilityClass.insertMerchandise: line 22, column 1

    A few items of interest:

    -   The cause of MerchandiseException is the DmlException. You can see the DmlException message also that states that required fields were missing.
    -   The stack trace is line 22, which is the second time an exception was thrown. It corresponds to the throw statement of MerchandiseException.

        ```

        ```

## Code Examples

```apex
public class MyException extends Exception {}
```

```apex
public class ExceptionExample {
    public virtual class BaseException extends Exception {}
    public class OtherException extends BaseException {}

    public static void testExtendedException() {
        try {
            Integer i=0;
            // Your code here
            if (i < 5) throw new OtherException('This is bad');
        } catch (BaseException e) {  
            // This catches the OtherException
            System.debug(e.getMessage());
        }  
    }
}
```

```
new MyException();
```

```
new MyException('This is bad');
```

```
new MyException(e);
```
