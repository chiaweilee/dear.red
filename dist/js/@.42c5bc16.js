(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['@'], { '013e': function (e, a, t) { var n = { './airasia': ['6381', 'chunk-2d0cf36c'], './airasia/': ['6381', 'chunk-2d0cf36c'], './airasia/api': ['8dad'], './airasia/api.js': ['8dad'], './airasia/date': ['6551'], './airasia/date.js': ['6551'], './airasia/index': ['6381', 'chunk-2d0cf36c'], './airasia/index.vue': ['6381', 'chunk-2d0cf36c'], './airasia/name': ['233b'], './airasia/name.js': ['233b'], './airasia/request': ['2d8c'], './airasia/request.js': ['2d8c'], './airasia/routes': ['a2ec'], './airasia/routes.js': ['a2ec'], './airasia/x': ['e07f'], './airasia/x.js': ['e07f'] }; function i (e) { var a = n[e]; return a ? Promise.all(a.slice(1).map(t.e)).then(function () { var e = a[0]; return t(e) }) : Promise.resolve().then(function () { var a = new Error("Cannot find module '" + e + "'"); throw a.code = 'MODULE_NOT_FOUND', a }) }i.keys = function () { return Object.keys(n) }, i.id = '013e', e.exports = i }, '4e1c': function (e, a, t) { 'use strict'; t.r(a); var n = function () { var e = this, a = e.$createElement, t = e._self._c || a; return t('app-page', [t('app-topbar', { attrs: { theme: e.theme || 'dark-blue', transition: '' } }, [t('app-button', { attrs: { left: '', 'history-back': '' } }, [t('span', [e._v('back')])]), t('app-title', [e._v('\n      @' + e._s(e.at) + '\n    ')])], 1), t('app-content', [e.compo ? t(e.compo, { tag: 'component', on: { theme: e.setTheme } }) : e._e()], 1)], 1) }, i = [], r = (t('cf54'), t('25d7'), t('dc2a'), t('3a0f'), t('a3a3'), t('4d0b'), { name: 'AtView', data: function () { return { theme: null, compo: null, meta: null } }, created: function () { this.mount() }, computed: { at: function () { return this.$route.params.at } }, destroyed: function () { this.meta && (this.removeMeta(this.meta), this.newMeta({ name: 'theme-color', content: '#fff' })) }, methods: { setTheme: function (e) { var a = this; this.theme = e; var t = Object({ '$color-primary': Object({ r: 255, g: 0, b: 51, a: 1, hex: '#ff0033' }) })['$'.concat(e)]; if (t && t.hex) { var n = document.getElementsByTagName('meta'); Object.keys(n).every(function (e) { return n[e].name !== 'theme-color' || (a.removeMeta(n[e]), !1) }), this.newMeta({ name: 'theme-color', content: t.hex }) } }, removeMeta: function (e) { document.getElementsByTagName('head')[0].removeChild(e) }, newMeta: function (e) { var a = this.meta = document.createElement('meta'); Object.keys(e).forEach(function (t) { a[t] = e[t] }), document.getElementsByTagName('head')[0].appendChild(a) }, mount: function () { var e = this; this.compo = function () { return t('013e')('./'.concat(e.at)) } } } }), o = r, c = t('048f'), s = Object(c['a'])(o, n, i, !1, null, null, null); s.options.__file = '@.vue'; a['default'] = s.exports } }])
