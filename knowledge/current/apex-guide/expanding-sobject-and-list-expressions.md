---
title: "Expanding sObject and List Expressions"
domain: apex-guide
topic: expanding-sobject-and-list-expressions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.669Z
estimatedTokens: 237
keywords: [Expanding, sObject, Expressions, Java, expanded, references, respectively, form, new]
---

# Expanding sObject and List Expressions

> As in Java, sObject and list expressions can be expanded with method
references and list expressions, respectively, to form new expressions.

# Expanding sObject and List Expressions

As in Java, sObject and list expressions can be expanded with method references and list expressions, respectively, to form new expressions.

In the following example, a new variable containing the length of the new account name is assigned to acctNameLength.

```

```

In the above, new Account\[\] generates a list.

The list is populated with one element by the new statement {new Account(name='Acme')}.

Item 0, the first item in the list, is then accessed by the next part of the string \[0\].

The name of the sObject in the list is accessed, followed by the method returning the length name.length().

In the following example, a name that has been shifted to lower case is returned. The SOQL statement returns a list of which the first element (at index 0) is accessed through \[0\]. Next, the Name field is accessed and converted to lowercase with this expression .Name.toLowerCase().

```

```

## Code Examples

```
Integer acctNameLength = new Account[]{new Account(Name='Acme')}[0].Name.length();
```

```
String nameChange = [SELECT Name FROM Account][0].Name.toLowerCase();
```
