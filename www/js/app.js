/*
 *　app config
 */

angular.module(globalSettings.appName, ['ionic', 'pascalprecht.translate'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive

            .state('login', {
                url: '/login',
                templateUrl: 'js/login/templates/login.html',
                controller: 'loginController'
            })

            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:


            .state('tab.tweet', {
                url: '/tweet',
                views: {
                    'tab-tweet': {
                        templateUrl: 'js/tweet/templates/tweet.html',
                        controller: 'tweetController'
                    }
                }
            })

            .state('tab.tweet-detail', {
                url: '/tweet/:tweetId',
                views: {
                    'tab-tweet': {
                        templateUrl: 'js/tweet/templates/tweet-detail.html',
                        controller: 'tweetDetailController'
                    }
                }
            })

            .state('tab.contacts', {
                url: '/contacts',
                views: {
                    'tab-contacts': {
                        templateUrl: 'js/contacts/templates/contacts.html',
                        controller: 'contactsController'
                    }
                }
            })
            .state('tab.contact-detail', {
                url: '/contacts/:contactId',
                views: {
                    'tab-contacts': {
                        templateUrl: 'js/contacts/templates/contact-detail.html',
                        controller: 'contactDetailController'
                    }
                }
            })

            .state('tab.setting', {
                url: '/setting',
                views: {
                    'tab-setting': {
                        templateUrl: 'js/setting/templates/setting.html',
                        controller: 'settingController'
                    }
                }
            })

            .state('tab.changeLanguage', {
                url: '/setting/:changeLanguage',
                views: {
                    'tab-setting': {
                        templateUrl: 'js/language/templates/change-language.html',
                        controller: 'changeLanguageController'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

    })

    .config(function ($translateProvider) {

        //translate
        $translateProvider.translations('en', {
            common: {
                systemInfo: 'system info'
            },
            login: {
                userName: 'UserName',
                password: 'Password',
                language: 'Language',
                login: 'Login',
                error: ''
            },
            tweet: {
                tweetName: 'Tweet',
                like: 'Like',
                comments: 'Comments',
                comment: 'Comment',
                share: 'Share'
            },
            contacts: {
                contactsName: 'Contacts',
                search: 'Search'
            },
            setting: {
                settingName: 'Setting',
                feekback: 'Feekback',
                update: 'Update',
                language: 'Language',
                about: 'About',
                logout: 'Log out'
            },
            language: {
                english: 'English',
                chinese: 'Chinese'
            }
        });

        $translateProvider.translations('cn', {
            common: {
                systemInfo: '系统消息',
                about: 'Jackey Sparrow \n  Github:https://github.com/Jackey-Sparrow'
            },
            login: {
                userName: '用户名',
                password: '密码',
                language: '语言',
                login: '登录',
                error: ''
            },
            tweet: {
                tweetName: '推特',
                like: '赞',
                comments: '评论',
                comment: '评论',
                share: '分享'
            },
            contacts: {
                contactsName: '通讯录',
                search: '搜索'
            },
            setting: {
                settingName: '设置',
                feekback: '意见返馈',
                update: '检测更新',
                language: '切换语言',
                about: '关于我们',
                logout: '登出'
            },
            language: {
                english: '英文',
                chinese: '中文'
            }
        });

        var key = 'en';

        var lastStoreUser = JSON.parse(localStorage.getItem('hiAppUserInfo')) || [];
        if (lastStoreUser && lastStoreUser.languageTranslate) {
            key = lastStoreUser.languageTranslate;
        }

        $translateProvider.preferredLanguage(key);
    });
