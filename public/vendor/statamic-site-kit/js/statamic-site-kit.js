(()=>{"use strict";function t(t,e,a,i,s,n,r,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):s&&(l=o?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}const e=t({data:function(){var t="string"==typeof this.value?this.value.length:0;return{contentLength:t,validation:this.validateMeta(t)}},methods:{handleKeyUp:function(){this.contentLength=this.value&&this.value.length,this.validation=this.validateMeta(this.value&&this.value.length)}}},undefined,undefined,!1,null,null,null).exports;const a=t({mixins:[Fieldtype,e],inject:["storeName"],methods:{generatePlaceholder:function(){var t=this.$store.state.publish[this.storeName];return"".concat(t.values.title||""," ").concat(this.meta.title_separator," ").concat(this.meta.site_name)},validateMeta:function(t){var e;switch(!0){case 0===t:e={step:"valid",caption:"You have not set a meta title, the value for the page title will be used."};break;case t<20:e={step:"warn",caption:"Your meta title could be longer."};break;case t>=20&&t<=70:e={step:"valid",caption:"Your meta title is a good length."};break;case t>70:e={step:"err",caption:"Your meta title is too long, <strong>the ideal length is between 20 and 70 characters.</strong>"}}return e}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"meta-field-validator__outer"},[a("div",{staticClass:"meta-field-validator__field-container"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"input-text",attrs:{type:"text",name:t.name,id:t.id,placeholder:t.generatePlaceholder()},domProps:{value:t.value},on:{input:function(e){return t.update(e.target.value)},keyup:t.handleKeyUp}})]),t._v(" "),a("progress",{class:"meta-field-validator__progress meta-field-validator__progress--"+t.validation.step,attrs:{max:"70"},domProps:{value:t.contentLength}})]),t._v(" "),a("span",{staticClass:"meta-field-validator__caption",domProps:{innerHTML:t._s(t.validation.caption)}})])}),[],!1,null,null,null).exports;const i=t({mixins:[Fieldtype,e],methods:{generatePlaceholder:function(){return this.config.placeholder||"No meta description has been set for this page, search engines will use a relevent body of text from the page content instead."},validateMeta:function(t){var e;switch(!0){case 0===t:e={step:"valid",caption:"You have not set a meta description for this page."};break;case t<50:e={step:"warn",caption:"Your meta description could be longer."};break;case t>=20&&t<=300:e={step:"valid",caption:"Your meta description is a good length."};break;case t>300:e={step:"err",caption:"Your meta description is too long, <strong>the ideal length is between 50 and 300 characters.</strong>"}}return e}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"meta-field-validator__outer"},[a("div",{staticClass:"meta-field-validator__field-container"},[a("textarea",{staticClass:"input-text",staticStyle:{"overflow-x":"hidden","overflow-wrap":"break-word",resize:"none"},attrs:{name:t.name,id:t.id,placeholder:t.generatePlaceholder()},domProps:{value:t.value},on:{input:function(e){return t.update(e.target.value)},keyup:t.handleKeyUp}}),t._v(" "),a("progress",{class:"meta-field-validator__progress meta-field-validator__progress--"+t.validation.step,attrs:{max:"300"},domProps:{value:t.contentLength}})]),t._v(" "),a("span",{staticClass:"meta-field-validator__caption",domProps:{innerHTML:t._s(t.validation.caption)}})])}),[],!1,null,null,null).exports;const s=t({mixins:[Fieldtype],inject:["storeName"],computed:{previewParts:function(){var t=this.$store.state.publish[this.storeName].values,e=t.meta_title,a=t.meta_description,i=t.slug,s=t.title,n=this.meta,r=n.site_name,o=n.site_url,l=n.title_separator;return{title:e||"".concat(s," ").concat(l," ").concat(r),url:"".concat(o,"/").concat(i),description:a}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"google-styles google-preview__preview z-depth-1"},[a("div",[a("span",{staticClass:"google-styles__title"},[t._v(t._s(this.previewParts.title))]),t._v(" "),a("span",{staticClass:"google-styles__link"},[t._v(t._s(this.previewParts.url))]),t._v(" "),a("p",{staticClass:"google-styles__description"},[t._v(t._s(this.previewParts.description))])])])}),[],!1,null,null,null).exports;const n=t({mixins:[Listing],props:["initial-redirects","initial-columns","create-url"],data:function(){return{rows:this.initialRedirects,columns:this.initialColumns}},methods:{actionCompleted:function(){location.reload()}},computed:{}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.rows.length?a("data-list",{attrs:{columns:t.columns,rows:t.rows},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.filteredRows;return a("div",{staticClass:"card p-0 relative"},[a("data-list-bulk-actions",{attrs:{url:t.bulkActionsUrl},on:{started:t.actionStarted,completed:t.actionCompleted}}),t._v(" "),a("data-list-table",{attrs:{rows:i,"allow-bulk-actions":!0},scopedSlots:t._u([{key:"cell-source_url",fn:function(e){var i=e.row;return[a("a",{attrs:{href:i.edit_url}},[t._v(t._s(i.source_url))])]}},{key:"cell-is_active",fn:function(e){var a=e.row;return[t._v("\n                "+t._s(a.is_active?"Yes":"No")+"\n            ")]}},{key:"actions",fn:function(e){var i=e.row;return[a("dropdown-list",[a("dropdown-item",{attrs:{text:t.__("Edit"),redirect:i.edit_url}}),t._v(" "),a("dropdown-item",{staticClass:"warning",attrs:{text:t.__("Delete")},on:{click:function(e){t.$refs["deleter_"+i.id].confirm()}}},[a("resource-deleter",{ref:"deleter_"+i.id,attrs:{resource:i},on:{deleted:function(e){return t.removeRow(i)}}})],1)],1)]}}],null,!0)})],1)}}],null,!1,3192648496)}):a("div",{staticClass:"md:pt-8 max-w-2xl mx-auto"},[a("div",{staticClass:"w-full md:w-1/2"},[a("h1",{staticClass:"mb-4"},[t._v("Redirects")]),t._v(" "),a("p",{staticClass:"text-grey-70 leading-normal mb-4 text-lg antialiased"},[t._v("\n            Redirects are used to direct users to content which may have been removed or deleted.\n        ")]),t._v(" "),a("a",{staticClass:"btn-primary btn-lg",attrs:{href:this.createUrl}},[t._v("Create a redirect")])])])}),[],!1,null,null,null).exports;const r=t({props:["title","action","blueprint","method","meta","values"],methods:{redirectOnSaved:function(){}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("publish-form",{attrs:{title:t.title,action:t.action,blueprint:t.blueprint,meta:t.meta,method:t.method,values:t.values}})}),[],!1,null,null,null).exports;Statamic.booting((function(){Statamic.component("ssk_meta_title-fieldtype",a),Statamic.component("ssk_meta_description-fieldtype",i),Statamic.component("ssk_google_preview-fieldtype",s),Statamic.component("ssk-manual-redirects-listing",n),Statamic.component("ssk-redirects-publish-form",r)}))})();