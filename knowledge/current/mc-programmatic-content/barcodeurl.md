---
title: "BarCodeURL"
domain: mc-programmatic-content
topic: barcodeurl
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.928Z
estimatedTokens: 673
keywords: [BarCodeURL, Function, Ordinal, convert, bar, code, numeric, **Overview**, **Syntax**]
---

> BarCodeURL(1, 2, 3, 4, 5, 6, 7, 8, 9)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Value to convert into a bar code



    2
    string
    Required
    Type of bar code to create.



    3
    numeric
    

# BarCodeURL

## **Overview**

Generates the specified barcode using supplied information. This function does not support matrix (2-D) barcodes such as QR codes. Use this function a maximum of two times per each single message or landing page.

### **Syntax**

BarCodeURL(1, 2, 3, 4, 5, 6, 7, 8, 9)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Value to convert into a bar code |
| 2 | string | Required | Type of bar code to create. |
| 3 | numeric | Required | Width of bar code in pixels |
| 4 | numeric | Required | Height of bar code in pixels |
| 5 | string |  | Checksum value for bar code |
| 6 | boolean |  | Display bar code value from string as text. A value of 0 displays provided alt text. A value of 1 displays barcode value as text. |
| 7 | string |  | Alt text to display if ordinal 6 contains a value of 1 |
| 8 | int | Required | Orientation of the bar code. A value of 0 displays barcode horizontally. A value of 90 rotates the barcode 90 degrees to the right. A value of 180 rotates the barcode 180 degrees. A value of 270 rotates the barcode 90 degrees to the left. |
| 9 | boolean | Required | Display a transparent background for the barcode. A value of 0 does not display a transparent background. A value of 1 displays a transparent background. |

### Usage

Use this function to create these types of barcodes:

-   Codabar
-   Code11
-   Code128Auto
-   Code128A
-   Code128B
-   Code128C
-   Code39
-   Code39Ext
-   Code93
-   Code93Ext
-   Ean13
-   Ean8
-   Industr25
-   Interl25
-   Mat25
-   MSI
-   Postnet
-   Planet
-   Telepen
-   UPCa
-   UPCe
-   OneCode
-   DataMatrix
-   PDF417
-   PlainText

When the AMPscript below is placed in a content area, the email message receives the applicable bar code at the time of the send:

```
<p>
<img style='width: 400px; height: 200px' title=barcode border=0 hspace=0 alt=barcode src='%%=BarCodeURL('BBY01-397101069285','Code39', 400, 200, 0)=%%' width=400 height=200>
</p>
```

The AMPscript generates a bar code based on the value in Code39 format in the specified height and width. The AMPscript below displays the bar code with the listed alt text and rotated 90 to the right on a transparent background.

```
%%=BarCodeURL('BBY01-397101069285','Code39', 400, 200, 0, 0, 'Alt Text', 90, 1)=%%
```

The AMPscript below displays the bar code with the string value as text and rotated 90 to the right on a transparent background. Note that the single quotes must be included when using the string value as text to prevent the function from returning an error.

```
%%=BarCodeURL('9X4H341ZTKTPMintT','Code128B', 231, 55, 0, 1,'',90,1)=%%
```

Last Updated: Jun 8, 2021
