---
title: "Create a Complex Filter Via AMPscript"
domain: mc-programmatic-content
topic: create-a-complex-filter-via-ampscript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.721Z
estimatedTokens: 373
keywords: [Complex, Filter, Via, AMPscript, sort, desired, records, larger, data, code, sample, below, separates, subscribers, email]
---

# Create a Complex Filter Via AMPscript

> Use a complex filter to sort out desired records from a larger set of data. For example, the code sample below separates out subscribers in a given email send definition instance that received a send after December 1st, 2009. Use this sample AMPscript as a model to create your own code.

# Create a Complex Filter Via AMPscript

Use a complex filter to sort out desired records from a larger set of data. For example, the code sample below separates out subscribers in a given email send definition instance that received a send after December 1st, 2009. Use this sample AMPscript as a model to create your own code.

```
Set @retrieveRequest_ = CreateObject("RetrieveRequest")
    SetObjectProperty(@retrieveRequest,"ObjectType","Send")
    AddObjectArrayItem(@retrieveRequest,"Properties","Status")
    AddObjectArrayItem(@retrieveRequest,"Properties","NumberTargeted")
    AddObjectArrayItem(@retrieveRequest,"Properties","NumberSent")
    AddObjectArrayItem(@retrieveRequest,"Properties","EmailSendDefinition.CustomerKey")
    AddObjectArrayItem(@retrieveRequest,"Properties","SentDate")

Set @sf1 = CreateObject("SimpleFilterPart")
    SetObjectProperty(@sf1,"Property","EmailSendDefinition.CustomerKey")
    SetObjectProperty(@sf1,"SimpleOperator","equals")
    AddObjectArrayItem(@sf1,"Value","KEY")

Set @sf2 = CreateObject("SimpleFilterPart")
    SetObjectProperty(@sf2,"Property","SendDate")
    SetObjectProperty(@sf2,"SimpleOperator","greaterThan")
    AddObjectArrayItem(@sf2,"Value",Format("12/1/2009","yyyy-MM-dd"))

Set @cf1 = CreateObject("ComplexFilterPart")
    SetObjectProperty(@cf1,"LeftOperand",@sf1)
    SetObjectProperty(@cf1,"RightOperand",@sf2)
    SetObjectProperty(@cf1,"LogicalOperator","AND")

SetObjectProperty(@retrieveRequest,"Filter",@cf1)
```
