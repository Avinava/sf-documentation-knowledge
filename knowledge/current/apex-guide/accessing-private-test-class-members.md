---
title: "Accessing Private Test Class Members"
domain: apex-guide
topic: accessing-private-test-class-members
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.083Z
estimatedTokens: 396
keywords: [Accessing, Test, Members, defined, test, separate, they, test., present, problem, having, access, member, variable, calling, method., Because, aren’t, visible]
---

# Accessing Private Test Class Members

> Test methods are defined in a test class, separate from the class they test. This can
            present a problem when having to access a private class member variable from the test
            method, or when calling a private method. Because these are private, they aren’t
            visible to 

# Accessing Private Test Class Members

Test methods are defined in a test class, separate from the class they test. This can present a problem when having to access a private class member variable from the test method, or when calling a private method. Because these are private, they aren’t visible to the test class. You can either modify the code in your class to expose public methods that will make use of these private class members, or you can simply annotate these private class members with TestVisible. When you annotate private or protected members with this annotation, they can be accessed by test methods and only code running in test context.

This example shows how TestVisible is used with private member variables, a private inner class with a constructor, a private method, and a private custom exception. All these can be accessed in the test class because they’re annotated with TestVisible. The class is listed first and is followed by a test class containing the test methods.

```

```

```

```

The TestVisible annotation can be handy when you upgrade the Salesforce API version of existing classes containing mixed test and non-test code. Because test methods aren’t allowed in non-test classes starting in API version 28.0, you must move the test methods from the old class into a new test class (a class annotated with isTest) when you upgrade the API version of your class. You might run into visibility issues when accessing private methods or member variables of the original class. In this case, just annotate these private members with TestVisible.

## Code Examples

```apex
public class VisibleSampleClass {
    // Private member variables
    @TestVisible private Integer recordNumber = 0;
    @TestVisible private String areaCode = '(415)';
    // Public member variable
    public Integer maxRecords = 1000;
    
    // Private inner class
    @TestVisible class Employee {
        String fullName;
        String phone;
        
        // Constructor
        @TestVisible Employee(String s, String ph) {
            fullName = s;
            phone = ph;
        }
    }
       
    // Private method
    @TestVisible private String privateMethod(Employee e) {
        System.debug('I am private.');
        recordNumber++;
        String phone = areaCode + ' ' + e.phone;
        String s = e.fullName + '\'s phone number is ' + phone;
        System.debug(s);
        return s;
    }
    
    // Public method
    public void publicMethod() {
        maxRecords++;
        System.debug('I am public.');    
    }
    
    // Private custom exception class
    @TestVisible private class MyException extends Exception {}
}
```

```apex
// Test class for VisibleSampleClass
@isTest
private class VisibleSampleClassTest {

    // This test method can access private members of another class 
    // that are annotated with @TestVisible.
    static testmethod void test1() {
        VisibleSampleClass sample = new VisibleSampleClass ();

        // Access private data members and update their values
        sample.recordNumber = 100;
        sample.areaCode = '(510)';
        
        // Access private inner class
        VisibleSampleClass.Employee emp = 
            new VisibleSampleClass.Employee('Joe Smith', '555-1212');
        
        // Call private method
        String s = sample.privateMethod(emp);
        
        // Verify result
        System.assert(
            s.contains('(510)') &&
            s.contains('Joe Smith') &&
            s.contains('555-1212'));
    }
    
    // This test method can throw private exception defined in another class
    static testmethod void test2() {
        // Throw private exception.
        try {
            throw new VisibleSampleClass.MyException('Thrown from a test.');
        } catch(VisibleSampleClass.MyException e) {
            // Handle exception 
        }
    }
    
    static testmethod void test3() {
        // Access public method.
        // No @TestVisible is used.
        VisibleSampleClass sample = new VisibleSampleClass ();
        sample.publicMethod();
    }   

}
```
