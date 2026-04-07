---
title: "AMPscript 101"
domain: mc-programmatic-content
topic: ampscript-101
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:21.516Z
estimatedTokens: 926
keywords: [AMPscript, scenario, includes, aspects]
---

> This scenario includes information on these aspects of using AMPscript:

# AMPscript 101

This scenario includes information on these aspects of using AMPscript:

-   Creating variables in AMPscript
-   Using variables to set values in a data extension
-   Print the values of variables to the screen

## The AMPscript

This AMPscript provides the content for the entire email message:

```
%%[
/* 101 */ Var @memid, @fname, @lname, @prefname, @address, @zip, @mempref, @plat
Set @memid = MemberID
Set @fname = FirstName
Set @lname = LastName
Set @prefname = PrefName
Set @address = Address
Set @zip = Zip
Set @mempref = MemPref
Set @plat = Plat
/* 101 */
]%%%%= v(@fname) =%%, below are your account details
First Name:%%= v(@fname) =%%Last Name:%%= v(@lname) =%%
Preferred Name:%%= v(@prefname) =%% Address Address:%%= v(@address) =%%
Zip:%%= v(@zip) =%% Member Preferences Shopping Preference:%%= v(@mempref) =%%
Platinum Member:%%= v(@plat) =%%
```

A code block declaration sets off the first part of the AMPscript - %%\[ and \]%% - because that AMPscript spans over several lines located between the "/ *101* /" comments. The subscriber does not see the results of these variables yet. The Var command creates the variables named in that line of code, each separated by a comma. The Set commands give the variables the value of the information taken from a column in the data extension associated with the send.

```
%%[
/* 101 */ Var @memid, @fname, @lname, @prefname, @address, @zip, @mempref, @plat
Set @memid = MemberID
Set @fname = FirstName
Set @lname = LastName
Set @prefname = PrefName
Set @address = Address
Set @zip = Zip
Set @mempref = MemPref
Set @plat = Plat
/* 101 */
]%%
```

![Screenshot of Members data extension](/docs/resources/img/en-us/noversion?doc_id=images%2Fmembersdataextension.png&folder=mc-programmatic-content)

Inline code declarations set off the AMPscript within the email text - %%= and =%% - because the AMPscript refers to a variable that belongs to a single line of text within the email. In the email, information from the data extension associated with the email send replaces the AMPscript declarations.

```
%%= v(@fname) =%%, below are your account details
First Name:%%= v(@fname) =%%Last Name:%%= v(@lname) =%%
Preferred Name:%%= v(@prefname) =%% Address Address:%%= v(@address) =%%
Zip:%%= v(@zip) =%% Member Preferences Shopping Preference:%%= v(@mempref) =%%
Platinum Member:%%= v(@plat) =%%
The email itself begins with this template:
```

![Screenshot of Send Preview Screen](/docs/resources/img/en-us/noversion?doc_id=images%2F101sendpreviewscreennew.png&folder=mc-programmatic-content)

From here, paste the AMPscript into a content area:

![Screenshot of HTML email message](/docs/resources/img/en-us/noversion?doc_id=images%2F101htmlemail.png&folder=mc-programmatic-content)

This image displays the text version of the same email:

![Screenshot of text email message](/docs/resources/img/en-us/noversion?doc_id=images%2F101textemail.png&folder=mc-programmatic-content)

To test your email with the data extension you use for the actual send, click Send Preview and select the data extension from your available send options.

Choose a test recipient to start your preview with and click Generate Preview. You will see the information the AMPscript pulled from the data extension placed into the email:

![Screenshot of send preview email](/docs/resources/img/en-us/noversion?doc_id=images%2F101sendpreviewemail.png&folder=mc-programmatic-content)

Click the arrow keys to cycle through the other rows in the data extension. You see the fields change depending on the row selected. Send the email job after you complete the process. Each email you send includes information from the row associated with that subscriber.
