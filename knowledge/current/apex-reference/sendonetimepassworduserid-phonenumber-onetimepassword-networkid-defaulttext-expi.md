---
title: "sendOneTimePassword(userId, phoneNumber, oneTimePassword,
      networkId, defaultText, expId)"
domain: apex-reference
topic: sendonetimepassworduserid-phonenumber-onetimepassword-networkid-defaulttext-expi
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.605Z
keywords: [sendOneTimePassword, userId, phoneNumber, oneTimePassword, networkId, defaultText, expId, Calls, external, SMS, messaging, provider, send, Salesforce, one-time, password, user, identity, verification., Returns]
---

# sendOneTimePassword(userId, phoneNumber, oneTimePassword,
      networkId, defaultText, expId)

> Calls out to an external SMS messaging provider to send a Salesforce one-time password to
    an external user for identity verification. Returns an Auth.CustomOneTimePasswordDeliveryResult indicating whether the provider sent the
    message.

### sendOneTimePassword(userId, phoneNumber, oneTimePassword, networkId, defaultText, expId)

Calls out to an external SMS messaging provider to send a Salesforce one-time password to an external user for identity verification. Returns an Auth.CustomOneTimePasswordDeliveryResult indicating whether the provider sent the message.

#### Signature

public Auth.CustomOneTimePasswordDeliveryResult sendOneTimePassword(Id userId, String phoneNumber, String oneTimePassword, String defaultText, Id networkId, String experienceId)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

ID of the external user.

phoneNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user’s phone number. The phone number isn't necessarily verified by Salesforce.

oneTimePassword

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The OTP that the user receives.

networkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

defaultText

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The content of the default SMS message that the user receives. You can create custom messages instead of sending the default. For example, write code to send custom messages based on the Experience Cloud site ID.

expId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A custom value that determines what the user experiences.

#### Return Value

Type: [Auth.CustomOneTimePasswordDeliveryResult](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_CustomOneTimePasswordDeliveryResult.htm "Indicates the status of an attempt to send a one-time password (OTP) to an external user via a custom messaging provider.")