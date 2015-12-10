define(["utils/localization"],function(a){"use strict";var b={defaultName:_.template("Copy of '<%- name %>'"),title:_.template(a("Copying history")+' "<%- name %>"'),submitLabel:a("Copy"),errorMessage:a("History could not be copied"),progressive:a("Copying history"),activeLabel:a("Copy only the active, non-deleted datasets"),allLabel:a("Copy all datasets including deleted ones"),anonWarning:a("As an anonymous user, unless you login or register, you will lose your current history ")+a("after copying this history. "),template:_.template(["<% if( isAnon ){ %>",'<div class="warningmessage">',"<%- anonWarning %>",a("You can"),' <a href="/user/login">',a("login here"),"</a> ",a("or")," ",' <a href="/user/create">',a("register here"),"</a>.","</div>","<% } %>","<form>",'<label for="copy-modal-title">',a("Enter a title for the new history"),":","</label><br />",'<input id="copy-modal-title" class="form-control" style="width: 100%" value="<%= name %>" />','<p class="invalid-title bg-danger" style="color: red; margin: 8px 0px 8px 0px; display: none">',a("Please enter a valid history title"),"</p>","<% if( allowAll ){ %>","<br />","<p>",a("Choose which datasets from the original history to include:"),"</p>",'<input name="copy-what" type="radio" id="copy-non-deleted" value="copy-non-deleted" ','<% if( copyWhat === "copy-non-deleted" ){ print( "checked" ); } %>/>','<label for="copy-non-deleted"> <%- activeLabel %></label>',"<br />",'<input name="copy-what" type="radio" id="copy-all" value="copy-all" ','<% if( copyWhat === "copy-all" ){ print( "checked" ); } %>/>','<label for="copy-all"> <%- allLabel %></label>',"<% } %>","</form>"].join("")),showAjaxIndicator:function(){var a='<p><span class="fa fa-spinner fa-spin"></span> '+this.progressive+"...</p>";this.modal.$(".modal-body").empty().append(a).css({"margin-top":"8px"})},dialog:function(b,c,d){function e(){var d=b.$("#copy-modal-title").val();if(!d)return void b.$(".invalid-title").show();var e="copy-all"===b.$('input[name="copy-what"]:checked').val();b.$("button").prop("disabled",!0),f.showAjaxIndicator(),c.copy(!0,d,e).done(function(a){g.resolve(a)}).fail(function(){alert([this.errorMessage,a("Please contact a Galaxy administrator")].join(". ")),g.rejectWith(g,arguments)}).always(function(){b.hide()})}if(d=d||{},!b)return c.copy();this.modal=b;var f=this,g=jQuery.Deferred(),h=this.defaultName({name:c.get("name")}),i=d.allDatasets?"copy-all":"copy-non-deleted",j=_.isUndefined(d.allowAll)?!0:d.allowAll,k=d.closing_callback;return b.show(_.extend(d,{title:this.title({name:c.get("name")}),body:$(f.template({name:h,isAnon:Galaxy.user.isAnonymous(),allowAll:j,copyWhat:i,activeLabel:this.activeLabel,allLabel:this.allLabel,anonWarning:this.anonWarning})),buttons:_.object([[a("Cancel"),function(){b.hide()}],[this.submitLabel,e]]),height:"auto",closing_events:!0,closing_callback:function(a){a&&g.reject({cancelled:!0}),k&&k(a)}})),b.$("#copy-modal-title").focus().select(),b.$("#copy-modal-title").on("keydown",function(a){13===a.keyCode&&(a.preventDefault(),e())}),g}},c=_.extend({},b,{defaultName:_.template("imported: '<%- name %>"),title:_.template(a("Importing history")+' "<%- name %>"'),submitLabel:a("Import"),errorMessage:a("History could not be imported"),progressive:a("Importing history"),activeLabel:a("Import only the active, non-deleted datasets"),allLabel:a("Import all datasets including deleted ones"),anonWarning:a("As an anonymous user, unless you login or register, you will lose your current history ")+a("after importing this history. ")}),d=function(a,d){return d=d||{},d.import?c.dialog(Galaxy.modal,a,d):b.dialog(Galaxy.modal,a,d)};return d});
//# sourceMappingURL=../../../maps/mvc/history/copy-dialog.js.map