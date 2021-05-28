const str = "朝です。ご飯を食べましょう。デザートは何にしましょうか？好きなものを選んでくださいね。";
const str2 = "このように道筋を考えようとすると、非常に多くの可能性を検討しなければならなくなります。これをこう呼ぶことにしましょう。";
const str3 = "朝だ。ご飯を食べるぞ。デザートは何にしようか？好きなものを選べ。";


function toDadearu(str) {
return str
.replace(/しましょう/g,'しよう')
.replace(/きましょう/g,'こう')
.replace(/りましょう/g,'ろう')
.replace(/出来ました/g,'出来た')
.replace(/できました/g,'できた')
.replace(/出来ます/g,'出来る')
.replace(/できます/g,'できる')
.replace(/あります/g,'ある')
.replace(/なります/g,'なる')
.replace(/きました/g,'くる')
.replace(/ませんが/g,'ないが')
.replace(/でしょう/g,'だろう')
.replace(/りません/g,'らない')
.replace(/みました/g,'みた')
.replace(/ましょう/g,'よう')
.replace(/でした/g,'だった')
.replace(/ですが/g,'だが')
.replace(/います/g,'いる')
.replace(/かります/g,'かる')
.replace(/えました/g,'えた')
.replace(/いいです/g,'いい')
.replace(/ないです/g,'ない')
.replace(/無いです/g,'無い')
.replace(/れます/g,'れる')
.replace(/きます/g,'くる')
.replace(/します/g,'する')
.replace(/します/g,'する')
.replace(/ません/g,'ない')
.replace(/ていた/g,'いた')
.replace(/ました/g,'た',true)
.replace(/ります/g,'る',true)
.replace(/ます/g,'る')
.replace(/です/g,'だ');
};


function toDesumasu(str) {
return str
.replace(/しよう/g,'しましょう')
.replace(/こう/g,'きましょう')
.replace(/ろう/g,'りましょう')
.replace(/出来た/g,'出来ました')
.replace(/できた/g,'できました')
.replace(/出来た/g,'出来ます')
.replace(/できる/g,'できます')
.replace(/ある/g,'あります')
.replace(/なる/g,'なります')
.replace(/くる/g,'きました')
.replace(/ないが/g,'ませんが')
.replace(/だろう/g,'でしょう')
.replace(/らない/g,'りません')
.replace(/みた/g,'みました')
.replace(/よう/g,'ましょう')
.replace(/だった/g,'でした')
.replace(/だが/g,'ですが')
.replace(/いる/g,'います')
.replace(/かる/g,'かります')
.replace(/えた/g,'えました')
.replace(/いい/g,'いいです')
.replace(/ない/g,'ないです')
.replace(/無い/g,'無いです')
.replace(/れる/g,'れます')
.replace(/くる/g,'きます')
.replace(/する/g,'します')
.replace(/する/g,'します')
.replace(/ない/g,'ません')
.replace(/いた/g,'ていた')
.replace(/た/g,'ました',true)
.replace(/る/g,'ります',true)
.replace(/る/g,'ます')
.replace(/だ/g,'です');
};


console.log(toDadearu(str));
console.log(toDadearu(str2));

console.log(toDesumasu(str3));

