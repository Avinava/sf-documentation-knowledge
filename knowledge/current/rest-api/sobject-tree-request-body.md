---
title: "sObject Tree Request Body"
domain: rest-api
topic: sobject-tree-request-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:25.180Z
keywords: [sObject, Tree, Request, Body, Important, Collection, Input]
---

# sObject Tree Request Body

# sObject Tree Request Body

Describes a collection of sObject trees to create with the sObject Tree resource.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_rest)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## sObject Tree Collection Input

The request body contains a records collection that includes sObject trees.

Properties

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| records | sObject Tree Input[] | Collection of record trees to create. Each tree’s root record type must correspond to the sObject specified in the sObject Tree URI. | Required |

Root XML Tag

<SObjectTreeRequest>

JSON example

```

```

XML example

```

```

## sObject Tree Input

An sObject tree is a recursive data structure that contains a root record, its data, and its child records represented as other sObject trees.

Properties

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| attributes | Collection | Attributes for this record. The attributes property contains two subproperties:type (required)—This record’s type.referenceId (required)—Reference ID for this record. The ID is case-sensitive and must be unique in the context of the request. Values must start with an alphanumeric character and contain only letters, numbers, or underscores (’_’).In XML, include attributes inside the records element. | Required |
| Required object fields | Depends on field | Required fields and field values for this record. | Required |
| Optional object fields | Depends on field | Optional fields and field values for this record. | Optional |
| Child relationships | sObject Tree Collection Input | This record’s child relationships, such as an account’s child contacts. Child relationships are either master-detail or lookup relationships. To view an object’s valid child relationships, use the sObject Describe resource or Schema Builder. The value of this property is an sObject Tree Collection Input that contains child sObject trees. | Optional |

Root XML Tag

<records>

JSON example

```

```

XML example

```

```