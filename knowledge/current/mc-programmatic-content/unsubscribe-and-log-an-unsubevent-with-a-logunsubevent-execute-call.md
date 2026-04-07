---
title: "Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call"
domain: mc-programmatic-content
topic: unsubscribe-and-log-an-unsubevent-with-a-logunsubevent-execute-call
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:28.645Z
estimatedTokens: 568
keywords: [Unsubscribe, Log, UnsubEvent, LogUnsubEvent, Execute, Call, subscriber, tracked, against, specific, Job, own, landing, profile, center]
---

# Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call

> This call allows you to unsubscribe a subscriber and log an UnsubEvent that is tracked against a specific Job. Use this call when you create your own landing page or profile center functionality.

# Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call

This call allows you to unsubscribe a subscriber and log an UnsubEvent that is tracked against a specific Job. Use this call when you create your own landing page or profile center functionality.

Use this sample server-side JavaScript as a model for your own call:

```
var lue, lue_prop, Response;

lue = Platform.Function.CreateObject("ExecuteRequest");
Platform.Function.SetObjectProperty(lue,"Name","LogUnsubEvent");

//For accounts using the subscriber key functionality
lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "SubscriberKey");
Platform.Function.SetObjectProperty(lue_prop, "Value", subkey);
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

//For accounts not using the subscriber key functionality
//lue_prop = Platform.Function.CreateObject("APIProperty");
//Platform.Function.SetObjectProperty(lue_prop, "Name", "EmailAddress");
//Platform.Function.SetObjectProperty(lue_prop, "Value", subkey);
//Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "JobID");
Platform.Function.SetObjectProperty(lue_prop, "Value", jid);
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "ListID");
Platform.Function.SetObjectProperty(lue_prop, "Value", lid);
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "BatchID");
Platform.Function.SetObjectProperty(lue_prop, "Value", bid);
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "Reason");
Platform.Function.SetObjectProperty(lue_prop, "Value", "Profile Center Unsubscribe");
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

var statusAndRequest = [0,0];

Response = Platform.Function.InvokeExecute(lue, statusAndRequest);
```

## Code Examples

```
VAR @sid, @jid, @reason, @lue, @lue_prop, @lue_statusCode, @overallStatus, @requestId, @Response, @Status, @Error

SET @sid = IIF(Empty(RequestParameter("email_address")),RequestParameter("current_email_address"),RequestParameter("email_address"))
SET @jid = RequestParameter("jobid")
SET @listid = RequestParameter("listid")
SET @batchid = RequestParameter("batchid")
SET @reason = "Profile Center Unsubscribe"

SET @lue = CreateObject("ExecuteRequest")
SetObjectProperty(@lue,"Name","LogUnsubEvent")

SET @lue_prop = CreateObject("APIProperty")                 
SetObjectProperty(@lue_prop, "Name", "SubscriberKey")
SetObjectProperty(@lue_prop, "Value", @sid)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)

SET @lue_prop = CreateObject("APIProperty")
SetObjectProperty(@lue_prop, "Name", "JobID")
SetObjectProperty(@lue_prop, "Value", @jid)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)

SET @lue_prop = CreateObject("APIProperty")
SetObjectProperty(@lue_prop, "Name", "ListID")
SetObjectProperty(@lue_prop, "Value", @listid)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)

SET @lue_prop = CreateObject("APIProperty")
SetObjectProperty(@lue_prop, "Name", "BatchID")
SetObjectProperty(@lue_prop, "Value", @batchid)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)SET @lue_prop = CreateObject("APIProperty")
SetObjectProperty(@lue_prop, "Name", "Reason")
SetObjectProperty(@lue_prop, "Value", @reason)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)

/* You must set ClientID when working with On Your Behalf accounts
var @lue_oyb; 
set @lue_oyb = CreateObject('ClientID') 
SetObjectProperty(@lue_oyb, 'ID', @mid)
SetObjectProperty(@lue, 'Client', @lue_oyb)
*/

SET @lue_statusCode = InvokeExecute(@lue, @overallStatus, @requestId)

SET @Response = Row(@lue_statusCode, 1)
SET @Status = Field(@Response,"StatusMessage")
SET @Error = Field(@Response,"ErrorCode")
```
