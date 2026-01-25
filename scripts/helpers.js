(function(){
    try{
        const k = "\u0061\u0072\u0073\u006C\u0061\u006E\u0062\u0065\u0068\u006C\u0065\u0065\u006D";
        let h = location.hostname;
        h = h ? h.toLowerCase() : "";
        let s = false;
        if(typeof h === "string"){
            if(h.indexOf(k) !== -1){
                s = true;
            } else {
                s = false;
            }
        }
        if(!s){
			const l = "\u002E\u0061\u0072\u0073\u006C\u0061\u006E\u0062\u0065\u0068\u006C\u0065\u0065\u006D\u002D\u0072\u0065\u0076\u0065\u0061\u006C";
            let q = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C'](l);
            if(q && q.length > 0){
                for(let i = 0; i < q.length; i++){
                    let x = q[i];
                    if(x&&x['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']){x['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']['\u0072\u0065\u006D\u006F\u0076\u0065\u0043\u0068\u0069\u006C\u0064'](x);}
                }
            }
        }
    }catch(_){}
})();
