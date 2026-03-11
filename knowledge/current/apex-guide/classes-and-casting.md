---
title: "Classes and Casting"
domain: apex-guide
topic: classes-and-casting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:46.512Z
keywords: [Classes, Casting, Tip]
---

# Classes and Casting

# Classes and Casting

In general, all type information is available at run time. This means that Apex enables casting, that is, a data type of one class can be assigned to a data type of another class, but only if one class is a subclass of the other class. Use casting when you want to convert an object from one data type to another.

In the following example, CustomReport extends the class Report. Therefore, it is a subclass of that class. This means that you can use casting to assign objects with the parent data type (Report) to the objects of the subclass data type (CustomReport).

```

```

```

```

In the following code segment, a custom report object is first added to a list of report objects. Then the custom report object is returned as a report object, which is then cast back into a custom report object.

```

```

Casting Example ![A flowchart of the Apex casting process](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fcasting.jpg&folder=apexcode)

In addition, an interface type can be cast to a sub-interface or a class type that implements that interface.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

To verify if a class is a specific type of class, use the instanceOf keyword. For more information, see [Using the instanceof Keyword](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm).

1.  [Classes and Collections](atlas.en-us.apexcode.meta/apexcode/apex_classes_collections.htm)  
    
2.  [Collection Casting](atlas.en-us.apexcode.meta/apexcode/apex_classes_casting_collections.htm)  
    

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation.htm "Annotations")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_java_diffs.htm "Differences Between Apex Classes and Java Classes")