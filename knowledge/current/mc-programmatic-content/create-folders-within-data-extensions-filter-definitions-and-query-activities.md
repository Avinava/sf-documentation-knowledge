---
title: "Create Folders Within Data Extensions, Filter Definitions, and Query Activities"
domain: mc-programmatic-content
topic: create-folders-within-data-extensions-filter-definitions-and-query-activities
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.730Z
estimatedTokens: 2232
keywords: [Folders, Data, Extensions, Filter, Definitions, Query, Activities, organize, specific, objects, optimized, access, better, organization, sample]
---

# Create Folders Within Data Extensions, Filter Definitions, and Query Activities

> Use folders to organize specific types of objects for optimized access and better organization. Use this sample code as a model for your own call:

# Create Folders Within Data Extensions, Filter Definitions, and Query Activities

Use folders to organize specific types of objects for optimized access and better organization. Use this sample code as a model for your own call:

## Data Extension Folder

```
%%[

/* Create the data extension folder */

SET @rr_de_folder = CreateObject("RetrieveRequest")
SetObjectProperty(@rr_de_folder, "ObjectType", "DataFolder")
AddObjectArrayItem(@rr_de_folder, "Properties", "ID")
AddObjectArrayItem(@rr_de_folder, "Properties", "Name")

/* Create and populate a SimpleFilterPart and add it to the RetrieveRequest*/
    SET @sf1 = CreateObject("SimpleFilterPart")
    SetObjectProperty(@sf1, "Property", "Name")
    SetObjectProperty(@sf1, "SimpleOperator", "equals")
    AddObjectArrayItem(@sf1, "Value", "A-B Test tool")

    SET @sf2 = CreateObject("SimpleFilterPart")
    SetObjectProperty(@sf2, "Property", "ContentType")
    SetObjectProperty(@sf2, "SimpleOperator", "equals")
    AddObjectArrayItem(@sf2, "Value", "DataExtension")

        Set @cf1 = CreateObject("ComplexFilterPart")
        SetObjectProperty(@cf1,"LeftOperand",@sf1)
        SetObjectProperty(@cf1,"RightOperand",@sf2)
        SetObjectProperty(@cf1,"LogicalOperator","AND")

    SetObjectProperty(@rr_de_folder, "Filter", @cf1)

/* Execute the Retrieve */
SET @rr_de = InvokeRetrieve(@rr_de_folder)

/* DOES A FOLDER EXIST*/

if ROWCOUNT(@rr_de) > 0 then

/* YES */
SET @de_folderID = field(row(@rr_de,1),"ID")
else

/* NO */

/* CREATING FOLDER */

Set @df = CreateObject("DataFolder")
SetObjectProperty(@df,"Name","A-B Test tool")
SetObjectProperty(@df,"Description","Files associated with ET test tool")
SetObjectProperty(@df,"ContentType","DataExtension")
SetObjectProperty(@df,"IsActive",1)
SetObjectProperty(@df,"IsEditable",1)
SetObjectProperty(@df,"AllowChildren",1)

Set @pf = CreateObject("DataFolder")
SetObjectProperty(@pf,"ID", 264239)

SetObjectProperty(@df,"ParentFolder",@pf)
Set @StatCode = InvokeCreate(@df, @StatMessage, @ErrorCode)

/* Get the folder ID */

SET @rr_de_folder2 = CreateObject("RetrieveRequest")
SetObjectProperty(@rr_de_folder2, "ObjectType", "DataFolder")
AddObjectArrayItem(@rr_de_folder2, "Properties", "ID")
AddObjectArrayItem(@rr_de_folder2, "Properties", "Name")

 SET @sf3 = CreateObject("SimpleFilterPart")
  SetObjectProperty(@sf3, "Property", "Name")
  SetObjectProperty(@sf3, "SimpleOperator", "equals")
  AddObjectArrayItem(@sf3, "Value", "A-B Test tool")

  SET @sf4 = CreateObject("SimpleFilterPart")
  SetObjectProperty(@sf4, "Property", "ContentType")
  SetObjectProperty(@sf4, "SimpleOperator", "equals")
  AddObjectArrayItem(@sf4, "Value", "DataExtension")

Set @cf2 = CreateObject("ComplexFilterPart")
SetObjectProperty(@cf2,"LeftOperand",@sf3)
SetObjectProperty(@cf2,"RightOperand",@sf4)
SetObjectProperty(@cf2,"LogicalOperator","AND")

  SetObjectProperty(@rr_de_folder2, "Filter", @cf2)

/* Execute the Retrieve */
SET @rr_de2 = InvokeRetrieve(@rr_de_folder2)
SET @de_folderID = field(row(@rr_de2,1),"ID")

endif

@de_folderID = %%= v(@de_folderID) =%%<br />

]%%
```

## Filter Definition Folder

```
SET @rr_filter_folder = CreateObject("RetrieveRequest")
SetObjectProperty(@rr_filter_folder, "ObjectType", "DataFolder")
AddObjectArrayItem(@rr_filter_folder, "Properties", "ID")
AddObjectArrayItem(@rr_filter_folder, "Properties", "Name")

/* Create and populate a SimpleFilterPart and add it to the RetrieveRequest*/
    SET @sf1 = CreateObject("SimpleFilterPart")
    SetObjectProperty(@sf1, "Property", "Name")
    SetObjectProperty(@sf1, "SimpleOperator", "equals")
    AddObjectArrayItem(@sf1, "Value", "A-B Test tool")

    SET @sf2 = CreateObject("SimpleFilterPart")
    SetObjectProperty(@sf2, "Property", "ContentType")
    SetObjectProperty(@sf2, "SimpleOperator", "equals")
    AddObjectArrayItem(@sf2, "Value", "filterdefinition")

Set @cf1 = CreateObject("ComplexFilterPart")
SetObjectProperty(@cf1,"LeftOperand",@sf1)
SetObjectProperty(@cf1,"RightOperand",@sf2)
SetObjectProperty(@cf1,"LogicalOperator","AND")

    SetObjectProperty(@rr_filter_folder, "Filter", @cf1)

/* Execute the Retrieve */
SET @rr_filter = InvokeRetrieve(@rr_filter_folder)

/* DOES A FOLDER EXIST*/

if ROWCOUNT(@rr_filter) > 0 then

/* YES */
SET @filter_folderID = field(row(@rr_filter,1),"ID")
else

/* NO */

/* CREATING FOLDER */

Set @df = CreateObject("DataFolder")
SetObjectProperty(@df,"Name","A-B Test tool")
SetObjectProperty(@df,"Description","Files associated with ET test tool")
SetObjectProperty(@df,"ContentType","filterdefinition")
SetObjectProperty(@df,"IsActive",1)
SetObjectProperty(@df,"IsEditable",1)
SetObjectProperty(@df,"AllowChildren",1)

Set @pf = CreateObject("DataFolder")
SetObjectProperty(@pf,"ID", 337465)

SetObjectProperty(@df,"ParentFolder",@pf)
Set @StatCode = InvokeCreate(@df, @StatMessage, @ErrorCode)

/* Get the folder ID */

SET @rr_filter_folder2 = CreateObject("RetrieveRequest")
SetObjectProperty(@rr_filter_folder2, "ObjectType", "DataFolder")
AddObjectArrayItem(@rr_filter_folder2, "Properties", "ID")
AddObjectArrayItem(@rr_filter_folder2, "Properties", "Name")

 SET @sf3 = CreateObject("SimpleFilterPart")
  SetObjectProperty(@sf3, "Property", "Name")
  SetObjectProperty(@sf3, "SimpleOperator", "equals")
  AddObjectArrayItem(@sf3, "Value", "A-B Test tool")

  SET @sf4 = CreateObject("SimpleFilterPart")
  SetObjectProperty(@sf4, "Property", "ContentType")
  SetObjectProperty(@sf4, "SimpleOperator", "equals")
  AddObjectArrayItem(@sf4, "Value", "filterdefinition")

Set @cf2 = CreateObject("ComplexFilterPart")
SetObjectProperty(@cf2,"LeftOperand",@sf3)
SetObjectProperty(@cf2,"RightOperand",@sf4)
SetObjectProperty(@cf2,"LogicalOperator","AND")

  SetObjectProperty(@rr_filter_folder2, "Filter", @cf2)

/* Execute the Retrieve */
SET @rr_filter2 = InvokeRetrieve(@rr_filter_folder2)
SET @filter_folderID = field(row(@rr_filter2,1),"ID")
 endif

@filter_folderID = %%= v(@filter_folderID) =%%<br />
```

## Query Activity Folder

```
SET @rr_query_folder = CreateObject("RetrieveRequest")

SetObjectProperty(@rr_query_folder, "ObjectType", "DataFolder")
AddObjectArrayItem(@rr_query_folder, "Properties", "ID")
AddObjectArrayItem(@rr_query_folder, "Properties", "Name")

/* Create and populate a SimpleFilterPart and add it to the RetrieveRequest*/
SET @sf1 = CreateObject("SimpleFilterPart")
SetObjectProperty(@sf1, "Property", "Name")
SetObjectProperty(@sf1, "SimpleOperator", "equals")
AddObjectArrayItem(@sf1, "Value", "A-B Test tool")

SET @sf2 = CreateObject("SimpleFilterPart")
SetObjectProperty(@sf2, "Property", "ContentType")
SetObjectProperty(@sf2, "SimpleOperator", "equals")
AddObjectArrayItem(@sf2, "Value", "queryactivity")

Set @cf1 = CreateObject("ComplexFilterPart")
SetObjectProperty(@cf1,"LeftOperand",@sf1)
SetObjectProperty(@cf1,"RightOperand",@sf2)
SetObjectProperty(@cf1,"LogicalOperator","AND")

SetObjectProperty(@rr_query_folder, "Filter", @cf1)

/* Execute the Retrieve */
SET @rr_query = InvokeRetrieve(@rr_query_folder)

/* DOES A FOLDER EXIST*/

if ROWCOUNT(@rr_query) > 0 then

    /* YES */
    SET @query_folderID = field(row(@rr_query,1),"ID")

    else

    /* NO */

    /* CREATING FOLDER */

    Set @df = CreateObject("DataFolder")
    SetObjectProperty(@df,"Name","A-B Test tool")
    SetObjectProperty(@df,"Description","Files associated with ET test tool")
    SetObjectProperty(@df,"ContentType","queryactivity")
    SetObjectProperty(@df,"IsActive",1)
    SetObjectProperty(@df,"IsEditable",1)
    SetObjectProperty(@df,"AllowChildren",1)

    Set @pf = CreateObject("DataFolder")
    SetObjectProperty(@pf,"ID", 869592)

    SetObjectProperty(@df,"ParentFolder",@pf)
    Set @StatCode = InvokeCreate(@df, @StatMessage, @ErrorCode)

    /* Get the folder ID */

    SET @rr_query_folder2 = CreateObject("RetrieveRequest")
    SetObjectProperty(@rr_query_folder2, "ObjectType", "DataFolder")
    AddObjectArrayItem(@rr_query_folder2, "Properties", "ID")
    AddObjectArrayItem(@rr_query_folder2, "Properties", "Name")

    SET @sf3 = CreateObject("SimpleFilterPart")
    SetObjectProperty(@sf3, "Property", "Name")
    SetObjectProperty(@sf3, "SimpleOperator", "equals")
    AddObjectArrayItem(@sf3, "Value", "A-B Test tool")

    SET @sf4 = CreateObject("SimpleFilterPart")
    SetObjectProperty(@sf4, "Property", "ContentType")
    SetObjectProperty(@sf4, "SimpleOperator", "equals")
    AddObjectArrayItem(@sf4, "Value", "queryactivity")

    Set @cf2 = CreateObject("ComplexFilterPart")
    SetObjectProperty(@cf2,"LeftOperand",@sf3)
    SetObjectProperty(@cf2,"RightOperand",@sf4)
    SetObjectProperty(@cf2,"LogicalOperator","AND")

    SetObjectProperty(@rr_query_folder2, "Filter", @cf2)

    /* Execute the Retrieve */
    SET @rr_query2 = InvokeRetrieve(@rr_query_folder2)
    SET @query_folderID = field(row(@rr_query2,1),"ID")

    endif

]%%

@query_folderID =  %%= v(@query_folderID) =%%<br />
```
