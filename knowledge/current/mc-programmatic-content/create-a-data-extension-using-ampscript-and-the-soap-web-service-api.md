---
title: "Create a Data Extension Using AMPscript and the SOAP Web Service API"
domain: mc-programmatic-content
topic: create-a-data-extension-using-ampscript-and-the-soap-web-service-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:26.725Z
estimatedTokens: 1525
keywords: [Data, Extension, AMPscript, SOAP, Web, Service, API, contained, landing, interact, unique, sendable, extensions, receive, another]
---

# Create a Data Extension Using AMPscript and the SOAP Web Service API

> Use AMPscript contained in a landing page to interact with the web service API to create a data extension. For example, you can create unique sendable data extensions that receive information from another data system or integration and conduct sends based on the information imported into those data 

# Create a Data Extension Using AMPscript and the SOAP Web Service API

Use AMPscript contained in a landing page to interact with the web service API to create a data extension. For example, you can create unique sendable data extensions that receive information from another data system or integration and conduct sends based on the information imported into those data extensions. The AMPscript pulls the information from the other data source and imports it into the sendable data extensions. You can then include the sendable data extensions inside a triggered send definition to send emails including personalized information.

Use this sample AMPscript as a model to create your own script.

```
%%[
/*CREATE THE DATA EXTENSION*/
Set @de = CreateObject("DataExtension")
SetObjectProperty(@de,"Name","API-Created Data Extension")
SetObjectProperty(@de,"CustomerKey","XXXXXXXX")
SetObjectProperty(@de,"Description","Data Extension Created via API")
SetObjectProperty(@de,"IsSendable","True")
SetObjectProperty(@de,"IsTestable","False")

/*DE Folder ID - mouse over in app to get this ID */
SetObjectProperty(@de,"CategoryID","123")

/* THIS IS THE SENDABLE FIELD */
Set @deFields = CreateObject("DataExtensionField")
SetObjectProperty(@deFields,"FieldType","EmailAddress")
SetObjectProperty(@deFields,"IsRequired","true")
SetObjectProperty(@deFields,"IsPrimaryKey","true")
SetObjectProperty(@deFields,"IsNillable","false")
SetObjectProperty(@deFields,"MaxLength","100")
SetObjectProperty(@deFields,"Name","email_address")
AddObjectArrayItem(@de,"Fields",@deFields)
SetObjectProperty(@de,"SendableDataExtensionField",@deFields)
 Set @deFields = CreateObject("DataExtensionField")
SetObjectProperty(@deFields,"FieldType","Text")
SetObjectProperty(@deFields,"IsRequired","true")
SetObjectProperty(@deFields,"IsPrimaryKey","false")
SetObjectProperty(@deFields,"IsNillable","false")
SetObjectProperty(@deFields,"MaxLength","100")
SetObjectProperty(@deFields,"Name","subscriber_key")
AddObjectArrayItem(@de,"Fields",@deFields)

Set @deFields = CreateObject("DataExtensionField")
SetObjectProperty(@deFields,"FieldType","Text")
SetObjectProperty(@deFields,"IsRequired","false")
SetObjectProperty(@deFields,"IsPrimaryKey","false")
SetObjectProperty(@deFields,"IsNillable","false")
SetObjectProperty(@deFields,"MaxLength","50")
SetObjectProperty(@deFields,"Name","first_name")
AddObjectArrayItem(@de,"Fields",@deFields)

Set @deFields = CreateObject("DataExtensionField")
SetObjectProperty(@deFields,"FieldType","Text")
SetObjectProperty(@deFields,"IsRequired","false")
SetObjectProperty(@deFields,"IsPrimaryKey","false")
SetObjectProperty(@deFields,"IsNillable","false")
SetObjectProperty(@deFields,"MaxLength","75")
SetObjectProperty(@deFields,"Name","last_name")
AddObjectArrayItem(@de,"Fields",@deFields)
 /* This field sets how the data extension field above relates to the all subscribers list */
SET @ts_attr = CreateObject("Attribute")
SetObjectProperty(@ts_attr, "Name", "Email Address")
SetObjectProperty(@ts_attr, "Value", "Email Address")
SetObjectProperty(@de,"SendableSubscriberField",@ts_attr)

Set @StatCode = InvokeCreate(@de, @StatMessage, @ErrorCode)

]%%

Status = %%= v(@StatMessage) =%% -- %%= v(@ErrorCode) =%%
```

The sample code below creates a sendable data extension using a subscriber key.

```
/*CREATE THE DATA EXTENSION*/
Set @de = CreateObject("DataExtension")
SetObjectProperty(@de,"Name",@name)
SetObjectProperty(@de,"CustomerKey",@key)
SetObjectProperty(@de,"Description",@description)
SetObjectProperty(@de,"IsSendable","True")
SetObjectProperty(@de,"IsTestable","False")

/*DE Folder ID*/
SetObjectProperty(@de,"CategoryID",@FolderID)

Set @deFields = CreateObject("DataExtensionField")
SetObjectProperty(@deFields,"Name","Whatever")
SetObjectProperty(@deFields,"FieldType","Text")
SetObjectProperty(@deFields,"MaxLength","100")
AddObjectArrayItem(@de,"Fields",@deFields)

Set @deFields = CreateObject("DataExtensionField")
SetObjectProperty(@deFields,"Name","Subscriber Key")
SetObjectProperty(@deFields,"FieldType","Text")
SetObjectProperty(@deFields,"MaxLength","150")
AddObjectArrayItem(@de,"Fields",@deFields)

SetObjectProperty(@de,"SendableDataExtensionField",@deFields)

SET @ts_attr = CreateObject("Attribute")
SetObjectProperty(@ts_attr, "Name", "Subscriber Key")
SetObjectProperty(@ts_attr, "Value", "Subscriber Key")

SetObjectProperty(@de,"SendableSubscriberField",@ts_attr)
Set @StatCode = InvokeCreate(@de, @StatMessage, @ErrorCode)
```

If you work in an Enterprise 2.0 account and want to use data retention with your data extensions, add the ClientID property to the data extension object with the appropriate ClientID value. Add the AMPscript below to the sample code above to make sure the correct user permissions are used with the data retention policy. You can hover your mouse over the user in the Setup section of the Salesforce Marketing Cloud application to get the UserID number to include in this code:

```
SET @client = CreateObject("ClientID")
SetObjectProperty(@client, "ID", @memberID)
SetObjectProperty(@client, "UserID", @userIDwithPermission)
```

You must also set the data retention policy via AMPscript, as demonstrated in this code:

```
/* Data Retention */

SetObjectProperty(@de,"DataRetentionPeriodLength","3")
SetObjectProperty(@de,"DataRetentionPeriodLengthSpecified","True")
SetObjectProperty(@de,"DataRetentionPeriodUnitOfMeasure","5")

/*
                 DataRetentionPeriodUnitOfMeasure
                 * 1 = N/A
                 * 2 = N/A
                 * 3 = Days
                 * 4 = Weeks
                 * 5 = Months
                 * 6 = Years
*/

SetObjectProperty(@de,"DataRetentionPeriodUnitOfMeasureSpecified","True")
SetObjectProperty(@de,"DeleteAtEndOfRetentionPeriod","True")
SetObjectProperty(@de,"DeleteAtEndOfRetentionPeriodSpecified","True")
SetObjectProperty(@de,"ResetRetentionPeriodOnImport","False")
SetObjectProperty(@de,"ResetRetentionPeriodOnImportSpecified","False")
SetObjectProperty(@de,"RowBasedRetention","False")
SetObjectProperty(@de,"RowBasedRetentionSpecified","False")
```
