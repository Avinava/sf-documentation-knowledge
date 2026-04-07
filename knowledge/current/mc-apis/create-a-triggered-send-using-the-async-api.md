---
title: "Create a Triggered Send Using the Async API"
domain: mc-apis
topic: create-a-triggered-send-using-the-async-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.250Z
estimatedTokens: 691
keywords: [Triggered, Send, Async, API, ensure, call, queued, ready, once, completed, matter, happens, network, connection, prioritize, CorrellationID, ConversationID, track, exchange, emails, Sample, NET, Code, Items]
---

> By using the async API, you can ensure that your call is queued and ready to go once the call is completed, no matter what happens with your network connection. You can also prioritize triggered sends and use the CorrellationID and ConversationID objects to track an exchange of emails related to the

# Create a Triggered Send Using the Async API

By using the async API, you can ensure that your call is queued and ready to go once the call is completed, no matter what happens with your network connection. You can also prioritize triggered sends and use the CorrellationID and ConversationID objects to track an exchange of emails related to the triggered send.

Marketing Cloud must enable more functionality on your account so that you can set the priority on a triggered send. Contact your Marketing Cloud representative for more details on this feature and to enable this feature for your account.

### Sample .NET Code

```apex
private void TriggeredAsync()
{
            SoapClient framework = new SoapClient();
            framework.ClientCredentials.UserName.UserName = "XXX";
            framework.ClientCredentials.UserName.Password = "XXX";
            String requestID;
            String status;
            TriggeredSend ts = new TriggeredSend();
            Subscriber sub = new Subscriber();
            TriggeredSendDefinition tsd = new TriggeredSendDefinition();
            sub.EmailAddress = "help@example.com";
            sub.SubscriberKey = "help@example.com";
            sub.CorrelationID = "help@example.com_SUB_11111"
            tsd.CustomerKey = "TEXTEXT";
            ts.TriggeredSendDefinition = tsd;
            ts.Subscribers = new Subscriber[] { sub };
            CreateOptions co = new CreateOptions();
            co.RequestType = RequestType.Asynchronous;
            co.RequestTypeSpecified = true;
            co.SendResponseTo = new AsyncResponse[1];
            co.SendResponseTo[0] = new AsyncResponse();
            co.SendResponseTo[0].RespondWhen = RespondWhen.OnCallComplete;
            co.SendResponseTo[0].RespondWhenSpecified = true;
            co.SendResponseTo[0].ResponseType = AsyncResponseType.email;
            co.SendResponseTo[0].ResponseAddress = "help@example.com";
            co.SendResponseTo[0].IncludeResults = true;
            co.SendResponseTo[0].IncludeResultsSpecified = true;
            co.SendResponseTo[0].IncludeObjects = true;
            co.SendResponseTo[0].IncludeObjectsSpecified = true;
            co.ConversationID = "HELP_CONVERSATION_11111";
            CreateResult[] cresults = framework.Create(co, new APIObject[] { ts }, out requestID, out status);
            foreach (CreateResult result in cresults)
            {
                Console.WriteLine(result.StatusMessage);
            }
            Console.WriteLine(requestID + ": " + status);
            //Readline pauses the output so you can see the results
            Console.ReadLine();
}
```

## Related Items

[Asynchronous Processing](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm)

## Related Topics

- Asynchronous Processing (atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm)
