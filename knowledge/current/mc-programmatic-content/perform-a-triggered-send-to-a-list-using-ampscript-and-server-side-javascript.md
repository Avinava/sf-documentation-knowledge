---
title: "Perform a Triggered Send to a List Using AMPscript and Server-Side JavaScript"
domain: mc-programmatic-content
topic: perform-a-triggered-send-to-a-list-using-ampscript-and-server-side-javascript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.270Z
estimatedTokens: 179
keywords: [Perform, Triggered, Send, AMPscript, Server-Side, JavaScript, sample, code, model, own, call]
---

> Use this sample code as a model for your own call.

# Perform a Triggered Send to a List Using AMPscript and Server-Side JavaScript

Use this sample code as a model for your own call.

```
%%[
VAR @TSD, @ListID
SET @TSD = "TrigToAList"
]%%
<script runat=server>
    Platform.Load("Core","1");
    var TSD = Variable.GetValue("@TSD");
    var results = TriggeredSend.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:TSD});
    var count = results.length;
    var ListID = results[0].List.ID;

    //Write the result
    Write(Stringify(ListID));

    //Set the Variable to be accessible in AMPscript
    Variable.SetValue("@ListID",Stringify(ListID));
</script>
%%[
SET @PassedInListID = @ListID
]%%
FROM AMPscript ListID = %%=v(@PassedInListID)=%%
```
