window.addEvent("domready",function(){$$("div#rast_tabs a").addEvent("click",function(d){d.stop();if($("countres")){$("countres").dispose()}$$("div#rast_tabs a").removeClass("sel");this.addClass("sel");var c=this.getProperty("rel");$("type").value=c;if(c==1){$("powerdiv").hide();$("motordiv1").show();$("motordiv3").show();$("motordiv2").hide();$("agediv").show();$("weightdiv").hide()}else{if(c==2){$("powerdiv").show();$("motordiv1").hide();$("motordiv3").hide();$("motordiv2").hide();$("agediv").hide();$("weightdiv").hide()}else{if(c==3){$("powerdiv").hide();$("motordiv1").hide();$("motordiv3").hide();$("motordiv2").show();$("agediv").hide();$("weightdiv").hide()}else{if(c==4){$("powerdiv").hide();$("motordiv1").show();$("motordiv3").hide();$("motordiv2").hide();$("agediv").show();$("weightdiv").show()}else{if(c==5){$("powerdiv").hide();$("motordiv1").show();$("motordiv3").hide();$("motordiv2").hide();$("agediv").show();$("weightdiv").show()}}}}}});if($("historya")){$("historya").addEvent("click",function(c){c.stop();$$(".history").toggle()})}var a=false;$("rastcom").addEvent("click",function(c){if(a){$("hcoms").show();$("rastcoms").inject($("rastabout"),"after").hide();a=false}else{$("hcoms").hide();$("rastcoms").inject($("rastabout"),"before").show();a=true}if(typeof(showshadow)=="function"){showshadow()}c.stop()});var b=0;$("notrastmore").addEvent("click",function(c){c.stop();$$("div#notrast ul li").removeClass("hidden");new Request.HTML({url:"/infocar-ua/ajax/_notrast.php?p="+b,onSuccess:function(f,d,g,e){$$("section#notrast ul li").removeClass("hidden");if(g){$("notrast").getFirst("ul").appendHTML(g)}else{$("notrastmore").dispose()}}}).get();b++});if($("expandtext")){$("expandtext").addEvent("click",function(c){c.stop();$("fulltext").setStyle("height","auto");this.dispose();$("gradshade").dispose()})}});