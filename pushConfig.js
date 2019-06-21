module.exports = {
  fjPublish: {
    qiniu: {
      ACCESS_KEY: 'd7ZKJbvhgPIYLqOaiKFtyTgV-A2W8fuMpEp13rs1',
      SECRET_KEY: 'SHbtGrVzupLB9vsY2KnGHkZRd53u8YK10vdTLaq8',
      bucket: 'laowang',
      path: '/fe'
    },
    modules: [{
      name: '生产环境',
      env: 'prod',
      ssh: {
        host: '118.89.155.234',     // 服务器地址
        port: 22,                 // 端口
        username: 'ubuntu',         // 用户名
        password: 'wangkail123'          // 密码
      },
      buildCommand: 'build',    // 构建命令  === npm run build:sit
      localPath: './dist',            // 构建后上传文件
      remotePath: '/var/www/lessons'       // 服务端路径
    }]
  }
}