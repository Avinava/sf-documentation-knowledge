---
title: "Testing Example"
domain: apex-guide
topic: testing-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.620Z
keywords: [Testing, Example, Positive, Test, Case, Negative, Second, User]
---

# Testing Example

# Testing Example

The following example includes cases for the following types of tests:

-   [Positive case with single and multiple records](#positive_test_case)
-   [Negative case with single and multiple records](#negative_test_case)
-   [Testing with other users](#second_user)

The test is used with a simple mileage tracking application. The existing code for the application verifies that not more than 500 miles are entered in a single day. The primary object is a custom object named Mileage\_\_c. The test creates one record with 300 miles and verifies there are only 300 miles recorded. Then a loop creates 200 records with one mile each. Finally, it verifies there are 500 miles recorded in total (the original 300 plus the new ones). Here’s the entire test class. The following sections step through specific portions of the code.

```

```

## Positive Test Case

The following steps through the above code, in particular, the positive test case for single and multiple records.

1.  Add text to the debug log, indicating the next step of the code:
    
    ```
    
    ```
    
2.  Create a Mileage\_\_c object and insert it into the database.
    
    ```
    
    ```
    
3.  Validate the code by returning the inserted records:
    
    ```
    
    ```
    
4.  Use the Assert.areEqual method to verify that the expected result is returned:
    
    ```
    
    ```
    
5.  Before moving to the next test, set the number of total miles back to 0:
    
    ```
    
    ```
    
6.  Validate the code by creating a bulk insert of 200 records.
    
    First, add text to the debug log, indicating the next step of the code:
    
    ```
    
    ```
    
7.  Then insert 200 Mileage\_\_c records:
    
    ```
    
    ```
    
8.  Use Assert.areEqual to verify that the expected result is returned:
    
    ```
    
    ```
    

## Negative Test Case

The following steps through the above code, in particular, the negative test case.

1.  Create a static test method called runNegativeTestCases:
    
    ```
    
    ```
    
2.  Add text to the debug log, indicating the next step of the code:
    
    ```
    
    ```
    
3.  Create a Mileage\_\_c record with 501 miles.
    
    ```
    
    ```
    
4.  Place the insert statement within a try/catch block. This allows you to catch the validation exception and assert the generated error message. Use the Assert.fail method to clearly assert that you expect the validation exception.
    
    ```
    
    ```
    
5.  Now use the Assert.areEqual and Assert.isTrue methods to do the testing. Add the following code to the catch block you previously created:
    
    ```
    
    ```
    

## Testing as a Second User

The following steps through the above code, in particular, running as a second user.

1.  Before moving to the next test, set the number of total miles back to 0:
    
    ```
    
    ```
    
2.  Set up the next user.
    
    ```
    
    ```
    
3.  Add text to the debug log, indicating the next step of the code:
    
    ```
    
    ```
    
4.  Then insert one Mileage\_\_c record:
    
    ```
    
    ```
    
5.  Validate the code by returning the inserted records:
    
    ```
    
    ```
    
6.  Use the Assert.areEqual method to verify that the expected result is returned:
    
    ```
    
    ```