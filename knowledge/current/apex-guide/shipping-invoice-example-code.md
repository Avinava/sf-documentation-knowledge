---
title: "Shipping Invoice Example Code"
domain: apex-guide
topic: shipping-invoice-example-code
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:33.998Z
estimatedTokens: 133
keywords: [Shipping, Invoice, Example, Code, following, triggers, test, shipping, invoice, example, application, Calculate, Trigger, ShippingDiscount, Test]
---

# Shipping Invoice Example Code

> The following triggers and test class make up the shipping invoice
example application:

# Shipping Invoice Example Code

The following triggers and test class make up the shipping invoice example application:

-   [Calculate trigger](#sc_calculate_trigger_code)
-   [ShippingDiscount trigger](#sc_shippingdiscount_trigger_code)
-   [Test class](#sc_testshoppingcart_test_code)

## Calculate Trigger

```

```

## ShippingDiscount Trigger

```

```

## Shipping Invoice Test

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_shopping_cart_example_walkthru.htm "Shipping Invoice Example Walk-Through")

## Code Examples

```apex
trigger calculate on Item__c (after insert, after update, after delete) {

// Use a map because it doesn't allow duplicate values

Map<ID, Shipping_Invoice__C> updateMap = new Map<ID, Shipping_Invoice__C>();

// Set this integer to -1 if we are deleting
Integer subtract ;

// Populate the list of items based on trigger type
List<Item__c> itemList;
    if(trigger.isInsert || trigger.isUpdate){
        itemList = Trigger.new;
        subtract = 1;
    }
    else if(trigger.isDelete)
    {
        // Note -- there is no trigger.new in delete
        itemList = trigger.old;
        subtract = -1;
    }

// Access all the information we need in a single query 
// rather than querying when we need it.
// This is a best practice for bulkifying requests

set<Id> AllItems = new set<id>();

for(item__c i :itemList){
// Assert numbers are not negative.  
// None of the fields would make sense with a negative value

System.assert(i.quantity__c > 0, 'Quantity must be positive');
System.assert(i.weight__c >= 0, 'Weight must be non-negative');
System.assert(i.price__c >= 0, 'Price must be non-negative');

// If there is a duplicate Id, it won't get added to a set
AllItems.add(i.Shipping_Invoice__C);
}

// Accessing all shipping invoices associated with the items in the trigger
List<Shipping_Invoice__C> AllShippingInvoices = [SELECT Id, ShippingDiscount__c, 
                   SubTotal__c, TotalWeight__c, Tax__c, GrandTotal__c 
                   FROM Shipping_Invoice__C WHERE Id IN :AllItems];
                   
// Take the list we just populated and put it into a Map.  
// This will make it easier to look up a shipping invoice
// because you must iterate a list, but you can use lookup for a map, 
Map<ID, Shipping_Invoice__C> SIMap = new Map<ID, Shipping_Invoice__C>();

for(Shipping_Invoice__C sc : AllShippingInvoices)
{
    SIMap.put(sc.id, sc);
}

// Process the list of items
    if(Trigger.isUpdate)
    {
        // Treat updates like a removal of the old item and addition of the         
        // revised item rather than figuring out the differences of each field 
        // and acting accordingly.
        // Note updates have both trigger.new and trigger.old
        for(Integer x = 0; x < Trigger.old.size(); x++)
        {
            Shipping_Invoice__C myOrder;
            myOrder = SIMap.get(trigger.old[x].Shipping_Invoice__C);

            // Decrement the previous value from the subtotal and weight.
            myOrder.SubTotal__c -= (trigger.old[x].price__c * 
                                    trigger.old[x].quantity__c);
            myOrder.TotalWeight__c -= (trigger.old[x].weight__c * 
                                       trigger.old[x].quantity__c);
                
            // Increment the new subtotal and weight.
            myOrder.SubTotal__c += (trigger.new[x].price__c * 
                                    trigger.new[x].quantity__c);
            myOrder.TotalWeight__c += (trigger.new[x].weight__c * 
                                       trigger.new[x].quantity__c);
        }
        
        for(Shipping_Invoice__C myOrder : AllShippingInvoices)
        {
            
            // Set tax rate to 9.25%  Please note, this is a simple example.  
            // Generally, you would never hard code values.
            // Leveraging Custom Settings for tax rates is a best practice.  
            // See Custom Settings in the Apex Developer Guide 
            // for more information.
            myOrder.Tax__c = myOrder.Subtotal__c * .0925;
            
            // Reset the shipping discount
            myOrder.ShippingDiscount__c = 0;
    
            // Set shipping rate to 75 cents per pound.  
            // Generally, you would never hard code values.
            // Leveraging Custom Settings for the shipping rate is a best practice.
            // See Custom Settings in the Apex Developer Guide 
            // for more information.
            myOrder.Shipping__c = (myOrder.totalWeight__c * .75);
            myOrder.GrandTotal__c = myOrder.SubTotal__c + myOrder.tax__c + 
                                    myOrder.Shipping__c;
            updateMap.put(myOrder.id, myOrder);
         }
    }
    else
    { 
        for(Item__c itemToProcess : itemList)
        {
            Shipping_Invoice__C myOrder;
    
            // Look up the correct shipping invoice from the ones we got earlier
            myOrder = SIMap.get(itemToProcess.Shipping_Invoice__C);
            myOrder.SubTotal__c += (itemToProcess.price__c * 
                                    itemToProcess.quantity__c * subtract);
            myOrder.TotalWeight__c += (itemToProcess.weight__c * 
                                       itemToProcess.quantity__c * subtract);
        }
        
        for(Shipping_Invoice__C myOrder : AllShippingInvoices)
        {
            
             // Set tax rate to 9.25%  Please note, this is a simple example.  
             // Generally, you would never hard code values.
             // Leveraging Custom Settings for tax rates is a best practice.  
             // See Custom Settings in the Apex Developer Guide 
             // for more information.
             myOrder.Tax__c = myOrder.Subtotal__c * .0925;
             
             // Reset shipping discount
             myOrder.ShippingDiscount__c = 0;
    
            // Set shipping rate to 75 cents per pound.  
            // Generally, you would never hard code values.
            // Leveraging Custom Settings for the shipping rate is a best practice.
            // See Custom Settings in the Apex Developer Guide 
            // for more information.
            myOrder.Shipping__c = (myOrder.totalWeight__c * .75);
            myOrder.GrandTotal__c = myOrder.SubTotal__c + myOrder.tax__c + 
                                    myOrder.Shipping__c;
                                       
            updateMap.put(myOrder.id, myOrder);
    
         }
     }    
     
     // Only use one DML update at the end.
     // This minimizes the number of DML requests generated from this trigger.
     update updateMap.values();
}
```

```
trigger ShippingDiscount on Shipping_Invoice__C (before update) {
    // Free shipping on all orders greater than $100
    
    for(Shipping_Invoice__C myShippingInvoice : Trigger.new)
    {
        if((myShippingInvoice.subtotal__c >= 100.00) && 
           (myShippingInvoice.ShippingDiscount__c == 0))
        {
            myShippingInvoice.ShippingDiscount__c = 
                         myShippingInvoice.Shipping__c * -1;
            myShippingInvoice.GrandTotal__c += myShippingInvoice.ShippingDiscount__c;
        }
    }
}
```

```apex
@IsTest
private class TestShippingInvoice{

    // Test for inserting three items at once
    public static testmethod void testBulkItemInsert(){
        // Create the shipping invoice. It's a best practice to either use defaults
        // or to explicitly set all values to zero so as to avoid having
        // extraneous data in your test.
        Shipping_Invoice__C order1 = new Shipping_Invoice__C(subtotal__c = 0, 
                          totalweight__c = 0, grandtotal__c = 0, 
                          ShippingDiscount__c = 0, Shipping__c = 0, tax__c = 0);

        // Insert the order and populate with items
        insert Order1;
        List<Item__c> list1 = new List<Item__c>();
        Item__c item1 = new Item__C(Price__c = 10, weight__c = 1, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c item2 = new Item__C(Price__c = 25, weight__c = 2, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c item3 = new Item__C(Price__c = 40, weight__c = 3, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        list1.add(item1);
        list1.add(item2);
        list1.add(item3);
        insert list1;
        
        // Retrieve the order, then do assertions
        order1 = [SELECT id, subtotal__c, tax__c, shipping__c, totalweight__c, 
                  grandtotal__c, shippingdiscount__c 
                  FROM Shipping_Invoice__C 
                  WHERE id = :order1.id];
        
        System.assert(order1.subtotal__c == 75, 
                'Order subtotal was not $75, but was '+ order1.subtotal__c);
        System.assert(order1.tax__c == 6.9375, 
                'Order tax was not $6.9375, but was ' + order1.tax__c);
        System.assert(order1.shipping__c == 4.50, 
                'Order shipping was not $4.50, but was ' + order1.shipping__c);
        System.assert(order1.totalweight__c == 6.00, 
                'Order weight was not 6 but was ' + order1.totalweight__c);
        System.assert(order1.grandtotal__c == 86.4375, 
                'Order grand total was not $86.4375 but was ' 
                 + order1.grandtotal__c);
        System.assert(order1.shippingdiscount__c == 0, 
                'Order shipping discount was not $0 but was ' 
                + order1.shippingdiscount__c);
    }
    
    // Test for updating three items at once
    public static testmethod void testBulkItemUpdate(){

        // Create the shipping invoice. It's a best practice to either use defaults
        // or to explicitly set all values to zero so as to avoid having
        // extraneous data in your test.
        Shipping_Invoice__C order1 = new Shipping_Invoice__C(subtotal__c = 0, 
                          totalweight__c = 0, grandtotal__c = 0, 
                          ShippingDiscount__c = 0, Shipping__c = 0, tax__c = 0);

        // Insert the order and populate with items.
        insert Order1;
        List<Item__c> list1 = new List<Item__c>();
        Item__c item1 = new Item__C(Price__c = 1, weight__c = 1, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c item2 = new Item__C(Price__c = 2, weight__c = 2, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c item3 = new Item__C(Price__c = 4, weight__c = 3, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        list1.add(item1);
        list1.add(item2);
        list1.add(item3);
        insert list1;
        
        // Update the prices on the 3 items
        list1[0].price__c = 10;
        list1[1].price__c = 25;
        list1[2].price__c = 40;
        update list1;
        
        // Access the order and assert items updated
        order1 = [SELECT id, subtotal__c, tax__c, shipping__c, totalweight__c, 
                  grandtotal__c, shippingdiscount__c 
                  FROM Shipping_Invoice__C 
                  WHERE Id = :order1.Id];

        System.assert(order1.subtotal__c == 75, 
                       'Order subtotal was not $75, but was '+ order1.subtotal__c);
        System.assert(order1.tax__c == 6.9375, 
                       'Order tax was not $6.9375, but was ' + order1.tax__c);
        System.assert(order1.shipping__c == 4.50, 
                       'Order shipping was not $4.50, but was ' 
                       + order1.shipping__c);
        System.assert(order1.totalweight__c == 6.00, 
                       'Order weight was not 6 but was ' + order1.totalweight__c);
        System.assert(order1.grandtotal__c == 86.4375, 
                       'Order grand total was not $86.4375 but was ' 
                       + order1.grandtotal__c);
        System.assert(order1.shippingdiscount__c == 0, 
                       'Order shipping discount was not $0 but was ' 
                       + order1.shippingdiscount__c);
    
    }
    
    // Test for deleting items
    public static testmethod void testBulkItemDelete(){

        // Create the shipping invoice. It's a best practice to either use defaults
        // or to explicitly set all values to zero so as to avoid having
        // extraneous data in your test.
        Shipping_Invoice__C order1 = new Shipping_Invoice__C(subtotal__c = 0, 
                          totalweight__c = 0, grandtotal__c = 0, 
                          ShippingDiscount__c = 0, Shipping__c = 0, tax__c = 0);

        // Insert the order and populate with items
        insert Order1;
        List<Item__c> list1 = new List<Item__c>();
        Item__c item1 = new Item__C(Price__c = 10, weight__c = 1, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c item2 = new Item__C(Price__c = 25, weight__c = 2, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c item3 = new Item__C(Price__c = 40, weight__c = 3, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c itemA = new Item__C(Price__c = 1, weight__c = 3, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c itemB = new Item__C(Price__c = 1, weight__c = 3, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c itemC = new Item__C(Price__c = 1, weight__c = 3, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c itemD = new Item__C(Price__c = 1, weight__c = 3, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        list1.add(item1);
        list1.add(item2);
        list1.add(item3);
        list1.add(itemA);
        list1.add(itemB);
        list1.add(itemC);
        list1.add(itemD);
        insert list1;
        
        // Seven items are now in the shipping invoice. 
       // The following deletes four of them.
        List<Item__c> list2 = new List<Item__c>();
        list2.add(itemA);
        list2.add(itemB);
        list2.add(itemC);
        list2.add(itemD);
        delete list2;
        
        // Retrieve the order and verify the deletion
        order1 = [SELECT id, subtotal__c, tax__c, shipping__c, totalweight__c, 
                  grandtotal__c, shippingdiscount__c 
                  FROM Shipping_Invoice__C 
                  WHERE Id = :order1.Id];
        
        System.assert(order1.subtotal__c == 75, 
                      'Order subtotal was not $75, but was '+ order1.subtotal__c);
        System.assert(order1.tax__c == 6.9375, 
                      'Order tax was not $6.9375, but was ' + order1.tax__c);
        System.assert(order1.shipping__c == 4.50, 
                      'Order shipping was not $4.50, but was ' + order1.shipping__c);
        System.assert(order1.totalweight__c == 6.00, 
                      'Order weight was not 6 but was ' + order1.totalweight__c);
        System.assert(order1.grandtotal__c == 86.4375, 
                      'Order grand total was not $86.4375 but was ' 
                      + order1.grandtotal__c);
        System.assert(order1.shippingdiscount__c == 0, 
                      'Order shipping discount was not $0 but was ' 
                      + order1.shippingdiscount__c);
    }
    // Testing free shipping
    public static testmethod void testFreeShipping(){

        // Create the shipping invoice. It's a best practice to either use defaults
        // or to explicitly set all values to zero so as to avoid having
        // extraneous data in your test.
        Shipping_Invoice__C order1 = new Shipping_Invoice__C(subtotal__c = 0, 
                          totalweight__c = 0, grandtotal__c = 0, 
                          ShippingDiscount__c = 0, Shipping__c = 0, tax__c = 0);

        // Insert the order and populate with items.
        insert Order1;
        List<Item__c> list1 = new List<Item__c>();
        Item__c item1 = new Item__C(Price__c = 10, weight__c = 1, 
                                 quantity__c = 1, Shipping_Invoice__C = order1.id);
        Item__c item2 = new Item__C(Price__c = 25, weight__c = 2, 
                                 quantity__c = 1, Shipping_Invoice__C = order1.id);
        Item__c item3 = new Item__C(Price__c = 40, weight__c = 3, 
                                 quantity__c = 1, Shipping_Invoice__C = order1.id);
        list1.add(item1);
        list1.add(item2);
        list1.add(item3);
        insert list1;
        
        // Retrieve the order and verify free shipping not applicable
        order1 = [SELECT id, subtotal__c, tax__c, shipping__c, totalweight__c, 
                  grandtotal__c, shippingdiscount__c 
                  FROM Shipping_Invoice__C 
                  WHERE Id = :order1.Id];
        
        // Free shipping not available on $75 orders
        System.assert(order1.subtotal__c == 75, 
                      'Order subtotal was not $75, but was '+ order1.subtotal__c);
        System.assert(order1.tax__c == 6.9375, 
                      'Order tax was not $6.9375, but was ' + order1.tax__c);
        System.assert(order1.shipping__c == 4.50, 
                      'Order shipping was not $4.50, but was ' + order1.shipping__c);
        System.assert(order1.totalweight__c == 6.00, 
                      'Order weight was not 6 but was ' + order1.totalweight__c);
        System.assert(order1.grandtotal__c == 86.4375, 
                      'Order grand total was not $86.4375 but was ' 
                      + order1.grandtotal__c);
        System.assert(order1.shippingdiscount__c == 0, 
                      'Order shipping discount was not $0 but was ' 
                      + order1.shippingdiscount__c);
        
        // Add items to increase subtotal
        item1 = new Item__C(Price__c = 25, weight__c = 20, quantity__c = 1, 
                            Shipping_Invoice__C = order1.id);       
        insert item1;

        // Retrieve the order and verify free shipping is applicable
        order1 = [SELECT id, subtotal__c, tax__c, shipping__c, totalweight__c, 
                  grandtotal__c, shippingdiscount__c 
                  FROM Shipping_Invoice__C 
                  WHERE Id = :order1.Id];
        
        // Order total is now at $100, so free shipping should be enabled
        System.assert(order1.subtotal__c == 100, 
                      'Order subtotal was not $100, but was '+ order1.subtotal__c);
        System.assert(order1.tax__c == 9.25, 
                      'Order tax was not $9.25, but was ' + order1.tax__c);
        System.assert(order1.shipping__c == 19.50, 
                      'Order shipping was not $19.50, but was ' 
                      + order1.shipping__c);
        System.assert(order1.totalweight__c == 26.00, 
                      'Order weight was not 26 but was ' + order1.totalweight__c);
        System.assert(order1.grandtotal__c == 109.25, 
                      'Order grand total was not $86.4375 but was ' 
                      + order1.grandtotal__c);
        System.assert(order1.shippingdiscount__c == -19.50, 
                      'Order shipping discount was not -$19.50 but was ' 
                      + order1.shippingdiscount__c);
    }
    
     // Negative testing for inserting bad input
    public static testmethod void testNegativeTests(){

        // Create the shipping invoice. It's a best practice to either use defaults
        // or to explicitly set all values to zero so as to avoid having
        // extraneous data in your test.
        Shipping_Invoice__C order1 = new Shipping_Invoice__C(subtotal__c = 0, 
                          totalweight__c = 0, grandtotal__c = 0, 
                          ShippingDiscount__c = 0, Shipping__c = 0, tax__c = 0);

        // Insert the order and populate with items. 
        insert Order1;
        Item__c item1 = new Item__C(Price__c = -10, weight__c = 1, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c item2 = new Item__C(Price__c = 25, weight__c = -2, quantity__c = 1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c item3 = new Item__C(Price__c = 40, weight__c = 3, quantity__c = -1, 
                                    Shipping_Invoice__C = order1.id);
        Item__c item4 = new Item__C(Price__c = 40, weight__c = 3, quantity__c = 0, 
                                    Shipping_Invoice__C = order1.id);

        try{
            insert item1;
        }
        catch(Exception e)
        {
            system.assert(e.getMessage().contains('Price must be non-negative'), 
                         'Price was negative but was not caught');
        }
        
        try{
            insert item2;
        }
        catch(Exception e)
        {
            system.assert(e.getMessage().contains('Weight must be non-negative'), 
                         'Weight was negative but was not caught');
        }

        try{
            insert item3;
        }
        catch(Exception e)
        {
            system.assert(e.getMessage().contains('Quantity must be positive'), 
                         'Quantity was negative but was not caught');
        }
        
        try{
            insert item4;
        }
        catch(Exception e)
        {
            system.assert(e.getMessage().contains('Quantity must be positive'), 
                         'Quantity was zero but was not caught');
        }
    }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_shopping_cart_example_walkthru.htm)
