---
title: "Add an Apex Trigger"
domain: apex-guide
topic: add-an-apex-trigger
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.497Z
keywords: [Add, Apex, Trigger, See]
---

# Add an Apex Trigger

# Add an Apex Trigger

In this step, you create a trigger for the Book\_\_c custom object that calls the applyDiscount method of the MyHelloWorld class that you created in the previous step.

Prerequisites:

-   A Salesforce account in a sandbox Professional, Enterprise, Performance, or Unlimited Edition org, or an account in a Developer org.
-   [The MyHelloWorld Apex class.](atlas.en-us.apexcode.meta/apexcode/apex_qs_class.htm "In this step, you add an Apex class that contains a method for updating the book price. This method is called by the trigger that you’ll be adding in the next step.")

A *trigger* is a piece of code that executes before or after records of a particular type are inserted, updated, or deleted from the Lightning Platform database. Every trigger runs with a set of context variables that provide access to the records that caused the trigger to fire. All triggers run in bulk; that is, they process several records at once.

1.  From the object management settings for books, go to Triggers, and then click **New**.
2.  In the trigger editor, delete the default template code and enter this trigger definition:
    
    ```
    
    ```
    
    The first line of code defines the trigger:
    
    ```
    
    ```
    
    It gives the trigger a name, specifies the object on which it operates, and defines the events that cause it to fire. For example, this trigger is called HelloWorldTrigger, it operates on the Book\_\_c object, and runs before new books are inserted into the database.
    
    The next line in the trigger creates a list of book records named books and assigns it the contents of a trigger context variable called Trigger.new. Trigger context variables such as Trigger.new are implicitly defined in all triggers and provide access to the records that caused the trigger to fire. In this case, Trigger.new contains all the new books that are about to be inserted.
    
    ```
    
    ```
    
    The next line in the code calls the method applyDiscount in the MyHelloWorld class. It passes in the array of new books.
    
    ```
    
    ```
    

You now have all the code that is needed to update the price of all books that get inserted. However, there’s still one piece of the puzzle missing. Unit tests are an important part of writing code and are required. In the next step, you'll see why this is so and will be able to add a test class.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_qs_class.htm "Add an Apex Class")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_qs_test.htm "Add a Test Class")

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)