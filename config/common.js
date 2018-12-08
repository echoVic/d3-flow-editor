// common.js
module.exports = {
  /**
   * [getHost 根据执行脚本的具体命令，返回具体的请求IP]
   * @return {[type]} [description]
   */
  getHost () {
    const BRANCH = `${process.env.BRANCH}`
    let HOST = ''
    switch (BRANCH) {
      case 'dev' :
        HOST = 'https://xxx.com'
        break
      default :
        HOST = ''
    }
    return HOST
  }
}
