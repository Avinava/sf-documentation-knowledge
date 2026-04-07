---
title: "AMPscript 301"
domain: mc-programmatic-content
topic: ampscript-301
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:26.246Z
estimatedTokens: 1785
keywords: [AMPscript, scenario, includes, aspects]
---

# AMPscript 301

> This scenario includes information on these aspects of using AMPscript:

# AMPscript 301

This scenario includes information on these aspects of using AMPscript:

-   Looking up content based on a unique row
-   Use row information to populate multiple fields in the email
-   Set up error checking in case AMPscript encounters unexpected data

This AMPscript provides the content for the entire email message:

```
%%[/* 301 */

Var @memid, @fname, @lname, @prefname, @address, @city, @state, @zip, @mempref, @plat, @rows, @row, @ship

Set @memid = MemberID
Set @fname = FirstName
Set @lname = LastName
Set @prefname = PrefName
Set @address = Address
Set @zip = Zip
Set @mempref = MemPref
Set @plat = Plat

/* 301 */ ]%%

<div style="border-bottom: 1px solid #EEE; padding: 15px 0;"><strong>%%[ if not empty(@prefname) then ]%%%%= v(@prefname) =%%%%[ else ]%%%%= v(@fname) =%%%%[ endif ]%%</strong>, below are your account details</div>
<div style="border-bottom: 1px solid #EEE; padding: 15px 0;">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td height="15" valign="bottom"><font size="2" color="#444444"><strong>Name</strong></font></td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td height="30"><font size="2">First Name: <strong style="color: #000;">%%= v(@fname) =%%</strong></font></td>
        <td height="30"><font size="2">Last Name: <strong style="color: #000;">%%= v(@lname) =%%</strong></font></td>
    </tr>
    %%[ if not Empty(@prefname) then ]%%
    <tr>
        <td height="30"><font size="2">Preferred Name: <strong style="color: #000;">%%= v(@prefname) =%%</strong></font></td>
        <td></td>
    </tr>
%%[ endif ]%%
    <tr>
        <td height="30" valign="bottom"><font size="2" color="#444444"><strong>Address</strong></font></td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td height="30"><font size="2">Address: <strong style="color: #000;">%%= v(@address) =%%</strong></font></td>
%%[ /* We have a zip code to look up on */

if Not Empty(@zip) then

/* Lets find our zip code in the ShipTimes Data Extension */
Set @rows = LookupRows("ShipTimes","zip",@zip)

/* We found one row of data */
if RowCount(@rows) == 1 then

/* Set the row - This now exposes all columns to our variable */
Set @row = Row(@rows,1)

/* Set the City */
Set @city = Field(@row,"city")

/* Set the State */
Set @state = Field(@row,"state")

/* Set the @ship variable to the ShipTime column */
Set @ship = Field(@row,"ShipTime")

endif

endif ]%%

        <td height="30"><font size="2">City: <strong style="color: #000;">%%= v(@city) =%%</strong></font></td>
    </tr>
    <tr>
        <td height="30"><font size="2">State: <strong style="color: #000;">%%= v(@state) =%%</strong></font></td>
        <td height="30"><font size="2">Zip: <strong style="color: #000;">%%= v(@zip) =%%</strong></font></td>
    </tr>
    <tr>
        <td height="30"><font size="2">
%%[ /* We found a record for the zip code */

if not empty(@ship) then ]%%

Shipping Time: <strong style="color: #000;">%%= v(@ship) =%% %%[ if @ship > 1 then ]%%days%%[ else ]%%day%%[ endif ]%%</strong>

%%[ /* We either didn't have a zip code or couldn't find one, prompt for profile update */

else ]%%

We couldn't find a shipping preference. Please <a href="%%= RedirectTo(Concat('http://example.com?s=',_subscriberkey)) =%%" title="Update Your Profile" alias="Update Your Profile">update your profile</a>

%%[ endif ]%%</font></td>

        <td height="30"><font size="2">&nbsp;</td>
    </tr>
    <tr>
        <td height="30" valign="bottom"><font size="2" color="#444444"><strong>Member Preferences</strong></font></td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td height="30"><font size="2">Shopping Preference: <strong style="color: #000;">%%= v(@mempref) =%%</strong></font></td>
        <td height="30"><font size="2">Platinum Member: <strong style="color: #000;">%%[ if @plat == "N" then ]%%<a href="%%= RedirectTo(Concat('http://example.com?s=',_subscriberkey)) =%%" alias="Platinum Sign-Up">Sign-Up</a>%%[ else ]%%%%= v(@plat) =%%%%[ endif ]%%</strong></font></td>
    </tr>
</table>
</div>
```

The majority of this AMPscript code appears similar to the code present in AMPscript 201, but one new section helps the AMPscript detect potential errors in the data and prevent them from displaying incorrect information. This AMPscript also assists the sender by prompting the subscriber to visit their online profile to update any incorrect or missing ZIP code information.

```
Address:%%= v(@address) =%%
%%[ /* We have a zip code to look up on */
if Not Empty(@zip) then
/* Lets find our zip code in the ShipTimes Data Extension */
Set @rows = LookupRows("ShipTimes","zip",@zip)
/* We found one row of data */
if RowCount(@rows) == 1 then
/* Set the row - This now exposes all columns to our variable */
Set @row = Row(@rows,1)
/* Set the City */
Set @city = Field(@row,"city")
/* Set the State */
Set @state = Field(@row,"state")
/* Set the @ship variable to the ShipTime column */
Set @ship = Field(@row,"ShipTime")
endif
endif ]%%City:%%= v(@city) =%%
State:%%= v(@state) =%%Zip:%%= v(@zip) =%%
%%[ /* We found a record for the zip code */
if not empty(@ship) then ]%%
Shipping Time:%%= v(@ship) =%%%%[ if @ship > 1 then ]%%days%%[ else ]%%day%%[ endif ]%%
%%[ /* We either didn't have a zip code or couldn't find one, prompt for profile update */
else ]%% We couldn't find a shipping preference. Please
%%= RedirectTo(Concat('http://example.com?s=',_subscriberkey)) =%%
update your profile
```

The code just below the Address field takes the @zip variable and follows the code to insert the correct information. That code refers to the ShipTimes data extension, and the function looks for one row with the zip value that matches the value contained in the @zip variable.

```
Set @rows = LookupRows("ShipTimes","zip",@zip)
```

Only one row should contain that ZIP code value, so this code only goes into effect if the RowCount()function finds a value of 1:

```
if RowCount(@rows) == 1 then
```

Otherwise, the code prompts the user to update their information:

```
else ]%% We couldn't find a shipping preference. Please
%%= RedirectTo(Concat('http://example.com?s=',_subscriberkey)) =%%
update your profile
```

If the code finds only one row, the code chooses that row to take data from:

```
Set @row = Row(@rows,1)
```

Once the row is locked in, the code uses the Field() function to assign values to the @city, @state, and @zip variables:

```
/* Set the City */
Set @city = Field(@row,"city")
/* Set the State */
Set @state = Field(@row,"state")
/* Set the @ship variable to the ShipTime column */
Set @ship = Field(@row,"ShipTime")
```

The email also prints these values to the email send:

```
%%City:%%= v(@city) =%%
State:%%= v(@state) =%%Zip:%%= v(@zip) =%%
```

Any available ship time value appears in the email send as well:

```
%%[ /* We found a record for the zip code */
if not empty(@ship) then ]%%
Shipping Time:%%= v(@ship) =%%%%[ if @ship > 1 then ]%%days%%[ else ]%%day%%[ endif ]%%
```

One final if/else statement determines whether the message includes the word day or days as appropriate to the number value in the @ship variable.
