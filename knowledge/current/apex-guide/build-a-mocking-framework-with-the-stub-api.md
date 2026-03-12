---
title: "Build a Mocking Framework with the Stub API"
domain: apex-guide
topic: build-a-mocking-framework-with-the-stub-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.074Z
estimatedTokens: 1346
namespace: StubProvider
keywords: [Build, Mocking, Framework, Stub, API, Apex, provides, stub, implementing, mocking, framework., framework, many, benefits., streamline, improve, testing, help, create, faster]
---

# Build a Mocking Framework with the Stub API

> Apex provides a stub API for implementing a mocking framework. A mocking framework
        has many benefits. It can streamline and improve testing and help you create faster, more
        reliable tests. You can use it to test classes in isolation, which is important for unit
        testing. Building your mocking framework with the stub API can also be beneficial because
        stub objects are generated at runtime. Because these objects are generated dynamically, you
        don’t have to package and deploy test classes. You can build your own mocking framework, or
        you can use one built by someone else.

**Namespace:** `StubProvider`

# Build a Mocking Framework with the Stub API

Apex provides a stub API for implementing a mocking framework. A mocking framework has many benefits. It can streamline and improve testing and help you create faster, more reliable tests. You can use it to test classes in isolation, which is important for unit testing. Building your mocking framework with the stub API can also be beneficial because stub objects are generated at runtime. Because these objects are generated dynamically, you don’t have to package and deploy test classes. You can build your own mocking framework, or you can use one built by someone else.

You can define the behavior of stub objects, which are created at runtime as anonymous subclasses of Apex classes. The stub API comprises the System.StubProvider interface and the System.Test.createStub() method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

This feature is intended for advanced Apex developers. Using it requires a thorough understanding of unit testing and mocking frameworks.

Let’s look at an example to illustrate how the stub API works. This example isn’t meant to demonstrate the wide range of possible uses for mocking frameworks. It’s intentionally simple to focus on the mechanics of using the Apex stub API.

Let’s say we want to test the formatting method in the following class.

```

```

Usually, when we invoke this method, we pass in a helper class that has a method that returns today’s date.

```

```

The following code invokes the method.

```

```

For testing, we want to isolate the getFormattedDate() method to make sure that the formatting is working properly. The return value of the getTodaysDate() method normally varies based on the day. However, in this case, we want to return a constant, predictable value to isolate our testing to the formatting. Rather than writing a “fake” version of the class, where the method returns a constant value, we create a stub version of the class. The stub object is created dynamically at runtime, and we can specify the “stubbed” behavior of its method.

To use a stub version of an Apex class:

1.  Define the behavior of the stub class by implementing the System.StubProvider interface.
2.  Instantiate a stub object by using the System.Test.createStub() method.
3.  Invoke the relevant method of the stub object from within a test class.

## Implement the StubProvider Interface

Here’s an implementation of the StubProvider interface.

```

```

StubProvider is a callback interface. It specifies a single method that requires implementing: handleMethodCall(). When a stubbed method is called, handleMethodCall() is called. You define the behavior of the stubbed class in this method. The method has the following parameters.

-   stubbedObject: The stubbed object
-   stubbedMethodName: The name of the invoked method
-   returnType: The return type of the invoked method
-   listOfParamTypes: A list of the parameter types of the invoked method
-   listOfParamNames: A list of the parameter names of the invoked method
-   listOfArgs: The actual argument values passed into this method at runtime

You can use these parameters to determine which method of your class was called, and then you can define the behavior for each method. In this case, we check the return type of the method to identify it and return a hard-coded value.

## Instantiate a Stub Version of the Class

The next step is to instantiate a stub version of the class. The following utility class returns a stub object that you can use as a mock.

```

```

This class contains the method createMock(), which invokes the Test.createStub() method. The createStub() method takes an Apex class type and an instance of the StubProvider interface that we created previously. It returns a stub object that we can use in testing.

## Invoke the Stub Method

Finally, we invoke the relevant method of the stub class from within a test class.

```

```

In this test, we call the createMock() method to create a stub version of the DateHelper class. We can then invoke the getTodaysDate() method on the stub object, which returns our hard-coded date. Using the hard-coded date allows us to test the behavior of the getFormattedDate() method in isolation.

## Apex Stub API Limitations

Keep the following limitations in mind when working with the Apex stub API.

-   The object being mocked must be in the same namespace as the call to the Test.createStub() method. However, the implementation of the StubProvider interface can be in another namespace.
-   You can’t mock the following Apex elements.
    -   Static methods (including future methods)
    -   Private methods
    -   Properties (getters and setters)
    -   Triggers
    -   Inner classes
    -   System types
    -   Classes that implement the Batchable interface
    -   Classes that have only private constructors
-   Iterators can’t be used as return types or parameter types.

#### See Also

-   [StubProvider Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_System_StubProvider.htm "StubProvider Interface - HTML (New Window)")

-   [Test.createStub()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm#apex_System_Test_createStub "Test.createStub() - HTML (New Window)")

## Code Examples

```apex
public class DateFormatter {    
    // Method to test    
    public String getFormattedDate(DateHelper helper) {
        return 'Today\'s date is ' + helper.getTodaysDate();
    }
}
```

```apex
public class DateHelper {   
    // Method to stub    
    public String getTodaysDate() {
        return Date.today().format();
    }
}
```

```
DateFormatter df = new DateFormatter();
DateHelper dh = new DateHelper();
String dateStr = df.getFormattedDate(dh);
```

```apex
@isTest
public class MockProvider implements System.StubProvider {
    
    public Object handleMethodCall(Object stubbedObject, String stubbedMethodName, 
        Type returnType, List<Type> listOfParamTypes, List<String> listOfParamNames, 
        List<Object> listOfArgs) {
        
        // The following debug statements show an example of logging 
        // the invocation of a mocked method.
       
        // You can use the method name and return type to determine which method was called.
        System.debug('Name of stubbed method: ' + stubbedMethodName);
        System.debug('Return type of stubbed method: ' + returnType.getName());
        
        // You can also use the parameter names and types to determine which method 
        // was called.
        for (integer i =0; i < listOfParamNames.size(); i++) {
            System.debug('parameter name: ' + listOfParamNames.get(i));
            System.debug('  parameter type: ' + listOfParamTypes.get(i).getName());
        }
        
        // This shows the actual parameter values passed into the stubbed method at runtime.
        System.debug('number of parameters passed into the mocked call: ' + 
            listOfArgs.size());
        System.debug('parameter(s) sent into the mocked call: ' + listOfArgs);
        
        // This is a very simple mock provider that returns a hard-coded value 
        // based on the return type of the invoked.
        if (returnType.getName() == 'String')
            return '8/8/2016';
        else 
            return null;
    }
}
```

```apex
public class MockUtil {
    private MockUtil(){}

    public static MockProvider getInstance() {
        return new MockProvider();
    }
    
     public static Object createMock(Type typeToMock) {
        // Invoke the stub API and pass it our mock provider to create a 
        // mock class of typeToMock.
        return Test.createStub(typeToMock, MockUtil.getInstance());
    }
}
```
