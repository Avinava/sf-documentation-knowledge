---
title: "Understanding Query Results"
domain: soql-sosl
topic: understanding-query-results
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.595Z
estimatedTokens: 630
keywords: [Understanding, Query, Results, nested, objects, primary, “driving”, main, SELECT, statement, SOQL, subqueries]
---

# Understanding Query Results

> Query results are returned as nested objects. The primary or “driving”
    object of the main SELECT statement in a SOQL query contains
    query results of subqueries.

# Understanding Query Results

Query results are returned as nested objects. The primary or “driving” object of the main SELECT statement in a SOQL query contains query results of subqueries.

For example, you can construct a query using either parent-to-child or child-to-parent syntax:

-   Child-to-parent:

    ```

    ```

    This query returns one query result (assuming there were not too many returned records), with a row for every contact that met the WHERE clause criteria.

    "records": \[ { "attributes": { "type": "Contact", "url": "/services/data/v65.0/sobjects/Contact/003R000000A1BCDFXX" }, "Id": "003R000000A1BCDFXX", "FirstName": "Jane", "LastName": "Doe", "AccountId": "001R000000Z1Y0xYAA", "Account": { "attributes": { "type": "Account", "url": "/services/data/v65.0/sobjects/Account/001R000000Z1Y0xYAA" }, "Name": "Acme Corp (West)" } }, { "attributes": { "type": "Contact", "url": "/services/data/v65.0/sobjects/Contact/003R000000A2CDEBZZ" }, "Id": "003R000000A2CDEBZZ", "FirstName": "John", "LastName": "Smith", "AccountId": "001R000000Z1Y0zYBB", "Account": { "attributes": { "type": "Account", "url": "/services/data/v65.0/sobjects/Account/001R000000Z1Y0zYBB" }, "Name": "Acme Global Solutions" } } \]

-   Parent-to-child:

    ```

    ```

    This query returns a set of accounts, and within each account, a query result set of Contact fields containing the contact information from the subquery.

    "records": \[ { "attributes": { "type": "Account", "url": "/services/data/v65.0/sobjects/Account/001R000000Z1Y0xYAA" }, "Id": "001R000000Z1Y0xYAA", "Name": "Acme Corp (West)", "Contacts": { "totalSize": 2, "done": true, "records": \[ { "attributes": { "type": "Contact", "url": "/services/data/v65.0/sobjects/Contact/003R000000A1BCDFXX" }, "Id": "003R000000A1BCDFXX", "FirstName": "Jane", "LastName": "Doe" }, { "attributes": { "type": "Contact", "url": "/services/data/v65.0/sobjects/Contact/003R000000A3EFGHYY" }, "Id": "003R000000A3EFGHYY", "FirstName": "David", "LastName": "Jones" } \] } }, { "attributes": { "type": "Account", "url": "/services/data/v65.0/sobjects/Account/001R000000Z1Y0zYBB" }, "Id": "001R000000Z1Y0zYBB", "Name": "Acme Global Solutions", "Contacts": { "totalSize": 1, "done": true, "records": \[ { "attributes": { "type": "Contact", "url": "/services/data/v65.0/sobjects/Contact/003R000000A2CDEBZZ" }, "Id": "003R000000A2CDEBZZ", "FirstName": "John", "LastName": "Smith" } \] } } \]


The following sample illustrates how to process subquery results:

```

```

## Code Examples

```
SELECT Id, FirstName, LastName, AccountId, Account.Name
FROM Contact 
WHERE Account.Name LIKE 'Acme%'
```

```
SELECT Id, Name,
  (
    SELECT Id, FirstName, LastName
    FROM Contacts
  )
FROM Account
  WHERE Name like 'Acme%'
```

```apex
private void querySample() {
  QueryResult qr = null;
  try {
    qr = connection.query("SELECT a.Id, a.Name, " +
      "(SELECT c.Id, c.FirstName, " +
      "c.LastName FROM a.Contacts c) FROM Account a");
    boolean done = false;
    if (qr.getSize() > 0) {
      while (!done) {
        for (int i = 0; i < qr.getRecords().length; i++) {
        Account acct = (Account) qr.getRecords()[i];
        String name = acct.getName();
        System.out.println("Account " + (i + 1) + ": " + name);
        printContacts(acct.getContacts());
        }
        if (qr.isDone()) {
          done = true;
        } else {
          qr = connection.queryMore(qr.getQueryLocator());
        }
      }
    } else {
      System.out.println("No records found.");
    }
    System.out.println("
Query succesfully executed.");
  } catch (ConnectionException ce) {
    System.out.println("
Failed to execute query successfully, error message " +
    "was: 
" + ce.getMessage());
  }
}

private void printContacts(QueryResult qr) throws ConnectionException {
  boolean done = false;
  if (qr.getSize() > 0) {
    while (!done) {
    for (int i = 0; i < qr.getRecords().length; i++) {
      Contact contact = (Contact) qr.getRecords()[i];
      String fName = contact.getFirstName();
      String lName = contact.getLastName();
      System.out.println("Child contact " + (i + 1) + ": " + lName 
      + ", " + fName);
    }
    if (qr.isDone()) {
      done = true;
    } else {
      qr = connection.queryMore(qr.getQueryLocator());
    }
    }
  } else {
    System.out.println("No child contacts found.");
  }
}
```
