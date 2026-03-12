---
title: "Sorting Lists of sObjects"
domain: apex-guide
topic: sorting-lists-of-sobjects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.610Z
estimatedTokens: 1364
keywords: [Sorting, Lists, sObjects, List.sort, sort, lists, sObjects., Default, Sort, Order, Custom, Example]
---

# Sorting Lists of sObjects

> Using the List.sort method, you can sort
        lists of sObjects.

# Sorting Lists of sObjects

Using the List.sort method, you can sort lists of sObjects.

For sObjects, sorting is in ascending order and uses a sequence of comparison steps outlined in the next section. You can create a custom sort order for sObjects by wrapping your sObject in an Apex class that implements the Comparable interface. You can also create a custom sort order by passing a class that implements Comparator as a parameter to the sort method. See [Custom Sort Order of sObjects](#CustomSortSection).

## Default Sort Order of sObjects

The List.sort method sorts sObjects in ascending order and compares sObjects using an ordered sequence of steps that specify the labels or fields used. The comparison starts with the first step in the sequence and ends when two sObjects are sorted using specified labels or fields. The following is the comparison sequence used:

1.  The label of the sObject type.

    For example, an Account sObject appears before a Contact.

2.  The Name field, if applicable.

    For example, if the list contains two accounts named Alpha and Beta, account Alpha comes before account Beta.

3.  Standard fields, starting with the fields that come first in alphabetical order, except for the Id and Name fields.

    For example, if two accounts have the same name, the first standard field used for sorting is AccountNumber.

4.  Custom fields, starting with the fields that come first in alphabetical order.

    For example, suppose two accounts have the same name and identical standard fields, and there are two custom fields, FieldA and FieldB, the value of FieldA is used first for sorting.


Not all steps in this sequence are necessarily carried out. For example, a list containing two sObjects of the same type and with unique Name values is sorted based on the Name field and sorting stops at step 2. Otherwise, if the names are identical or the sObject doesn’t have a Name field, sorting proceeds to step 3 to sort by standard fields.

For text fields, the sort algorithm uses the Unicode sort order. Also, empty fields precede non-empty fields in the sort order.

Here’s an example of sorting a list of Account sObjects. This example shows how the Name field is used to place the Acme account ahead of the two sForce accounts in the list. Since there are two accounts named sForce, the Industry field is used to sort these remaining accounts because the Industry field comes before the Site field in alphabetical order.

```

```

This example is similar to the previous one, except that it uses the Merchandise\_\_c custom object. This example shows how the Name field is used to place the Notebooks merchandise ahead of Pens in the list. Because there are two merchandise sObjects with the Name field value of Pens, the Description field is used to sort these remaining merchandise items. The Description field is used for sorting because it comes before the Price and Total\_Inventory fields in alphabetical order.

```

```

## Custom Sort Order of sObjects

To create a custom sort order for sObjects in lists, implement the Comparator interface and pass it as a parameter to the List.sort method.

Alternatively, create a wrapper class for the sObject and implement the Comparable interface. The wrapper class contains the sObject in question and implements the Comparable.compareTo method in which you specify the sort logic.

## Example

This example implements the Comparator interface to compare two opportunities based on the Amount field.

public class OpportunityComparator implements Comparator<Opportunity> { public Integer compare(Opportunity o1, Opportunity o2) { // The return value of 0 indicates that both elements are equal. Integer returnValue = 0; if(o1 == null && o2 == null) { returnValue = 0; } else if(o1 == null) { // nulls-first implementation returnValue = -1; } else if(o2 == null) { // nulls-first implementation returnValue = 1; } else if ((o1.Amount == null) && (o2.Amount == null)) { // both have null Amounts returnValue = 0; } else if (o1.Amount == null){ // nulls-first implementation returnValue = -1; } else if (o2.Amount == null){ // nulls-first implementation returnValue = 1; } else if (o1.Amount < o2.Amount) { // Set return value to a negative value. returnValue = -1; } else if (o1.Amount > o2.Amount) { // Set return value to a positive value. returnValue = 1; } return returnValue; } }

This test sorts a list of Comparator objects and verifies that the list elements are sorted by the opportunity amount.

```

```

## Example

This example shows how to create a wrapper Comparable class for Opportunity. The implementation of the compareTo method in this class compares two opportunities based on the Amount field—the class member variable contained in this instance, and the opportunity object passed into the method.

```

```

This test sorts a list of OpportunityWrapper objects and verifies that the list elements are sorted by the opportunity amount.

```

```

#### See Also

-   [*Apex Reference Guide*: Collator Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Collator.htm)

-   [*Apex Reference Guide*: Comparable Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_comparable.htm)

-   [*Apex Reference Guide*: Comparator Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_System_Comparator.htm)

## Code Examples

```apex
Account[] acctList = new List<Account>();        
acctList.add( new Account(
    Name='sForce',
    Industry='Biotechnology',
    Site='Austin'));
acctList.add(new Account(
    Name='sForce',
    Industry='Agriculture',
    Site='New York'));
acctList.add(new Account(
    Name='Acme'));
System.debug(acctList);

acctList.sort();
Assert.areEqual('Acme', acctList[0].Name);
Assert.areEqual('sForce', acctList[1].Name);
Assert.areEqual('Agriculture', acctList[1].Industry);
Assert.areEqual('sForce', acctList[2].Name);
Assert.areEqual('Biotechnology', acctList[2].Industry);
System.debug(acctList);
```

```apex
Merchandise__c[] merchList = new List<Merchandise__c>();        
merchList.add( new Merchandise__c(
    Name='Pens',
    Description__c='Red pens',
    Price__c=2,
    Total_Inventory__c=1000));
merchList.add( new Merchandise__c(
    Name='Notebooks',
    Description__c='Cool notebooks',
    Price__c=3.50,
    Total_Inventory__c=2000));
merchList.add( new Merchandise__c(
    Name='Pens',
    Description__c='Blue pens',
    Price__c=1.75,
    Total_Inventory__c=800));
System.debug(merchList);

merchList.sort();
Assert.areEqual('Notebooks', merchList[0].Name);
Assert.areEqual('Pens', merchList[1].Name);
Assert.areEqual('Blue pens', merchList[1].Description__c);
Assert.areEqual('Pens', merchList[2].Name);
Assert.areEqual('Red pens', merchList[2].Description__c);
System.debug(merchList);
```

```apex
@isTest
private class OpportunityComparator_Test {
 
    @isTest
    static void sortViaComparator() {
        // Add the opportunity wrapper objects to a list.
        List<Opportunity> oppyList = new List<Opportunity>();
        Date closeDate = Date.today().addDays(10);
        oppyList.add( new Opportunity(
            Name='Edge Installation',
            CloseDate=closeDate,
            StageName='Prospecting',
            Amount=50000));
        oppyList.add( new Opportunity(
            Name='United Oil Installations',
            CloseDate=closeDate,
            StageName='Needs Analysis',
            Amount=100000));
        oppyList.add( new Opportunity(
            Name='Grand Hotels SLA',
            CloseDate=closeDate,
            StageName='Prospecting',
            Amount=25000));
        oppyList.add(null);
        
        // Sort the objects using the Comparator implementation
        oppyList.sort(new OpportunityComparator());
        // Verify the sort order
        Assert.isNull(oppyList[0]);
        Assert.areEqual('Grand Hotels SLA', oppyList[1].Name);
        Assert.areEqual(25000, oppyList[1].Amount);
        Assert.areEqual('Edge Installation', oppyList[2].Name);
        Assert.areEqual(50000, oppyList[2].Amount);
        Assert.areEqual('United Oil Installations', oppyList[3].Name);
        Assert.areEqual(100000, oppyList[3].Amount);
        // Write the sorted list contents to the debug log.
        System.debug(oppyList);
    }
}
```

```apex
public class OpportunityWrapper implements Comparable {

    public Opportunity oppy;
    
    // Constructor
    public OpportunityWrapper(Opportunity op) {
    	// Guard against wrapping a null 
    	if(op == null) {
    		Exception ex = new NullPointerException();
    		ex.setMessage('Opportunity argument cannot be null'); 
    		throw ex;
    	}
        oppy = op;
    }
    
    // Compare opportunities based on the opportunity amount.
    public Integer compareTo(Object compareTo) {
        // Cast argument to OpportunityWrapper
        OpportunityWrapper compareToOppy = (OpportunityWrapper)compareTo;
        
        // The return value of 0 indicates that both elements are equal.
        Integer returnValue = 0;
        if ((oppy.Amount == null) && (compareToOppy.oppy.Amount == null)) {
            // both wrappers have null Amounts
            returnValue = 0;
        } else if ((oppy.Amount == null) && (compareToOppy.oppy.Amount != null)){
            // nulls-first implementation
            returnValue = -1;
        } else if ((oppy.Amount != null) && (compareToOppy.oppy.Amount == null)){
            // nulls-first implementation
            returnValue = 1;
        } else if (oppy.Amount > compareToOppy.oppy.Amount) {
            // Set return value to a positive value.
            returnValue = 1;
        } else if (oppy.Amount < compareToOppy.oppy.Amount) {
            // Set return value to a negative value.
            returnValue = -1;
        } 
        return returnValue;
    }
}
```

```apex
@isTest 
private class OpportunityWrapperTest {
    static testmethod void test1() {
        // Add the opportunity wrapper objects to a list.
        OpportunityWrapper[] oppyList = new List<OpportunityWrapper>();
        Date closeDate = Date.today().addDays(10);
        oppyList.add( new OpportunityWrapper(new Opportunity(
            Name='Edge Installation',
            CloseDate=closeDate,
            StageName='Prospecting',
            Amount=50000)));
        oppyList.add( new OpportunityWrapper(new Opportunity(
            Name='United Oil Installations',
            CloseDate=closeDate,
            StageName='Needs Analysis',
            Amount=100000)));
        oppyList.add( new OpportunityWrapper(new Opportunity(
            Name='Grand Hotels SLA',
            CloseDate=closeDate,
            StageName='Prospecting',
            Amount=25000)));
        
        // Sort the wrapper objects using the implementation of the 
        // compareTo method.
        oppyList.sort();
        
        // Verify the sort order
        Assert.areEqual('Grand Hotels SLA', oppyList[0].oppy.Name);
        Assert.areEqual(25000, oppyList[0].oppy.Amount);
        Assert.areEqual('Edge Installation', oppyList[1].oppy.Name);
        Assert.areEqual(50000, oppyList[1].oppy.Amount);
        Assert.areEqual('United Oil Installations', oppyList[2].oppy.Name);
        Assert.areEqual(100000, oppyList[2].oppy.Amount);
        
        // Write the sorted list contents to the debug log.
        System.debug(oppyList);
    }
}
```
