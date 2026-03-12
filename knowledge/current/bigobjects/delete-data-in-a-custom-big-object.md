---
title: "Delete Data in a Custom Big Object"
domain: bigobjects
topic: delete-data-in-a-custom-big-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.845Z
estimatedTokens: 701
keywords: [Data, Custom, Big, Apex, SOAP]
---

# Delete Data in a Custom Big Object

> Use Apex or SOAP to delete data in a custom big object.

# Delete Data in a Custom Big Object

Use Apex or SOAP to delete data in a custom big object.

The Apex method deleteImmediate() deletes data in a custom big object. Declare an sObject that contains all the fields in the custom big object’s index. The sObject acts like a template. All rows that match the sObject’s fields and values are deleted. You can specify only fields that are part of the big object’s index. You must specify all fields in the index. You can’t include a partially specified index or non-indexed field, and wildcards aren’t supported.

If you’re deleting all records because of capacity optimization, insert one or two blank records after deletion and wait 24 hours for the new capacity to be recognized.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bigobjects)

#### Important

The batch limit for big objects using deleteImmediate() is 50,000 records at a time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bigobjects)

#### Note

These examples assume that when you initially inserted big object values you used the Apex String.trim() method to remove leading and trailing white space in the index fields. See [Populate a Custom Big Object with Apex](atlas.en-us.bigobjects.meta/bigobjects/big_object_populate_apex.htm "Use Apex to populate a custom big object.").

In this example, Account\_\_c, Game\_Platform\_\_c, and Play\_Date\_\_c are part of the custom big object’s index. When specifying specific values after the WHERE clause, fields must be listed in the order they appear in the index, without any gaps.

```

```

To use the SOAP call deleteByExample(), declare an sObject that contains the fields and values to delete. The sObject acts like a template. All rows that match the sObject’s fields and values are deleted. You can specify only fields that are part of the big object’s index. All fields in the index must be specified. You can’t include a partially specified index or non-indexed field, and wildcards aren’t supported. This example deletes all rows in which Account\_\_c is 001d000000Ky3xIAB, Game\_Platform\_\_c is iOS, and Play\_Date\_\_c is 2017-11-28T19:13:36.000z.

Java example code:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bigobjects)

#### Note

Repeating a successful deleteByExample() operation produces a success result, even if the rows were already deleted.

#### See Also

-   [https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce\_api\_calls\_deletebyexample.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_deletebyexample.htm "https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_calls_deletebyexample.htm - HTML (New Window)")

## Code Examples

```apex
// Declare sObject using the index of the custom big object -->
List<Customer_Interaction__b> cBO = new List<Customer_Interaction__b>();
cBO.addAll([SELECT Account__c, Game_Platform__c, Play_Date__c FROM Customer_Interaction__b WHERE Account__c = '001d000000Ky3xIAB']);

Database.deleteImmediate(cBO);
```

```apex
public static void main(String[] args) {
  try{
       Customer_Interaction__b[] sObjectsToDelete = new Customer_Interaction__b[1];
       //Declare an sObject that has the values to delete
       Customer_Interaction__b customerBO = new Customer_Interaction__b();
       customerBO.setAccount__c (“001d000000Ky3xIAB”);
       customerBO.setGame_Platform__c (“iOS”);
       Calendar dt = new GregorianCalendar(2017, 11, 28, 19, 13, 36);
       customerBO.setPlay_Date__c(dt);
       sObjectsToDelete[0] = customerBO;
       DeleteByExampleResult[] result = connection.deleteByExample(sObjectsToDelete);
  }  catch (ConnectionException ce) {
	      ce.printStackTrace();  
  }
}
```

## Related Topics

- Populate a Custom Big Object with Apex (atlas.en-us.bigobjects.meta/bigobjects/big_object_populate_apex.htm)
