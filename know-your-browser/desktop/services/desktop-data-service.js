/**
 * Created by lja on 2015/12/2.
 */
(function (angular) {
	'use strict';

	angular.module('desktop').factory('desktopDataService', [function () {
		var service = {};

		var CHROME = "text,link,vLink,aLink,bgColor,background,onblur,onerror," +
			"onfocus,onload,onresize,onscroll,onbeforeunload,onhashchange," +
			"onlanguagechange,onmessage,onoffline,ononline,onpagehide," +
			"onpageshow,onpopstate,onstorage,onunload,title,lang," +
			"translate,dir,hidden,tabIndex,accessKey," +
			"draggable,spellcheck,contentEditable," +
			"isContentEditable," +
			"offsetParent,offsetTop," +
			"offsetLeft,offsetWidth," +
			"offsetHeight,innerText," +
			"outerText,webkitdropzone," +
			"onabort,oncancel,oncanplay,oncanplaythrough,onchange," +
			"onclick,onclose,oncontextmenu,oncuechange,ondblclick,ondrag," +
			"ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied," +
			"onended,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onloadeddata,onloadedmetadata,onloadstart," +
			"onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel," +
			"onpause,onplay,onplaying,onprogress,onratechange,onreset,onseeked,onseeking," +
			"onselect,onshow,onstalled,onsubmit,onsuspend,ontimeupdate,ontoggle," +
			"onvolumechange,onwaiting,click,onautocomplete,onautocompleteerror," +
			"namespaceURI,prefix,localName,tagName,id,className,classList,attributes,innerHTML,outerHTML," +
			"shadowRoot,scrollTop,scrollLeft,scrollWidth,scrollHeight,clientTop,clientLeft,clientWidth,clientHeight," +
			"style,dataset,onbeforecopy,onbeforecut,onbeforepaste,oncopy,oncut,onpaste,onsearch,onselectstart," +
			"onwheel,onwebkitfullscreenchange,onwebkitfullscreenerror,previousElementSibling,nextElementSibling," +
			"children,firstElementChild,lastElementChild,childElementCount,hasAttributes,getAttribute," +
			"getAttributeNS,setAttribute,setAttributeNS,removeAttribute,removeAttributeNS,hasAttribute," +
			"hasAttributeNS,getAttributeNode,getAttributeNodeNS,setAttributeNode,setAttributeNodeNS," +
			"removeAttributeNode,closest,matches,getElementsByTagName,getElementsByTagNameNS," +
			"getElementsByClassName,insertAdjacentHTML,createShadowRoot,getDestinationInsertionPoints," +
			"requestPointerLock,getClientRects,getBoundingClientRect,scrollIntoView,focus,blur," +
			"insertAdjacentElement,insertAdjacentText,scrollIntoViewIfNeeded," +
			"webkitMatchesSelector,animate,remove,webkitRequestFullScreen,webkitRequestFullscreen,querySelector," +
			"querySelectorAll,nodeType,nodeName,baseURI,ownerDocument,parentNode,parentElement,childNodes,firstChild," +
			"lastChild,previousSibling,nextSibling,nodeValue,textContent,hasChildNodes,normalize,cloneNode," +
			"isEqualNode,compareDocumentPosition,contains,lookupPrefix,lookupNamespaceURI,isDefaultNamespace,insertBefore," +
			"appendChild,replaceChild,removeChild,isSameNode,ELEMENT_NODE,ATTRIBUTE_NODE," +
			"TEXT_NODE,CDATA_SECTION_NODE,ENTITY_REFERENCE_NODE,ENTITY_NODE,PROCESSING_INSTRUCTION_NODE," +
			"COMMENT_NODE,DOCUMENT_NODE,DOCUMENT_TYPE_NODE,DOCUMENT_FRAGMENT_NODE,NOTATION_NODE,DOCUMENT_POSITION_DISCONNECTED," +
			"DOCUMENT_POSITION_PRECEDING,DOCUMENT_POSITION_FOLLOWING,DOCUMENT_POSITION_CONTAINS," +
			"DOCUMENT_POSITION_CONTAINED_BY,DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,addEventListener," +
			"removeEventListener,dispatchEvent";
		var IE10 = "bgColor,background,aLink,bgProperties,bottomMargin,leftMargin,link,noWrap,onafterprint,onbeforeprint,onbeforeunload,onblur,onerror,onfocus,onhashchange,onload,onmessage,onoffline,ononline,onpopstate,onresize,onstorage,onunload,rightMargin,scroll,text,topMargin,vLink,createTextRange,currentStyle,runtimeStyle,accessKey,all,behaviorUrns,canHaveChildren,canHaveHTML,children,classList,className,contentEditable,dir,disabled,draggable,hideFocus,id,innerHTML,innerText,isContentEditable,isDisabled,isMultiLine,isTextEdit,lang,language,offsetHeight,offsetLeft,offsetParent,offsetTop,offsetWidth,onabort,onactivate,onafterupdate,onbeforeactivate,onbeforecopy,onbeforecut,onbeforedeactivate,onbeforeeditfocus,onbeforepaste,onbeforeupdate,oncanplay,oncanplaythrough,oncellchange,onchange,onclick,oncontextmenu,oncontrolselect,oncopy,oncuechange,oncut,ondataavailable,ondatasetchanged,ondatasetcomplete,ondblclick,ondeactivate,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerrorupdate,onfilterchange,onfocusin,onfocusout,onhelp,oninput,onkeydown,onkeypress,onkeyup,onlayoutcomplete,onloadeddata,onloadedmetadata,onloadstart,onlosecapture,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onmove,onmoveend,onmovestart,onmscontentzoom,onmsmanipulationstatechanged,onpaste,onpause,onplay,onplaying,onprogress,onpropertychange,onratechange,onreadystatechange,onreset,onresizeend,onresizestart,onrowenter,onrowexit,onrowsdelete,onrowsinserted,onscroll,onseeked,onseeking,onselect,onselectstart,onstalled,onsubmit,onsuspend,ontimeupdate,onvolumechange,onwaiting,outerHTML,outerText,parentElement,parentTextEdit,readyState,recordNumber,sourceIndex,spellcheck,style,tabIndex,title,uniqueID,uniqueNumber,componentFromPoint,doScroll,addBehavior,applyElement,blur,clearAttributes,click,contains,createControlRange,dragDrop,focus,getAdjacentText,getElementsByClassName,insertAdjacentElement,insertAdjacentHTML,insertAdjacentText,mergeAttributes,releaseCapture,removeBehavior,replaceAdjacentText,scrollIntoView,setActive,setCapture,attachEvent,detachEvent,removeNode,replaceNode,swapNode,clientHeight,clientLeft,clientTop,clientWidth,msContentZoomFactor,msRegionOverflow,onmsgesturechange,onmsgesturedoubletap,onmsgestureend,onmsgesturehold,onmsgesturestart,onmsgesturetap,onmsgotpointercapture,onmsinertiastart,onmslostpointercapture,onmspointercancel,onmspointerdown,onmspointerhover,onmspointermove,onmspointerout,onmspointerover,onmspointerup,scrollHeight,scrollLeft,scrollTop,scrollWidth,tagName,childElementCount,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling,fireEvent,getAttribute,getAttributeNS,getAttributeNode,getAttributeNodeNS,getBoundingClientRect,getClientRects,getElementsByTagName,getElementsByTagNameNS,hasAttribute,hasAttributeNS,msGetRegionContent,msMatchesSelector,msReleasePointerCapture,msSetPointerCapture,removeAttribute,removeAttributeNS,removeAttributeNode,setAttribute,setAttributeNS,setAttributeNode,setAttributeNodeNS,querySelector,querySelectorAll,attributes,childNodes,firstChild,lastChild,localName,namespaceURI,nextSibling,nodeName,nodeType,nodeValue,ownerDocument,parentNode,prefix,previousSibling,textContent,addEventListener,dispatchEvent,removeEventListener,appendChild,cloneNode,compareDocumentPosition,hasAttributes,hasChildNodes,insertBefore,isDefaultNamespace,isEqualNode,isSameNode,isSupported,lookupNamespaceURI,lookupPrefix,normalize,removeChild,replaceChild,ATTRIBUTE_NODE,CDATA_SECTION_NODE,COMMENT_NODE,DOCUMENT_FRAGMENT_NODE,DOCUMENT_NODE,DOCUMENT_POSITION_CONTAINED_BY,DOCUMENT_POSITION_CONTAINS,DOCUMENT_POSITION_DISCONNECTED,DOCUMENT_POSITION_FOLLOWING,DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,DOCUMENT_POSITION_PRECEDING,DOCUMENT_TYPE_NODE,ELEMENT_NODE,ENTITY_NODE,ENTITY_REFERENCE_NODE,NOTATION_NODE,PROCESSING_INSTRUCTION_NODE,TEXT_NODE";
		var IE9 = "bgColor,background,aLink,bgProperties,bottomMargin,leftMargin,link,noWrap,onafterprint,onbeforeprint,onbeforeunload,onblur,onerror,onfocus,onhashchange,onload,onmessage,onoffline,ononline,onresize,onstorage,onunload,rightMargin,scroll,text,topMargin,vLink,createTextRange,currentStyle,runtimeStyle,accessKey,all,behaviorUrns,canHaveChildren,canHaveHTML,children,className,contentEditable,dir,disabled,document,filters,hideFocus,id,innerHTML,innerText,isContentEditable,isDisabled,isMultiLine,isTextEdit,lang,language,offsetHeight,offsetLeft,offsetParent,offsetTop,offsetWidth,onabort,onactivate,onafterupdate,onbeforeactivate,onbeforecopy,onbeforecut,onbeforedeactivate,onbeforeeditfocus,onbeforepaste,onbeforeupdate,oncanplay,oncanplaythrough,oncellchange,onchange,onclick,oncontextmenu,oncontrolselect,oncopy,oncut,ondataavailable,ondatasetchanged,ondatasetcomplete,ondblclick,ondeactivate,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerrorupdate,onfilterchange,onfocusin,onfocusout,onhelp,oninput,onkeydown,onkeypress,onkeyup,onlayoutcomplete,onloadeddata,onloadedmetadata,onloadstart,onlosecapture,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onmove,onmoveend,onmovestart,onpaste,onpause,onplay,onplaying,onprogress,onpropertychange,onratechange,onreadystatechange,onreset,onresizeend,onresizestart,onrowenter,onrowexit,onrowsdelete,onrowsinserted,onscroll,onseeked,onseeking,onselect,onselectstart,onstalled,onsubmit,onsuspend,ontimeupdate,onvolumechange,onwaiting,outerHTML,outerText,parentElement,parentTextEdit,readyState,recordNumber,scopeName,sourceIndex,style,tabIndex,tagUrn,title,uniqueID,uniqueNumber,componentFromPoint,doScroll,addBehavior,addFilter,applyElement,blur,clearAttributes,click,contains,createControlRange,dragDrop,focus,getAdjacentText,getElementsByClassName,insertAdjacentElement,insertAdjacentHTML,insertAdjacentText,mergeAttributes,releaseCapture,removeBehavior,removeFilter,replaceAdjacentText,scrollIntoView,setActive,setCapture,attachEvent,detachEvent,removeNode,replaceNode,swapNode,clientHeight,clientLeft,clientTop,clientWidth,scrollHeight,scrollLeft,scrollTop,scrollWidth,tagName,childElementCount,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling,fireEvent,getAttribute,getAttributeNS,getAttributeNode,getAttributeNodeNS,getBoundingClientRect,getClientRects,getElementsByTagName,getElementsByTagNameNS,hasAttribute,hasAttributeNS,msMatchesSelector,removeAttribute,removeAttributeNS,removeAttributeNode,setAttribute,setAttributeNS,setAttributeNode,setAttributeNodeNS,querySelector,querySelectorAll,attributes,childNodes,firstChild,lastChild,localName,namespaceURI,nextSibling,nodeName,nodeType,nodeValue,ownerDocument,parentNode,prefix,previousSibling,textContent,addEventListener,dispatchEvent,removeEventListener,appendChild,cloneNode,compareDocumentPosition,hasAttributes,hasChildNodes,insertBefore,isDefaultNamespace,isEqualNode,isSameNode,isSupported,lookupNamespaceURI,lookupPrefix,normalize,removeChild,replaceChild,ATTRIBUTE_NODE,CDATA_SECTION_NODE,COMMENT_NODE,DOCUMENT_FRAGMENT_NODE,DOCUMENT_NODE,DOCUMENT_POSITION_CONTAINED_BY,DOCUMENT_POSITION_CONTAINS,DOCUMENT_POSITION_DISCONNECTED,DOCUMENT_POSITION_FOLLOWING,DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,DOCUMENT_POSITION_PRECEDING,DOCUMENT_TYPE_NODE,ELEMENT_NODE,ENTITY_NODE,ENTITY_REFERENCE_NODE,NOTATION_NODE,PROCESSING_INSTRUCTION_NODE,TEXT_NODE";
		var IE8 = "onbeforeeditfocus,aria-haspopup,onbeforeactivate,onbeforepaste,recordNumber,attributes,oncopy,onmouseleave,ondragstart,canHaveChildren,behaviorUrns,tagName,clientHeight,ondatasetcomplete,nextSibling,aria-required,aria-expanded,onscroll,onrowsdelete,children,onmouseup,filters,isContentEditable,currentStyle,onbeforecut,onclick,spellcheck,onmoveend,parentTextEdit,role,aria-disabled,sourceIndex,tabIndex,lang,onkeypress,childNodes,aria-valuenow,aria-checked,onlayoutcomplete,runtimeStyle,nodeName,aria-busy,offsetHeight,onmouseover,onfocusin,onrowenter,aria-describedby,ondblclick,onmove,scrollLeft,document,aria-flowto,onpage,firstChild,ondragleave,ondragend,onresize,nodeType,clientWidth,lastChild,offsetLeft,onmouseenter,onresizeend,onmousemove,scrollTop,onresizestart,className,onerrorupdate,aria-secret,onkeyup,aria-hidden,onbeforedeactivate,onmousedown,aria-pressed,oncut,onrowsinserted,oncellchange,aria-readonly,scrollHeight,onfocus,aria-posinset,onmouseout,disabled,clientTop,aria-selected,isDisabled,canHaveHTML,offsetTop,ondragover,offsetWidth,onrowexit,onfilterchange,aria-controls,outerHTML,onfocusout,aria-relevant,tagUrn,x-ms-acceleratorkey,aria-level,isTextEdit,previousSibling,nodeValue,isMultiLine,parentNode,onblur,ondragenter,aria-setsize,outerText,parentElement,ondrag,id,title,ondataavailable,aria-live,onpropertychange,aria-multiselectable,onreadystatechange,aria-invalid,scrollWidth,onselectstart,ownerDocument,onpaste,clientLeft,readyState,onhelp,onload,ondeactivate,hideFocus,onbeforeupdate,contentEditable,onafterupdate,onkeydown,aria-valuemin,language,style,oncontrolselect,oncontextmenu,aria-valuemax,innerHTML,dir,aria-activedescendant,onbeforecopy,onmovestart,onactivate,onlosecapture,ondatasetchanged,ondrop,accessKey,aria-owns,onselect,aria-labelledby,scopeName,all,onmousewheel,innerText,offsetParent,onunload,bottomMargin,onbeforeprint,background,aLink,leftMargin,rightMargin,ononline,scroll,onafterprint,onoffline,link,bgProperties,onhashchange,onbeforeunload,topMargin,noWrap,bgColor,text,vLink";
		var IE7 = "onbeforeeditfocus,aria-haspopup,onbeforeactivate,onbeforepaste,recordNumber,attributes,oncopy,onmouseleave,ondragstart,canHaveChildren,behaviorUrns,tagName,clientHeight,ondatasetcomplete,nextSibling,aria-required,aria-expanded,onscroll,onrowsdelete,children,onmouseup,filters,isContentEditable,currentStyle,onbeforecut,onclick,spellcheck,onmoveend,parentTextEdit,role,aria-disabled,sourceIndex,tabIndex,lang,onkeypress,childNodes,aria-valuenow,aria-checked,onlayoutcomplete,runtimeStyle,nodeName,aria-busy,offsetHeight,onmouseover,onfocusin,onrowenter,aria-describedby,ondblclick,onmove,scrollLeft,document,aria-flowto,onpage,firstChild,ondragleave,ondragend,onresize,nodeType,clientWidth,lastChild,offsetLeft,onmouseenter,onresizeend,onmousemove,scrollTop,onresizestart,className,onerrorupdate,aria-secret,onkeyup,aria-hidden,onbeforedeactivate,onmousedown,aria-pressed,oncut,onrowsinserted,oncellchange,aria-readonly,scrollHeight,onfocus,aria-posinset,onmouseout,disabled,clientTop,aria-selected,isDisabled,canHaveHTML,offsetTop,ondragover,offsetWidth,onrowexit,onfilterchange,aria-controls,outerHTML,onfocusout,aria-relevant,tagUrn,x-ms-acceleratorkey,aria-level,isTextEdit,previousSibling,nodeValue,isMultiLine,parentNode,onblur,ondragenter,aria-setsize,outerText,parentElement,ondrag,id,title,ondataavailable,aria-live,onpropertychange,aria-multiselectable,onreadystatechange,aria-invalid,scrollWidth,onselectstart,ownerDocument,onpaste,clientLeft,readyState,onhelp,onload,ondeactivate,hideFocus,onbeforeupdate,contentEditable,onafterupdate,onkeydown,aria-valuemin,language,style,oncontrolselect,oncontextmenu,aria-valuemax,innerHTML,dir,aria-activedescendant,onbeforecopy,onmovestart,onactivate,onlosecapture,ondatasetchanged,ondrop,accessKey,aria-owns,onselect,aria-labelledby,scopeName,all,onmousewheel,innerText,offsetParent,onunload,bottomMargin,onbeforeprint,background,aLink,leftMargin,rightMargin,ononline,scroll,onafterprint,onoffline,link,bgProperties,onhashchange,onbeforeunload,topMargin,noWrap,bgColor,text,vLink";
		var IE5 = "onbeforeeditfocus,aria-haspopup,onbeforeactivate,onbeforepaste,recordNumber,attributes,oncopy,onmouseleave,ondragstart,canHaveChildren,behaviorUrns,tagName,clientHeight,ondatasetcomplete,nextSibling,aria-required,aria-expanded,onscroll,onrowsdelete,children,onmouseup,filters,isContentEditable,currentStyle,onbeforecut,onclick,spellcheck,onmoveend,parentTextEdit,role,aria-disabled,sourceIndex,tabIndex,lang,onkeypress,childNodes,aria-valuenow,aria-checked,onlayoutcomplete,runtimeStyle,nodeName,aria-busy,offsetHeight,onmouseover,onfocusin,onrowenter,aria-describedby,ondblclick,onmove,scrollLeft,document,aria-flowto,onpage,firstChild,ondragleave,ondragend,onresize,nodeType,clientWidth,lastChild,offsetLeft,onmouseenter,onresizeend,onmousemove,scrollTop,onresizestart,className,onerrorupdate,aria-secret,onkeyup,aria-hidden,onbeforedeactivate,onmousedown,aria-pressed,oncut,onrowsinserted,oncellchange,aria-readonly,scrollHeight,onfocus,aria-posinset,onmouseout,disabled,clientTop,aria-selected,isDisabled,canHaveHTML,offsetTop,ondragover,offsetWidth,onrowexit,onfilterchange,aria-controls,outerHTML,onfocusout,aria-relevant,tagUrn,x-ms-acceleratorkey,aria-level,isTextEdit,previousSibling,nodeValue,isMultiLine,parentNode,onblur,ondragenter,aria-setsize,outerText,parentElement,ondrag,id,title,ondataavailable,aria-live,onpropertychange,aria-multiselectable,onreadystatechange,aria-invalid,scrollWidth,onselectstart,ownerDocument,onpaste,clientLeft,readyState,onhelp,onload,ondeactivate,hideFocus,onbeforeupdate,contentEditable,onafterupdate,onkeydown,aria-valuemin,language,style,oncontrolselect,oncontextmenu,aria-valuemax,innerHTML,dir,aria-activedescendant,onbeforecopy,onmovestart,onactivate,onlosecapture,ondatasetchanged,ondrop,accessKey,aria-owns,onselect,aria-labelledby,scopeName,all,onmousewheel,innerText,offsetParent,onunload,bottomMargin,onbeforeprint,background,aLink,leftMargin,rightMargin,ononline,scroll,onafterprint,onoffline,link,bgProperties,onhashchange,onbeforeunload,topMargin,noWrap,bgColor,text,vLink";
		var SARAFI = ["bgColor", "text", "background", "aLink", "vLink", "link", "outerHTML", "spellcheck", "id",
		              "title", "lang", "classList", "className", "innerText", "dir", "innerHTML", "contentEditable",
		              "tabIndex", "draggable", "outerText", "hidden", "children", "isContentEditable", "style", "dataset",
		              "clientWidth", "scrollWidth", "offsetWidth", "offsetLeft", "clientTop", "lastElementChild",
		              "offsetParent", "nextElementSibling", "tagName", "previousElementSibling", "childElementCount",
		              "scrollLeft", "firstElementChild", "clientLeft", "offsetHeight", "clientHeight", "offsetTop",
		              "scrollTop", "scrollHeight", "previousSibling", "parentNode", "lastChild", "baseURI", "firstChild",
		              "nodeValue", "textContent", "nodeType", "nodeName", "prefix", "childNodes", "nextSibling",
		              "attributes", "ownerDocument", "namespaceURI", "localName", "parentElement", "insertAdjacentElement",
		              "insertAdjacentHTML", "insertAdjacentText", "querySelector", "webkitMatchesSelector", "hasAttribute",
		              "getAttributeNode", "getAttributeNS", "ALLOW_KEYBOARD_INPUT", "getElementsByClassName",
		              "removeAttributeNS", "querySelectorAll", "contains", "getClientRects", "scrollByPages",
		              "setAttributeNode", "setAttributeNS", "hasAttributeNS", "blur", "scrollIntoViewIfNeeded",
		              "setAttribute", "scrollByLines", "getElementsByTagName", "removeAttribute", "setAttributeNodeNS",
		              "getAttribute", "removeAttributeNode", "getElementsByTagNameNS", "getAttributeNodeNS", "focus",
		              "scrollIntoView", "getBoundingClientRect", "webkitRequestFullScreen", "hasAttributes",
		              "NOTATION_NODE", "CDATA_SECTION_NODE", "isSupported", "ELEMENT_NODE",
		              "DOCUMENT_POSITION_DISCONNECTED", "isEqualNode", "ENTITY_NODE", "TEXT_NODE", "ENTITY_REFERENCE_NODE",
		              "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", "DOCUMENT_FRAGMENT_NODE", "cloneNode", "dispatchEvent",
		              "PROCESSING_INSTRUCTION_NODE", "isDefaultNamespace", "insertBefore", "removeChild", "hasChildNodes",
		              "addEventListener", "DOCUMENT_POSITION_PRECEDING", "normalize", "compareDocumentPosition",
		              "DOCUMENT_TYPE_NODE", "COMMENT_NODE", "replaceChild", "DOCUMENT_POSITION_FOLLOWING",
		              "removeEventListener", "ATTRIBUTE_NODE", "DOCUMENT_POSITION_CONTAINED_BY", "DOCUMENT_NODE",
		              "DOCUMENT_POSITION_CONTAINS", "appendChild", "isSameNode", "lookupPrefix", "lookupNamespaceURI"];
		var FIREFOX =
			"location,getElementsByAttribute,getElementsByAttributeNS,addBroadcastListenerFor,removeBroadcastListenerFor,persist,getBoxObjectFor,loadOverlay,popupNode,tooltipNode,commandDispatcher,width,height,popupRangeParent,popupRangeOffset,getElementsByTagName,getElementsByTagNameNS,getElementsByClassName,getElementById,createElement,createElementNS,createDocumentFragment,createTextNode,createComment,createProcessingInstruction,importNode,adoptNode,createEvent,createRange,createNodeIterator,createTreeWalker,createCDATASection,createAttribute,createAttributeNS,hasFocus,releaseCapture,mozSetImageElement,mozCancelFullScreen,mozExitPointerLock,enableStyleSheetsForSet,elementFromPoint,caretPositionFromPoint,querySelector,querySelectorAll,getAnonymousNodes,getAnonymousElementByAttribute,getBindingParent,loadBindingDocument,getBoxQuads,createExpression,createNSResolver,evaluate,implementation,URL,documentURI,compatMode,characterSet,contentType,doctype,documentElement,inputEncoding,referrer,lastModified,readyState,title,dir,defaultView,activeElement,onreadystatechange,onwheel,oncopy,oncut,onpaste,onbeforescriptexecute,onafterscriptexecute,mozSyntheticDocument,currentScript,mozFullScreenEnabled,mozFullScreenElement,mozFullScreen,mozPointerLockElement,hidden,mozHidden,visibilityState,mozVisibilityState,styleSheets,selectedStyleSheetSet,lastStyleSheetSet,preferredStyleSheetSet,styleSheetSets,timeline,onabort,onblur,onfocus,oncanplay,oncanplaythrough,onchange,onclick,oncontextmenu,ondblclick,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onload,onloadeddata,onloadedmetadata,onloadstart,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onpause,onplay,onplaying,onprogress,onratechange,onreset,onscroll,onseeked,onseeking,onselect,onshow,onstalled,onsubmit,onsuspend,ontimeupdate,onvolumechange,onwaiting,onmozfullscreenchange,onmozfullscreenerror,onmozpointerlockchange,onmozpointerlockerror,onerror,children,firstElementChild,lastElementChild,childElementCount,obsoleteSheet,insertAnonymousContent,removeAnonymousContent,documentURIObject,styleSheetChangeEventsEnabled,docShell,contentLanguage,isSrcdocDocument,hasChildNodes,insertBefore,appendChild,replaceChild,removeChild,normalize,cloneNode,isEqualNode,compareDocumentPosition,contains,lookupPrefix,lookupNamespaceURI,isDefaultNamespace,setUserData,getUserData,nodeType,nodeName,baseURI,ownerDocument,parentNode,parentElement,childNodes,firstChild,lastChild,previousSibling,nextSibling,nodeValue,textContent,namespaceURI,prefix,localName,ELEMENT_NODE,ATTRIBUTE_NODE,TEXT_NODE,CDATA_SECTION_NODE,ENTITY_REFERENCE_NODE,ENTITY_NODE,PROCESSING_INSTRUCTION_NODE,COMMENT_NODE,DOCUMENT_NODE,DOCUMENT_TYPE_NODE,DOCUMENT_FRAGMENT_NODE,NOTATION_NODE,DOCUMENT_POSITION_DISCONNECTED,DOCUMENT_POSITION_PRECEDING,DOCUMENT_POSITION_FOLLOWING,DOCUMENT_POSITION_CONTAINS,DOCUMENT_POSITION_CONTAINED_BY,DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,getBoundMutationObservers,nodePrincipal,baseURIObject,addEventListener,removeEventListener,dispatchEvent,setEventHandler,getEventHandler,ownerGlobal";

		var collection = {},

			CHROME = CHROME.split(','),
			IE10 = IE10.split(','),
			IE9 = IE9.split(','),
			IE8 = IE8.split(','),
			IE7 = IE7.split(','),
			IE5 = IE5.split(','),
			FIREFOX = FIREFOX.split(','),
			SARAFI = SARAFI;

		function loop(browserName, events) {
			events.forEach(function (event) {
				collection[event] ? collection[event].push(browserName) : collection[event] = [browserName];
			});
		}

		function collect() {
			loop('CHROME', CHROME);
			loop('SARAFI', SARAFI);
			loop('FIREFOX', FIREFOX);
			loop('IE10', IE10);
			loop('IE9', IE9);
			loop('IE8', IE8);
			loop('IE7', IE7);
			loop('IE5', IE5);
		}

		service.getCollection = function () {
			return collection;
		};

		collect();

		return service;
	}]);

})(angular);