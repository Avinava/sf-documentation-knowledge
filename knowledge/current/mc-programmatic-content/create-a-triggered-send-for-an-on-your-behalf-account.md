---
title: "Create a Triggered Send for an On-Your-Behalf Account"
domain: mc-programmatic-content
topic: create-a-triggered-send-for-an-on-your-behalf-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.318Z
estimatedTokens: 1179
keywords: [Prerequisites, Triggered, Send, On-Your-Behalf, Account, AMPscript, administrator, overall, interaction, retaining, customization, options, user, consistent, call, structure, spread, over, sev, Sample]
---

> Using AMPscript to create a triggered send for an On-Your-Behalf account allows an administrator to create the overall interaction while retaining the customization options available to an On-Your-Behalf user. Use a consistent call and structure with your triggered sends and spread them out over sev

# Create a Triggered Send for an On-Your-Behalf Account

Using AMPscript to create a triggered send for an On-Your-Behalf account allows an administrator to create the overall interaction while retaining the customization options available to an On-Your-Behalf user. Use a consistent call and structure with your triggered sends and spread them out over several On-Your-Behalf accounts.

## Prerequisites

This AMPscript example requires an Enterprise account.

## Example

Use this AMPscript as a model of your triggered send. You must set the Channel Member ID to the ID of the On-Your-Behalf account at the end of the AMPscript example.

### Sample AMPscript

```
VAR @sub, @attr, @list, @statusCode, @statusMsg, @subKey, @errorCode

//Create a subscriber object using the provided email address
SET @subKey = RequestParameter("EmailAddress")
SET @sub = CreateObject("Subscriber")

//Set the email address as the subscriber key value for the contact
IF NOT EMPTY(@subKey) THEN     SetObjectProperty(@sub, "SubscriberKey", @subKey)
ENDIF
SetObjectProperty(@sub, "EmailAddress", RequestParameter("EmailAddress"))

//Set the first name value for the contact using the value from the request
IF NOT IsNull(RequestParameter("First Name")) THEN
    SET @attr = CreateObject("Attribute")
    SetObjectProperty(@attr, "Name", "First Name")
    SetObjectProperty(@attr, "Value", RequestParameter("First Name"))
    AddObjectArrayItem(@sub, "Attributes", @attr)
ENDIF

//Set the middle initial value for the contact using the value from the request
IF NOT IsNull(RequestParameter("Middle Initial")) THEN
    SET @attr = CreateObject("Attribute")
    SetObjectProperty(@attr, "Name", "Middle Initial")
    SetObjectProperty(@attr, "Value", RequestParameter("Middle Initial"))
    AddObjectArrayItem(@sub, "Attributes", @attr)
ENDIF

//Set the last name value for the contact using the value from the request
IF NOT IsNull(RequestParameter("Last Name")) THEN
    SET @attr = CreateObject("Attribute")
    SetObjectProperty(@attr, "Name", "Last Name")
    SetObjectProperty(@attr, "Value", RequestParameter("Last Name"))
    AddObjectArrayItem(@sub, "Attributes", @attr)
ENDIF

//Indicate the OYB account from which the triggered send originates, add to array of attributes from the request
SET @attr = CreateObject("Attribute")
SetObjectProperty(@attr, "Name", "ChannelMemberID")
SetObjectProperty(@attr, "Value", "INSERT NUMBER HERE")
AddObjectArrayItem(@sub, "Attributes", @attr)

//Add a timestamp value to the triggered send, add to array of attributes from the request
SET @attr = CreateObject("Attribute")
SetObjectProperty(@attr, "Name", "date_added")
SetObjectProperty(@attr, "Value", Format(Now(),"MM/dd/yyyy"))
AddObjectArrayItem(@sub, "Attributes", @attr)

//Indicate the subscriber list used as part of the triggered send
SET @list = CreateObject("SubscriberList")
SetObjectProperty(@list, "Status", "Active")
SetObjectProperty(@list, "ID", "INSERT NUMBER HERE")
SetObjectProperty(@list, "Action", "create")
AddObjectArrayItem(@sub, "Lists", @list)

//Check the status of the send and raise an error if something goes wrong
SET @statusCode = InvokeCreate(@sub, @statusMsg, @errorCode)

IF @statusCode != "OK" THEN
    RaiseError(@statusMsg, 0, @statusCode, @errorCode)

ELSE

VAR @ts, @tsDef, @ts_sub, @ts_attr, @tsctr, @ts_subkey, @ts_statusCode, @ts_statusMsg, @owner, @client

//Create the triggered send and set the email address used for the send
SET @ts = CreateObject("TriggeredSend")
SET @tsDef = CreateObject("TriggeredSendDefinition")
SET @ts_subkey = RequestParameter("EmailAddress")

//Indicate the triggered send definition used to create the triggered send
SetObjectProperty(@tsDef, "CustomerKey", "4466")
SetObjectProperty(@ts, "TriggeredSendDefinition", @tsDef)

//Set the contact as the recipient for the triggered send
SET @ts_sub = CreateObject("Subscriber")
SetObjectProperty(@ts_sub, "EmailAddress", RequestParameter("EmailAddress"))

//Set the contact email address as the subscriber key
IF NOT EMPTY(@ts_subkey) THEN
    SetObjectProperty(@ts_sub, "SubscriberKey", @ts_subkey)
ELSE
    SetObjectProperty(@ts_sub, "SubscriberKey", RequestParameter("EmailAddress"))
ENDIF

//Set ownership information for the triggered send
SET @owner = CreateObject("Owner")
SET @client = CreateObject("ClientID")

SetObjectProperty(@client, "ID", "INSERT NUMBER HERE")
SetObjectProperty(@owner, "Client", @client)
SetObjectProperty(@ts_sub, "Owner", @owner)

AddObjectArrayItem(@ts, "Subscribers", @ts_sub)
SET @ts_statusCode = InvokeCreate(@ts, @ts_statusMsg, @errorCode)

IF @ts_statusCode != "OK" THEN
    RaiseError(concat(@ts_statusMsg,@ts_subkey,@ts), 0, @ts_statusCode, @errorCode)
ENDIF

ENDIF
```
