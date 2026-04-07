---
title: "Pass Content to a Triggered Send Message at Send Time"
domain: mc-programmatic-content
topic: pass-content-to-a-triggered-send-message-at-send-time
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.672Z
estimatedTokens: 605
keywords: [Pass, Content, Triggered, Send, Message, Time, manipulate, Construct, variables, variable, XML, email, NET, Code, AMPscript]
---

> Pass content to a triggered send message at send time so that the triggered send can manipulate that content. Construct a triggered send with variables and pass the content to those variables at send time. In this example, the variable contains information in an XML format so that the email message 

# Pass Content to a Triggered Send Message at Send Time

Pass content to a triggered send message at send time so that the triggered send can manipulate that content. Construct a triggered send with variables and pass the content to those variables at send time. In this example, the variable contains information in an XML format so that the email message can manipulate this data in the email message.

Use the sample code below as a model for your own call. This sample code demonstrates both the triggered send and the AMPscript within the triggered send.

## .NET Code

You must use an existing profile attribute or data extension field as a container for the passed-in XML. In this example, the AMPscript pulls information from an attribute named XML previously created by the owner of the account.

```
TriggeredSendDefinition tsd = new TriggeredSendDefinition();
tsd.CustomerKey = "TriggeredSendTest_xml";
TriggeredSend ts = new TriggeredSend();
ts.TriggeredSendDefinition = tsd;

ts.Subscribers = new Subscriber[1]; ts.Subscribers[0] = new Subscriber();
ts.Subscribers[0].EmailAddress = "subscriber@example.com";
ts.Subscribers[0].SubscriberKey = "subscriber@example.com";

ts.Subscribers[0].Attributes = new ExactTargetClient.Attribute[1];
ts.Subscribers[0].Attributes[0] = new ExactTargetClient.Attribute();
ts.Subscribers[0].Attributes[0].Name = "XML";
ts.Subscribers[0].Attributes[0].Value = "<Product><ProductID>1</ProductID><Price>$1.99</Price><Code>123</Code><Brand>Northern Trail Outfitters</Brand></Product>";
```

## AMPscript in Email Message

This AMPscript takes the passed-in XML, assigns different information to the appropriate variables, and displays the information in the triggered send.

```
%%[
Set @myxml = xml
set @rsProductId = BuildRowsetFromXML(@myxml,"//Product/ProductId",1)
set @rsProductPrice = BuildRowsetFromXML(@myxml,"//Product/Price",1)
set @rsProductCode = BuildRowsetFromXML(@myxml,"//Product/Code",1)
set @rsProductBrand = BuildRowsetFromXML(@myxml,"//Product/Brand",1)

set @ProductId = Field(Row(@rsProductId,1),"Value")
set @ProductPrice = Field(Row(@rsProductPrice,1),"Value")
set @ProductCode = Field(Row(@rsProductCode,1),"Value")
set @ProductBrand = Field(Row(@rsProductBrand,1),"Value")

]%%
<br><br>
ProductId: %%=v(@ProductId)=%%  <br>
ProductPrice: %%=v(@ProductPrice)=%% <br>
ProductCode: %%=v(@ProductCode)=%% <br>
ProductBrand: %%=v(@ProductBrand)=%% <br>
```
