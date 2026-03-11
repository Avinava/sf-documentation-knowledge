---
title: "sendEmailMessage(emailMessageIds,
    allOrNothing)"
domain: apex-reference
topic: sendemailmessageemailmessageids-allornothing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.244Z
keywords: [sendEmailMessage, emailMessageIds, allOrNothing, Sends, draft, email, messages, defined, specified, message, IDs, returns, list, SendEmailResult, objects., Signature, Parameters, Return, Value, Usage]
---

# sendEmailMessage(emailMessageIds,
    allOrNothing)

> Sends draft email messages as defined by the specified
      email message IDs and returns a list of SendEmailResult objects.

### sendEmailMessage(emailMessageIds, allOrNothing)

Sends draft email messages as defined by the specified email message IDs and returns a list of SendEmailResult objects.

#### Signature

public Messaging.SendEmailResult\[\] sendEmailMessage(List<ID\> emailMessageIds, Boolean allOrNothing)

#### Parameters

emailMessageIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

allOrNothing

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: [Messaging.SendEmailResult](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm#apex_classes_email_outbound_sendemailresult "Contains the result of sending an email message.")\[\]

If the emailMessageIds parameter is null, the method throws a System.IllegalArgumentException exception.

#### Usage

The sendEmailMessage method assumes that the optional allOrNothing parameter is always false and ignores the value you set. Delivery of all messages is attempted even if some messages fail due to an error.

The email address of the user calling the sendEmailMessage method is inserted in the From Address field of the email header and the Email Message record.

#### Example

This example shows how to send a draft email message. It creates a case and a new email message associated with the case. Next, the example sends a draft email message and checks the results. Before running this example, make sure to replace the email address with a valid address.

```

```

#### Versioned Behavior Changes

In API version 54.0 and later, a null emailMessageIds parameter results in a System.IllegalArgumentException exception. In API version 53.0 and earlier, a null emailMessageIds parameter results in an error.