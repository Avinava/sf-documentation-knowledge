---
title: "Using Dynamic References with Custom Objects and
        Packages"
domain: pages
topic: using-dynamic-references-with-custom-objects-and-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.512Z
estimatedTokens: 823
keywords: [Dynamic, References, Custom, Objects, Packages, Package, developers, Visualforce, binding, user, access, situation, occur, you’re, developing]
---

# Using Dynamic References with Custom Objects and
        Packages

> Package developers can use dynamic Visualforce binding to list only the
        fields a user can access. This situation might occur when you’re developing a managed
        package with a Visualforce page that
        displays fields on an object. Since the package developer doesn’t know which fields a
        subscriber can access, they can define a dynamic page that renders differently for each
        subscriber.

# Using Dynamic References with Custom Objects and Packages

Package developers can use dynamic Visualforce binding to list only the fields a user can access. This situation might occur when you’re developing a managed package with a Visualforce page that displays fields on an object. Since the package developer doesn’t know which fields a subscriber can access, they can define a dynamic page that renders differently for each subscriber.

The following example uses a custom object packaged with a page layout using a Visualforce page to demonstrate how different subscribing users view the same page.

1.  Create a custom object Book (API name Book\_\_c) with the following fields and data types:
    -   Title: Text(255)
    -   Author: Text(255)
    -   ISBN: Text(20)
    -   Price: Currency(5, 2)
    -   Publisher: Text(255)
2.  Edit the Book page layout so it displays the custom fields first, and removes a few of the standard fields such as Created By, Last Modified By, Owner, and Name.
3.  Create a new custom object tab. Set the object to Book, and the tab style to Books.
4.  Switch to the Book tab and create a few Book objects. The values don’t matter, but you do need a few records to actually exist.
5.  Create a controller extension called BookExtension with the following code:

    ```

    ```

6.  Create a Visualforce page called booksView that uses the controller extension to show the values of the Book object:

    ```

    ```

7.  Since the controller extension is going to be packaged, you’ll need to [create a test for the Apex class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing.htm). Create an Apex class called BookExtensionTest with this basic code to get you started:

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    This Apex test is only meant to be a sample. When creating tests that are included into packages, validate all behavior, including positive and negative results.

8.  Create a package called bookBundle, and add the custom object, the Visualforce page, and the bookExtensionTest Apex class. Other referenced elements, such as the page’s controller extension Apex class, are included automatically.
9.  Install the bookBundle package into a subscriber organization.
10.  After the package is installed, from the object management settings for books, add a new field called Rating.
11.  Create a new Book object. Again, the values for the record don’t actually matter.
12.  Navigate to the booksView page with the package namespace and book ID appended to the URL. For example, if GBOOK is the namespace, and a00D0000008e7t4 is the book ID, the resulting URL should be https://MyDomain\_login\_URL/apex/GBOOK\_\_booksView?id=a00D0000008e7t4.

When the page is viewed from the subscribing organization, it should include all the packaged Book fields, plus the newly created Rating field. Different users and organizations can continue to add whatever fields they want, and the dynamic Visualforce page will adapt and show as appropriate.

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

## Code Examples

```apex
public with sharing class BookExtension {

    private ApexPages.StandardController stdController;
    
    public BookExtension (ApexPages.StandardController ct) {
        this.stdController = ct;
        if( ! Test.isRunningTest()) {
            // You can't call addFields() in a test context, it's a bug
            stdController.addFields(accessibleFields);
        }
    }
    
    public List<String> accessibleFields {
        get {
            if (accessibleFields == null) {
                // Get a list (map) of all fields on the object
                Map<String, Schema.SobjectField> fields = 
                    Schema.SobjectType.Book__c.fields.getMap();
        
                // Save only the fields accessible by the current user 
                Set<String> availableFieldsSet = new Set<String>();
                for (String s : fields.keySet()) {
                    if (fields.get(s).getDescribe().isAccessible() 
                        // Comment out next line to show standard/system fields
                        && fields.get(s).getDescribe().isCustom()
                    ){
                            availableFieldsSet.add(s.toLowerCase());
                            if(Test.isRunningTest()) System.debug('Field: ' + s);
                    }
                }
                
                // Convert set to list, save to property
                accessibleFields = new List<String>(availableFieldsSet);
            }
            return accessibleFields;
        }
        private set;
    }
}
```

```
<apex:page standardController="Book__c" extensions="BookExtension" > 

    <apex:pageBlock title="{!Book__c.Name}">
        <apex:pageBlockSection >
    
        <apex:repeat value="{!accessibleFields}" var="f">
            <apex:pageBlockSectionItem >
            
                <apex:outputLabel value="{!$ObjectType['Book__c'].Fields[f].Label}"/>
                <apex:outputText value="{!Book__c[f]}"/>
                    
            </apex:pageBlockSectionItem>
        </apex:repeat>
        
        </apex:pageBlockSection>
    </apex:pageBlock>

</apex:page>
```

```apex
@isTest
public class BookExtensionTest {
    
    public static testMethod void testBookExtension() {

        // Create a book to test with
        Book__c book = new Book__c();
        book.Author__c = 'Harry Lime';
        insert book;
        
        Test.startTest();
        
        // Add the page to the test context
        PageReference testPage = Page.booksView;
        testPage.getParameters().put('id', String.valueOf(book.Id));
        Test.setCurrentPage(testPage);
        
        // Create a controller for the book
        ApexPages.StandardController sc = new ApexPages.StandardController(book);
        
        // Real start of testing BookExtension
        // BookExtension has only two methods; to get 100% code coverage, we need
        // to call the constructor and get the accessibleFields property
        
        // Create an extension with the controller
        BookExtension bookExt = new BookExtension(sc);
        
        // Get the list of accessible fields from the extension
        Set<String> fields = new Set<String>(bookExt.accessibleFields);
        
        // Test that accessibleFields is not empty
        System.assert( ! fields.isEmpty());
        
        // Test that accessibleFields includes Author__c
        // This is a bad test; you can't know that subscriber won't disable
        System.assert(fields.contains('Author__c'.toLowerCase()), 
            'Expected accessibleFields to include Author__c');
        
        Test.stopTest();
        
    }
    
}
```
