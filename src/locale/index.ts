import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { LocalUtil } from '@/common/util/LocalUtil'
import customZhCn from "./lang/zh-CN"
import customEnUs from "./lang/en-US"
// @ts-ignore
import zhCnLocale from 'view-design/src/locale/lang/zh-CN'
// @ts-ignore
import enUsLocale from 'view-design/src/locale/lang/en-US'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = navLang === "zh-CN" || navLang === "en-US" ? navLang : false
let lang = localLang || LocalUtil.localRead("local") || "zh-CN"

// @ts-ignore
Vue.config.lang = lang
console.log("lang", lang)
// vue-i18n 6.x+写法
// @ts-ignore
Vue.locale = () => {}
const messages = {
  "zh-CN": Object.assign(zhCnLocale, customZhCn),
  "en-US": Object.assign(enUsLocale, customEnUs)
}
const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n

// vue-i18n 5.x写法
// Vue.locale('zh-CN', Object.assign(zhCnLocale, customZhCn))
// Vue.locale('en-US', Object.assign(zhTwLocale, customZhTw))
// Vue.locale('zh-TW', Object.assign(enUsLocale, customEnUs))
