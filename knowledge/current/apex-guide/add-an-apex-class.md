---
title: "Add an Apex Class"
domain: apex-guide
topic: add-an-apex-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.846Z
estimatedTokens: 946
keywords: [Add, Apex, step, updating, book, price, trigger, you’ll, adding]
---

# Add an Apex Class

> In this step, you add an Apex class that contains a method for updating the book
        price. This method is called by the trigger that you’ll be adding in the next
        step.

# Add an Apex Class

In this step, you add an Apex class that contains a method for updating the book price. This method is called by the trigger that you’ll be adding in the next step.

Prerequisites:

-   A Salesforce account in a sandbox Professional, Enterprise, Performance, or Unlimited Edition org, or an account in a Developer org.
-   [The Book custom object](atlas.en-us.apexcode.meta/apexcode/apex_qs_customobject.htm "In this step, you create a custom object called Book with one custom field called Price.").

1.  From Setup, enter “Apex Classes” in the Quick Find box, then select **Apex Classes** and click **New**.
2.  In the class editor, enter this class definition:

    ```

    ```

    The previous code is the class definition to which you’ll be adding one method in the next step. Apex code is contained in *classes.* This class is defined as public, which means the class is available to other Apex classes and triggers. For more information, see [Classes, Objects, and Interfaces](atlas.en-us.apexcode.meta/apexcode/apex_classes.htm "Apex classes are modeled on their counterparts in Java. You’ll define, instantiate, and extend classes, and you’ll work with interfaces, Apex class versions, properties, and other related class concepts.").

3.  Add this method definition between the class opening and closing brackets.

    ```

    ```

    This method is called applyDiscount, and it’s both public and static. Because it’s a static method, you don't need to create an instance of the class to access the method—you can use the name of the class followed by a dot (.) and the name of the method. For more information, see [Static and Instance Methods, Variables, and Initialization Code](atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm "In Apex, you can have static methods, variables, and initialization code. However, Apex classes can't be static. You can also have instance methods, member variables, and initialization code, which have no modifiers, and local variables.").

    This method takes one parameter, a list of Book records, which is assigned to the variable books. Notice the \_\_c in the object name Book\_\_c. This indicates that it’s a custom object that you created. Standard objects that are provided in the Salesforce application, such as Account, don't end with this postfix.

    The next section of code contains the rest of the method definition:

    ```

    ```

    Notice the \_\_c after the field name Price\_\_c. This indicates that it’s a custom field that you created. Standard fields that are provided by default in Salesforce are accessed using the same type of dot notation but without the \_\_c, for example, Name doesn't end with \_\_c in Book\_\_c.Name. The statement b.Price\_\_c \*= 0.9; takes the old value of b.Price\_\_c, multiplies it by 0.9, which means its value is discounted by 10%, and then stores the new value into the b.Price\_\_c field. The \*= operator is a shortcut. Another way to write this statement is b.Price\_\_c = b.Price\_\_c \* 0.9;. See [Expression Operators](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm "Expressions can be joined to one another with operators to create compound expressions.").

4.  Click **Save** to save the new class. You now have this full class definition.

    ```

    ```


You now have a class that contains some code that iterates over a list of books and updates the Price field for each book. This code is part of the applyDiscount static method called by the trigger that you’ll create in the next step.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_qs_customobject.htm "Create a Custom Object")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_qs_trigger.htm "Add an Apex Trigger")

## Code Examples

```apex
public class MyHelloWorld {

}
```

```apex
public static void applyDiscount(Book__c[] books) {
   for (Book__c b :books){
      b.Price__c *= 0.9;
   }
}
```

```
for (Book__c b :books){
   b.Price__c *= 0.9;
}
```

```apex
public class MyHelloWorld {
   public static void applyDiscount(Book__c[] books) {
      for (Book__c b :books){
         b.Price__c *= 0.9;
      }
   }
}
```

## Related Topics

- The Book
                        custom object (atlas.en-us.apexcode.meta/apexcode/apex_qs_customobject.htm)
- Classes, Objects, and
                        Interfaces (atlas.en-us.apexcode.meta/apexcode/apex_classes.htm)
- Static and Instance Methods, Variables, and Initialization
                        Code (atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm)
- Expression Operators (atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_qs_customobject.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_qs_trigger.htm)
