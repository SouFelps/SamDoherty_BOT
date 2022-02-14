module.exports= [{
 name: "captcha",
 code: `$title[1;CAPTCHA VERIFICATION]
 $description[1;**Heres Your Code <@$authorID>!** - $randomString[8]]
 $color[1;RANDOM]
 $footer[1;Captach Verification System 3.0]
 $addField[1;Reminder;Use (prefix)Verify And Ur Code.]
 $setuserVar[Captcha;$randomstring[8]]`
}, {
 name: "verify",
 usage: "(prefix)Verify <code>",
 code: `$title[1;Verification Completed!]
 $description[1;**You Have Been SuccessFully Verified Known As <@$authorID>!**]
 $footer[1;Captcha Verification System 3.0]
 $color[1;RANDOM]
 $giveRole[$authorID;Verified Role ID Here]
 
 $onlyIf[$message==$getuserVar[Captcha];Sorry But This Code You Typed In Is Invalid! :x:]
`
}]