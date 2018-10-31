import Command from './Command';
export default class CreateUTCActivityCommand extends Command {
  constructor(app) {
    super(app);
  }

  async handle(projectId, activity, $vm) {
    if( !activity ||  !activity['gifts'] || activity['gifts'].length === 0 ){
      $vm.$message({
        message: '未添加支付礼包',
        type: 'error'
      });
    }else{
      for(let i = 0; i < activity['gifts'].length; i++) {
        let gift = activity['gifts'][i];
        if(!gift['cost'] && !gift['discount'] && !gift['score'] && !gift['ticket_id']) {
          $vm.$message({
            message: '支付礼包没有选择填写礼包信息',
            type: 'error'
          });
          return ;
        }
      }
      let result = await this.$service('http.upToCutActivities').create(projectId, activity);
      if(result) {
        $vm.$message({
          message: '恭喜你，活动创建成功！',
          type: 'success'
        });
        $vm.$router.push({
          name: 'up-to-cut',
          params: {
            projectId: $vm.$requestInput('projectId')
          }
        });
      }
    }

  }

  static commandName() {
    return 'CREATE_UTC_ACTIVITY';
  }
}
