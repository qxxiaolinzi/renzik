import request from '@/utils/request'

export function getUserInfoAPI() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

export function logout() {
}
