---
title: "Sets of Objects"
domain: apex-guide
topic: sets-of-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.992Z
estimatedTokens: 194
keywords: [Objects, contain, sObjects, among, elements]
---

# Sets of Objects

> Sets can contain sObjects among other types of elements.

# Sets of Objects

Sets can contain sObjects among other types of elements.

Sets contain unique elements. Uniqueness of sObjects is determined by comparing the objects’ fields. For example, if you try to add two accounts with the same name to a set, with no other fields set, only one sObject is added to the set.

```

```

If you add a description to one of the accounts, it is considered unique and both accounts are added to the set.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

If set elements are objects, and these objects change after being added to the collection, they won’t be found anymore when using, for example, the contains or containsAll methods, because of changed field values.

## Code Examples

```apex
// Create two accounts, a1 and a2
Account a1 = new account(name='MyAccount');
Account a2 = new account(name='MyAccount');

// Add both accounts to the new set 
Set<Account> accountSet = new Set<Account>{a1, a2};

// Verify that the set only contains one item
System.assertEquals(accountSet.size(), 1);
```

```apex
// Create two accounts, a1 and a2, and add a description to a2
Account a1 = new account(name='MyAccount');
Account a2 = new account(name='MyAccount', description='My test account');

// Add both accounts to the new set
Set<Account> accountSet = new Set<Account>{a1, a2};

// Verify that the set contains two items
System.assertEquals(accountSet.size(), 2);
```
