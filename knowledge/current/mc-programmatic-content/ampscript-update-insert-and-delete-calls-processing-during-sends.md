---
title: "AMPscript Update, Insert, and Delete Calls Processing During Sends"
domain: mc-programmatic-content
topic: ampscript-update-insert-and-delete-calls-processing-during-sends
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.546Z
estimatedTokens: 762
keywords: [AMPscript, Insert, Calls, Processing, how, Marketing, Cloud, processes, contained, emails, landing, pages, properly, obtains, email]
---

# AMPscript Update, Insert, and Delete Calls Processing During Sends

> Use this information about how the Marketing Cloud processes AMPscript calls contained within emails and landing pages to create AMPscript that properly obtains and processes information from your email sends and data extensions.

# AMPscript Update, Insert, and Delete Calls Processing During Sends

Use this information about how the Marketing Cloud processes AMPscript calls contained within emails and landing pages to create AMPscript that properly obtains and processes information from your email sends and data extensions.

## Scenario

Northern Trail Outfitters uses data extensions to manage the subscriber information used for their email sends, and those sends include calls to update records with new or different subscriber information. The person handling these records writes some AMPscript to check and see if the data extension containing those records updated using an InsertDE() call if the record doesn't yet exist. However, at the end of the process, that person receives an error telling them the application cannot insert a duplicate value for the primary key in the data extension.

## How the Application Handles AMPscript Calls

Instead of making several different AMPscript calls as part of an email send, the Marketing Cloud takes all applicable AMPscript calls and completes them in one call at the end of the send. In the above scenario, the AMPscript call using the InsertDE() function comes after the system added the row as part of the email send, and thus the Marketing Cloud errors out that call because the row already exists.

In this case, an UpsertDE() AMPscript call handles the check on the existence of the row and adds any additional or necessary information. When writing your AMPscript, always remember that all calls will process at the end of the subscriber batch when performing email sends.

This sample code correctly checks rows for information after a send and updates all appropriate fields:

```
%%[
/* DO NOT EDIT */
Var @jid, @pnum, @ctype, @ptype, @stype, @pcode
Var @Hello
Set @jid = jobid
/* Set Variables here for easy editing */
Set @pnum = "SendTest"
Set @ctype = "SendTest"
Set @ptype = "SendTest"
Set @stype = "SendTest"
Set @pcode = "SendTest"
/* Check to see if a record exists with this JobID */
Set @lookUp = LookupRows("Campaign Log","JobID",@jid)
IF RowCount(@lookUp) == 0 THEN
Set @Hello = 'Hello?'
/* If no record exists with this JobID Insert Variables into the Data Extension */
UpsertDE("Campaign Log", 1, "JobID", @jid, "ProjectNumber", @pnum, "ComType", @ctype, "ProgType", @ptype, "ProgCode", @pcode, "ProgSubType", @stype)
ELSE
Set @Hello = 'Hola!'
ENDIF
]%%
<h1>Variables</h1>
%%=v(@jid)=%%
<br/>
%%=v(@Hello)=%%
<br/>
%%=v(@lookUp)=%%
<br/>
%%=EMPTY(@lookUp)=%%
<br/>
%%=RowCount(@lookUp)=%%
<br/>
%%=v(@pnum)=%%
<br/>
%%=v(@ctype)=%%
<br/>
%%=v(@ptype)=%%
<br/>
%%=v(@stype)=%%
<br/>
%%=v(@pcode )=%%
<br/>
```

The sample code declares the variables in the data extension and checks that data extension for a row with the send's JobID. If the record does not exist, the AMPscript adds the row and the pertinent information. If the row does exist, the AMPscript updates that row with the information. This code accomplishes the task and avoids any problems with errors due to duplicate JobIDs.

## Code Examples

```
%%[ 
/* DO NOT EDIT */ 
Var @jid, @pnum, @ctype, @ptype, @stype, @pcode 
Var @Hello 
Set @jid = jobid 
/* Set Variables here for easy editing */ 
Set @pnum = "SendTest" 
Set @ctype = "SendTest" 
Set @ptype = "SendTest" 
Set @stype = "SendTest" 
Set @pcode = "SendTest" 
/* Check to see if a record exists with this JobID */ 
Set @lookUp = LookupRows("Campaign Log","JobID",@jid) 
IF RowCount(@lookUp) == 0 THEN 
Set @Hello = 'Hello?' 
/* If no record exists with this JobID Insert Variables into the Data Extension */ 
UpsertDE("Campaign Log", 1, "JobID", @jid, "ProjectNumber", @pnum, "ComType", @ctype, "ProgType", @ptype, "ProgCode", @pcode, "ProgSubType", @stype) 
ELSE 
Set @Hello = 'Hola!' 
ENDIF 
]%% 
<h1>Variables</h1> 
%%=v(@jid)=%% 
<br/> 
%%=v(@Hello)=%% 
<br/> 
%%=v(@lookUp)=%% 
<br/> 
%%=EMPTY(@lookUp)=%% 
<br/> 
%%=RowCount(@lookUp)=%% 
<br/> 
%%=v(@pnum)=%% 
<br/> 
%%=v(@ctype)=%% 
<br/> 
%%=v(@ptype)=%% 
<br/> 
%%=v(@stype)=%% 
<br/> 
%%=v(@pcode )=%% 
<br/>
```
