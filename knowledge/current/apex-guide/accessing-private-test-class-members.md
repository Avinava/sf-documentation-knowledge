---
title: "Accessing Private Test Class Members"
domain: apex-guide
topic: accessing-private-test-class-members
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.642Z
keywords: [Accessing, Private, Test, Class, Members]
---

# Accessing Private Test Class Members

# Accessing Private Test Class Members

Test methods are defined in a test class, separate from the class they test. This can present a problem when having to access a private class member variable from the test method, or when calling a private method. Because these are private, they aren’t visible to the test class. You can either modify the code in your class to expose public methods that will make use of these private class members, or you can simply annotate these private class members with TestVisible. When you annotate private or protected members with this annotation, they can be accessed by test methods and only code running in test context.

This example shows how TestVisible is used with private member variables, a private inner class with a constructor, a private method, and a private custom exception. All these can be accessed in the test class because they’re annotated with TestVisible. The class is listed first and is followed by a test class containing the test methods.

```

```

```

```

The TestVisible annotation can be handy when you upgrade the Salesforce API version of existing classes containing mixed test and non-test code. Because test methods aren’t allowed in non-test classes starting in API version 28.0, you must move the test methods from the old class into a new test class (a class annotated with isTest) when you upgrade the API version of your class. You might run into visibility issues when accessing private methods or member variables of the original class. In this case, just annotate these private members with TestVisible.