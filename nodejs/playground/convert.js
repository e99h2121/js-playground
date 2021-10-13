    const Encoding = require('encoding-japanese');

    var utf8String = "ã\u82a0";
    var unicodeString = "";
    unicodeString = Encoding.convert(utf8String, {
        to: 'UNICODE',
        from: 'SJIS',
        type: 'string' // 文字列 'string' を指定 (string で返ります)
    });

    console.log(unicodeString);

    var utf8String = 'ã\u0081\u0093ã\u0082\u0093ã\u0081«ã\u0081¡ã\u0081¯';
    var unicodeString = Encoding.convert(utf8String, {
        to: 'UNICODE',
        from: 'UTF8',
        type: 'string' // 文字列 'string' を指定 (string で返ります)
    });
    console.log(unicodeString); // こんにちは


    var str   = "あいうえお";
    // 文字列を配列に変換
    var str2array = function(str) {
        var array = [],i,il=str.length;
        for(i=0;i<il;i++) array.push(str.charCodeAt(i));
        return array;
    };
    var array = str2array( str ),
    sjis_array = Encoding.convert(array, "UTF8", "SJIS"),
    sjis       = Encoding.codeToString( sjis_array ); // 配列から文字列変換する関数は用意されている
    console.log(array);
    console.log(sjis);
