---
title: "AMPscript 401"
domain: mc-programmatic-content
topic: ampscript-401
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.257Z
estimatedTokens: 1995
keywords: [AMPscript, scenario, includes, aspects]
---

# AMPscript 401

> This scenario includes information on these aspects of using AMPscript:

# AMPscript 401

This scenario includes information on these aspects of using AMPscript:

-   Using for loops as part of an email send
-   Using AMPscript to change the appearance of an email send
-   Filtering message context
-   Creating content from blocks of code

This AMPscript provides the content for the entire email message:

```
%%[/* 401 */

Var @memid, @fname, @lname, @prefname, @address, @city, @state, @zip, @mempref, @plat, @rows,
 @row, @ship

Set @memid = MemberID
Set @fname = FirstName
Set @lname = LastName
Set @prefname = PrefName
Set @address = Address
Set @zip = Zip
Set @mempref = MemPref
Set @plat = Plat

/* 401 */ ]%%%%[ if not empty(@prefname) then ]%%%%= v(@prefname) =%%%%[ else ]%%%%= v(@fname) =%%%%[ endif ]%%, below are your account detailsName
First Name:%%= v(@fname) =%%Last Name:%%= v(@lname) =%%

%%[ if not Empty(@prefname) then ]%%Preferred Name:%%= v(@prefname) =%%

%%[ endif ]%%Address

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

Shipping Time:%%= v(@ship) =%% %%[ if @ship > 1 then ]%%days%%[ else ]%%day%%[ endif ]%%

%%[ /* We either didn't have a zip code or couldn't find one, prompt for profile update */

else ]%%

We couldn't find a shipping preference. Please

%%= RedirectTo(Concat('http://example.com?s=',_subscriberkey)) =%%

update your profile

%%[ endif ]%%

Member Preferences

Shopping Preference:%%= v(@mempref) =%%Platinum Member:%%[ if @plat == "N" then ]%%

%%= RedirectTo(Concat('http://example.com?s=',_subscriberkey)) =%%

Sign-Up %%[ else ]%%%%= v(@plat) =%%%%[ endif ]%%

%%[ /* Declare more variables that will be used specifically for our products */
Var @prodID, @prodName, @prodDesc, @price, @indicator, @color, @totalPurchases, @decimalChar

/* Zero out our total purchases amount */
Set @totalPurchases = 0

/* Set our CSS color indicator to odd */
Set @indicator = "odd"

/* Find all the recent purchases for the subscriber we are processing */
set @rows = LookupRows("Purchases","MemberID",@memID)

/* Make sure we've found some rows before we show any purchase information */
if RowCount(@rows) >= 1 then ]%%Recent Purchases

%%[ /* Now that we've found some data we can do something with it */

for @i = 1 to RowCount(@rows) do

/* Set the row to the row we're currently looping through */
Set @row = Row(@rows,@i)

/* Set some variables */
Set @prodID = Field(@row,"ProductID")
Set @prodName = Field(@row,"ProductName")
Set @prodDesc = Field(@row,"Description")
Set @price = Field(@row,"Price")
Set @totalPurchases = Add(@totalPurchases,Field(@row,"Price"))

/* If the CSS indicator is set to odd use a white background color */
if @indicator == "odd" then
Set @color = "#FFFFFF"
Set @indicator = "even"

/* If the CSS indicator is set to even use a gray background color */
else
Set @color = "#EEEEEE"
Set @indicator = "odd"
endif

/* Call in our recent purchases content box */ ]%%
%%= TreatAsContent(ContentAreaByName("my contents\101-401\RecentPurchases")) =%%

%%[ next @i ]%%

%%[ /* Find out if there are two characters after the decimal point */

Set @decimalChar = Subtract(Length(@totalPurchases),IndexOf(@totalPurchases,"."))

/* We found only one character after the decimal point */

if @decimalChar == 1 then

Set @totalPurchases = Concat(@totalPurchases,"0")

/* No decimal point was found */

elseif @decimalChar == Length(@totalPurchases) then

Set @totalPurchases = Concat(@totalPurchases,".00")

endif ]%%Total Purchases:$%%= v(@totalPurchases) =%%

%%[ endif ]%%
```

The first part of the code appears the same as the code found in AMPscript 301, but the second part inserts information about a subscriber's past purchases and total amount spent into the email. First, the code creates a new set of variables to use in inserting product and price information into the email:

```
%%[ /* Declare more variables that will be used specifically for our products */
Var @prodID, @prodName, @prodDesc, @price, @indicator, @color, @totalPurchases, @decimalChar
```

Next, the @totalPurchases and @indicator variables receive values. The code uses @totalPurchases to store the subscriber's total purchases in dollar value, and it uses @indicator to alternate the background color for each individual purchase:

```
/* Zero out our total purchases amount */
Set @totalPurchases = 0

/* Set our CSS color indicator to odd */
Set @indicator = "odd"
```

Once the variables receive their initial values, the code consults the Purchases data extension to find any previous purchases from a subscriber based on a member ID.

```
/* Find all the recent purchases for the subscriber we are processing */
set @rows = LookupRows("Purchases","MemberID",@memID)

If the code finds any rows in the data extension, the code uses the following for loop to check each row found:
/* Make sure we've found some rows before we show any purchase information */
if RowCount(@rows) >= 1 then ]%%Recent Purchases

%%[ /* Now that we've found some data we can do something with it */
for @i = 1 to RowCount(@rows) do

/* Set the row to the row we're currently looping through */
Set @row = Row(@rows,@i)
```

As long as a row matches the for loop's condition, the code performs these actions. First, the code assigns values to some of the variables declared earlier. The Field() function sets values for the fields in that specific location, and the Add() function adds the price of the individual item to the @totalPurchase running total.

```
/* Set some variables */
Set @prodID = Field(@row,"ProductID")
Set @prodName = Field(@row,"ProductName")
Set @prodDesc = Field(@row,"Description")
Set @price = Field(@row,"Price")
Set @totalPurchases = Add(@totalPurchases,Field(@row,"Price"))
```

The code also sets the background color to white or gray, depending on what the previous entry's background color. Odd number entries get a background color of white, while even entries get a gray background color.

```
/* If the CSS indicator is set to odd use a white background color */
if @indicator == "odd" then
Set @color = "#FFFFFF"
Set @indicator = "even"

/* If the CSS indicator is set to even use a gray background color */
else
Set @color = "#EEEEEE"
Set @indicator = "odd"
```

Finally, the code takes the information and formats it in the same manner as the content block referred to in the folder location in quotation marks. The code then proceeds to the next row. After using all rows, the code moves on to calculating the total purchases.

```
/* Call in our recent purchases content box */ ]%%
%%= TreatAsContent(ContentAreaByName("my contents\101-401\RecentPurchases")) =%%
%%[ next @i ]%%
```

The final part of the code makes sure a zero appears after a single digit decimal point value in @totalPurchase or two zeroes after a whole number value in @totalPurchase. The code also prints the @totalPurchase value in the appropriate field.

```
%%[ /* Find out if there are two characters after the decimal point */
Set @decimalChar = Subtract(Length(@totalPurchases),IndexOf(@totalPurchases,"."))

/* We found only one character after the decimal point */
if @decimalChar == 1 then
Set @totalPurchases = Concat(@totalPurchases,"0")

/* No decimal point was found */
elseif @decimalChar == Length(@totalPurchases) then
Set @totalPurchases = Concat(@totalPurchases,".00")
endif ]%%Total Purchases:$%%= v(@totalPurchases) =%%
```
