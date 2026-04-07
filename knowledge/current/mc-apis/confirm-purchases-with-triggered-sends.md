---
title: "Confirm Purchases with Triggered Sends"
domain: mc-apis
topic: confirm-purchases-with-triggered-sends
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:21.077Z
estimatedTokens: 8214
keywords: [Scenario, Confirm, Purchases, Triggered, conceptual, online, document, model, own, SOAP, API, Confirmation, Email, Sample, Envelope, Send, Axis2, Java, Code, Extension, Items]
---

> This page contains conceptual and scenario information about using triggered sends to confirm online purchases. You can use the information in this document as a model to create your own triggered sends using the SOAP API.

# Confirm Purchases with Triggered Sends

This page contains conceptual and scenario information about using triggered sends to confirm online purchases. You can use the information in this document as a model to create your own triggered sends using the SOAP API.

## Scenario

Northern Trail Outfitters uses an internal system to process work-related airline tickets for their employees. When the employees book their travel via the internal site, they receive an email confirmation that includes a summary of the information regarding their travel plans. To make this system work, Northern Trail Outfitters performs the following tasks:

1.  Create the confirmation email
2.  Created the data extension used to store the confirmation information
3.  Create the triggered send used to send the confirmation email
4.  Create the API call from the internal system to Marketing Cloud

The internal system submits the triggered send to Marketing Cloud using a Java API call that includes the email address of the subscriber, the subscriber key, and confirmation information in XML format.

## Create the Confirmation Email

The email itself uses AMPscript to display information taken from the confirmation XML. This AMPscript uses the BuildRowSetFromXML function to create each record row for the email message, and it formats date and currency values automatically.

```
%%[
 var @xml, @subject, @tempxml
 var @passengers, @passengers_rows, @passenger_count, @passenger_rows
 var @first_name, @middle_name, @last_name, @account_number, @ticket_number
 var @confirmation_date, @confirmation_number
 var @flights, @flights_rows, @flight_count, @flight_rows, @flight_xml, @flight_date, @flight_number
 var @depart_time, @depart_airport, @arrive_time, @arrive_airport, @stops
 var @trip_price, @taxes, @trip_flex, @seat_selections, @bag_fees, @total_cost
 var @line_bgcolor
 set @line_bgcolor = "#cbdadf"
 set @xml = confirmation_xml
 set @subject             = Field(Row(BuildRowSetFromXML(@xml, "/confirmation/subject"), 1), 'value')
 set @passengers          = BuildRowSetFromXML(@xml, "/confirmation/passengers")
 set @tempxml             = concat("<root>", Field(Row(@passengers, 1), "xml"), "</root>")
 set @passengers_rows     = BuildRowSetFromXML(@tempxml, "//passenger")
 set @passenger_count     = RowCount(@passengers_rows)
 set @confirmation_date   = Format(Field(Row(BuildRowSetFromXML(@xml, "/confirmation/confirmation_date"), 1), 'value'), "MMMM d, yyyy")
 set @confirmation_number = Field(Row(BuildRowSetFromXML(@xml, "/confirmation/confirmation_number"), 1), 'value')
 set @flights             = BuildRowSetFromXML(@xml, "/confirmation/flights")
 set @tempxml             = concat("<root>", Field(Row(@flights, 1), "xml"), "</root>")
 set @flights_rows        = BuildRowSetFromXML(@tempxml, "//flight")
 set @flight_count        = RowCount(@flights_rows)
 set @trip_price          = Format(Field(Row(BuildRowsetFromXml(@xml, "/confirmation/trip_price"), 1), "Value"), "$#,#.00;-$#,#.00")
 set @taxes               = Format(Field(Row(BuildRowsetFromXml(@xml, "/confirmation/taxes"), 1), "Value"), "$#,#.00;-$#,#.00")
 set @trip_flex           = Format(Field(Row(BuildRowsetFromXml(@xml, "/confirmation/trip_flex"), 1), "Value"), "$#,#.00;-$#,#.00")
 set @seat_selections     = Format(Field(Row(BuildRowsetFromXml(@xml, "/confirmation/seat_selections"), 1), "Value"), "$#,#.00;-$#,#.00")
 set @bag_fees            = Format(Field(Row(BuildRowsetFromXml(@xml, "/confirmation/bag_fees"), 1), "Value"), "$#,#.00;-$#,#.00")
 set @total_cost          = Format(Field(Row(BuildRowsetFromXml(@xml, "/confirmation/total_cost"), 1), "Value"), "$#,#.00;-$#,#.00")
]%%
```

The next section provides the header for the email message.

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <style type="text/css">
                .ReadMsgBody {width: 100%;}
                .ExternalClass {width: 100%;}
            </style>
        </head>
        <body padding-top: 10px; margin: 0 auto; color:#000;">
            <table style="padding:0; margin: 0 auto; width: 558px;" cellpadding="0" cellspacing="0" align="center" width="558">
            <!-- Link To Web-Only Version -->
                <tr>
                    <td style="text-align:center; font-size:11px; font-family:Arial, Helvetica, sans-serif; color:#000;">
                        Having trouble viewing this email?
                        <a href="%%view_email_url%%" style="color:#000; font-size:11px; text-decoration:none;">View the web-only version</a>.
                    </td>
                </tr>
                <!-- Header, Nav, Headline -->
                <tr>
                    <td>
                        <a href="http://www.example.com"><img src="http://sale.example.com/images/_header2.jpg" width="558" height="78" border="0" style="display:block;" alt="Header Image" /></a>
                        <img src="http://sale.example.com/images/_mainnav2.jpg" width="558" height="31" border="0" alt="Book Travel | Hotel | Travel Tools" usemap="#Map" style="display:block;" />
                    </td>
                </tr>
            </table>
```

The next section retrieves all passengers on the reservation using for/do loops to pull back all customer information.

```
<!-- Main Content -->
<table style="padding:0; margin: 0 auto; width: 558px;" cellpadding="0" cellspacing="0" width="558" bgcolor="#ffffff"  border=1>
    <tr>
        <td><img src="http://sale.example.com/images/spacer.gif" width="1" height="15" border="0" alt="" style="display:block;" /></td>
    </tr>
    <tr>
        <td style="font-size:12px; font-family:Arial, Helvetica, sans-serif; text-align:justify; color:#005695;">
    <table style="padding:0; margin: 0 auto; width: 558px;" cellpadding="0" cellspacing="0" width="558">
                <tr>
                    <td height="28" style="font-weight:bolder">
                        %%[ for @p = 1 to @passenger_count do
                             set @passenger_rows  = Row(@passengers_rows, @p)
                             set @passenger_xml   = concat("<root>", Field(@passenger_rows, "xml"), "</root>")
                             set @first_name      = Field(Row(BuildRowsetFromXml(@passenger_xml, "//first_name"), 1), "Value")
                             set @middle_name     = Field(Row(BuildRowsetFromXml(@passenger_xml, "//middle_name"), 1), "Value")
                             set @last_name       = Field(Row(BuildRowsetFromXml(@passenger_xml, "//last_name"), 1), "Value")
                        ]%%
                        %%=v(@last_name)=%% / %%=v(@first_name)=%% %%=v(@middle_name)=%%<br>
                        %%[ next ]%%
                    </td>
                    <td style="font-weight:bolder">Confirmation Date:<br />%%=v(@confirmation_date)=%%</td>
                    <td style="font-weight:bolder">Confirmation Number:<br />%%=v(@confirmation_number)=%%</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td><img src="http://sale.example.com/images/spacer.gif" width="1" height="15" border="0" alt="" style="display:block;" /></td>
    </tr>
```

The next section lists all ticket numbers and frequent flyer accounts for all reservations. The code alternates background colors for each line to aid readability of the information.

```
<tr>
    <td style="font-size:11px; font-family:Arial, Helvetica, sans-serif; text-align:left; color:#005695;" align="left">
<table style="padding:0; margin: 0 auto;" cellpadding="0" cellspacing="0" align="left" width="400" border="0">
            <tr>
                <tr>
                    <td style="font-weight:bolder">Passenger(s)</td>
                    <td style="font-weight:bolder">Account Number</td>
                    <td style="font-weight:bolder">Ticket Number</td>
                </tr>
                %%[ for @p = 1 to @passenger_count do
                    set @passenger_rows  = Row(@passengers_rows, @p)
                    set @passenger_xml   = concat("<root>", Field(@passenger_rows, "xml"), "</root>")
                    set @first_name      = Field(Row(BuildRowsetFromXml(@passenger_xml, "//first_name"), 1), "Value")
                    set @middle_name     = Field(Row(BuildRowsetFromXml(@passenger_xml, "//middle_name"), 1), "Value")
                    set @last_name       = Field(Row(BuildRowsetFromXml(@passenger_xml, "//last_name"), 1), "Value")
                    set @account_number  = Field(Row(BuildRowsetFromXml(@passenger_xml, "//account_number"), 1), "Value")
                    set @ticket_number   = Field(Row(BuildRowsetFromXml(@passenger_xml, "//ticket_number"), 1), "Value")
                    if @line_bgcolor == "#cbdadf" then
                        Set @line_bgcolor = "#e0e9ec"
                    else
                        Set @line_bgcolor = "#cbdadf"
                    endif
                ]%%
                <tr bgcolor="%%=v(@line_bgcolor)=%%">
                    <td>%%=v(@first_name)=%% %%=v(@middle_name)=%% %%=v(@last_name)=%%</td>
                    <td>%%=v(@account_number)=%%</td>
                    <td>%%=v(@ticket_number)=%%</td>
                </tr>
                %%[ next ]%%
            </table>
        </td>
    </tr>
    <tr>
        <td><img src="http://sale.example.com/images/spacer.gif" width="1" height="15" border="0" alt="" style="display:block;" /></td>
    </tr>
```

The next section displays all relevant flight information, including numbers, arrival and departure times, and number of stops.

```
<tr>
    <td style="font-size:11px; font-family:Arial, Helvetica, sans-serif; text-align:left; color:#005695;" align="left">
<table style="padding:0; margin: 0 auto;" cellpadding="0" cellspacing="0" align="left" width="558" border="0">
            <tr>
                <td style="font-weight:bolder">Date</td>
                <td style="font-weight:bolder" width="100">Flight</td>
                <td style="font-weight:bolder">Flight Information</td>
                <td style="font-weight:bolder">Stops</td>
            </tr>
                %%[ for @p = 1 to @flight_count do
                    set @flight_rows     = Row(@flights_rows, @p)
                    set @flight_xml      = concat("<root>", Field(@flight_rows, "xml"), "</root>")
                    set @flight_date     = Format(Field(Row(BuildRowsetFromXml(@flight_xml, "//flight_date"), 1), "Value"), "ddd MMM d")
                    set @flight_number   = Field(Row(BuildRowsetFromXml(@flight_xml, "//flight_number"), 1), "Value")
                    set @depart_time     = Field(Row(BuildRowsetFromXml(@flight_xml, "//depart_time"), 1), "Value")
                    set @depart_airport  = Field(Row(BuildRowsetFromXml(@flight_xml, "//depart_airport"), 1), "Value")
                    set @arrive_time     = Field(Row(BuildRowsetFromXml(@flight_xml, "//arrive_time"), 1), "Value")
                    set @arrive_airport  = Field(Row(BuildRowsetFromXml(@flight_xml, "//arrive_airport"), 1), "Value")
                    set @stops           = Field(Row(BuildRowsetFromXml(@flight_xml, "//stops"), 1), "Value")
                    if @line_bgcolor == "#cbdadf" then
                        Set @line_bgcolor = "#e0e9ec"
                    else
                        Set @line_bgcolor = "#cbdadf"
                    endif
               ]%%
            <tr bgcolor="%%=v(@line_bgcolor)=%%">
                <td>%%=v(@flight_date)=%%</td>
                <td>%%=v(@flight_number)=%%</td>
                <td>
                    Depart %%=v(@depart_airport)=%% at %%=v(@depart_time)=%%<br />
                    Arrive %%=v(@arrive_airport)=%% at %%=v(@arrive_time)=%%
                </td>
                <td>%%=v(@stops)=%%</td>
            </tr>
            %%[ next ]%%
        </table>
    </td>
</tr>
<tr>
    <td><img src="http://sale.example.com/images/spacer.gif" width="1" height="15" border="0" alt="" style="display:block;" /></td>
</tr>
```

The next section of code itemizes any costs associated with the reservation.

```
<tr>
        <td style="font-size:11px; font-family:Arial, Helvetica, sans-serif; text-align:left; color:#005695;" align="left">
    <table style="padding:0; margin: 0 auto;" cellpadding="0" cellspacing="0" align="left" width="200" border="0">
                <tr>
                    <td>Trip Price</td>
                    <td>=</td>
                    <td align="right">%%=v(@trip_price)=%%</td>
                </tr>
                <tr>
                    <td>Taxes</td>
                    <td>=</td>
                    <td align="right">%%=v(@taxes)=%%</td>
                </tr>
                <tr>
                    <td>Trip Flex</td>
                    <td>=</td>
                    <td align="right">%%=v(@trip_flex)=%%</td>
                </tr>
                <tr>
                    <td>Seat Selections</td>
                    <td>=</td>
                    <td align="right">%%=v(@seat_selections)=%%</td>
                </tr>
                <tr>
                    <td>Baggage Fees</td>
                    <td>=</td>
                    <td align="right">%%=v(@bag_fees)=%%</td>
                </tr>
                <tr>
                    <td>Total Cost</td>
                    <td>=</td>
                    <td align="right">%%=v(@total_cost)=%%</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
```

The next section of code places a disclaimer in the email.

```
<table style="padding:0 0 15px 0; margin: 0 auto; width: 558px;" cellpadding="0" cellspacing="0" align="center">
    <!-- DISCLAIMER INFO -->
    <tr>
        <td><img src="http://sale.example.com/images/spacer.gif" width="1" height="15" border="0" alt="" style="display:block;" /></td>
    </tr>
    <tr>
        <td style="font-size:9px; font-family:Arial, Helvetica, sans-serif; text-align:justify; color:#000;">
            All fares in US dollars<br />
            Fares shown are the lowest available and may fluctuate until purchased and confirmed. The lowest fare available on your selected date is displayed and includes any advertised discount available for booking online. Base prices don't include PFC, segment fees or September 11th security fee of up to $10.70 per segment. A segment is one take-off and one landing. A convenience fee of $10.00 per passenger, per segment applies when booked on example.com. A convenience fee of $10.00 per passenger, per segment, plus $14.99 per segment, applies when purchased through our call center. Purchases made at any NTO office do not incur a convenience or call center fee. When purchased at time of booking, a checked bag fee of up to $29.99 per bag, per segment applies for the first two(2) checked bags. If purchased at flight check-in, a fee of $35 per checked bag, per person, per segment applies for the first two bags checked. In all cases more higher fees applies for three or more checked bags. Fare rules, routes and schedules are subject to change without notice. Fares are non-refundable. No credit or refund is given for fare differences or fluctuations after reservation is purchased. Seats are limited and subject to availability. Restrictions apply. Any credits for future travel resulting from changes or cancelations of this reservation can be used for online/web reservations and therefore can be applied to any web-only fares or web discounts. Any changes to travel date may result in a higher price in addition to change fee(s). Customers with credits may call Reservations to make their reservation and is charged the lowest available non-web fare plus any applicable fees. <br />
            <a href="http://www.example.com/BaggagePolicy.htm">Click Here</a> for our Baggage Policy.
        </td>
    </tr>
```

The next section of code puts a footer in the email message.

```
<!-- Pledge -->
    <tr>
        <td><img src="http://sale.example.com/images/spacer.gif" width="1" height="15" border="0" alt="" style="display:block;" /></td>
    </tr>
    <tr>
        <td><img src="http://sale.example.com/images/_pledge.jpg" width="279" height="21" border="0" alt="" style="display:block; margin-left:155px;" />
            <p style="font:bold 11px Arial, Helvetica, sans-serif; color:#F89728; text-align:center; margin-bottom:0;">Thanks for using our travel system. Have a great flight!</p>
        </td>
    </tr>
    <tr>
        <td><img src="http://sale.example.com/images/spacer.gif" width="1" height="10" border="0" alt="" style="display:block;" /></td>
    </tr>
    <!-- Social Media -->
    <tr>
        <td style="text-align:center; padding-top:10px;"><a href="http://www.facebook.com/sharer.php?u=http://www.example.com/samplepage.php" style="color:#fff;"><img src="http://sale.example.com/images/FBshare.png" width="129" height="44" border="0" alt="Facebook" /></a><a href="http://www.example.com/TwitterFeed.php" style="color:#fff;"><img style="margin-left:20px;" src="http://sale.example.com/images/followtwitter.png" width="124" height="44" border="0" alt="Twitter" /></a>
        </td>
    </tr>
    <!-- Spacer -->
    <tr>
        <td style="line-height: 10px; border-bottom:1px solid #000;">&nbsp;</td>
    </tr>
    <!-- Footer Info -->
    <tr>
        <td style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#000; text-align:center; padding-top:10px;">
This is a post-only mailing from Northern Trail Outfitters. Please don't respond to this message.
        <br /><br />
        Please add <a href="#" style="color:#000; text-decoration:none;">email@example.com</a> to your Safe Senders list to ensure our mailers deliver to your inbox.
        <br />
        <a href="http://www.example.com/allowlist.php" style="color:#000;">Visit our website for more information</a>.
        <br /><br />
        Northern Trail Outfitters
        <br />
        123 Example Way
        <br />
        Indianapolis,I
        <br /><br />
        You received this message because you voluntarily provided us with your email address.
        <br />
        If you don't wish to receive any special deals <a href="%%subscription_center_url%%" alias="Manage Subscriptions">manage your subscriptions here</a>.
        </td>
    </tr>
</table>
```

The next section of code puts a menu at the bottom of the email message.

```
<map name="Map" id="map">
            <area shape="rect" coords="17,2,137,25" href="http://www.example.com/aaRes/aaBookingFlow_1.php?bktype=WP" alt="Book Your Travel" />
            <area shape="rect" coords="148,2,216,25" href="http://www.example.com/Hotel.php" alt="Hotel Partners" />
            <area shape="rect" coords="224,2,331,25" href="http://www.example.com/destinations.php" alt="Destinations" />
            <area shape="rect" coords="343,2,430,25" href="http://www.example.com/attractions.php" alt="Attractions" />
            <area shape="rect" coords="436,2,549,25" href="http://www.example.com/traveltools.php" alt="Travel Tools" />
        </map>
        <custom name="opencounter" type="tracking">
    </body>
</html>
```

## Sample SOAP Envelope for Triggered Send

```
<soap:envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
 <soap:header>
 <wsse:security soap:mustunderstand="1">
 <wsse:usernametoken wsu:id="SecurityToken-884da619-59bb-4db6-834d-138322342442">
 <wsse:username>ccc</wsse:username>
 <wsse:password type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ccc</wsse:password>
 </wsse:usernametoken>
 </wsse:security>
 </soap:header>
 <soap:body>
 <createrequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
 <options></options>
 <objects xsi:type="TriggeredSend">
 <partnerkey xsi:nil="true"></partnerkey>
 <objectid xsi:nil="true"></objectid>
 <triggeredsenddefinition>
 <partnerkey xsi:nil="true"></partnerkey>
 <objectid xsi:nil="true"></objectid>
 <customerkey>zz_test_confirmation</customerkey>
 </triggeredsenddefinition>
 <subscribers>
 <partnerkey xsi:nil="true"></partnerkey>
 <objectid xsi:nil="true"></objectid>
 <emailaddress>subscriber1@example.com</emailaddress>
 <subscriberkey>subscriber1@example.com</subscriberkey>
 <attributes>
 <name>confirmation_xml</name>
 <value>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&lt;confirmation&gt;&lt;confirmation_number&gt;WXX9Q9&lt;/confirmation_number&gt;&lt;confirmation_date&gt;12/16/2011&lt;/confirmation_date&gt;&lt;subject&gt;&lt;![CDATA[Here is your Flight Confirmation]]&gt;&lt;/subject&gt;&lt;passengers&gt;&lt;passenger&gt;&lt;first_name&gt;Angela&lt;/first_name&gt;&lt;middle_name&gt;A&lt;/middle_name&gt;&lt;last_name&gt;Cruz&lt;/last_name&gt;&lt;account_number&gt;1234567&lt;/account_number&gt;&lt;ticket_number&gt;123456&lt;/ticket_number&gt;&lt;/passenger&gt;&lt;passenger&gt;&lt;first_name&gt;Jane&lt;/first_name&gt;&lt;middle_name&gt;S&lt;/middle_name&gt;&lt;last_name&gt;Doe&lt;/last_name&gt;&lt;account_number&gt;- None Entered -&lt;/account_number&gt;&lt;ticket_number&gt;12345678&lt;/ticket_number&gt;&lt;/passenger&gt;&lt;/passengers&gt;&lt;flights&gt;&lt;flight&gt;&lt;flight_date&gt;01/20/2012&lt;/flight_date&gt;&lt;flight_number&gt;773&lt;/flight_number&gt;&lt;depart_time&gt;10:25am&lt;/depart_time&gt;&lt;arrive_time&gt;12:45pm&lt;/arrive_time&gt;&lt;depart_airport&gt;FORT WAYNE, IN (FWA)&lt;/depart_airport&gt;&lt;arrive_airport&gt;ORLANDO/SANFORD, FL (SFB)&lt;/arrive_airport&gt;&lt;stops&gt;Nonstop&lt;/stops&gt;&lt;/flight&gt;&lt;flight&gt;&lt;flight_date&gt;01/23/2012&lt;/flight_date&gt;&lt;flight_number&gt;772&lt;/flight_number&gt;&lt;depart_time&gt;7:15am&lt;/depart_time&gt;&lt;arrive_time&gt;9:40am&lt;/arrive_time&gt;&lt;depart_airport&gt;ORLANDO/SANFORD, FL (SFB)&lt;/depart_airport&gt;&lt;arrive_airport&gt;FORT WAYNE, IN (FWA)&lt;/arrive_airport&gt;&lt;stops&gt;Nonstop&lt;/stops&gt;&lt;/flight&gt;&lt;/flights&gt;&lt;trip_price&gt;329.96&lt;/trip_price&gt;&lt;taxes&gt;81.80&lt;/taxes&gt;&lt;trip_flex&gt;46.00&lt;/trip_flex&gt;&lt;seat_selections&gt;71.96&lt;/seat_selections&gt;&lt;priority_boarding&gt;39.96&lt;/priority_boarding&gt;&lt;bag_fees&gt;79.96&lt;/bag_fees&gt;&lt;total_cost&gt;649.64&lt;/total_cost&gt;&lt;reorder_url&gt;&lt;![CDATA[http://www.example.com]]&gt;&lt;/reorder_url&gt;&lt;/confirmation&gt;</value>
 </attributes>
 </subscribers>
 </objects>
 </createrequest>
 </soap:body>
</soap:envelope>
```

## Axis2 Java Sample Code for Triggered Send

```apex
package com.exacttarget.client;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import org.apache.axis2.addressing.EndpointReference;
import org.apache.axis2.client.Options;
import org.apache.axis2.client.ServiceClient;
import org.apache.axis2.context.ConfigurationContext;
import org.apache.axis2.context.ConfigurationContextFactory;
import org.apache.log4j.Logger;
import com.exacttarget.wsdl.partnerapi.APIObject;
import com.exacttarget.wsdl.partnerapi.APIProperty;
import com.exacttarget.wsdl.partnerapi.Attribute;
import com.exacttarget.wsdl.partnerapi.ClientID;
import com.exacttarget.wsdl.partnerapi.CreateOptions;
import com.exacttarget.wsdl.partnerapi.CreateRequestDocument;
import com.exacttarget.wsdl.partnerapi.CreateResponseDocument;
import com.exacttarget.wsdl.partnerapi.CreateResponseDocument.CreateResponse;
import com.exacttarget.wsdl.partnerapi.DataExtension;
import com.exacttarget.wsdl.partnerapi.DataExtensionObject;
import com.exacttarget.wsdl.partnerapi.CreateRequestDocument.CreateRequest;
import com.exacttarget.wsdl.partnerapi.ObjectExtension.Properties;
import com.exacttarget.wsdl.partnerapi.Options.SaveOptions;
import com.exacttarget.wsdl.partnerapi.PartnerAPIStub;
import com.exacttarget.wsdl.partnerapi.RequestType;
import com.exacttarget.wsdl.partnerapi.SaveAction;
import com.exacttarget.wsdl.partnerapi.SaveOption;
import com.exacttarget.wsdl.partnerapi.Subscriber;
import com.exacttarget.wsdl.partnerapi.TriggeredSend;
import com.exacttarget.wsdl.partnerapi.TriggeredSendDefinition;
import com.exacttarget.wsdl.partnerapi.UpdateOptions;
import com.exacttarget.wsdl.partnerapi.UpdateRequestDocument;
import com.exacttarget.wsdl.partnerapi.UpdateResponseDocument;
import com.exacttarget.wsdl.partnerapi.UpdateRequestDocument.UpdateRequest;
public class ETClient_TrigSend {
    private PartnerAPIStub stub;
    private static final String AXIS2_BASE_CONFIGURATION_FILE = PropertiesUtil.getInstance().getProperty("axis2File");
    private static final String AXIS2_REPOSITORY_FOLDER = PropertiesUtil.getInstance().getProperty("repositoryFolder");
    private static final String ET_END_POINT_REFERENCE = PropertiesUtil.getInstance().getProperty("endPoint");
    private static Logger logger = Logger.getLogger(ETClient_TrigSend.class);
    public ETClient_TrigSend() {
     try{
      ConfigurationContext configurationContext =
       ConfigurationContextFactory.createConfigurationContextFromFileSystem(
         AXIS2_REPOSITORY_FOLDER, AXIS2_BASE_CONFIGURATION_FILE);
            EndpointReference endPointReference = new EndpointReference(ET_END_POINT_REFERENCE);
            stub = new PartnerAPIStub(configurationContext, ET_END_POINT_REFERENCE);

            ServiceClient serviceClient = stub._getServiceClient();
            Options options = new Options();
            options.setTo(endPointReference);
            serviceClient.setOptions(options);
     } catch(Exception e) {
            logger.fatal(e);
     }
    }
    public static void main(String a[]) {
     ETClient_TrigSend ETClient_TrigSend = new ETClient_TrigSend();

     ETClient_TrigSend.contructTriggeredSend();
    }

    public void contructTriggeredSend() {
     TriggeredSendDefinition confirmationTrigger = TriggeredSendDefinition.Factory.newInstance();
     confirmationTrigger.setCustomerKey("zz_test_confirmation");
     confirmationTrigger.setNilObjectID();
     confirmationTrigger.setNilPartnerKey();

     Attribute XMLContent = Attribute.Factory.newInstance();
     XMLContent.setName("confirmation_xml");
     XMLContent.setValue("<?xml version="1.0" encoding="UTF-8"?><confirmation><confirmation_number>WXX9Q9</confirmation_number><confirmation_date>12/16/2011</confirmation_date><subject><![CDATA[Here is your Flight Confirmation]]></subject><passengers><passenger><first_name>Angela</first_name><middle_name>A</middle_name><last_name>Cruz</last_name><account_number>1234567</account_number><ticket_number>123456</ticket_number></passenger><passenger><first_name>Jane</first_name><middle_name>S</middle_name><last_name>Doe</last_name><account_number>- None Entered -</account_number><ticket_number>12345678</ticket_number></passenger></passengers><flights><flight><flight_date>01/20/2012</flight_date><flight_number>773</flight_number><depart_time>10:25am</depart_time><arrive_time>12:45pm</arrive_time><depart_airport>FORT WAYNE, IN (FWA)</depart_airport><arrive_airport>ORLANDO/SANFORD, FL (SFB)</arrive_airport><stops>Nonstop</stops></flight><flight><flight_date>01/23/2012</flight_date><flight_number>772</flight_number><depart_time>7:15am</depart_time><arrive_time>9:40am</arrive_time><depart_airport>ORLANDO/SANFORD, FL (SFB)</depart_airport><arrive_airport>FORT WAYNE, IN (FWA)</arrive_airport><stops>Nonstop</stops></flight></flights><trip_price>329.96</trip_price><taxes>81.80</taxes><trip_flex>46.00</trip_flex><seat_selections>71.96</seat_selections><priority_boarding>39.96</priority_boarding><bag_fees>79.96</bag_fees><total_cost>649.64</total_cost><reorder_url><![CDATA[http://www.example.com]]></reorder_url></confirmation>");
//     XMLContent.setValue("");
     DateFormat dateFormat       = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
     Calendar cal                = Calendar.getInstance();
     System.out.println("current time ::: " +dateFormat.format(cal.getTime()));
//        Month value is 0-based. e.g., 0 for January.
//        scheduledTime.set(2011, Calendar.NOVEMBER, 13, 12, 16);
     Subscriber subscriber = Subscriber.Factory.newInstance();
     subscriber.setAttributesArray(new Attribute[] {XMLContent});
     subscriber.setEmailAddress("subscriber1@example.com");
     subscriber.setSubscriberKey("subscriber1@example.com.com");
//     Subscriber subscriber2 = Subscriber.Factory.newInstance();
//     subscriber2.setAttributesArray(new Attribute[] {XMLContent});
//     subscriber2.setEmailAddress("subscriber2@example.com");
//     subscriber2.setSubscriberKey("subscriber2@example.com"); <-- this can be customerID, or any unique identifier
//     Subscriber subscriber3 = Subscriber.Factory.newInstance();
//     subscriber3.setAttributesArray(new Attribute[] {XMLContent});
//     subscriber3.setEmailAddress("subscriber3@example.com");
//     subscriber3.setSubscriberKey("subscriber3@example.com");
//     Subscriber subscriber4 = Subscriber.Factory.newInstance();
//     subscriber4.setAttributesArray(new Attribute[] {XMLContent});
//     subscriber4.setEmailAddress("subscriber4@example.com");
//     subscriber4.setSubscriberKey("subscriber4@example.com");
     TriggeredSend triggeredSend = TriggeredSend.Factory.newInstance();
     triggeredSend.setSubscribersArray(new Subscriber[] {subscriber});
//     triggeredSend.setSubscribersArray(new Subscriber[] {subscriber, subscriber2, subscriber3, subscriber4});

     triggeredSend.setTriggeredSendDefinition(confirmationTrigger);
     doTriggeredSend(triggeredSend);
    }
    private String doTriggeredSend(APIObject apiObject) {
        String statusCode = null;
        try {
         CreateOptions createOptions = CreateOptions.Factory.newInstance();
//         createOptions.setRequestType(RequestType.ASYNCHRONOUS);
            CreateRequest createRequest = CreateRequest.Factory.newInstance();
            createRequest.setObjectsArray(new APIObject[] {apiObject});
            createRequest.setOptions(createOptions);
            CreateRequestDocument createRequestDocument = CreateRequestDocument.Factory.newInstance();
            createRequestDocument.setCreateRequest(createRequest);
            CreateResponseDocument createResponseDocument = this.stub.create(createRequestDocument);
            System.out.println(createResponseDocument.getCreateResponse());

            logger.fatal("create response :::  " + createResponseDocument.getCreateResponse());
            statusCode = createResponseDocument.getCreateResponse().getResultsArray()[0].getStatusCode();
        }catch(Exception e) {
            logger.fatal(e);
        }
return statusCode;
    }
}
```

## Create the Data Extension

Create the data extension to hold the confirmation information using the information listed below:

1.  Create the data extention from the **TriggeredSendDataExtension** template.
2.  Check the **Used for Sending** checkbox.
3.  Choose **EmailAddress** in the first drop-down menu under the **Type** heading.
4.  Choose **Email Address** in the second drop-down menu under the **Type** heading.
5.  Under the Fields heading, enter the following information in the third field under SubscriberKey and EmailAddress:
    -   **Name**: **confirmation\_xml**
    -   **Data Type**: **Text**
    -   **Length**: **2000**
6.  Click the **Use Data Retention** checkbox.

## Create the Triggered Send

You can create the triggered send used to send the confirmation information in Marketing Cloud or via the SOAP API. Include the following information in your triggered send and start the triggered send once you have completed it:

1.  Select **Default Commercial** in the **Send Classification** drop-down menu.
2.  Select the email you created for this triggered send in the **Email** window.
3.  Select the data extension you created for this triggered send in the **"Triggered Send" Data Extensions** field.

## Related Items

-   [BuildRowSetFromXML Function](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/buildrowsetfromxml.htm)
-   [Data Extensions and Data Relationships](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
-   [Create a Triggered Email Message Interaction in Marketing Cloud](https://help.salesforce.com/articleView?id=mc_es_create_triggered_email_interaction.htm&type=5)
-   [Create a Triggered Send Definition Via the API](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_definition.htm)

## Related Topics

- Create a Triggered Send Definition Via the API (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_definition.htm)
