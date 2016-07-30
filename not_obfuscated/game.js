// Settings //
settings = {};
settings.ciphertext = "1c94d7de000000034676801a0be8e2cc6de22dd5a294b5e078530282dbeeee2c727fc7a3b4446e1a474faf00e5097c09f4adc4d7dec438d612167b102ebc030a650d17dd1f8dd5f2e5426d8d0b4029b19681b2be8cac2c531e5b22f413b80895e0bbbded5f2c775385cab2501bd52473d35096456fcb1196e182149d554cd7cb704b2696b3116b4507e5bfd59f6e49e56158dede89b47a6fdbbea23096513bb87078cd48eba74aa9b579cc58f7eb71e77d4d48bcd3a30c4d11d2f3fcecc4d6e5599e1bcedbb072df0ec2be21008893455902";
//////////////

// WARNING:
// Some of this code is obfuscated.
function doNotRunThisCode(please){
  $=~[];$={___:++$,$$$$:(![]+"")[$],__$:++$,$_$_:(![]+"")[$],_$_:++$,$_$$:({}+"")[$],$$_$:($[$]+"")[$],_$$:++$,$$$_:(!""+"")[$],$__:++$,$_$:++$,$$__:({}+"")[$],$$_:++$,$$$:++$,$___:++$,$__$:++$};$.$_=($.$_=$+"")[$.$_$]+($._$=$.$_[$.__$])+($.$$=($.$+"")[$.__$])+((!$)+"")[$._$$]+($.__=$.$_[$.$$_])+($.$=(!""+"")[$.__$])+($._=(!""+"")[$._$_])+$.$_[$.$_$]+$.__+$._$+$.$;$.$$=$.$+(!""+"")[$._$$]+$.__+$._+$.$+$.$$;$.$=($.___)[$.$_][$.$_];$.$($.$($.$$+"\""+$.$_$_+(![]+"")[$._$_]+$.$$$_+"\\"+$.__$+$.$$_+$._$_+$.__+"(\\\"-.-\\\")"+"\"")())();
}

function verify(_key, next) {
  triplesec.decrypt ({
    data:          new triplesec.Buffer(settings.ciphertext, "hex"),
    key:           new triplesec.Buffer(_key),
    progress_hook: function (obj) {}
}, function (err, buff) {
    if (!err) {
        console.log(buff.toString());
    } else {
      alert("Error! Did you input the correct password?");
    }
});
//the key and code are the same
var plaintext = buff.toString();
if (md5(plaintext).concat(_key) == "1f15c8645d67ef61676436dc1568cf2f") {
  alert("correct");
  next();
}
}
