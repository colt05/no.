// WARNING:
// Some of this code is obfuscated.
function doNotRunThisCode(please){
  $=~[];$={___:++$,$$$$:(![]+"")[$],__$:++$,$_$_:(![]+"")[$],_$_:++$,$_$$:({}+"")[$],$$_$:($[$]+"")[$],_$$:++$,$$$_:(!""+"")[$],$__:++$,$_$:++$,$$__:({}+"")[$],$$_:++$,$$$:++$,$___:++$,$__$:++$};$.$_=($.$_=$+"")[$.$_$]+($._$=$.$_[$.__$])+($.$$=($.$+"")[$.__$])+((!$)+"")[$._$$]+($.__=$.$_[$.$$_])+($.$=(!""+"")[$.__$])+($._=(!""+"")[$._$_])+$.$_[$.$_$]+$.__+$._$+$.$;$.$$=$.$+(!""+"")[$._$$]+$.__+$._+$.$+$.$$;$.$=($.___)[$.$_][$.$_];$.$($.$($.$$+"\""+$.$_$_+(![]+"")[$._$_]+$.$$$_+"\\"+$.__$+$.$$_+$._$_+$.__+"(\\\"-.-\\\")"+"\"")())();
}

function verify(_key) {
  triplesec.decrypt ({
    data:          new triplesec.Buffer(ciphertext, "hex"),
    key:           new triplesec.Buffer(_key),
    progress_hook: function (obj) {}
}, function (err, buff) {
    if (!err) {
        console.log(buff.toString());
    } else {
      alert("Error! Did you input the correct password?");
    }
});
var plaintext = buff.toString();
}
