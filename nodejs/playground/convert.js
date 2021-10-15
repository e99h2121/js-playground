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


    var str = "あいうえお";
    const unicodeArray = [];
    for (let i = 0; i < str.length; i++) {
        unicodeArray.push(str.charCodeAt(i));
    }
    const sjisArray = Encoding.convert(unicodeArray, {
        to: 'SJIS',
        from: 'UNICODE',
    });
    const sjis = Encoding.codeToString( sjisArray ); // 配列から文字列変換する関数は用意されている
    console.log(unicodeArray);
    console.log(sjis);


var unicodeUnescape = function(str) {
    var result = '', strs = str.match(/\\u.{4}/ig);
    if (!strs) return '';
    for (var i = 0, len = strs.length; i < len; i++) {
        result += String.fromCharCode(strs[i].replace('\\u', '0x'));
    }
    return result;
};

var result = unicodeUnescape('abc123\\u3042\\u3044\\u3046\\u3048\\u304a');
console.log(result);

