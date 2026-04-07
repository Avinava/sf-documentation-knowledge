---
title: "AMPscript Data Modification Functions"
domain: mc-programmatic-content
topic: ampscript-data-modification-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.772Z
estimatedTokens: 1055
keywords: [AMPscript, Data, Modification, Functions, Two, allow, modify, extension, Send, Time, Support, Landing]
---

# AMPscript Data Modification Functions

> Two sets of functions allow AMPscript to modify your data extension data:

# AMPscript Data Modification Functions

Two sets of functions allow AMPscript to modify your data extension data:

1.  Send time support
2.  Landing page support

These functions allow insert, update, upsert, and delete actions at the subscriber level. The use of these functions is restricted according to the content being processed by the Marketing Cloud system.

To differentiate between the columns being set and the key or filter fields for update and insert calls, see the second parameter for these calls. This second parameter must include a value of 1 or more to indicate the number of column name and column value pairs included in the key used to find the row to update. The remaining name and value pairs specify the columns to be updated and the new values.

```
%%=UPDATEDE("DE_To_Update",1,"Filter Column","Filter Value","Column","Value")=%%
```

## Send Time Support

If an error occurs, the subscriber emails for the batch will not send, and the system sets the job to an error status. If something interrupts the sending of the batch, these calls for the interrupted batch may repeat. Write these calls to successfully execute multiple times.

The calls execute only when they appear in the subscriber's preferred email type. Therefore, if a multi-part message builds for a subscriber with an HTML email preference, the functions in the text email body will not execute, even though it is built. In the same way, if a subscriber has a text email preference, only the functions in the text version of the email will be processed.

Review the \_SourceDE substitution string to reference the source data extension for a send so you don't need to hard-code the name.

```
%%=INSERTDE("CustomObject4","Region","None","Product",_SubscriberKey,"Price",99.77, "Inventory", 88,
"ExpireDate",NOW(),"Available",1,"Inventory",77,"Locale", LOOKUP("CustomObject3",
"Custom Object Value"
,"Region",Region),"_FromName","Bob",<"_FromEmail",LOOKUP("CustomObject2","EmailAddress",
"Region1",Region))=%% %%=UPDATEDE("CustomObject4",1,"Region","None","Available",0,"Price",100.77,"Inventory",0,
"ExpireDate",NOW())=%% %%=UPDATEDE(_SourceDE,1,"_CustomObjectKey",_CustomObjectKey,"Total & Credit - Cost",_CustomObjectKey,"SubscriberID",SubscriberID)=%% %%=UPSERTDE("ent.CustomObject4",2,"Region","None","Product",_SubscriberKey,"Available",0, "Price",100.77,"Inventory",0,"ExpireDate",NOW(),"Url",CONCAT(SubscriberID," Upsert"))=%% %%=DELETEDE("CustomObject4","Region","None")=%%
```

## Landing Page Support

The INSERTDATA, UPDATEDATA, UPSERTDATA, and DELETEDATA functions allow you to modify data extension data when building landing pages. This functionality differs from the send time functions in the following ways:

-   Landing page functions execute in real time as they appear in the landing page content.
-   Landing page functions return an integer specifying the number of rows affected by the requested execution. For upsert operations, if the initial update affects no rows, the system performs an insert and returns the number of rows affected by the last operation.
-   Landing page functions generate an error if they appear in content not built for landing pages.

If the INSERTDE, UPDATEDE, UPSERTDE, or DELETEDE counterparts appear in landing page content, they will execute in the same manner, except they will not return the number of rows affected. The functions will not execute in a single batch in this context.

### Example

```
%%=INSERTDATA("CustomObject4","Region","None","Product",_SubscriberKey,"Price",99.77, "Inventory", 88,
"ExpireDate",NOW(),"Available",1,"Inventory",77,"Locale",LOOKUP("CustomObject3","Custom Object Value","Region",Region),"_FromName","Bob","_FromEmail",LOOKUP("CustomObject2",
"EmailAddress","Region1",Region))=%%

%%=UPDATEDATA("CustomObject4",1,"Region","None","Available",0,"Price",100.77,"Inventory",
0,"ExpireDate",NOW())=%%

%%=UPSERTDATA("ent.CustomObject4",2,"Region","None","Product",_SubscriberKey,"Available",
0,"Price",100.77,"Inventory",0,
"ExpireDate",NOW(),"Url",CONCAT(SubscriberID," Upsert"))=%%

%%=DELETEDATA("CustomObject4","Region","None")=%%",NOW(),"Url",CONCAT(SubscriberID," Upsert"))=%% %%=DELETEDE("CustomObject4","Region","None")=%%
```
