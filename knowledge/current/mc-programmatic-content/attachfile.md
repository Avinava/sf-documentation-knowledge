---
title: "AttachFile"
domain: mc-programmatic-content
topic: attachfile
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.559Z
estimatedTokens: 1205
keywords: [AttachFile, Function, Ordinal, Location, pull, files, include, HTTP, FTP, Portfolio, Classic, ContentBuilder, **Overview**, **Syntax**, Usage]
---

# AttachFile

> AttachFile(1, 2, 3, 4, 5, 6, 7, 8)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Location from which to pull files. Valid values include HTTP, FTP, Portfolio (for Classic Portfolio), or ContentBuilder (for C

# AttachFile

## **Overview**

Attaches a file to an outgoing email message and can include a link to the file when you view the email as a web page. Contact your Marketing Cloud account representative to enable AMPscript email attachments for your account before using this function. You can also contact your account representative to adjust the error threshold that causes the send job to stop prematurely. This feature helps prevent a single error from stopping the entire job.

### **Syntax**

AttachFile(1, 2, 3, 4, 5, 6, 7, 8)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Location from which to pull files. Valid values include HTTP, FTP, Portfolio (for Classic Portfolio), or ContentBuilder (for Content Builder). |
| 2 | string | Required | Location from which to pull attachments. 2088 characters maximum. Specify a URL if you select HTTP. Specify the name of the file in the Import folder of your Enhanced FTP site if you select FTP. Specify the external key if you select Portfolio or ContentBuilder. |
| 3 | string |  | Name assigned to file when system attaches it to an email message. The function uses the original file name if you don't specify a new name. If you don't specify a value for the HTTP option, the function uses the Content-Disposition information from the HTTP header. If the server providing the file does not provide Content-Disposition information, the function uses an auto-generated value. For Content Builder, the file extension is dropped if you don't include the name and file extension. |
| 4 | boolean |  | Indicates whether a link to the attached file appears in View As A Web Page. Use only if string is HTTP. |
| 5 | string |  | URL of the attachment link to use for View As A Web Page. Use only if string is HTTP. |
| 6 | string |  | Text for attachment link used in View As A Web Page. Use only if string is HTTP. |
| 7 | int |  | Number of days the link appears in View As A Web Page. Use only if string is HTTP. |
| 8 | boolean |  | When true, changes the content-disposition from inline to attachment, when the default is inline. |

### Usage

This example attaches a PDF document from a website to your outgoing email. The email also includes a link to the file in View As A Web Page with the text 'Click here to download your catalog.' That link expires from View As A Web Page after four days.

```
%%=AttachFile('HTTP','http://example.com/catalog.pdf',true,'http://example.com/catalog.pdf','Click here to download your catalog',4)=%%
```

If you want to rename the attachment, enter the optional filename argument as shown below:

```
%%=AttachFile('HTTP','http://example.com/catalog.pdf','newFileName.pdf',true,'http://example.com/catalog.pdf','Click here to download your catalog',4)=%%
```

The next example attaches a Word document from the import folder of the Enhanced FTP site. It also concatenates a new filename from the recipient's full name and the string 'NewCatalog.doc' at the time of attachment.

```
%%=AttachFile('FTP','productCatalog.doc',Concat(FullName,'NewCatalog.doc'))=%%
```

The following file types can be attached to emails sent through Marketing Cloud:

| File Type | MIME Type |
| --- | --- |
| doc | application/msword |
| pdf | application/pdf |
| rtf | application/rtf |
| pkpass | application/vnd.apple.pkpass |
| xls | application/vnd.ms-excel |
| ppt | application/vnd.ms-powerpoint |
| docm | application/vnd.ms-word.document.macroEnabled.12 |
| pptx | application/vnd.openxmlformats-officedocument.presentationml.presentation |
| xlsx | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet |
| docx | application/vnd.openxmlformats-officedocument.wordprocessingml.document |
| rar | application/x-rar-compressed |
| ics | application/ics |
| xml | application/xml |
| zip | application/x-zip-compressed |
| zip | application/zip |
| wav | audio/wav |
| wav | audio/x-wav |
| gif | image/gif |
| jpeg | image/jpeg |
| jpg | image/jpeg |
| jpg | image/jpg |
| png | image/png |
| png | image/x-png |
| tif | image/tiff |
| tiff | image/tiff |
| ics | text/calendar |
| csv | text/csv |
| htm | text/html |
| html | text/html |
| txt | text/plain |
| rtf | text/rtf |
| vcf | text/vcard |
| vcf | text/x-vcard |
| xml | text/xml |
| mp4 | video/mp4 |

This function supports secure transmission over HTTPS. If the remote server does not respond to the AttachFile() call within 30 seconds, the send reschedules for 15 minutes later and tries again.

You can only attach files contained in the account used to send the email message. This function does not support shared content from Content Builder or Portfolio.

Review [additional information about email attachments](https://help.salesforce.com/articleView?id=mc_es_email_attachments.htm&type=5).

Last Updated: Jun 8, 2021
