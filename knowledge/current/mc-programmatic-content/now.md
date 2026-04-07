---
title: "Now"
domain: mc-programmatic-content
topic: now
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.729Z
estimatedTokens: 318
keywords: [Now, Function, Ordinal, Determines, whether, preserve, email, sent, time, post-send, resolution, preserves, **Overview**, **Syntax**, retain, send, retains, original, activity, current, system, date]
---

> Now(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    boolean
    
    Determines whether to preserve the email sent time for post-send resolution of Now(). A value of true preserves the email sent time.

# Now

## **Overview**

Returns the current system (server) date and time. When included in content for triggered sends, the time indicates when the triggered send definition for the message started or republished. The time does not not reflect when the send actually occurred. Now() is in Central Standard Time (CST) without daylight saving time.

### **Syntax**

Now(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | boolean |  | Determines whether to preserve the email sent time for post-send resolution of Now(). A value of true preserves the email sent time. |

### Usage

Review what Now() and GetSendTime() return in different situations.

|  | During a send | After a list, DE, or manual send | After a triggered or journey send |
| --- | --- | --- | --- |
| Now() | Current system time | Current system time | Current system time |
| Now(1) | Current system time | Job start time | Job publish time |
| GetSendTime() | Current system time | Individual subscriber send completed time | Individual subscriber send completed time |
| GetSendTime(1) | Current system time | Job start time | Job publish time |

Given the date and time 10 a.m., March 1, 2014.

```
Now()
```

System returns:

```
3/1/2014  10:00:00
```

Last Updated: Jun 8, 2021

## Code Examples

```
var currentTime = Now();
```

```
<script runat="server">
     var time = Platform.Function.Now();
</script>
```
