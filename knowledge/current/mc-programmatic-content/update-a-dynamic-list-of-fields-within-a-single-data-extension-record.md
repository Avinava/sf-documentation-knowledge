---
title: "Update a Dynamic List of Fields within a Single Data Extension Record"
domain: mc-programmatic-content
topic: update-a-dynamic-list-of-fields-within-a-single-data-extension-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:28.838Z
estimatedTokens: 679
keywords: [Dynamic, Data, Extension, Record, contain, great, deal, requiring, updates, subscribers, subscription, center, However, may, want]
---

# Update a Dynamic List of Fields within a Single Data Extension Record

> A data extension can contain a great deal of information requiring updates from subscribers, such as data from a subscription center. However, you may not want to display all available fields to every subscriber, and some subscribers may see more fields than others. This procedure creates calls that

# Update a Dynamic List of Fields within a Single Data Extension Record

A data extension can contain a great deal of information requiring updates from subscribers, such as data from a subscription center. However, you may not want to display all available fields to every subscriber, and some subscribers may see more fields than others. This procedure creates calls that update only the fields available to a specific subscriber without revealing everything in a data extension.

Use this sample AMPscript as a model to create your own script.

```
%%[
/* We must keep retrieving querystring parameters for each value passed over from the front end */
SET @email = RequestParameter("email")

IF NOT EMPTY(@email) THEN

/* Now get the total number of fields in the form (added as a hidden field to store the counter). */
/* Since this is a pre-populating form, the user may have checked or unchecked options. This call must save/update them all. */
SET @ListNum = RequestParameter("listnum")
IF @ListNum > 0 THEN

/* Build Subscriber Object & set properties in order to update */
SET @sub_de = CreateObject("DataExtensionObject")
SetObjectProperty(@sub_de,"CustomerKey", "Downstream_Subscriber_Preference")

set @Attrib = CreateObject("APIProperty")
SetObjectProperty(@Attrib,"Name","Email Address")
SetObjectProperty(@Attrib,"Value",@email)
AddObjectArrayItem(@sub_de,"Properties", @Attrib)

SET @subrows = LookupOrderedRows("Downstream_Subscriber_Preference", 1, "Email Address", "Email Address", @email)
SET @alreadysub = false
IF RowCount(@subrows)==1 THEN
SET @alreadysub = true
ENDIF

FOR @l = 1 TO @ListNum DO

/* This is where the call populates the Subscriber preference record with the changes made on the front-end */
SET @listval = RequestParameter(Concat("list",@l))
SET @status = IIF(@listval == "on", "true", "false")
SET @ListName = RequestParameter(Concat("listname",@l))
Set @Attrib = CreateObject("APIProperty")
SetObjectProperty(@Attrib,"Name",@ListName)
SetObjectProperty(@Attrib,"Value",@status)
AddObjectArrayItem(@sub_de,"Properties", @Attrib)
NEXT @l

/* Here is where we actually update the Subscriber object */
IF @alreadysub THEN
Set @update_sub = InvokeUpdate(@sub_de,@update_sub_status,@update_sub_errorcode,@options)
ELSE
Set @update_sub = InvokeCreate(@sub_de,@update_sub_status,@update_sub_errorcode,@options)
ENDIF

IF @update_sub == "OK" THEN
/* Will display success on the Front End page */
]%% <b>Your Information has been Saved Successfully!</b>

%%[
ELSE
]%% <b><font color="red">%%=v(@update_sub)=%%! %%=v(@update_sub_status)=%% </font></b>
%%[
ENDIF

ELSE
%% <b><font color="red"> Error: No List Items found </font></b>
%%[
ENDIF

ELSE
]%% Bad Email value %%[
ENDIF
]%%
```
