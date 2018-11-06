//汇报命令
/* eslint-disable */
import Command from './Command';
export default class UpLoadCommand extends Command {
  constructor(app) {
    super(app);
  }
  async handle (files, fileField, method, callback) {
    let result = await this.$service('http.files')[method](this.$requestInput('projectId'), files, fileField);
    callback(result);
  }
  static commandName() {
    return 'UPLOAD_FILE';
  }
}
