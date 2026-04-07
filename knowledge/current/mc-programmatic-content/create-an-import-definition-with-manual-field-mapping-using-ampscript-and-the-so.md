---
title: "Create an Import Definition with Manual Field Mapping Using AMPscript and the SOAP Web Service API"
domain: mc-programmatic-content
topic: create-an-import-definition-with-manual-field-mapping-using-ampscript-and-the-so
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.095Z
estimatedTokens: 667
keywords: [Import, Definition, Manual, Mapping, AMPscript, SOAP, Web, Service, API, contained, email, message, landing, interact, sample, model, own, script]
---

> Use AMPscript contained in an email message or landing page to interact with the web service API to create an import definition with manual field mapping. Use this sample AMPscript as a model to create your own script:

# Create an Import Definition with Manual Field Mapping Using AMPscript and the SOAP Web Service API

Use AMPscript contained in an email message or landing page to interact with the web service API to create an import definition with manual field mapping. Use this sample AMPscript as a model to create your own script:

```
%%[
// Create an Import Definition object
Set @id = CreateObject("ImportDefinition")
SetObjectProperty(@id,"Name","API Created Import Definition")
SetObjectProperty(@id,"CustomerKey","XXXXXXXXXX")
SetObjectProperty(@id,"Description","API-Created Import Definition w/manual field mappings.")
SetObjectProperty(@id,"AllowErrors","true")

// Associate Data-Extension to Import-Definition
Set @de = CreateObject("DataExtension")
SetObjectProperty(@de,"CustomerKey","XXXXXXXXXXX")
SetObjectProperty(@id,"DestinationObject",@de)

// Specify the notification type (optional)
Set @notification = CreateObject("AsyncResponse")
SetObjectProperty(@notification,"ResponseType","email")
SetObjectProperty(@notification,"ResponseAddress","help@example.com")
SetObjectProperty(@id,"Notification",@notification)

// Specify the File Transfer Location (where is the file coming from?) (required)
Set @FileTransferLocation = CreateObject("FileTransferLocation")
SetObjectProperty(@FileTransferLocation,"CustomerKey","ExactTarget Enhanced FTP")
SetObjectProperty(@id,"RetrieveFileTransferLocation",@FileTransferLocation)

// Specify the UpdateType (optional)
SetObjectProperty(@id,"UpdateType","Overwrite")

// Map fields (required)
SetObjectProperty(@id,"FieldMappingType","ManualMap")

Set @FieldMap = CreateObject("FieldMap")
SetObjectProperty(@FieldMap,"DestinationName","email_address")
SetObjectProperty(@FieldMap,"Item","Email_Address")
AddObjectArrayItem(@id,"FieldMaps",@FieldMap)

Set @FieldMap = CreateObject("FieldMap")
SetObjectProperty(@FieldMap,"DestinationName","subscriber_key")
SetObjectProperty(@FieldMap,"Item","ContactID")
AddObjectArrayItem(@id,"FieldMaps",@FieldMap)
 Set @FieldMap = CreateObject("FieldMap")
SetObjectProperty(@FieldMap,"DestinationName","first_name")
SetObjectProperty(@FieldMap,"Item","FNAME")
AddObjectArrayItem(@id,"FieldMaps",@FieldMap)

Set @FieldMap = CreateObject("FieldMap")
SetObjectProperty(@FieldMap,"DestinationName","last_name")
SetObjectProperty(@FieldMap,"Item","LNAME")
AddObjectArrayItem(@id,"FieldMaps",@FieldMap)

// Specify the File naming Specifications
SetObjectProperty(@id,"FileSpec","test_file.csv")

// Specify the FileType
SetObjectProperty(@id,"FileType","CSV")

Set @StatCode = InvokeCreate(@id, @StatMessage, @ErrorCode)

]%%
```

Status = %%= v(@StatMessage) =%% - %%= v(@ErrorCode) =%%
