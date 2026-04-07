---
title: "Schedule an Email Send Definition"
domain: mc-apis
topic: schedule-an-email-send-definition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:20.093Z
estimatedTokens: 1508
keywords: [Schedule, Email, Send, Definition, scheduling, Why, How, Sample, NET, Code, PHP, SOAP]
---

> This page contains information  about scheduling an email send definition.

# Schedule an Email Send Definition

This page contains information about scheduling an email send definition.

## Why Schedule an Email Send Definition

By scheduling an email send definition, you can select the precise time you want the email send to go out. Note that this call schedules the time to begin the send and not when subscribers actually receive the email in their inbox.

## How to Schedule an Email Send Definition

Use the sample code below as a model for your own API call.

### Sample .NET Code

```apex
public void testSchedule()
        {
            ScheduleDefinition sd = new ScheduleDefinition();
            sd.RecurrenceType = RecurrenceTypeEnum.Daily;
            sd.RecurrenceTypeSpecified = true;
            sd.RecurrenceRangeType = RecurrenceRangeTypeEnum.EndAfter;
            sd.RecurrenceRangeTypeSpecified = true;
            sd.Occurrences = 1;
            sd.OccurrencesSpecified = true;
            DateTime time = new DateTime(2010,03,16,14,32,00,DateTimeKind.Utc);
            sd.StartDateTime = time;
            sd.StartDateTimeSpecified = true;
            DailyRecurrence dr = new DailyRecurrence();
            dr.DailyRecurrencePatternType = DailyRecurrencePatternTypeEnum.Interval;
            dr.DailyRecurrencePatternTypeSpecified = true;
            dr.DayInterval = 1;
            dr.DayIntervalSpecified = true;
            sd.Recurrence = dr;
            String o1;
            String o2;
            String r;
            EmailSendDefinition definition = new EmailSendDefinition();
            definition.CustomerKey = "CustomerKeyValue";
            ScheduleResult[] s =
                soapClient.Schedule(new ScheduleOptions(), "start", sd, new APIObject[] {definition}, out o1, out o2,
                                    out r);
            Console.Write("Done");
        }
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'XXXXX';
        $client->password = 'XXXXX';

        $schr = new Marketing Cloud_ScheduleRequestMsg();
        $schr->Action = "start";
        $schr->Interactions =  array();

  $sd = new Marketing Cloud_ScheduleDefinition();
  $etr = new Marketing Cloud_DailyRecurrence();
  $etr->DailyRecurrencePatternType = Marketing Cloud_DailyRecurrencePatternTypeEnum::Interval;
  $etr->DayInterval = 1;

  $sd->RecurrenceType = Marketing Cloud_RecurrenceTypeEnum::Daily;
  $sd->RecurrenceRangeType = Marketing Cloud_RecurrenceRangeTypeEnum::EndAfter;

  $dv = new DateInterval('P1D');
  $SendTime = new DateTime();
  $SendTime->add($dv);

  $sd->StartDateTime = $SendTime->format('c');
  $sd->Occurrences = 1;

  $sd->Recurrence = new SoapVar($etr, SOAP_ENC_OBJECT, 'DailyRecurrence', "http://exacttarget.com/wsdl/partnerAPI");
  $schr->Schedule = $sd;

  $def = new Marketing Cloud_EmailSendDefinition();
  $def->CustomerKey = "MyCustomerKey";
  $schr->Interactions[] = new SoapVar($def, SOAP_ENC_OBJECT, 'EmailSendDefinition', "http://exacttarget.com/wsdl/partnerAPI");

        $schr->Options = NULL;

        $results = $client->Schedule($schr);

  var_dump($results);
} catch (SoapFault $e) {
 var_dump($e);
}
?>
```

### SOAP Request

```
<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <ScheduleRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
        <Action>start</Action>
        <Schedule>
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <Recurrence xsi:type="q1:DailyRecurrence" xmlns:q1="http://exacttarget.com/wsdl/partnerAPI">
                <q1:DailyRecurrencePatternType>Interval</q1:DailyRecurrencePatternType>
                <q1:DayInterval>1</q1:DayInterval>
            </Recurrence>
            <RecurrenceType>Daily</RecurrenceType>
            <RecurrenceRangeType>EndAfter</RecurrenceRangeType>
            <StartDateTime>2010-05-16T14:32:00-04:00</StartDateTime>
            <Occurrences>1</Occurrences>
        </Schedule>
        <Interactions>
            <Interaction xsi:type="q2:EmailSendDefinition" xmlns:q2="http://exacttarget.com/wsdl/partnerAPI">
                <q2:PartnerKey xsi:nil="true"/>
                <q2:ObjectID xsi:nil="true"/>
                <q2:CustomerKey>CustomerKeyValue</q2:CustomerKey>
            </Interaction>
        </Interactions>
    </ScheduleRequestMsg>
</s:Body>
```

### SOAP Response

```
<soap:Body>
    <ScheduleResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
        <Results>
            <Result>
                <StatusCode>OK</StatusCode>
                <StatusMessage>EmailSendDefinition scheduled</StatusMessage>
                <Object>
                    <PartnerKey xsi:nil="true"/>
                    <ObjectID xsi:nil="true"/>
                    <Recurrence xsi:type="DailyRecurrence">
                        <DailyRecurrencePatternType>Interval</DailyRecurrencePatternType>
                        <DayInterval>1</DayInterval>
                    </Recurrence>
                    <RecurrenceType>Daily</RecurrenceType>
                    <RecurrenceRangeType>EndAfter</RecurrenceRangeType>
                    <StartDateTime>2010-05-16T12:32:00-06:00</StartDateTime>
                    <Occurrences>1</Occurrences>
                </Object>
                <Task>
                    <StatusCode>OK</StatusCode>
                    <StatusMessage>OK</StatusMessage>
                    <ID>12808147</ID>
                </Task>
            </Result>
        </Results>
        <OverallStatus>OK</OverallStatus>
        <OverallStatusMessage/>
        <RequestID>009cb04e-93be-48e8-871c-c658487634b4</RequestID>
    </ScheduleResponseMsg>
    <par:ScheduleRequestMsg xmlns:par="http://exacttarget.com/wsdl/partnerAPI"/>
</soap:Body>
```
