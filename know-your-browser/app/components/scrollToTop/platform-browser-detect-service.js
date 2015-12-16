/**
 * Created by Jackey Li on 2015/12/8.
 */
(function (angular) {
	'use strict';

	angular.module('platform').factory('platformBrowserTeller',
		[function () {
			var matched, browser;

			function unMatch(ua) {
				ua = ua.toLocaleLowerCase();
				var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
					/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
					/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
					/(msie) ([\w.]+)/.exec( ua ) ||
					ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
					[];
				var platformMatch = /(ipad)/.exec(ua) || /(iphone)/.exec(ua) || /(android)/.exec(ua) || [];
				return {
					browser: match[1] || '',
					version: match[2] || '0',
					platform: platformMatch[0] || ''
				};
			}

			matched = unMatch(window.navigator.userAgent);
			browser = {};

			if (matched.browser) {
				browser[matched.browser] = true;
				browser.version = matched.version;
			}

			if (matched.platform) {
				browser[matched.platform] = true;
			}

			if (browser.chrome) {
				browser.webkit = true;
			}
			else if (browser.webkit) {
				browser.safari = true;
			}
			return browser;

		}]);
})(angular);