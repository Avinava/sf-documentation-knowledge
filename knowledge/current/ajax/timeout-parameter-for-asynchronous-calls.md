---
title: "Timeout Parameter for Asynchronous Calls"
domain: ajax
topic: timeout-parameter-for-asynchronous-calls
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.657Z
estimatedTokens: 260
keywords: [Timeout, Asynchronous, Calls, call, appropriate, amount, time, end, specify, callback, any]
---

# Timeout Parameter for Asynchronous Calls

> If an asynchronous call does not complete in an appropriate amount of time, you can end
  the call. To do this, specify the timeout parameter in
  the callback section of any asynchronous call.

# Timeout Parameter for Asynchronous Calls

If an asynchronous call does not complete in an appropriate amount of time, you can end the call. To do this, specify the timeout parameter in the callback section of any asynchronous call.

```

```

Values for this parameter are in milliseconds, and valid values are integers beginning with 1.

If the call is successful within the time specified by the callout, no additional actions are taken. If the call is not successful, the onFailure action is performed.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=ajax)

#### Warning

Use this parameter with caution. Because the timeout is performed on the client side, it is possible that the call may complete on the server but the timeout is still triggered. For example, you might issue a create call to create 100 new accounts, and any number of them, 1 or 100, might be created just before the timeout is triggered; your onFailure action would still occur, but the accounts would have been created.

## Code Examples

```
var account = new sforce.SObject("Account");
account.Name = "my new account";

sforce.connection.create([account], {onSuccess: print, onFailure: printerr, timeout: 100});
```
