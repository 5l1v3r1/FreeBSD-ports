--- components/neterror/resources/neterror.js.orig	2019-03-11 22:00:56 UTC
+++ components/neterror/resources/neterror.js
@@ -166,7 +166,7 @@ function setUpCachedButton(buttonStrings) {
 }
 
 var primaryControlOnLeft = true;
-// <if expr="is_macosx or is_ios or is_linux or is_android">
+// <if expr="is_macosx or is_ios or is_linux or is_android or is_bsd">
 primaryControlOnLeft = false;
 // </if>
 
