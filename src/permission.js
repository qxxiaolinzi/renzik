import router from '@/router'
import store from '@/store'
const whileList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
//   console.log(to)
//   console.log(from)
//   next(false)
  // 1. 判断token是否存在

  if (store.getters.token) {
    if (!store.getters.userId) {
      await store.dispatch('user/getUserInfo')
    }
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whileList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
