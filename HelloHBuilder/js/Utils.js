      var cookieUtil={
          set :function(name,value,expires,path,domain,secure){
              var cookieText=encodeURIComponent(name)+'='+
                          encodeURIComponent(value);
              if(expires instanceof Date){
                  cookieText+=';expires='+expires.toGMTString();
              }
              if(path){
                  cookieText+=';path='+path;
              }
              if(domain){
                  cookieText+=';domain='+domain;
              }
              if(secure){
                  cookieText+=';secure';
              }
              document.cookie=cookieText;        
          },
          get:function(name){
              var cookieName=encodeURIComponent(name)+'=',
                  cookieStart=document.cookie.indexOf(cookieName),
                  cookieValue=null;
              if(cookieStart>-1){
                  var cookieEnd=document.cookie.indexOf(';',cookieStart);
                  if(cookieEnd==-1){
                      cookieEnd=document.cookie.length;
                  }
                  cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd))
              }
              return cookieValue;
          },
          unset:function(name,path,domain,secure){
              this.set(name,'',new Date(0),domain,path)
          }
      }
       function setCookieDate(day){
           var date=null;
           if(typeof day=='number'&&day>0){
               date=new Date();
               date.setDate(date.getDate()+day);
           }else{
              throw new Error('!!')         
           }
           return date;
       }
//    cookieUtil.set('name','杜杜',setCookieDate(7));


function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }
function getLocalTime(nS) {     
    return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17)}     
