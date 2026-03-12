---
title: "Delete Field History and Field Audit Trail Data"
domain: field-history-retention
topic: delete-field-history-and-field-audit-trail-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.828Z
estimatedTokens: 489
keywords: [History, Audit, Trail, Data, Apex, SOAP, archive]
---

# Delete Field History and Field Audit Trail Data

> Use Apex or SOAP to delete field history and field history archive data.

# Delete Field History and Field Audit Trail Data

Use Apex or SOAP to delete field history and field history archive data.

To delete field history and audit trail data, the user permissions Delete From Field History and Delete From Field History Archive must be enabled through a permission set or a user profile. The org preferences to enable these permissions, Delete From Field History and Delete From Field History Archive, are located in **Setup | User Interface**.

Delete field history data, such as AccountHistory, by passing in a list of ID values as strings using the Apex or SOAP delete() method. The Apex delete() method also works with a list of sObjects with the Id field populated. Delete field history archive data from the FieldHistoryArchive big object using the SOAP deleteByExample() or Apex Database.deleteImmediate() methods.

The sObject acts like a template. All rows that match the sObject’s fields and values are deleted. You can only specify fields that are part of the big object’s index. You must specify all fields in the index. You can’t include a partially specified index or non-indexed field, and wildcards are not supported.

Sample for deleting AccountHistory:

```

```

Samples for deleting from FieldHistoryArchive:

```

```

Alternatively, delete field history archive data with the SOAP call deleteByExample(). Declare an sObject containing the fields and values in the FieldHistoryArchive big object to delete. This example deletes all rows that meet the specified criteria.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_history_retention)

#### Note

Repeating a successful deleteByExample() operation produces a success result, even if the rows have already been deleted.

#### See Also

-   [deleteByExample()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_deletebyexample.htm "deleteByExample() - HTML (New Window)")

## Code Examples

```apex
List<AccountHistory> ah = new List<sObject>();
ah.addAll( [ SELECT Id FROM AccountHistory 
WHERE AccountId = '001d000000Ky3xIAB' and CreatedDate = YESTERDAY ] );
Database.delete(ah);
```

```apex
List<FieldHistoryArchive> fha = new List<sObject>();
fha.addAll([SELECT FieldHistoryType, ParentId, CreatedDate, HistoryId FROM FieldHistoryArchive 
WHERE FieldHistoryType = 'Account' AND ParentId = '001d000000Ky3xIAB' AND CreatedDate = '2017-11-28T19:13:36.000z' AND HistoryId = '017D000000ESURXIA5']);
Database.deleteImmediate(fha);
```

```apex
public static void main(String[] args) {
  try{
       //Create two sObjects to delete and place them in an array of sObjects to pass to the delete method
       FieldHistoryArchive[] sObjectsToDelete = new FieldHistoryArchive[2];
       FieldHistoryArchive fha_1 = new FieldHistoryArchive();
       fha_1.setFieldHistoryType("Account");
       fha_1.setParentId("001d000000Ky3xIAB");
       Calendar dt = connection.getServerTimestamp().getTimestamp();
       dt.add(Calendar.DAY_OF_MONTH, -7);
       fha_1.setCreatedDate(dt);
       fha_1.setHistoryId("017D000000ESURXIA5");
       sObjectsToDelete[0] = fha_1;

       FieldHistoryArchive fha_2 = new FieldHistoryArchive();
       fha_2.setFieldHistoryType("Account");
       fha_2.setParentId("001d000000Ky3xIAB");
       fha_2.setCreatedDate(dt);
       fha_2.setHistoryId("017D000000ESURXIA5");
       sObjectsToDelete[1] = fha_2;
       DeleteByExampleResult[] result = connection.deleteByExample(sObjectsToDelete);
}  catch (ConnectionException ce) {
	      ce.printStackTrace();
  }
}
```
